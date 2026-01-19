"use client";

import { motion } from "framer-motion";
import content from "@/data/content.json";

export default function Experience() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
            <div className="relative border-l border-slate-800 ml-4">
                {content.experience.map((exp, index) => (
                    <motion.div
                        key={exp.company}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="mb-12 ml-8 relative group"
                    >
                        <div className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-900 group-hover:bg-indigo-500 transition-colors" />
                        <span className="text-sm font-mono text-indigo-400 mb-1 block">{exp.period}</span>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-indigo-300 font-medium mb-2">{exp.company}</p>
                        <p className="text-slate-400 max-w-2xl">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
