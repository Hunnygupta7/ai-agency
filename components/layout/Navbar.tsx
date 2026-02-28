"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Results", href: "#results" },
    { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: "all 0.4s ease",
                background: scrolled
                    ? "rgba(7, 26, 20, 0.85)"
                    : "transparent",
                backdropFilter: scrolled ? "blur(16px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
                borderBottom: scrolled
                    ? "1px solid rgba(180, 240, 0, 0.12)"
                    : "1px solid transparent",
            }}
        >
            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    padding: "0 1.5rem",
                    height: "72px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <a href="#" style={{ textDecoration: "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
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
                                fontSize: "1rem",
                                color: "#fff",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Code With <span style={{ color: "#B4F000" }}>Nishant</span>
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="desktop-nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            style={{
                                color: "rgba(255,255,255,0.75)",
                                textDecoration: "none",
                                fontSize: "0.9rem",
                                fontWeight: 500,
                                fontFamily: "var(--font-inter), sans-serif",
                                transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) =>
                                ((e.target as HTMLElement).style.color = "#B4F000")
                            }
                            onMouseLeave={(e) =>
                                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.75)")
                            }
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        style={{
                            background: "linear-gradient(135deg, #B4F000, #00FFC6)",
                            color: "#071A14",
                            padding: "0.55rem 1.4rem",
                            borderRadius: "50px",
                            textDecoration: "none",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                            fontFamily: "var(--font-space-grotesk), sans-serif",
                            transition: "opacity 0.2s, transform 0.2s",
                            display: "inline-block",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.opacity = "0.9";
                            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.opacity = "1";
                            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                        }}
                    >
                        Apply Now
                    </a>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="mobile-menu-btn"
                    style={{
                        background: "none",
                        border: "none",
                        color: "#fff",
                        cursor: "pointer",
                        padding: "0.5rem",
                    }}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {mobileOpen && (
                <div
                    style={{
                        background: "rgba(7, 26, 20, 0.97)",
                        backdropFilter: "blur(16px)",
                        borderTop: "1px solid rgba(180, 240, 0, 0.12)",
                        padding: "1.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.25rem",
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            style={{
                                color: "rgba(255,255,255,0.8)",
                                textDecoration: "none",
                                fontSize: "1rem",
                                fontWeight: 500,
                                fontFamily: "var(--font-inter), sans-serif",
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        style={{
                            background: "linear-gradient(135deg, #B4F000, #00FFC6)",
                            color: "#071A14",
                            padding: "0.75rem 1.5rem",
                            borderRadius: "50px",
                            textDecoration: "none",
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            textAlign: "center",
                            fontFamily: "var(--font-space-grotesk), sans-serif",
                        }}
                    >
                        Apply Now
                    </a>
                </div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn { display: flex !important; }
          .desktop-nav { display: none !important; }
        }
      `}</style>
        </header>
    );
}
