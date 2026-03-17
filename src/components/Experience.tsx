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
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-wider mb-4"
                >
                    <Briefcase size={14} /> Career Path
                </motion.div>
                <h2 className="text-4xl font-bold text-center">Professional Experience</h2>
            </div>

            <div className="relative border-l border-slate-800 ml-4">
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
                        <div className="absolute -left-[2.65rem] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-indigo-400 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-indigo-400 transition-colors duration-300" />
                        </div>

                        <span className="text-sm font-mono text-indigo-400 mb-1 block">{exp.period}</span>
                        <h3 className="text-xl font-bold text-white mb-0.5">{exp.role}</h3>
                        <p className="text-violet-300 font-medium mb-3">{exp.company}</p>
                        <p className="text-slate-400 max-w-2xl leading-relaxed">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
