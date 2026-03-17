import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shubh Mehta | Technical Leader & AI Architect",
  description:
    "PMP® Certified Senior Product Engineer at Bristlecone (Google India). Expert in GenAI orchestration, Angular, Next.js, and enterprise-scale supply chain automation.",
  keywords: [
    "Shubh Mehta",
    "AI Engineer",
    "GenAI",
    "Gemini",
    "Full Stack Engineer",
    "PMP",
    "Google",
    "Bristlecone",
    "Angular",
    "Next.js",
  ],
  openGraph: {
    title: "Shubh Mehta | Technical Leader & AI Architect",
    description:
      "PMP® Certified Senior Product Engineer. Expert in GenAI, supply chain automation, and full-stack engineering.",
    url: "https://shubhmehta.com",
    siteName: "Shubh Mehta Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-[family-name:var(--font-inter)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
