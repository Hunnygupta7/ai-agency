"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";




export default function About() {
    return (
        <section
            id="about"
            className="section-padding"
            style={{ position: "relative", overflow: "hidden" }}
        >
            {/* Blob */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: "10%",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                {/* Section Label */}
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
                        About Us
                    </span>
                </div>

                <h2
                    style={{
                        fontFamily: "var(--font-space-grotesk), sans-serif",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        fontWeight: 800,
                        color: "#fff",
                        marginBottom: "1rem",
                        letterSpacing: "-0.02em",
                    }}
                >
                    The Team Powering{" "}
                    <span
                        style={{
                            background: "linear-gradient(135deg, #22C55E, #10B981)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Your AI Future
                    </span>
                </h2>

                <p
                    style={{
                        fontSize: "1.05rem",
                        color: "rgba(255,255,255,0.6)",
                        lineHeight: 1.75,
                        maxWidth: "640px",
                        marginBottom: "3.5rem",
                        fontFamily: "var(--font-inter), sans-serif",
                    }}
                >
                    I'm Nishant, founder and lead AI architect at Code With Nishant.
                    to help businesses of every size harness the power of artificial intelligence.
                    We take an AI-first approach to every problem. From automating repetitive tasks
                    to deploying intelligent voice agents that work 24/7.
                </p>



                {/* Bullet Points */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "1rem",
                        marginBottom: "3rem",
                    }}
                >
                    {[
                        "End-to-end AI system design & deployment",
                        "AI-first strategy for every solution",
                        "Expert team across automation, ML, dev",
                        "Dedicated post-deployment support & optimization",
                    ].map((item) => (
                        <div
                            key={item}
                            style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}
                        >
                            <span
                                style={{
                                    flexShrink: 0,
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, #22C55E, #10B981)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "0.65rem",
                                    color: "#071A14",
                                    fontWeight: 800,
                                    marginTop: "2px",
                                }}
                            >
                                <Check size={12} strokeWidth={3} />
                            </span>
                            <span
                                style={{
                                    fontSize: "0.95rem",
                                    color: "rgba(255,255,255,0.75)",
                                    fontFamily: "var(--font-inter), sans-serif",
                                    lineHeight: 1.5,
                                }}
                            >
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                <a
                    href="#contact"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        background: "linear-gradient(135deg, #22C55E, #10B981)",
                        color: "#071A14",
                        padding: "0.85rem 2rem",
                        borderRadius: "50px",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-space-grotesk), sans-serif",
                        transition: "transform 0.2s, box-shadow 0.2s",
                        boxShadow: "0 0 25px rgba(34,197,94,0.3)",
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(34,197,94,0.45)";
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 25px rgba(34,197,94,0.3)";
                    }}
                >
                    See How We Can Help →
                </a>
            </div>
        </section>
    );
}
