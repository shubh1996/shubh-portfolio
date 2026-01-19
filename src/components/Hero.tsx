"use client";

import { motion } from "framer-motion";
import content from "@/data/content.json";

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 max-w-4xl"
            >
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium"
                >
                    Senior AI Engineer
                </motion.span>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {content.role}
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    {content.subRole}
                </motion.p>

                <motion.div
                    className="flex gap-4 justify-center pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-slate-200 transition-colors">
                        View Projects
                    </button>
                    <button className="px-8 py-3 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm text-white font-semibold hover:bg-slate-800 transition-colors">
                        Read Resume
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
