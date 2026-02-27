"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            // Send to our API route
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                // Assuming you use Calendly. The user needs to replace this URL.
                window.location.href = `https://calendly.com/your-username/30min?email=${encodeURIComponent(email)}`;
            } else {
                alert('Failed to save email. Please try again.');
            }
        } catch (error) {
            console.error("Failed to submit", error);
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <section id="contact" style={{ padding: "4rem 1.5rem 8rem 1.5rem" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

                <div
                    style={{
                        background: "linear-gradient(135deg, rgba(7,26,20,0.8) 0%, rgba(15,61,46,0.9) 100%)",
                        border: "1px solid rgba(180,240,0,0.2)",
                        borderRadius: "32px",
                        padding: "5rem 2rem",
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.3)"
                    }}
                >
                    {/* Background Glows */}
                    <div
                        style={{
                            position: "absolute",
                            top: "-50%",
                            left: "-10%",
                            width: "600px",
                            height: "600px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(180,240,0,0.15) 0%, transparent 60%)",
                            pointerEvents: "none",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: "-50%",
                            right: "-10%",
                            width: "500px",
                            height: "500px",
                            borderRadius: "50%",
                            background: "radial-gradient(circle, rgba(0,255,198,0.1) 0%, transparent 60%)",
                            pointerEvents: "none",
                        }}
                    />

                    <div style={{ position: "relative", zIndex: 1 }}>
                        <h2
                            style={{
                                fontFamily: "var(--font-space-grotesk), sans-serif",
                                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                                fontWeight: 800,
                                color: "#fff",
                                lineHeight: 1.1,
                                letterSpacing: "-0.03em",
                                marginBottom: "1.5rem",
                            }}
                        >
                            Ready To Power Up <br />
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #B4F000, #00FFC6)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                With AI?
                            </span>
                        </h2>

                        <p
                            style={{
                                fontSize: "1.2rem",
                                color: "rgba(255,255,255,0.7)",
                                maxWidth: "500px",
                                margin: "0 auto 3rem auto",
                                fontFamily: "var(--font-inter), sans-serif",
                                lineHeight: 1.6,
                            }}
                        >
                            Let's build intelligent systems that work while you sleep. Free strategy audit included.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "0.5rem",
                                maxWidth: "600px",
                                margin: "0 auto 2rem auto",
                                background: "rgba(0,0,0,0.3)",
                                padding: "0.5rem",
                                borderRadius: "50px",
                                border: "1px solid rgba(255,255,255,0.1)",
                            }}
                            className="cta-form"
                        >
                            <input
                                type="email"
                                placeholder="Enter your work email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{
                                    flexGrow: 1,
                                    background: "transparent",
                                    border: "none",
                                    outline: "none",
                                    padding: "0 1.5rem",
                                    color: "#fff",
                                    fontSize: "1rem",
                                    fontFamily: "var(--font-inter), sans-serif",
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    background: "linear-gradient(135deg, #B4F000, #00FFC6)",
                                    color: "#071A14",
                                    border: "none",
                                    borderRadius: "50px",
                                    padding: "1rem 2rem",
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    fontFamily: "var(--font-space-grotesk), sans-serif",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    transition: "opacity 0.2s",
                                    flexShrink: 0
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                            >
                                Book Call <ArrowRight size={18} />
                            </button>
                        </form>

                        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                            <span>✓ No credit card required</span>
                            <span>✓ 30-min discovery call</span>
                            <span>✓ Custom roadmap</span>
                        </div>

                    </div>
                </div>

            </div>

            <style>{`
        @media (max-width: 600px) {
          .cta-form {
            flex-direction: column !important;
            border-radius: 20px !important;
            padding: 1rem !important;
            gap: 1rem !important;
          }
          .cta-form button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
        </section>
    );
}
