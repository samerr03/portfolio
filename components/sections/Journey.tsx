"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Layers, Cpu, Compass } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const journeySteps = [
    {
        year: "2023",
        title: "Started C++",
        description: "Began my Computer Science Engineering degree. Deep-dived into logic building, core OOP concepts, and algorithmic foundations with C++.",
        icon: Code2
    },
    {
        year: "2024",
        title: "Learned MERN Stack",
        description: "Expanded technical skills into full-stack development. Mastered MongoDB, Express, React, and Node.js to build dynamic, responsive web interfaces.",
        icon: Layers
    },
    {
        year: "2025",
        title: "Built Visitor Management System",
        description: "Developed and deployed a secure, full-stack enterprise Visitor Management System featuring JWT validation, analytics dashboard, and automated tracking.",
        icon: Cpu
    },
    {
        year: "2026",
        title: "Preparing for Software Engineer Roles",
        description: "Refining core concepts (DSA, System Design, Operating Systems, DBMS) and actively seeking developer internships and entry-level positions.",
        icon: Compass
    }
];

export function Journey() {
    return (
        <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
                        My Journey
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full" />
                    <p className="mt-6 text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-base">
                        A quick overview of my growth, technical milestones, and roadmap as a software developer.
                    </p>
                </motion.div>

                {/* Journey Timeline */}
                <div className="relative flex flex-col items-center gap-8">
                    {journeySteps.map((step, index) => {
                        const isLast = index === journeySteps.length - 1;
                        return (
                            <React.Fragment key={step.year}>
                                {/* Timeline Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="w-full max-w-2xl"
                                >
                                    <Card className="border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:scale-[1.01] hover:shadow-md transition-all duration-300 rounded-2xl">
                                        <CardContent className="p-6 flex items-start gap-5">
                                            {/* Step Icon */}
                                            <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl flex-shrink-0">
                                                <step.icon className="w-5 h-5" />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-xl font-black text-blue-600 dark:text-blue-400">
                                                        {step.year}
                                                    </span>
                                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>

                                {/* Arrow connector */}
                                {!isLast && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4 }}
                                        className="text-blue-500/60 dark:text-blue-500/40 flex items-center justify-center p-1"
                                    >
                                        <ArrowDown className="w-5 h-5 animate-bounce" />
                                    </motion.div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
