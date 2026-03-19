"use client";

import { motion } from "framer-motion";
import content from "@/data/content.json";
import { Award, BadgeCheck, ShieldCheck } from "lucide-react";

const colorMap: Record<string, { bg: string; border: string; text: string; icon: string; badge: string; hover: string }> = {
    indigo: {
        bg: "bg-violet-50",
        border: "border-violet-200",
        text: "text-violet-600",
        icon: "text-violet-500",
        badge: "bg-violet-50 border-violet-200 text-violet-700",
        hover: "hover:border-violet-300 hover:bg-violet-50/80",
    },
    blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        icon: "text-blue-500",
        badge: "bg-blue-50 border-blue-200 text-blue-700",
        hover: "hover:border-blue-300 hover:bg-blue-50/80",
    },
    violet: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600",
        icon: "text-purple-500",
        badge: "bg-purple-50 border-purple-200 text-purple-700",
        hover: "hover:border-purple-300 hover:bg-purple-50/80",
    },
    emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-600",
        icon: "text-emerald-500",
        badge: "bg-emerald-50 border-emerald-200 text-emerald-700",
        hover: "hover:border-emerald-300 hover:bg-emerald-50/80",
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
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-600 text-xs font-bold uppercase tracking-wider mb-4"
                >
                    <Award size={14} /> Certifications
                </motion.div>
                <h2 className="text-4xl font-bold text-stone-900 text-center">Professional Credentials</h2>
                <p className="text-stone-500 mt-4 text-center max-w-xl">
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
                            className={`relative group rounded-3xl p-6 border bg-white ${c.border} ${c.hover} transition-all duration-500 flex flex-col gap-4 shadow-sm`}
                        >
                            <div className="relative">
                                <div className={`w-11 h-11 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center mb-4`}>
                                    <ShieldCheck className={c.icon} size={22} />
                                </div>
                                <h3 className="text-base font-bold text-stone-900 leading-snug mb-1">
                                    {cert.title}
                                </h3>
                                <p className={`text-sm font-medium ${c.text}`}>{cert.issuer}</p>
                            </div>

                            <div className="mt-auto flex items-center justify-between">
                                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${c.badge}`}>
                                    <BadgeCheck size={12} /> Certified
                                </span>
                                <span className="text-xs text-stone-400 font-mono">{cert.year}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
