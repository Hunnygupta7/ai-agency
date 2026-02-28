import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Code With Nishant | AI Solutions",
  description:
    "We build intelligent automation, voice AI agents, and AI-driven digital systems that scale your business. From idea to intelligent execution.",
  keywords: [
    "AI agency",
    "AI automation",
    "voice AI agents",
    "AI chatbots",
    "business automation",
    "AI development",
    "Code With Nishant",
  ],
  openGraph: {
    title: "Code With Nishant | AI Solutions",
    description:
      "We build intelligent automation, voice AI agents, and AI-driven digital systems that scale your business.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code With Nishant | AI Solutions",
    description: "AI-Powered Growth Systems For Smarter Businesses",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
