"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Code, Brain, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
    const highlights = [
        {
            icon: Code,
            title: "Full Stack Developer",
            description: "Building responsive frontend systems and robust, secure backend API integrations."
        },
        {
            icon: Brain,
            title: "Problem Solver",
            description: "Fascinated by algorithms and data structures. Dedicated to writing optimized, clean code."
        },
        {
            icon: Zap,
            title: "Quick Learner",
            description: "Highly adaptive to new engineering frameworks, testing suites, and technology stacks."
        }
    ];

    const infoChips = [
        { emoji: "📍", text: "India" },
        { emoji: "🎓", text: "Chandigarh University" },
        { emoji: "💼", text: "Open for Internship" },
        { emoji: "🟢", text: "Available", highlight: true }
    ];

    return (
        <section id="about" className="py-14 px-4 sm:px-6 lg:px-8 bg-transparent relative">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight text-slate-900 dark:text-white">
                        About Me
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full" />
                </motion.div>

                {/* Content Container */}
                <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-8 md:p-12 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Profile Image & Info Chips Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="lg:col-span-5 flex flex-col items-center space-y-6"
                        >
                            <motion.div 
                                animate={{
                                    y: [0, -8, 0]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="relative max-w-sm w-full group"
                            >
                                {/* Animated Shifting Gradient Border Frame */}
                                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500 opacity-50 dark:opacity-30 blur-sm group-hover:opacity-100 dark:group-hover:opacity-60 transition duration-500" />
                                <div className="aspect-[4/5] rounded-3xl bg-slate-100 dark:bg-slate-950 overflow-hidden shadow-md relative z-10 border border-slate-200/65 dark:border-slate-800/65 transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-xl">
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-700">
                                        <User className="w-20 h-20" />
                                    </div>
                                    <Image 
                                        src="/smp.png" 
                                        alt="Profile" 
                                        fill 
                                        sizes="(max-width: 768px) 100vw, 50vw" 
                                        priority 
                                        className="object-cover transition-transform duration-750 group-hover:scale-[1.03] z-10" 
                                    />
                                </div>
                            </motion.div>

                            {/* Info Chips list */}
                            <div className="flex flex-wrap items-center justify-center gap-2 max-w-sm">
                                {infoChips.map((chip, idx) => (
                                    <span 
                                        key={idx}
                                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border backdrop-blur-sm shadow-sm ${
                                            chip.highlight
                                                ? "bg-green-500/10 text-green-600 dark:text-green-400 border-green-200/40 dark:border-green-800/30 animate-pulse"
                                                : "bg-white/80 dark:bg-slate-950/60 text-slate-600 dark:text-slate-300 border-slate-200/50 dark:border-slate-800/45"
                                        }`}
                                    >
                                        <span className="text-sm leading-none">{chip.emoji}</span>
                                        <span>{chip.text}</span>
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Description & Highlights Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="lg:col-span-7 space-y-6"
                        >
                            <div className="flex flex-wrap gap-2.5">
                                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/30 shadow-sm backdrop-blur-sm">
                                    Full-Stack Developer
                                </span>
                                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/30 shadow-sm backdrop-blur-sm">
                                    DSA Learner
                                </span>
                                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/30 shadow-sm backdrop-blur-sm">
                                    Automation Testing
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                I’m a BE CSE student focused on Full-Stack Development and DSA, based in India.
                            </h3>

                            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                                <p>
                                    I build responsive web apps using React/Next.js and backend APIs with Node.js/Express. I enjoy solving problems and writing clean, scalable code.
                                </p>
                                <p>
                                    Recently, I’ve worked on projects like a Visitor Management System and Automation Testing framework, and I’m actively seeking internships / entry-level roles where I can contribute and grow.
                                </p>
                            </div>

                            <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest pt-2">
                                Tech: React, Next.js, Node.js, Express, MongoDB, MySQL, Git
                            </p>

                            {/* Specialty Highlights Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6">
                                {highlights.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -4 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="h-full"
                                    >
                                        <Card className="h-full bg-white/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:shadow-md transition-all duration-300 rounded-3xl"
                                        >
                                            <CardContent className="p-5 flex flex-col items-center text-center gap-2.5">
                                                <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl shadow-inner group-hover:scale-105 transition-transform duration-300">
                                                    <item.icon className="w-5 h-5 animate-pulse" />
                                                </div>
                                                <h4 className="font-bold text-slate-900 dark:text-white text-sm tracking-wide">
                                                    {item.title}
                                                </h4>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                                                    {item.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
