"use client";

import { CheckCircle2, Zap, BarChart3, Fingerprint, Workflow } from "lucide-react";

export default function Tools() {
    return (
        <section
            id="capabilities"
            className="section-padding"
            style={{ position: "relative", overflow: "hidden", background: "#06140F" }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <div
                        style={{
                            display: "inline-block",
                            background: "rgba(0,217,255,0.08)",
                            border: "1px solid rgba(0,217,255,0.2)",
                            borderRadius: "50px",
                            padding: "0.35rem 1rem",
                            marginBottom: "1rem",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "0.75rem",
                                fontWeight: 700,
                                color: "#059669",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                fontFamily: "var(--font-inter), sans-serif",
                            }}
                        >
                            Smart Capabilities
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
                        The Tech That Powers{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #10B981, #059669)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Your Automation
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
                        We deploy enterprise-grade AI architecture scaled for your business needs.
                        Plug into your existing tools or build from scratch.
                    </p>
                </div>

                {/* Dashboard Mockup Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(12, 1fr)",
                        gap: "1.5rem",
                    }}
                >
                    {/* Main Analytics Block */}
                    <div
                        className="glass-card col-span-12 md:col-span-8"
                        style={{
                            padding: "2.5rem",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                width: "300px",
                                height: "300px",
                                background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
                                filter: "blur(40px)",
                                borderRadius: "50%",
                            }}
                        />

                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
                            <div
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "12px",
                                    background: "rgba(16,185,129,0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#10B981",
                                }}
                            >
                                <BarChart3 size={24} />
                            </div>
                            <div>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-space-grotesk), sans-serif",
                                        fontWeight: 700,
                                        fontSize: "1.25rem",
                                        color: "#fff",
                                        marginBottom: "0.25rem",
                                    }}
                                >
                                    Real-time AI Analytics
                                </h3>
                                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>
                                    Monitor agent performance and KPIs live
                                </p>
                            </div>
                        </div>

                        {/* Faux Chart */}
                        <div
                            style={{
                                height: "180px",
                                width: "100%",
                                background: "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%)",
                                borderTop: "1px solid rgba(255,255,255,0.05)",
                                borderBottom: "1px solid rgba(255,255,255,0.05)",
                                display: "flex",
                                alignItems: "flex-end",
                                gap: "0.5rem",
                                padding: "1rem 0",
                            }}
                        >
                            {[40, 65, 45, 80, 55, 90, 75, 100, 85].map((h, i) => (
                                <div
                                    key={i}
                                    style={{
                                        flex: 1,
                                        background: i === 7
                                            ? "linear-gradient(180deg, #10B981 0%, rgba(16,185,129,0.2) 100%)"
                                            : "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.02) 100%)",
                                        height: `${h}%`,
                                        borderRadius: "4px 4px 0 0",
                                        transition: "height 1s ease",
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Integration Block */}
                    <div
                        className="glass-card col-span-12 md:col-span-4"
                        style={{
                            padding: "2.5rem",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                            <div
                                style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "12px",
                                    background: "rgba(34,197,94,0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#22C55E",
                                }}
                            >
                                <Workflow size={24} />
                            </div>
                            <div>
                                <h3
                                    style={{
                                        fontFamily: "var(--font-space-grotesk), sans-serif",
                                        fontWeight: 700,
                                        fontSize: "1.25rem",
                                        color: "#fff",
                                    }}
                                >
                                    Seamless Integrations
                                </h3>
                            </div>
                        </div>

                        <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", marginBottom: "2rem", lineHeight: 1.6 }}>
                            Connect your AI agents directly to tools you already use.
                        </p>

                        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "auto" }}>
                            {["Salesforce", "HubSpot", "Slack", "Zapier", "Stripe", "Gmail"].map(tool => (
                                <span
                                    key={tool}
                                    style={{
                                        padding: "0.4rem 0.8rem",
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        borderRadius: "6px",
                                        fontSize: "0.8rem",
                                        color: "rgba(255,255,255,0.8)"
                                    }}
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 3 smaller blocks */}
                    {[
                        {
                            icon: <Zap size={24} />,
                            title: "Lightning Fast API",
                            desc: "Sub-200ms response times for real-time voice and chat interactions.",
                            color: "#059669"
                        },
                        {
                            icon: <Fingerprint size={24} />,
                            title: "Custom Workflows",
                            desc: "Logic tailored specifically to your exact sales or support process.",
                            color: "#22C55E"
                        },
                        {
                            icon: <CheckCircle2 size={24} />,
                            title: "Enterprise Security",
                            desc: "End-to-end encryption for all data processed by your AI models.",
                            color: "#10B981"
                        }
                    ].map((block, i) => (
                        <div
                            key={i}
                            className="glass-card col-span-12 md:col-span-4"
                            style={{
                                padding: "2rem",
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.08)",
                            }}
                        >
                            <div
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "10px",
                                    background: `rgba(255,255,255,0.05)`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: block.color,
                                    marginBottom: "1.25rem"
                                }}
                            >
                                {block.icon}
                            </div>
                            <h3
                                style={{
                                    fontFamily: "var(--font-space-grotesk), sans-serif",
                                    fontWeight: 700,
                                    fontSize: "1.1rem",
                                    color: "#fff",
                                    marginBottom: "0.5rem",
                                }}
                            >
                                {block.title}
                            </h3>
                            <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                                {block.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
            <style>{`
        .col-span-12 { grid-column: span 12 / span 12; }
        @media (min-width: 768px) {
          .md\\:col-span-8 { grid-column: span 8 / span 12; }
          .md\\:col-span-4 { grid-column: span 4 / span 12; }
        }
      `}</style>
        </section>
    );
}
