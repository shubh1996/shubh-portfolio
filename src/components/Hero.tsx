"use client";

import { motion } from "framer-motion";
import content from "@/data/content.json";
import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative pt-24 pb-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 max-w-4xl w-full"
            >
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-300 bg-orange-50 text-orange-600 text-sm font-medium"
                >
                    <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                    PMP® Certified Technical Leader
                </motion.span>

                <motion.h1
                    className="text-6xl md:text-8xl font-black tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-stone-900 via-stone-700 to-stone-500">
                        {content.name}
                    </span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-rose-500 to-violet-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                >
                    {content.role}
                </motion.p>

                <motion.p
                    className="text-base md:text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    {content.subRole}
                </motion.p>

                <motion.div
                    className="flex flex-wrap gap-3 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                >
                    <a
                        href={`mailto:${content.contact.email}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-500 text-xs hover:text-stone-900 hover:border-orange-300 hover:bg-orange-50 transition-all shadow-sm"
                    >
                        <Mail size={12} /> {content.contact.email}
                    </a>
                    <a
                        href={`tel:${content.contact.phone}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-500 text-xs hover:text-stone-900 hover:border-orange-300 hover:bg-orange-50 transition-all shadow-sm"
                    >
                        <Phone size={12} /> {content.contact.phone}
                    </a>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 text-stone-500 text-xs shadow-sm">
                        <MapPin size={12} /> Bengaluru, India
                    </span>
                </motion.div>

                <motion.div
                    className="flex flex-wrap gap-4 justify-center pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold hover:from-orange-400 hover:to-rose-400 transition-all shadow-lg shadow-orange-200"
                    >
                        View Projects
                    </a>
                    <a
                        href={content.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-full border border-stone-200 bg-white text-stone-700 font-semibold hover:border-stone-300 hover:bg-stone-50 transition-all shadow-sm"
                    >
                        Connect on LinkedIn
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-stone-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ChevronDown size={18} />
                </motion.div>
            </motion.div>
        </section>
    );
}
