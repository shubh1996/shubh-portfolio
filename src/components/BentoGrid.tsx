"use client";

import GlassCard from "./ui/GlassCard";
import content from "@/data/content.json";
import { Cpu, Globe, Users, Code2, BrainCircuit, Zap, Server } from "lucide-react";

export default function BentoGrid() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-20">
            <div className="bento-grid">
                {/* Google Stack - Large */}
                <GlassCard className="col-span-1 md:col-span-2 row-span-2 group ai-glow">
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                                <BrainCircuit className="text-orange-500" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-stone-900 mb-4">{content.googleStack.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {content.googleStack.keywords.map((kw) => (
                                    <span key={kw} className="px-3 py-1 rounded-lg bg-orange-50 border border-orange-200 text-orange-700 text-sm">
                                        {kw}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider">
                                <Zap size={12} /> {content.googleStack.badge}
                            </span>
                        </div>
                    </div>
                </GlassCard>

                {/* AI & Automation */}
                <GlassCard className="col-span-1 md:col-span-2">
                    <div className="flex items-start justify-between">
                        <div>
                            <h4 className="text-lg font-semibold text-stone-800 mb-4">AI & Automation</h4>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                                {content.skills.ai_automation.map((s) => (
                                    <div key={s} className="flex items-center gap-2 text-stone-500 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                                        {s}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Cpu className="text-rose-300" size={32} />
                    </div>
                </GlassCard>

                {/* Leadership */}
                <GlassCard className="col-span-1">
                    <div className="flex flex-col h-full justify-between">
                        <Users className="text-emerald-400" size={32} />
                        <div>
                            <h4 className="text-lg font-semibold text-stone-800 mt-4">Leadership</h4>
                            <div className="space-y-1">
                                {content.skills.leadership.slice(0, 2).map(skill => (
                                    <p key={skill} className="text-xs text-stone-500">{skill}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </GlassCard>

                {/* Infrastructure */}
                <GlassCard className="col-span-1">
                    <div className="flex flex-col h-full justify-between">
                        <Server className="text-orange-400" size={32} />
                        <div>
                            <h4 className="text-lg font-semibold text-stone-800 mt-4">Infrastructure</h4>
                            <div className="space-y-1">
                                {content.skills.infrastructure.slice(0, 2).map(skill => (
                                    <p key={skill} className="text-xs text-stone-500">{skill}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </GlassCard>

                {/* Frontend */}
                <GlassCard className="col-span-1 md:col-span-2 row-span-1 border-blue-200/60">
                    <div className="flex items-center justify-between h-full">
                        <div>
                            <h4 className="text-xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                                <Code2 className="text-blue-500" size={24} /> Frontend Architecture
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {content.skills.frontend.map((s) => (
                                    <span key={s} className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <Globe className="text-blue-300/60 hidden md:block" size={60} />
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}
