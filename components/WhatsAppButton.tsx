"use client";

import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/919999999999" // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={{
                position: "fixed",
                bottom: "2rem",
                right: "2rem",
                zIndex: 999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60px",
                height: "60px",
                background: "#25D366",
                color: "#fff",
                borderRadius: "50%",
                boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)",
                transition: "transform 0.2s",
                textDecoration: "none",
            }}
            className="pulse-ring"
            onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
        >
            <MessageSquare size={28} style={{ zIndex: 1 }} />
        </a>
    );
}
