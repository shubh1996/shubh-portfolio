"use client";

import GlassCard from "./ui/GlassCard";
import content from "@/data/content.json";
import { Cpu, Globe, Users, Code2, BrainCircuit, Zap } from "lucide-react";

export default function BentoGrid() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="bento-grid">
                {/* Google Stack Item - Large */}
                <GlassCard className="col-span-1 md:col-span-2 row-span-2 group ai-glow">
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-6">
                                <BrainCircuit className="text-indigo-400" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{content.googleStack.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {content.googleStack.keywords.map((kw) => (
                                    <span key={kw} className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm">
                                        {kw}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                                <Zap size={12} /> {content.googleStack.badge}
                            </span>
                        </div>
                    </div>
                </GlassCard>

                {/* AI & Automation */}
                <GlassCard className="col-span-1 md:col-span-2">
                    <div className="flex items-start justify-between">
                        <div>
                            <h4 className="text-lg font-semibold text-slate-300 mb-4">AI & Automation</h4>
                            <div className="flex flex-wrap gap-3">
                                {content.skills.ai_automation.map((s) => (
                                    <div key={s} className="flex items-center gap-2 text-slate-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                                        {s}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Cpu className="text-violet-500/50" size={32} />
                    </div>
                </GlassCard>

                {/* Leadership */}
                <GlassCard className="col-span-1">
                    <div className="flex flex-col h-full justify-between">
                        <Users className="text-emerald-500/50" size={32} />
                        <div>
                            <h4 className="text-lg font-semibold text-slate-300 mt-4">Leadership</h4>
                            <p className="text-sm text-slate-500 mt-1">PMP | Team Lead of 5</p>
                        </div>
                    </div>
                </GlassCard>

                {/* Frontend */}
                <GlassCard className="col-span-1">
                    <div className="flex flex-col h-full justify-between">
                        <Code2 className="text-blue-500/50" size={32} />
                        <div>
                            <h4 className="text-lg font-semibold text-slate-300 mt-4">Frontend</h4>
                            <p className="text-sm text-slate-500 mt-1">Angular Expert | Next.js</p>
                        </div>
                    </div>
                </GlassCard>

                {/* AI Playground */}
                <GlassCard className="col-span-1 md:col-span-2 row-span-1 border-indigo-500/20">
                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-xl font-bold mb-2">{content.aiPlayground.title}</h4>
                            <p className="text-slate-400 text-sm max-w-md">{content.aiPlayground.description}</p>
                        </div>
                        <Globe className="text-indigo-400 animate-pulse" size={40} />
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}
