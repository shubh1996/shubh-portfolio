"use client";

import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import content from "@/data/content.json";
import { Github, ExternalLink, Rocket } from "lucide-react";

export default function Projects() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-20" id="projects">
            <div className="flex flex-col items-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4"
                >
                    <Rocket size={14} /> AI Portfolio
                </motion.div>
                <h2 className="text-4xl font-bold text-center">AI Projects & Innovation</h2>
                <p className="text-slate-400 mt-4 text-center max-w-2xl">
                    A showcase of my work in Generative AI, automation, and full-stack architecture.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {content.projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="h-full flex flex-col group hover:border-indigo-500/40 transition-all duration-500">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">
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
                                <a 
                                    href={project.links.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                                >
                                    <Github size={18} />
                                    <span>Code</span>
                                </a>
                                {project.links.deployed !== "#" && (
                                    <a 
                                        href={project.links.deployed} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
