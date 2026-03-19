"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GlassCard from "./ui/GlassCard";
import content from "@/data/content.json";
import { Github, ExternalLink, Rocket, ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_VISIBLE = 6;

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const visible = showAll ? content.projects : content.projects.slice(0, INITIAL_VISIBLE);

    return (
        <section className="max-w-7xl mx-auto px-4 py-20" id="projects">
            <div className="flex flex-col items-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-bold uppercase tracking-wider mb-4"
                >
                    <Rocket size={14} /> Projects
                </motion.div>
                <h2 className="text-4xl font-bold text-center">Projects & Innovation</h2>
                <p className="text-slate-400 mt-4 text-center max-w-2xl">
                    A showcase of my work spanning GenAI, automation, full-stack, systems programming, and more.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {visible.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: index < INITIAL_VISIBLE ? index * 0.08 : 0, duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <GlassCard className="h-full flex flex-col group hover:border-violet-500/40 transition-all duration-500">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-violet-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-800 text-slate-400 border border-slate-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-800/50">
                                    {project.links.github !== "#" && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                                        >
                                            <Github size={18} />
                                            <span>Code</span>
                                        </a>
                                    )}
                                    {project.links.deployed !== "#" && (
                                        <a
                                            href={project.links.deployed}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                            <span>Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {content.projects.length > INITIAL_VISIBLE && (
                <div className="flex justify-center mt-12">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-700 bg-white/[0.04] text-slate-300 hover:text-white hover:border-violet-500/40 transition-all text-sm font-medium"
                    >
                        {showAll ? (
                            <><ChevronUp size={16} /> Show Less</>
                        ) : (
                            <><ChevronDown size={16} /> Show {content.projects.length - INITIAL_VISIBLE} More</>
                        )}
                    </button>
                </div>
            )}
        </section>
    );
}
