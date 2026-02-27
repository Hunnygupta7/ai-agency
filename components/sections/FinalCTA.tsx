"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

export default function FinalCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Form state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [problem, setProblem] = useState("");
    const [budget, setBudget] = useState("");

    // UI state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showRejection, setShowRejection] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Send to our API route
            await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, businessName, problem, budget })
            });

            if (budget === "Under ₹50k/mo" || !budget) {
                setShowRejection(true);
            } else {
                window.location.href = `https://calendly.com/codewithnishant1/ai-growth-strategy-session?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`;
            }
        } catch (error) {
            console.error("Failed to submit", error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
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
                                margin: "0 auto 2rem auto"
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
                            Book Call <ArrowRight size={20} />
                        </button>

                        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                            <span>✓ No credit card required</span>
                            <span>✓ 30-min discovery call</span>
                            <span>✓ Custom roadmap</span>
                        </div>

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
                                        <option value="Under ₹50k/mo">Under ₹50k/mo</option>
                                        <option value="₹50k - ₹1L/mo">₹50k - ₹1L/mo</option>
                                        <option value="₹1L - ₹5L/mo">₹1L - ₹5L/mo</option>
                                        <option value="₹5L+/mo">₹5L+/mo</option>
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
                                        {isSubmitting ? "Processing..." : "Continue to Calendar"}
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div style={{ textAlign: "center", padding: "2rem 0" }}>
                                <h3 style={{
                                    fontFamily: "var(--font-space-grotesk), sans-serif",
                                    fontSize: "1.5rem",
                                    color: "#fff",
                                    marginBottom: "1rem"
                                }}>Thank You</h3>
                                <p style={{
                                    color: "rgba(255,255,255,0.7)",
                                    lineHeight: 1.6,
                                    fontFamily: "var(--font-inter), sans-serif",
                                    fontSize: "1.1rem"
                                }}>
                                    At the moment, strategy sessions are reserved for businesses ready to invest in implementation.
                                    <br /><br />
                                    Feel free to reconnect once budget is allocated.
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
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
