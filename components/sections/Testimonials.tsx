"use client";

import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "COO @ TechFlow Solutions",
        quote: "Integrating Code With Nishant's voice AI agents transformed our inbound sales process completely. We're capturing leads 24/7 now, and our close rate jumped by 40% in just two months.",
    },
    {
        name: "David Chen",
        role: "Founder, RapidScale E-Com",
        quote: "We used to have four people managing data entry and basic customer support. Nishant built an automation pipeline that handles 90% of it autonomously. Incredible ROI from day one.",
    },
    {
        name: "Elena Rodriguez",
        role: "Director of Ops, NextGen Realty",
        quote: "The team really understood our business bottlenecks before building anything. Their AI solution didn't just digitize old processes; it reimagined how we follow up with property buyers.",
    }
];

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="section-padding"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
                        Don't just take our word for it. Here's how our AI systems have
                        impacted real businesses.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="glass-card"
                            style={{
                                padding: "2.5rem",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {/* Stars */}
                            <div style={{ display: "flex", gap: "0.2rem", color: "#B4F000", marginBottom: "1.5rem" }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="#B4F000" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p
                                style={{
                                    fontSize: "1.05rem",
                                    color: "rgba(255,255,255,0.85)",
                                    lineHeight: 1.6,
                                    fontFamily: "var(--font-inter), sans-serif",
                                    fontStyle: "italic",
                                    marginBottom: "2rem",
                                    flexGrow: 1,
                                }}
                            >
                                "{t.quote}"
                            </p>

                            {/* Author */}
                            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                <div
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        borderRadius: "50%",
                                        background: "rgba(255,255,255,0.1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "#fff",
                                        fontWeight: 700,
                                        fontFamily: "var(--font-space-grotesk), sans-serif",
                                    }}
                                >
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div style={{ color: "#fff", fontWeight: 700, fontSize: "1rem" }}>{t.name}</div>
                                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
