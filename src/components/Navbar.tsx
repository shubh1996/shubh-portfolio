"use client";

import { motion, useScroll } from "framer-motion";
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
                    ? "bg-white/80 backdrop-blur-xl border-b border-stone-200/80 shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <a href="#" className="font-black text-xl tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-rose-500 to-violet-500">
                        {content.name.split(" ")[0]}
                    </span>
                    <span className="text-stone-400 font-light">.dev</span>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-stone-500 hover:text-stone-900 transition-colors font-medium relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-orange-400 to-rose-400 group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                    <a
                        href={`mailto:${content.contact.email}`}
                        className="px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-semibold hover:from-orange-400 hover:to-rose-400 transition-all shadow-sm shadow-orange-200"
                    >
                        Hire Me
                    </a>
                </nav>

                <button
                    className="md:hidden text-stone-500 hover:text-stone-900"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white/95 backdrop-blur-xl border-b border-stone-200 px-4 py-6 space-y-4"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="block text-stone-700 hover:text-stone-900 text-base font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={`mailto:${content.contact.email}`}
                        className="inline-block mt-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-semibold"
                    >
                        Hire Me
                    </a>
                </motion.div>
            )}
        </motion.header>
    );
}
