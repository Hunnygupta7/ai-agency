"use client";

const steps = [
    {
        num: "01",
        title: "Discover & Define",
        description: "We dive deep into your business goals, identify process bottlenecks, and blueprint the perfect AI integration strategy.",
    },
    {
        num: "02",
        title: "Design & Develop",
        description: "Our engineers build custom AI models, automation workflows, and tailored interfaces explicitly for your specific use cases.",
    },
    {
        num: "03",
        title: "Deploy & Scale",
        description: "We seamlessly launch the systems into your existing tech stack, train your team, and ensure smooth, automated operations.",
    },
    {
        num: "04",
        title: "Continuous Optimization",
        description: "AI never sleeps. We continually monitor performance, tweak algorithms, and refine workflows to ensure maximum ROI over time.",
    }
];

export default function Process() {
    return (
        <section
            id="process"
            className="section-padding"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="process-grid">

                    {/* Left: Copy */}
                    <div>
                        <div
                            style={{
                                display: "inline-block",
                                background: "rgba(180,240,0,0.08)",
                                border: "1px solid rgba(180,240,0,0.2)",
                                borderRadius: "50px",
                                padding: "0.35rem 1rem",
                                marginBottom: "1rem",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "0.75rem",
                                    fontWeight: 700,
                                    color: "#B4F000",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    fontFamily: "var(--font-inter), sans-serif",
                                }}
                            >
                                Our Process
                            </span>
                        </div>
                        <h2
                            style={{
                                fontFamily: "var(--font-space-grotesk), sans-serif",
                                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                                fontWeight: 800,
                                color: "#fff",
                                letterSpacing: "-0.02em",
                                marginBottom: "1.5rem",
                                lineHeight: 1.1,
                            }}
                        >
                            From Idea To <br />
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #B4F000, #00FFC6)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Intelligent Execution
                            </span>
                        </h2>
                        <p
                            style={{
                                fontSize: "1.1rem",
                                color: "rgba(255,255,255,0.6)",
                                marginBottom: "3rem",
                                fontFamily: "var(--font-inter), sans-serif",
                                lineHeight: 1.7,
                                maxWidth: "480px"
                            }}
                        >
                            We handle the heavy lifting of AI implementation so you don't have to.
                            Our streamlined framework ensures rapid deployment and clear ROI.
                        </p>

                        <a
                            href="#contact"
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
                            Start Your Project →
                        </a>
                    </div>

                    {/* Right: Steps List */}
                    <div style={{ position: "relative" }}>
                        {/* Connecting line */}
                        <div
                            style={{
                                position: "absolute",
                                left: "24px",
                                top: "24px",
                                bottom: "24px",
                                width: "2px",
                                background: "linear-gradient(180deg, #B4F000 0%, rgba(180,240,0,0.1) 100%)",
                                zIndex: 0
                            }}
                        />

                        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", position: "relative", zIndex: 1 }}>
                            {steps.map((step, idx) => (
                                <div key={idx} style={{ display: "flex", gap: "1.5rem" }}>
                                    {/* Step Number Bubble */}
                                    <div
                                        style={{
                                            width: "48px",
                                            height: "48px",
                                            borderRadius: "50%",
                                            background: "#071A14",
                                            border: "2px solid #B4F000",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "1.1rem",
                                            fontWeight: 700,
                                            color: "#B4F000",
                                            fontFamily: "var(--font-space-grotesk), sans-serif",
                                            flexShrink: 0,
                                            boxShadow: "0 0 20px rgba(180,240,0,0.2)",
                                        }}
                                    >
                                        {step.num}
                                    </div>
                                    {/* Content */}
                                    <div style={{ paddingTop: "0.2rem" }}>
                                        <h3
                                            style={{
                                                fontFamily: "var(--font-space-grotesk), sans-serif",
                                                fontWeight: 700,
                                                fontSize: "1.3rem",
                                                color: "#fff",
                                                marginBottom: "0.5rem",
                                            }}
                                        >
                                            {step.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontSize: "0.95rem",
                                                color: "rgba(255,255,255,0.6)",
                                                lineHeight: 1.6,
                                                fontFamily: "var(--font-inter), sans-serif",
                                            }}
                                        >
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            <style>{`
        @media (max-width: 900px) {
          .process-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
        </section>
    );
}
