"use client";

import { motion } from "framer-motion";
import content from "@/data/content.json";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <section className="max-w-4xl mx-auto px-4 py-20">
            <div className="flex flex-col items-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold uppercase tracking-wider mb-4"
                >
                    <Briefcase size={14} /> Career Path
                </motion.div>
                <h2 className="text-4xl font-bold text-stone-900 text-center">Professional Experience</h2>
            </div>

            <div className="relative border-l-2 border-stone-200 ml-4">
                {content.experience.map((exp, index) => (
                    <motion.div
                        key={exp.company}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.12 }}
                        viewport={{ once: true }}
                        className="mb-14 ml-8 relative group"
                    >
                        {/* Timeline dot */}
                        <div className="absolute -left-[2.65rem] top-1.5 w-5 h-5 rounded-full bg-white border-2 border-stone-300 group-hover:border-orange-400 group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-stone-400 group-hover:bg-orange-400 transition-colors duration-300" />
                        </div>

                        <span className="text-sm font-mono text-orange-500 mb-1 block">{exp.period}</span>
                        <h3 className="text-xl font-bold text-stone-900 mb-0.5">{exp.role}</h3>
                        <p className="text-rose-500 font-medium mb-3">{exp.company}</p>
                        <p className="text-stone-500 max-w-2xl leading-relaxed">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
