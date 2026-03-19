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
                    ? "bg-[#04091a]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/30"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-white font-black text-xl tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
                        {content.name.split(" ")[0]}
                    </span>
                    <span className="text-slate-500 font-light">.dev</span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-slate-400 hover:text-white transition-colors font-medium relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                    <a
                        href={`mailto:${content.contact.email}`}
                        className="px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 border border-violet-500/30 text-violet-300 text-sm font-semibold hover:from-violet-600/40 hover:to-fuchsia-600/40 transition-all"
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
                    className="md:hidden bg-[#04091a]/95 backdrop-blur-xl border-b border-white/[0.06] px-4 py-6 space-y-4"
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
                        className="inline-block mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-sm font-semibold"
                    >
                        Hire Me
                    </a>
                </motion.div>
            )}
        </motion.header>
    );
}
