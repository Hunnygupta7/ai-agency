import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are the AI assistant for "Code With Nishant", an AI solutions agency founded by Nishant. You help website visitors learn about the agency's services and guide them toward applying for a strategy session.

ABOUT THE AGENCY:
- Code With Nishant builds AI systems that generate revenue for businesses
- Services: AI Voice Agents, Custom AI Development, Business Process Automation, Smart Dashboards, AI Chatbots, AI-Powered Apps
- Target clients: Revenue-generating businesses ready to invest in AI implementation (minimum INR 50,000+)
- Regions served: India, USA, Dubai/UAE, and globally
- Process: Discovery, Design and Develop, Deploy and Scale, Continuous Optimization

KEY POINTS TO COMMUNICATE:
- They take an AI-first approach to every problem
- Strategy sessions are limited and application-based
- They focus on outcomes and ROI, not just building tech
- Nishant personally leads the AI architecture
- 50+ businesses served, 100+ projects delivered, 5+ years experience

RULES:
- Keep responses short (2-3 sentences max), friendly, and conversational
- If someone asks about pricing, say "Our engagements start at INR 50,000+ depending on scope. The best way to get a quote is to apply for a strategy session."
- If someone seems interested, guide them to click the "Apply for AI Strategy Session" button on the page
- Never make up services or capabilities that were not mentioned above
- If asked something unrelated to the business, politely redirect to how AI can help their business
- Do not use markdown formatting, emojis, or bullet points. Keep it plain text.
- Sound human, not robotic. Write like a helpful team member, not a corporate FAQ.`;

const MODELS = [
    "nvidia/nemotron-nano-9b-v2:free",
    "qwen/qwen3-4b:free",
    "meta-llama/llama-3.2-3b-instruct:free",
    "google/gemma-3-4b-it:free",
];

async function tryModel(apiKey: string, model: string, messages: { role: string; content: string }[]) {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://codewithnishant.vercel.app",
            "X-Title": "Code With Nishant AI Assistant",
        },
        body: JSON.stringify({
            model,
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages,
            ],
            max_tokens: 300,
            temperature: 0.7,
        }),
    });

    const data = await response.json();

    if (data.error) {
        throw new Error(data.error.message || JSON.stringify(data.error));
    }

    const reply = data.choices?.[0]?.message?.content;
    if (!reply || reply.trim().length < 5) {
        throw new Error("Empty or too short response");
    }

    return reply;
}

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();

        const apiKey = process.env.OPENROUTER_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: "OpenRouter API key not configured" },
                { status: 500 }
            );
        }

        // Try each model in order until one works
        for (const model of MODELS) {
            try {
                const reply = await tryModel(apiKey, model, messages);
                return NextResponse.json({ message: reply });
            } catch (err) {
                console.log(`Model ${model} failed: ${err instanceof Error ? err.message : err}`);
                continue;
            }
        }

        // All models failed
        return NextResponse.json(
            { error: "All models are temporarily unavailable. Please try again in a moment." },
            { status: 503 }
        );
    } catch (error: unknown) {
        const errMsg = error instanceof Error ? error.message : "Unknown error";
        console.error("Chat API error:", errMsg);
        return NextResponse.json(
            { error: "Failed to get response", details: errMsg },
            { status: 500 }
        );
    }
}
