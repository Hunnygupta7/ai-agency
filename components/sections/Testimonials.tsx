"use client";

import { Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const testimonials = [
    {
        name: "Arjun Mehta",
        role: "Founder, Digital Marketing Agency",
        location: "Mumbai, India",
        quote: "We were spending hours every day on manual follow-ups. Now the system handles 80% of our lead nurturing on its own. Our team can finally focus on closing deals instead of chasing people.",
    },
    {
        name: "James Carter",
        role: "CEO, Business Consulting Firm",
        location: "Austin, TX",
        quote: "I honestly didn't think AI could handle our front desk calls. Three months later, our booking rate is up 35% and we haven't missed a single inquiry. Best investment we made this year.",
    },
    {
        name: "Fatima Al-Rashid",
        role: "Operations Head, Interior Design Studio",
        location: "Dubai, UAE",
        quote: "The automation they built cut our project onboarding from 5 days to under 24 hours. Our clients started noticing the difference before we even told them about the upgrade.",
    },
    {
        name: "Priya Sharma",
        role: "Co-Founder, Fintech Startup",
        location: "Bangalore, India",
        quote: "Nishant didn't just build what we asked for. He looked at our process, pointed out what could be better, and delivered something way beyond our original brief. The AI dashboard alone saves us 15 hours a week.",
    },
    {
        name: "Michael Torres",
        role: "VP of Sales, SaaS Company",
        location: "San Francisco, CA",
        quote: "We talked to three AI vendors before this. The difference was obvious. They actually took the time to understand our sales funnel before writing any code. That made all the difference.",
    },
    {
        name: "Ahmed Hassan",
        role: "Managing Director, IT Services",
        location: "Dubai, UAE",
        quote: "Customer support used to be our biggest bottleneck. Their AI chatbot now handles 70% of tickets without anyone stepping in. Response times went from hours to seconds.",
    },
    {
        name: "Sneha Kulkarni",
        role: "Director, Education Platform",
        location: "Pune, India",
        quote: "We needed a smart scheduling system for over 200 tutors. What they delivered was way better than what we expected. Parents, tutors, and our admin team all love using it.",
    },
    {
        name: "Rachel Kim",
        role: "Marketing Head, Healthcare Clinic",
        location: "New York, NY",
        quote: "The voice AI agent handles our appointment bookings, rescheduling, and follow-up calls. It is like having a receptionist who never takes a day off. Our patients love the quick responses.",
    },
    {
        name: "Omar Khalil",
        role: "Founder, Real Estate Agency",
        location: "Abu Dhabi, UAE",
        quote: "Real estate moves fast here. Their AI system helps us respond to buyer inquiries within 60 seconds, any time of day. We have closed deals that would have gone cold otherwise.",
    },
    {
        name: "Vikram Joshi",
        role: "CTO, Supply Chain Company",
        location: "Delhi, India",
        quote: "They plugged AI forecasting into our existing system without breaking anything. Inventory waste dropped 28% in the first quarter. The numbers speak for themselves.",
    },
];

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);
    const animationRef = useRef<number>(0);
    const scrollPosRef = useRef(0);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const speed = 0.5; // pixels per frame

        const animate = () => {
            if (!isPaused && container) {
                scrollPosRef.current += speed;
                // Reset when we've scrolled past the first set of cards
                const halfWidth = container.scrollWidth / 2;
                if (scrollPosRef.current >= halfWidth) {
                    scrollPosRef.current = 0;
                }
                container.scrollLeft = scrollPosRef.current;
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, [isPaused]);

    // Duplicate testimonials for seamless loop
    const allCards = [...testimonials, ...testimonials];

    return (
        <section
            id="testimonials"
            className="section-padding"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto", marginBottom: "3rem" }}>
                <div style={{ textAlign: "center" }}>
                    <div
                        style={{
                            display: "inline-block",
                            background: "rgba(34,197,94,0.08)",
                            border: "1px solid rgba(34,197,94,0.2)",
                            borderRadius: "50px",
                            padding: "0.35rem 1rem",
                            marginBottom: "1rem",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                color: "#22C55E",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                fontFamily: "var(--font-inter), sans-serif",
                            }}
                        >
                            Client Results
                        </span>
                    </div>
                    <h2
                        style={{
                            fontFamily: "var(--font-space-grotesk), sans-serif",
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            fontWeight: 800,
                            color: "#fff",
                            letterSpacing: "-0.02em",
                            marginBottom: "1rem",
                        }}
                    >
                        What Our Partners Say
                    </h2>
                    <p
                        style={{
                            fontSize: "1.05rem",
                            color: "rgba(255,255,255,0.55)",
                            maxWidth: "560px",
                            margin: "0 auto",
                            fontFamily: "var(--font-inter), sans-serif",
                        }}
                    >
                        Don&apos;t just take our word for it. Here&apos;s how our AI systems have
                        impacted real businesses.
                    </p>
                </div>
            </div>

            {/* Scrolling Carousel */}
            <div
                ref={scrollRef}
                onClick={() => setIsPaused(!isPaused)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                style={{
                    display: "flex",
                    gap: "1.5rem",
                    overflowX: "hidden",
                    cursor: isPaused ? "grab" : "default",
                    paddingBottom: "1rem",
                    WebkitMaskImage: "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
                    maskImage: "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
                }}
            >
                {allCards.map((t, idx) => (
                    <div
                        key={idx}
                        className="glass-card"
                        style={{
                            minWidth: "360px",
                            maxWidth: "360px",
                            padding: "2rem",
                            display: "flex",
                            flexDirection: "column",
                            flexShrink: 0,
                            transition: "border-color 0.3s",
                            borderColor: isPaused ? "rgba(34,197,94,0.25)" : undefined,
                        }}
                    >
                        {/* Stars */}
                        <div style={{ display: "flex", gap: "0.2rem", color: "#22C55E", marginBottom: "1.25rem" }}>
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="#22C55E" />
                            ))}
                        </div>

                        {/* Quote */}
                        <p
                            style={{
                                fontSize: "0.95rem",
                                color: "rgba(255,255,255,0.85)",
                                lineHeight: 1.65,
                                fontFamily: "var(--font-inter), sans-serif",
                                fontStyle: "italic",
                                marginBottom: "1.5rem",
                                flexGrow: 1,
                            }}
                        >
                            &ldquo;{t.quote}&rdquo;
                        </p>

                        {/* Author */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <div
                                style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, rgba(34,197,94,0.2), rgba(16,185,129,0.15))",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#22C55E",
                                    fontWeight: 700,
                                    fontSize: "1.1rem",
                                    fontFamily: "var(--font-space-grotesk), sans-serif",
                                    border: "1px solid rgba(34,197,94,0.2)",
                                }}
                            >
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                                    {t.name}
                                </div>
                                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", fontFamily: "var(--font-inter), sans-serif" }}>
                                    {t.role}
                                </div>
                                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", fontFamily: "var(--font-inter), sans-serif" }}>
                                    {t.location}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pause indicator */}
            {isPaused && (
                <div style={{
                    textAlign: "center",
                    marginTop: "1rem",
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-inter), sans-serif",
                }}>
                    Click anywhere to resume
                </div>
            )}
        </section>
    );
}
