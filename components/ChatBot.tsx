"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

function formatMessage(text: string): string {
    let html = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    // Bold: **text**
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Italic: *text*
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Underline: __text__
    html = html.replace(/__(.+?)__/g, '<u>$1</u>');

    // URLs: https://... or http://...
    html = html.replace(
        /(https?:\/\/[^\s<]+)/g,
        '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #22C55E; text-decoration: underline;">$1</a>'
    );

    // Email addresses
    html = html.replace(
        /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
        '<a href="mailto:$1" style="color: #22C55E; text-decoration: underline;">$1</a>'
    );

    // Line breaks
    html = html.replace(/\n/g, '<br />');

    return html;
}

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content:
                "Hey there! I'm the Code With Nishant AI assistant. Got questions about our AI services, process, or pricing? Just ask!",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input.trim() };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput("");
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: newMessages }),
            });

            const data = await res.json();
            if (data.message) {
                setMessages((prev) => [
                    ...prev,
                    { role: "assistant", content: data.message },
                ]);
            } else {
                setMessages((prev) => [
                    ...prev,
                    {
                        role: "assistant",
                        content: "Sorry, I had trouble responding. Please try again.",
                    },
                ]);
            }
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Something went wrong. Please try again in a moment.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Window */}
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "100px",
                        right: "24px",
                        width: "380px",
                        maxWidth: "calc(100vw - 48px)",
                        height: "520px",
                        maxHeight: "calc(100vh - 140px)",
                        background: "#0A1A14",
                        borderRadius: "16px",
                        border: "1px solid rgba(34, 197, 94, 0.2)",
                        boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(34, 197, 94, 0.1)",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                        zIndex: 10000,
                        animation: "chatSlideUp 0.3s ease-out",
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            padding: "1rem 1.25rem",
                            background: "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.1))",
                            borderBottom: "1px solid rgba(34, 197, 94, 0.15)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <div
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "10px",
                                    background: "linear-gradient(135deg, #22C55E, #10B981)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Bot size={20} color="#0A1A14" />
                            </div>
                            <div>
                                <div
                                    style={{
                                        color: "#fff",
                                        fontWeight: 700,
                                        fontSize: "0.9rem",
                                        fontFamily: "var(--font-space-grotesk), sans-serif",
                                    }}
                                >
                                    AI Assistant
                                </div>
                                <div style={{ color: "#22C55E", fontSize: "0.7rem", display: "flex", alignItems: "center", gap: "4px" }}>
                                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
                                    Online
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                background: "rgba(255,255,255,0.05)",
                                border: "none",
                                borderRadius: "8px",
                                width: "32px",
                                height: "32px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                color: "rgba(255,255,255,0.6)",
                                transition: "all 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                                e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                            }}
                        >
                            <X size={16} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        style={{
                            flex: 1,
                            overflowY: "auto",
                            padding: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.75rem",
                        }}
                    >
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: "flex",
                                    justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                                    gap: "0.5rem",
                                    alignItems: "flex-end",
                                }}
                            >
                                {msg.role === "assistant" && (
                                    <div
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                            borderRadius: "50%",
                                            background: "rgba(34, 197, 94, 0.15)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <Bot size={14} color="#22C55E" />
                                    </div>
                                )}
                                <div
                                    style={{
                                        maxWidth: "75%",
                                        padding: "0.7rem 1rem",
                                        borderRadius: msg.role === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                                        background:
                                            msg.role === "user"
                                                ? "linear-gradient(135deg, #22C55E, #10B981)"
                                                : "rgba(255,255,255,0.07)",
                                        color: msg.role === "user" ? "#0A1A14" : "rgba(255,255,255,0.9)",
                                        fontSize: "0.85rem",
                                        lineHeight: 1.5,
                                        fontFamily: "var(--font-inter), sans-serif",
                                        fontWeight: msg.role === "user" ? 600 : 400,
                                    }}
                                >
                                    {msg.role === "assistant" ? (
                                        <span dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }} />
                                    ) : (
                                        msg.content
                                    )}
                                </div>
                                {msg.role === "user" && (
                                    <div
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                            borderRadius: "50%",
                                            background: "rgba(255,255,255,0.1)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        <User size={14} color="rgba(255,255,255,0.7)" />
                                    </div>
                                )}
                            </div>
                        ))}

                        {isLoading && (
                            <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-end" }}>
                                <div
                                    style={{
                                        width: "28px",
                                        height: "28px",
                                        borderRadius: "50%",
                                        background: "rgba(34, 197, 94, 0.15)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    <Bot size={14} color="#22C55E" />
                                </div>
                                <div
                                    style={{
                                        padding: "0.7rem 1rem",
                                        borderRadius: "14px 14px 14px 4px",
                                        background: "rgba(255,255,255,0.07)",
                                        color: "rgba(255,255,255,0.5)",
                                        fontSize: "0.85rem",
                                        fontFamily: "var(--font-inter), sans-serif",
                                    }}
                                >
                                    <span className="typing-dots">Thinking</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div
                        style={{
                            padding: "0.75rem 1rem",
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                            display: "flex",
                            gap: "0.5rem",
                            background: "rgba(0,0,0,0.2)",
                        }}
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Ask about our AI services..."
                            style={{
                                flex: 1,
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "10px",
                                padding: "0.6rem 1rem",
                                color: "#fff",
                                fontSize: "0.85rem",
                                fontFamily: "var(--font-inter), sans-serif",
                                outline: "none",
                                transition: "border-color 0.2s",
                            }}
                            onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(34, 197, 94, 0.4)")}
                            onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={!input.trim() || isLoading}
                            style={{
                                width: "40px",
                                height: "40px",
                                borderRadius: "10px",
                                background: input.trim() ? "linear-gradient(135deg, #22C55E, #10B981)" : "rgba(255,255,255,0.05)",
                                border: "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: input.trim() ? "pointer" : "default",
                                transition: "all 0.2s",
                                color: input.trim() ? "#0A1A14" : "rgba(255,255,255,0.3)",
                            }}
                        >
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: "fixed",
                    bottom: "24px",
                    right: "24px",
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #22C55E, #10B981)",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 20px rgba(34, 197, 94, 0.4)",
                    zIndex: 10001,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    color: "#0A1A14",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                    e.currentTarget.style.boxShadow = "0 6px 30px rgba(34, 197, 94, 0.5)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(34, 197, 94, 0.4)";
                }}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>

            <style>{`
                @keyframes chatSlideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .typing-dots::after {
                    content: '';
                    animation: dots 1.5s infinite;
                }
                @keyframes dots {
                    0%, 20% { content: '.'; }
                    40% { content: '..'; }
                    60%, 100% { content: '...'; }
                }
            `}</style>
        </>
    );
}
