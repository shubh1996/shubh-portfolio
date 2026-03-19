"use client";

import { Linkedin, Mail, ShieldCheck } from "lucide-react";
import content from "@/data/content.json";

export default function Footer() {
    return (
        <footer className="max-w-7xl mx-auto px-4 py-12 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-8 mt-20">
            <div className="flex items-center gap-6">
                <a href={`mailto:${content.contact.email}`} className="text-stone-400 hover:text-stone-700 transition-colors">
                    <Mail size={24} />
                </a>
                <a href={content.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-700 transition-colors">
                    <Linkedin size={24} />
                </a>
            </div>

            <div className="text-center md:text-right space-y-2">
                {content.contact.pmp_verified && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 text-xs font-bold uppercase">
                        <ShieldCheck size={14} /> PMP 2025 Verified
                    </div>
                )}
                <p className="text-stone-400 text-sm">© 2026 {content.name}. All rights reserved.</p>
            </div>
        </footer>
    );
}
