"use client";

import { motion } from "framer-motion";
import content from "@/data/content.json";
import { Award, BadgeCheck, ShieldCheck } from "lucide-react";

const colorMap: Record<string, { bg: string; border: string; text: string; icon: string; badge: string }> = {
    indigo: {
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20",
        text: "text-indigo-400",
        icon: "text-indigo-400",
        badge: "bg-indigo-500/20 border-indigo-500/30 text-indigo-300",
    },
    blue: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        text: "text-blue-400",
        icon: "text-blue-400",
        badge: "bg-blue-500/20 border-blue-500/30 text-blue-300",
    },
    violet: {
        bg: "bg-violet-500/10",
        border: "border-violet-500/20",
        text: "text-violet-400",
        icon: "text-violet-400",
        badge: "bg-violet-500/20 border-violet-500/30 text-violet-300",
    },
    emerald: {
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20",
        text: "text-emerald-400",
        icon: "text-emerald-400",
        badge: "bg-emerald-500/20 border-emerald-500/30 text-emerald-300",
    },
};

export default function Certifications() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-20" id="certifications">
            <div className="flex flex-col items-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4"
                >
                    <Award size={14} /> Certifications
                </motion.div>
                <h2 className="text-4xl font-bold text-center">Professional Credentials</h2>
                <p className="text-slate-400 mt-4 text-center max-w-xl">
                    Industry-recognized certifications validating expertise in AI, project management, and agile methodologies.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.certifications.map((cert, index) => {
                    const c = colorMap[cert.color] ?? colorMap.indigo;
                    return (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`relative group rounded-3xl p-6 border bg-slate-900/50 backdrop-blur-md ${c.border} hover:border-opacity-60 transition-all duration-500 flex flex-col gap-4`}
                        >
                            {/* Hover glow */}
                            <div className={`absolute inset-0 rounded-3xl ${c.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative">
                                <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                                    <ShieldCheck className={c.icon} size={22} />
                                </div>
                                <h3 className="text-base font-bold text-white leading-snug mb-1">
                                    {cert.title}
                                </h3>
                                <p className={`text-sm font-medium ${c.text}`}>{cert.issuer}</p>
                            </div>

                            <div className="relative mt-auto flex items-center justify-between">
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${c.badge}`}>
                                    <BadgeCheck size={12} /> Certified
                                </span>
                                <span className="text-xs text-slate-500 font-mono">{cert.year}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
