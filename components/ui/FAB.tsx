"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FAB() {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        { icon: FileText, label: "Resume", href: "/resume.pdf", download: "Sameer_Patel_Resume.pdf" },
        { icon: Mail, label: "Email", href: "mailto:patelsamerr03@gmail.com" },
        { icon: Github, label: "GitHub", href: "https://github.com/samerr03", target: "_blank" },
        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sameer-patel-b1ab4b349", target: "_blank" },
    ];

    return (
        <div 
            className="fixed bottom-6 right-6 z-[999] flex flex-col items-center gap-3 pointer-events-auto"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Expandable items column */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col items-center gap-2 mb-1"
                    >
                        {items.map((item, idx) => (
                            <motion.a
                                key={idx}
                                href={item.href}
                                target={item.target}
                                download={item.download}
                                rel={item.target ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/60 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300"
                                title={item.label}
                            >
                                <item.icon className="h-4.5 w-4.5" />
                                {/* Label Tooltip */}
                                <span className="absolute right-14 scale-0 group-hover:scale-100 px-2.5 py-1 rounded bg-slate-900/95 dark:bg-slate-950/95 text-white text-[10px] font-extrabold uppercase tracking-widest transition-transform duration-250 origin-right shadow-md whitespace-nowrap">
                                    {item.label}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Trigger Button */}
            <Button
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 shadow-lg shadow-blue-500/25 border-0 hover:scale-105 transition-all duration-300 flex items-center justify-center"
                aria-label="Quick Connect"
            >
                <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    {isOpen ? <X className="h-5 w-5" /> : <Plus className="h-5 w-5 animate-pulse" />}
                </motion.div>
            </Button>
        </div>
    );
}
