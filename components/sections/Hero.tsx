"use client";

import { useEffect, useRef } from "react";
import { Bot, Zap, Brain, Link, BarChart3, Mic, CalendarCheck } from "lucide-react";
export default function Hero() {
    const headlineRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const el = headlineRef.current;
        if (!el) return;
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        setTimeout(() => {
            el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 100);
    }, []);

    return (
        <section
            id="hero"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                paddingTop: "72px",
            }}
        >
            {/* Background Orbs */}
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "-10%",
                    width: "600px",
                    height: "600px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(180,240,0,0.12) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "20%",
                    right: "-5%",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,255,198,0.1) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "10%",
                    left: "40%",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,217,255,0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    padding: "4rem 1.5rem",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4rem",
                    alignItems: "center",
                    width: "100%",
                }}
                className="hero-grid"
            >
                {/* Left: Copy */}
                <div>
                    {/* Badge */}
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "rgba(180,240,0,0.1)",
                            border: "1px solid rgba(180,240,0,0.3)",
                            borderRadius: "50px",
                            padding: "0.4rem 1rem",
                            marginBottom: "1.75rem",
                        }}
                    >
                        <span
                            style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "#B4F000",
                                display: "inline-block",
                                animation: "pulse-dot 2s ease-in-out infinite",
                            }}
                        />
                        <span
                            style={{
                                fontSize: "0.8rem",
                                color: "#B4F000",
                                fontWeight: 600,
                                fontFamily: "var(--font-inter), sans-serif",
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                            }}
                        >
                            Trusted by 50+ Businesses
                        </span>
                    </div>

                    {/* Headline */}
                    <h1
                        ref={headlineRef}
                        style={{
                            fontFamily: "var(--font-space-grotesk), sans-serif",
                            fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                            fontWeight: 800,
                            lineHeight: 1.1,
                            letterSpacing: "-0.03em",
                            color: "#fff",
                            marginBottom: "1.5rem",
                        }}
                    >
                        We Build AI Systems That{" "}
                        <span
                            style={{
                                background: "linear-gradient(135deg, #B4F000 0%, #00FFC6 60%, #00D9FF 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Generate Revenue
                        </span>
                        <br />
                        — Not Just Automation.
                    </h1>

                    {/* Subheadline */}
                    <p
                        style={{
                            fontSize: "1.125rem",
                            color: "rgba(255,255,255,0.65)",
                            lineHeight: 1.7,
                            marginBottom: "2.5rem",
                            fontFamily: "var(--font-inter), sans-serif",
                            maxWidth: "520px",
                        }}
                    >
                        From AI voice agents to custom automation pipelines, built for
                        businesses ready to scale.{" "}
                        <strong style={{ color: "rgba(255,255,255,0.9)" }}>
                            From idea to intelligent execution.
                        </strong>
                    </p>

                    {/* CTAs */}
                    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                        <a
                            href="#contact"
                            style={{
                                background: "linear-gradient(135deg, #B4F000, #00FFC6)",
                                color: "#071A14",
                                padding: "0.9rem 2rem",
                                borderRadius: "50px",
                                textDecoration: "none",
                                fontSize: "0.95rem",
                                fontWeight: 700,
                                fontFamily: "var(--font-space-grotesk), sans-serif",
                                boxShadow: "0 0 30px rgba(180, 240, 0, 0.35)",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                display: "inline-flex",
                                alignItems: "center",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 45px rgba(180, 240, 0, 0.5)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(180, 240, 0, 0.35)";
                            }}
                        >
                            <CalendarCheck size={18} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} />
                            Apply for AI Strategy Session
                        </a>
                        <a
                            href="#services"
                            style={{
                                background: "transparent",
                                color: "#fff",
                                padding: "0.9rem 2rem",
                                borderRadius: "50px",
                                textDecoration: "none",
                                fontSize: "0.95rem",
                                fontWeight: 600,
                                fontFamily: "var(--font-space-grotesk), sans-serif",
                                border: "1px solid rgba(255,255,255,0.2)",
                                transition: "border-color 0.2s, background 0.2s",
                                display: "inline-block",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(180,240,0,0.5)";
                                (e.currentTarget as HTMLElement).style.background = "rgba(180,240,0,0.05)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                                (e.currentTarget as HTMLElement).style.background = "transparent";
                            }}
                        >
                            View Our Services →
                        </a>
                    </div>

                    {/* Social Proof Row */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1.5rem",
                            marginTop: "3rem",
                            flexWrap: "wrap",
                        }}
                    >
                        {[
                            { value: "50+", label: "Businesses Served" },
                            { value: "100+", label: "Projects Delivered" },
                            { value: "5+", label: "Years Experience" },
                        ].map((stat) => (
                            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
                                <span
                                    style={{
                                        fontFamily: "var(--font-space-grotesk), sans-serif",
                                        fontWeight: 800,
                                        fontSize: "1.5rem",
                                        background: "linear-gradient(135deg, #B4F000, #00FFC6)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    {stat.value}
                                </span>
                                <span
                                    style={{
                                        fontSize: "0.75rem",
                                        color: "rgba(255,255,255,0.5)",
                                        fontFamily: "var(--font-inter), sans-serif",
                                    }}
                                >
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: AI Visual */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                    }}
                    className="hero-visual"
                >
                    {/* Central Orb */}
                    <div
                        style={{
                            width: "340px",
                            height: "340px",
                            borderRadius: "50%",
                            background:
                                "radial-gradient(circle at 35% 35%, rgba(180,240,0,0.25) 0%, rgba(0,255,198,0.15) 40%, transparent 70%)",
                            border: "1px solid rgba(180,240,0,0.2)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            animation: "float 6s ease-in-out infinite",
                        }}
                    >
                        <div
                            style={{
                                width: "220px",
                                height: "220px",
                                borderRadius: "50%",
                                background:
                                    "radial-gradient(circle at 40% 40%, rgba(0,255,198,0.3) 0%, rgba(0,217,255,0.15) 50%, transparent 70%)",
                                border: "1px solid rgba(0,255,198,0.25)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div
                                style={{
                                    width: "120px",
                                    height: "120px",
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg, rgba(180,240,0,0.4), rgba(0,255,198,0.4))",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "3rem",
                                    boxShadow: "0 0 40px rgba(180,240,0,0.4), 0 0 80px rgba(0,255,198,0.2)",
                                }}
                            >
                                <Bot size={48} color="#B4F000" />
                            </div>
                        </div>

                        {/* Orbiting elements */}
                        {[
                            { icon: <Zap size={20} color="#B4F000" />, top: "-20px", left: "140px", color: "#B4F000" },
                            { icon: <Brain size={20} color="#00FFC6" />, top: "270px", left: "60px", color: "#00FFC6" },
                            { icon: <Link size={20} color="#00D9FF" />, top: "130px", left: "-25px", color: "#00D9FF" },
                            { icon: <BarChart3 size={20} color="#B4F000" />, top: "20px", right: "-5px", color: "#B4F000" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    position: "absolute",
                                    top: item.top,
                                    left: item.left,
                                    right: item.right,
                                    width: "52px",
                                    height: "52px",
                                    borderRadius: "14px",
                                    background: "rgba(255,255,255,0.05)",
                                    backdropFilter: "blur(10px)",
                                    border: `1px solid ${item.color}33`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "1.25rem",
                                    boxShadow: `0 0 20px ${item.color}22`,
                                    animation: `float ${4 + i}s ease-in-out infinite`,
                                    animationDelay: `${i * 0.5}s`,
                                }}
                            >
                                {item.icon}
                            </div>
                        ))}
                    </div>

                    {/* Floating feature tags */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: "-10px",
                            left: "-10px",
                            background: "rgba(255,255,255,0.05)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(180,240,0,0.2)",
                            borderRadius: "12px",
                            padding: "0.6rem 1rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                        }}
                    >
                        <Mic size={18} color="#B4F000" />
                        <span style={{ color: "#B4F000", fontSize: "0.8rem", fontWeight: 600, fontFamily: "var(--font-inter), sans-serif" }}>
                            Voice AI Agents
                        </span>
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            top: "20px",
                            right: "-20px",
                            background: "rgba(255,255,255,0.05)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(0,255,198,0.2)",
                            borderRadius: "12px",
                            padding: "0.6rem 1rem",
                        }}
                    >
                        <span style={{ color: "#00FFC6", fontSize: "0.8rem", fontWeight: 600, fontFamily: "var(--font-inter), sans-serif" }}>
                            <Bot size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} /> Automation
                        </span>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; text-align: center; }
          .hero-visual { display: none !important; }
        }
      `}</style>
        </section>
    );
}
