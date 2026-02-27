"use client";

import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer style={{ background: "#06140F", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "5rem" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "4rem", marginBottom: "4rem" }}>

                    {/* Brand Col */}
                    <div style={{ gridColumn: "span 2" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
                            <div
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "10px",
                                    background: "linear-gradient(135deg, #B4F000, #00FFC6)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: 800,
                                    fontSize: "16px",
                                    color: "#071A14",
                                    fontFamily: "var(--font-space-grotesk), sans-serif",
                                }}
                            >
                                N
                            </div>
                            <span
                                style={{
                                    fontFamily: "var(--font-space-grotesk), sans-serif",
                                    fontWeight: 700,
                                    fontSize: "1.2rem",
                                    color: "#fff",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                Code With <span style={{ color: "#B4F000" }}>Nishant</span> AI Labs
                            </span>
                        </div>
                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: "340px", marginBottom: "2rem" }}>
                            We build intelligent automation, voice AI agents, and AI-driven digital systems that scale your business.
                        </p>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            {[
                                { icon: <Twitter size={20} />, href: "#" },
                                { icon: <Linkedin size={20} />, href: "#" },
                                { icon: <Github size={20} />, href: "#" },
                                { icon: <Mail size={20} />, href: "mailto:hello@example.com" },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                        background: "rgba(255,255,255,0.05)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "rgba(255,255,255,0.7)",
                                        transition: "all 0.2s",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "rgba(180,240,0,0.15)";
                                        e.currentTarget.style.color = "#B4F000";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                        e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Col 1 */}
                    <div>
                        <h4 style={{ color: "#fff", fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 700, marginBottom: "1.5rem" }}>
                            Services
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {["Voice AI Agents", "Custom AI Development", "Business Automation", "Smart Dashboards"].map(link => (
                                <li key={link}>
                                    <a href="#services" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = "#00FFC6"}
                                        onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Col 2 */}
                    <div>
                        <h4 style={{ color: "#fff", fontFamily: "var(--font-space-grotesk), sans-serif", fontWeight: 700, marginBottom: "1.5rem" }}>
                            Company
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {["About Us", "Our Process", "Case Studies", "Contact"].map(link => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(" ", "")}`} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.2s" }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = "#00FFC6"}
                                        onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "2rem 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
                        © {new Date().getFullYear()} Code With Nishant AI Labs. All rights reserved.
                    </div>
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        {["Privacy Policy", "Terms of Service"].map(link => (
                            <a key={link} href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", fontSize: "0.85rem", transition: "color 0.2s" }}
                                onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}
