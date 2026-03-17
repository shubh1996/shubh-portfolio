"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import content from "@/data/content.json";

const navLinks = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const unsub = scrollY.on("change", (v) => setScrolled(v > 60));
        return unsub;
    }, [scrollY]);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 shadow-lg shadow-black/20"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-white font-black text-xl tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
                        {content.name.split(" ")[0]}
                    </span>
                    <span className="text-slate-400 font-light">.dev</span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-slate-400 hover:text-white transition-colors font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={`mailto:${content.contact.email}`}
                        className="px-4 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-sm font-semibold hover:bg-indigo-600/40 transition-colors"
                    >
                        Hire Me
                    </a>
                </nav>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-slate-400 hover:text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 py-6 space-y-4"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-slate-300 hover:text-white text-base font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={`mailto:${content.contact.email}`}
                        className="inline-block mt-2 px-5 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold"
                    >
                        Hire Me
                    </a>
                </motion.div>
            )}
        </motion.header>
    );
}
