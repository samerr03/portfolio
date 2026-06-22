"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative border-t border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Brand and Description */}
                    <div className="text-center md:text-left space-y-3">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Sameer Patel</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs leading-relaxed">
                            Building digital experiences with code and creativity. Open to new opportunities.
                        </p>
                        {/* Recruiter quick badges */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-extrabold border border-blue-200/30 dark:border-blue-800/30">
                                🟢 Open to Work
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-[10px] font-extrabold border border-slate-200/50 dark:border-slate-800/50">
                                📍 India
                            </span>
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-[10px] font-extrabold border border-slate-200/50 dark:border-slate-800/50">
                                ⚡ &lt; 24h Response
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
                        <Link href="#about" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            About
                        </Link>
                        <Link href="#skills" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Skills
                        </Link>
                        <Link href="#projects" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Projects
                        </Link>
                        <Link href="#certificates" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Certificates
                        </Link>
                        <Link href="#achievements" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Achievements
                        </Link>
                        <Link href="#education" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Education
                        </Link>
                        <Link href="#contact" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Social Icons and Scroll to Top */}
                    <div className="flex items-center gap-4">
                        <div className="flex gap-4">
                            <Link
                                href="https://github.com/samerr03"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300"
                            >
                                <Github className="w-4 h-4" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/sameer-patel-b1ab4b349"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300"
                            >
                                <Linkedin className="w-4 h-4" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link
                                href="https://www.instagram.com/_samerr_03?igsh=M210MmdobGtqbnph"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl border border-slate-200/50 dark:border-slate-800/50 transition-all duration-300"
                            >
                                <Instagram className="w-4 h-4" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>

                        <Button
                            size="icon"
                            variant="outline"
                            onClick={handleScrollToTop}
                            className="rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="w-4 h-4 animate-bounce" />
                        </Button>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <p>&copy; {new Date().getFullYear()} Sameer Patel. All rights reserved.</p>
                    <p className="flex items-center gap-1.5 flex-wrap justify-center">
                        Designed & Built by Sameer Patel ❤️ 
                    </p>
                    <p className="text-slate-400 dark:text-slate-500">Last Updated: June 2026</p>
                </div>
            </div>
        </footer>
    );
}
