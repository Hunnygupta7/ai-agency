"use client";

import { ArrowUpRight } from "lucide-react";

const results = [
    {
        client: "E-Commerce Brand",
        metric1: "Reduced workload by",
        value1: "60%",
        metric2: "Support team efficiency",
        value2: "+300%",
        desc: "Deployed a custom multi-language AI Voice Agent that resolves 85% of tier-1 customer support queries instantly without human intervention.",
        tag: "Voice AI"
    },
    {
        client: "Healthcare Clinic",
        metric1: "Appointment bookings",
        value1: "+3x",
        metric2: "No-show rate",
        value2: "-45%",
        desc: "Built a smart scheduling assistant combining an AI chatbot and an automated SMS follow-up workflow connected to their central CRM.",
        tag: "Automation"
    },
    {
        client: "Real Estate Brokerage",
        metric1: "Lead qualification time",
        value1: "Instant",
        metric2: "Cost per acquisition",
        value2: "-35%",
        desc: "Implemented a custom lead-scraping and AI qualification pipeline that filters out unqualified prospects and auto-dials high-intent buyers.",
        tag: "AI Workflows"
    }
];

export default function CaseStudies() {
    return (
        <section
            id="results"
            className="section-padding"
            style={{ background: "rgba(255,255,255,0.01)" }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "2rem" }}>
                    <div>
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
                                Proven Results
                            </span>
                        </div>
                        <h2
                            style={{
                                fontFamily: "var(--font-space-grotesk), sans-serif",
                                fontSize: "clamp(2rem, 4vw, 3rem)",
                                fontWeight: 800,
                                color: "#fff",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Real AI Impact. <br />
                            <span style={{ color: "rgba(255,255,255,0.4)" }}>Measurable ROI.</span>
                        </h2>
                    </div>

                    <a
                        href="#contact"
                        style={{
                            color: "#22C55E",
                            textDecoration: "none",
                            fontSize: "1rem",
                            fontWeight: 600,
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            borderBottom: "1px solid rgba(34,197,94,0.3)",
                            paddingBottom: "0.2rem"
                        }}
                    >
                        See More Case Studies <ArrowUpRight size={18} />
                    </a>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem" }}>
                    {results.map((item, idx) => (
                        <div
                            key={idx}
                            className="glass-card"
                            style={{
                                padding: "2.5rem",
                                background: "rgba(255,255,255,0.02)",
                                transition: "transform 0.3s ease, background 0.3s ease"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                            }}
                        >
                            <div
                                style={{
                                    display: "inline-block",
                                    padding: "0.3rem 0.8rem",
                                    borderRadius: "6px",
                                    background: "rgba(255,255,255,0.05)",
                                    color: "rgba(255,255,255,0.8)",
                                    fontSize: "0.75rem",
                                    fontWeight: 600,
                                    marginBottom: "1.5rem"
                                }}
                            >
                                {item.tag}
                            </div>

                            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "2rem", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                                {item.client}
                            </h3>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                                <div>
                                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginBottom: "0.3rem" }}>
                                        {item.metric1}
                                    </div>
                                    <div style={{ fontSize: "2rem", fontWeight: 800, color: "#10B981", fontFamily: "var(--font-space-grotesk), sans-serif", letterSpacing: "-0.03em" }}>
                                        {item.value1}
                                    </div>
                                </div>
                                <div>
                                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", marginBottom: "0.3rem" }}>
                                        {item.metric2}
                                    </div>
                                    <div style={{ fontSize: "2rem", fontWeight: 800, color: "#22C55E", fontFamily: "var(--font-space-grotesk), sans-serif", letterSpacing: "-0.03em" }}>
                                        {item.value2}
                                    </div>
                                </div>
                            </div>

                            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.6, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem" }}>
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
