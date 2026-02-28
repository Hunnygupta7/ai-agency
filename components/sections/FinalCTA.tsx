"use client";

import { useState } from "react";
import { ArrowRight, X, Check } from "lucide-react";

export default function FinalCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [website, setWebsite] = useState("");
    const [problem, setProblem] = useState("");
    const [budget, setBudget] = useState("");

    // UI state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showRejection, setShowRejection] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send to our API route
            // We always save the lead data so we don't waste information, even if rejected.
            await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, businessName, website, problem, budget })
            });

            if (budget === "Just exploring AI options" || !budget) {
                setShowRejection(true);
            } else {
                setShowSuccessMessage(true);
                // Artificial delay to show the success message before redirecting
                setTimeout(() => {
                    window.location.href = `https://calendly.com/codewithnishant1/ai-growth-strategy-session?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`;
                }, 1500);
            }
        } catch (error) {
            console.error("Failed to submit", error);
            alert('An error occurred. Please try again.');
            setIsSubmitting(false); // only reset on error, on success we redirect
        }
    };

    const inputStyle = {
        width: "100%",
        background: "rgba(0,0,0,0.5)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "8px",
        padding: "0.8rem 1rem",
        color: "#fff",
        fontSize: "1rem",
        fontFamily: "var(--font-inter), sans-serif",
        marginBottom: "1rem",
        outline: "none",
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
                            Limited Strategy Sessions <br />
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #B4F000, #00FFC6)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Available Each Week
                            </span>
                        </h2>

                        <p
                            style={{
                                fontSize: "1.05rem",
                                color: "rgba(255,255,255,0.6)",
                                maxWidth: "500px",
                                margin: "0 auto 2rem auto",
                                fontFamily: "var(--font-inter), sans-serif",
                                lineHeight: 1.6,
                            }}
                        >
                            Let&apos;s build intelligent systems that work while you sleep.
                        </p>

                        {/* Qualification Signal */}
                        <div style={{
                            maxWidth: "420px",
                            margin: "0 auto 2.5rem auto",
                            textAlign: "left",
                        }}>
                            <p style={{
                                fontSize: "0.9rem",
                                color: "rgba(255,255,255,0.8)",
                                fontWeight: 600,
                                fontFamily: "var(--font-inter), sans-serif",
                                marginBottom: "0.75rem",
                            }}>
                                This session is ideal if:
                            </p>
                            {[
                                "You operate a revenue-generating business",
                                "You want implementation within 30–60 days",
                                "You are prepared to invest in execution",
                            ].map((item) => (
                                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                    <Check size={16} color="#B4F000" strokeWidth={3} />
                                    <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-inter), sans-serif" }}>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            style={{
                                background: "linear-gradient(135deg, #B4F000, #00FFC6)",
                                color: "#071A14",
                                border: "none",
                                borderRadius: "50px",
                                padding: "1rem 3rem",
                                fontSize: "1.2rem",
                                fontWeight: 700,
                                fontFamily: "var(--font-space-grotesk), sans-serif",
                                cursor: "pointer",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                transition: "opacity 0.2s, transform 0.2s",
                                margin: "0 auto 1.5rem auto"
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.opacity = "0.9";
                                e.currentTarget.style.transform = "scale(1.02)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.opacity = "1";
                                e.currentTarget.style.transform = "scale(1)";
                            }}
                        >
                            Apply for AI Strategy Session <ArrowRight size={20} />
                        </button>

                        <p style={{
                            fontSize: "0.8rem",
                            color: "rgba(255,255,255,0.35)",
                            fontFamily: "var(--font-inter), sans-serif",
                            fontStyle: "italic",
                        }}>
                            Designed for businesses prepared to invest ₹50,000+ in AI implementation.
                        </p>

                    </div>
                </div>

            </div>

            {/* Modal Overlay */}
            {isModalOpen && (
                <div style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "rgba(0,0,0,0.8)",
                    backdropFilter: "blur(5px)",
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1rem"
                }}>
                    <div style={{
                        background: "#071A14",
                        border: "1px solid rgba(180,240,0,0.2)",
                        borderRadius: "24px",
                        width: "100%",
                        maxWidth: "500px",
                        padding: "2rem",
                        position: "relative",
                        maxHeight: "90vh",
                        overflowY: "auto",
                        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
                    }}>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            style={{
                                position: "absolute",
                                top: "1.5rem",
                                right: "1.5rem",
                                background: "transparent",
                                border: "none",
                                color: "rgba(255,255,255,0.5)",
                                cursor: "pointer"
                            }}
                        >
                            <X size={24} />
                        </button>

                        {!showRejection ? (
                            <>
                                <h3 style={{
                                    fontFamily: "var(--font-space-grotesk), sans-serif",
                                    fontSize: "1.5rem",
                                    color: "#fff",
                                    marginBottom: "1.5rem"
                                }}>Apply for AI Strategy Session</h3>

                                <form onSubmit={handleSubmit}>
                                    {!showSuccessMessage ? (
                                        <>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                required
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                                style={inputStyle}
                                            />
                                            <input
                                                type="email"
                                                placeholder="Work Email"
                                                required
                                                value={email}
                                                onChange={e => setEmail(e.target.value)}
                                                style={inputStyle}
                                            />
                                            <input
                                                type="text"
                                                placeholder="Business Name"
                                                required
                                                value={businessName}
                                                onChange={e => setBusinessName(e.target.value)}
                                                style={inputStyle}
                                            />
                                            <input
                                                type="text"
                                                placeholder="Website / Instagram"
                                                required
                                                value={website}
                                                onChange={e => setWebsite(e.target.value)}
                                                style={inputStyle}
                                            />
                                            <textarea
                                                placeholder="What problem are you trying to solve?"
                                                required
                                                value={problem}
                                                onChange={e => setProblem(e.target.value)}
                                                style={{ ...inputStyle, minHeight: "100px", resize: "vertical" }}
                                            />
                                            <select
                                                required
                                                value={budget}
                                                onChange={e => setBudget(e.target.value)}
                                                style={{ ...inputStyle, appearance: "none" }}
                                            >
                                                <option value="" disabled>Select Investment Range</option>
                                                <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                                                <option value="₹1,00,000 – ₹2,50,000">₹1,00,000 – ₹2,50,000</option>
                                                <option value="₹2,50,000+">₹2,50,000+</option>
                                                <option value="Just exploring AI options">Just exploring AI options</option>
                                            </select>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                style={{
                                                    width: "100%",
                                                    background: "linear-gradient(135deg, #B4F000, #00FFC6)",
                                                    color: "#071A14",
                                                    border: "none",
                                                    borderRadius: "8px",
                                                    padding: "1rem",
                                                    fontSize: "1.1rem",
                                                    fontWeight: 700,
                                                    fontFamily: "var(--font-space-grotesk), sans-serif",
                                                    cursor: isSubmitting ? "not-allowed" : "pointer",
                                                    opacity: isSubmitting ? 0.7 : 1,
                                                    marginTop: "1rem"
                                                }}
                                            >
                                                {isSubmitting ? "Processing..." : "Submit Application"}
                                            </button>
                                        </>
                                    ) : (
                                        <div style={{ textAlign: "center", padding: "2rem 0" }}>
                                            <div style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "50%",
                                                background: "rgba(180, 240, 0, 0.1)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                margin: "0 auto 1.5rem auto",
                                                color: "#B4F000"
                                            }}>
                                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                            </div>
                                            <h3 style={{
                                                fontFamily: "var(--font-space-grotesk), sans-serif",
                                                fontSize: "1.5rem",
                                                color: "#fff",
                                                marginBottom: "1rem"
                                            }}>Application in Review</h3>
                                            <p style={{
                                                color: "rgba(255,255,255,0.7)",
                                                lineHeight: 1.6,
                                                fontFamily: "var(--font-inter), sans-serif",
                                                fontSize: "1.1rem"
                                            }}>
                                                Each application is reviewed to ensure alignment with our implementation criteria.
                                                <br /><br />
                                                We&apos;ll be in touch within 24–48 hours if your business is a fit.
                                            </p>
                                        </div>
                                    )}
                                </form>
                            </>
                        ) : (
                            <div style={{ textAlign: "center", padding: "2rem 0" }}>
                                <h3 style={{
                                    fontFamily: "var(--font-space-grotesk), sans-serif",
                                    fontSize: "1.5rem",
                                    color: "#fff",
                                    marginBottom: "1rem"
                                }}>Application Received</h3>
                                <p style={{
                                    color: "rgba(255,255,255,0.7)",
                                    lineHeight: 1.6,
                                    fontFamily: "var(--font-inter), sans-serif",
                                    fontSize: "1.1rem"
                                }}>
                                    This strategy session is reserved for businesses ready to implement AI solutions.
                                    <br /><br />
                                    Once you're ready to move forward with implementation, feel free to apply again.
                                </p>
                                <button
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setShowRejection(false);
                                    }}
                                    style={{
                                        background: "transparent",
                                        border: "1px solid rgba(255,255,255,0.2)",
                                        color: "#fff",
                                        padding: "0.8rem 2rem",
                                        borderRadius: "50px",
                                        marginTop: "2rem",
                                        cursor: "pointer"
                                    }}
                                >
                                    Return to Site
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
