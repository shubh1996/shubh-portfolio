"use client";

import { Linkedin, Mail, ShieldCheck } from "lucide-react";
import content from "@/data/content.json";

export default function Footer() {
    return (
        <footer className="max-w-7xl mx-auto px-4 py-12 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-8 mt-20">
            <div className="flex items-center gap-6">
                <a href={`mailto:${content.contact.email}`} className="text-slate-400 hover:text-white transition-colors">
                    <Mail size={24} />
                </a>
                <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <Linkedin size={24} />
                </a>
            </div>

            <div className="text-center md:text-right space-y-2">
                {content.contact.pmp_verified && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase">
                        <ShieldCheck size={14} /> PMP 2025 Verified
                    </div>
                )}
                <p className="text-slate-500 text-sm">© 2026 {content.name}. All rights reserved.</p>
            </div>
        </footer>
    );
}
