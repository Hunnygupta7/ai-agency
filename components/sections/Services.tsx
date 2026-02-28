"use client";

import { Brain, Mic, Cog, MessageSquare, BarChart3, Rocket } from "lucide-react";
import { ReactNode } from "react";

const services: { icon: ReactNode; title: string; description: string; highlight: boolean; tag: string | null }[] = [
    {
        icon: <Brain size={28} />,
        title: "Custom AI Development",
        description:
            "Tailored AI models, pipelines, and intelligent systems built from scratch — designed around your unique business logic.",
        highlight: false,
        tag: null,
    },
    {
        icon: <Mic size={28} />,
        title: "AI Voice Agents",
        description:
            "24/7 intelligent voice bots that handle calls, qualify leads, book appointments, and answer queries — fully automated.",
        highlight: true,
        tag: "Most Popular",
    },
    {
        icon: <Cog size={28} />,
        title: "Business Process Automation",
        description:
            "Eliminate repetitive bottlenecks. We automate your workflows, saving dozens of hours weekly across your team.",
        highlight: false,
        tag: null,
    },
    {
        icon: <MessageSquare size={28} />,
        title: "AI Chatbots & Support Systems",
        description:
            "Deploy AI-powered support agents on your website, WhatsApp, or Slack — trained on your business knowledge.",
        highlight: false,
        tag: null,
    },
    {
        icon: <BarChart3 size={28} />,
        title: "Smart Data & Dashboards",
        description:
            "Turn raw data into actionable insights with AI-powered analytics, forecasting, and real-time reporting dashboards.",
        highlight: false,
        tag: null,
    },
    {
        icon: <Rocket size={28} />,
        title: "AI-Powered Web & App Dev",
        description:
            "Full-stack apps and websites supercharged with AI: personalization engines, recommendation systems, and smart UX.",
        highlight: false,
        tag: null,
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="section-padding"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "30%",
                    left: "-5%",
                    width: "350px",
                    height: "350px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
                            Our Services
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
                        AI-Powered Services That{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #22C55E, #10B981)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Scale Your Business
                        </span>
                    </h2>
                    <p
                        style={{
                            fontSize: "1.05rem",
                            color: "rgba(255,255,255,0.55)",
                            maxWidth: "560px",
                            margin: "0 auto",
                            fontFamily: "var(--font-inter), sans-serif",
                            lineHeight: 1.7,
                        }}
                    >
                        We don't just build software. We build intelligent systems that work
                        around the clock to drive your growth.
                    </p>
                </div>

                {/* Services Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="glass-card service-card"
                            style={{
                                padding: "2rem",
                                position: "relative",
                                transition: "all 0.3s ease",
                                background: service.highlight
                                    ? "rgba(34,197,94,0.07)"
                                    : "rgba(255,255,255,0.04)",
                                border: service.highlight
                                    ? "1px solid rgba(34,197,94,0.35)"
                                    : "1px solid rgba(34,197,94,0.12)",
                            }}
                        >
                            {/* Popular tag */}
                            {service.tag && (
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "1.25rem",
                                        right: "1.25rem",
                                        background: "linear-gradient(135deg, #22C55E, #10B981)",
                                        color: "#071A14",
                                        fontSize: "0.7rem",
                                        fontWeight: 700,
                                        padding: "0.25rem 0.7rem",
                                        borderRadius: "50px",
                                        fontFamily: "var(--font-inter), sans-serif",
                                        letterSpacing: "0.04em",
                                    }}
                                >
                                    {service.tag}
                                </div>
                            )}

                            <div
                                style={{
                                    width: "56px",
                                    height: "56px",
                                    borderRadius: "16px",
                                    background: service.highlight
                                        ? "linear-gradient(135deg, rgba(34,197,94,0.25), rgba(16,185,129,0.15))"
                                        : "rgba(255,255,255,0.06)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.6rem",
                                    marginBottom: "1.25rem",
                                    border: service.highlight
                                        ? "1px solid rgba(34,197,94,0.3)"
                                        : "1px solid rgba(255,255,255,0.08)",
                                    color: service.highlight ? "#22C55E" : "#10B981",
                                }}
                            >
                                {service.icon}
                            </div>

                            <h3
                                style={{
                                    fontFamily: "var(--font-space-grotesk), sans-serif",
                                    fontWeight: 700,
                                    fontSize: "1.2rem",
                                    color: service.highlight ? "#22C55E" : "#fff",
                                    marginBottom: "0.75rem",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                {service.title}
                            </h3>

                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    color: "rgba(255,255,255,0.6)",
                                    lineHeight: 1.65,
                                    fontFamily: "var(--font-inter), sans-serif",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                {service.description}
                            </p>

                            <a
                                href="#contact"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "0.4rem",
                                    color: service.highlight ? "#22C55E" : "#10B981",
                                    textDecoration: "none",
                                    fontSize: "0.85rem",
                                    fontWeight: 600,
                                    fontFamily: "var(--font-inter), sans-serif",
                                    transition: "gap 0.2s",
                                }}
                                onMouseEnter={(e) =>
                                    ((e.currentTarget as HTMLElement).style.gap = "0.7rem")
                                }
                                onMouseLeave={(e) =>
                                    ((e.currentTarget as HTMLElement).style.gap = "0.4rem")
                                }
                            >
                                Learn More →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
