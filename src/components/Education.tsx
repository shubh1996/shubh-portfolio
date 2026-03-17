"use client";

import { motion } from "framer-motion";
import content from "@/data/content.json";
import { GraduationCap, School } from "lucide-react";
import GlassCard from "./ui/GlassCard";

const icons = [GraduationCap, School];
const iconStyles = [
    { bg: "bg-emerald-500/20", text: "text-emerald-400" },
    { bg: "bg-sky-500/20", text: "text-sky-400" },
];

export default function Education() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-20" id="education">
            <div className="flex flex-col items-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4"
                >
                    <GraduationCap size={14} /> Education
                </motion.div>
                <h2 className="text-4xl font-bold text-center">Academic Background</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.education.map((edu, index) => {
                    const Icon = icons[index];
                    const style = iconStyles[index];
                    return (
                        <GlassCard key={edu.institution} delay={index * 0.1} className="flex flex-col gap-6 h-full">
                            <div className={`w-12 h-12 rounded-xl ${style.bg} flex items-center justify-center shrink-0`}>
                                <Icon className={style.text} size={24} />
                            </div>
                            <div>
                                <p className={`text-xs font-bold uppercase tracking-wider ${style.text} mb-1`}>
                                    {edu.period}
                                </p>
                                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                                <p className={`${style.text} font-medium mb-1`}>{edu.institution}</p>
                                <div className="flex items-center gap-3 mt-2 flex-wrap">
                                    {edu.board && (
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-800 text-slate-400 border border-slate-700">
                                            {edu.board}
                                        </span>
                                    )}
                                    <span className="text-xs text-slate-500">{edu.location}</span>
                                </div>
                            </div>
                        </GlassCard>
                    );
                })}
            </div>
        </section>
    );
}
