"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, BookOpen, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const educationData = [
    {
        title: "B.E. in Computer Science",
        organization: "Chandigarh University",
        period: "2023 - 2027",
        location: "Mohali, Punjab",
        description: "Bachelor of Engineering in Computer Science with focused study in software development, frontend systems, and algorithms.",
        result: "CGPA: 7.51/10",
        coursework: ["DSA", "OOP", "DBMS", "Operating System", "Computer Networks", "Software Engineering"]
    },
    {
        title: "Higher Secondary Education (12th)",
        organization: "Shree LN Academy",
        period: "2021 - 2022",
        location: "Kherod Dhar, Madhya Pradesh",
        description: "Built a strong foundation in science and mathematics with a growing interest in problem solving and computing.",
        result: "Percentage: 83%",
    },
    {
        title: "Secondary Education (10th)",
        organization: "Shree LN Academy",
        period: "2019 - 2020",
        location: "Kherod Dhar, Madhya Pradesh",
        description: "Developed core academic fundamentals and an early curiosity for technology and software.",
        result: "Percentage: 90.33%",
    },
];

export function Education() {
    return (
        <section id="education" className="relative py-14 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="max-w-3xl mx-auto relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight text-slate-900 dark:text-white">
                        Education
                    </h2>
                    <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-sky-400" />
                </motion.div>

                {/* Left-aligned compact timeline with glowing connector line */}
                <div className="relative pl-6 sm:pl-8 space-y-6">
                    {/* Glowing vertical connector line */}
                    <div className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500 via-sky-400 to-indigo-500 shadow-[0_0_8px_rgba(59,130,246,0.3)] pointer-events-none" />

                    {educationData.map((item, index) => (
                        <div key={item.title} className="relative">
                            {/* Timeline pulsing dot node */}
                            <div className="absolute -left-[25px] sm:-left-[33px] top-6 w-4.5 h-4.5 flex items-center justify-center z-10">
                                <span className="absolute w-3.5 h-3.5 rounded-full bg-blue-500 animate-ping opacity-60" />
                                <span className="relative w-3.5 h-3.5 rounded-full bg-blue-500 border-4 border-slate-50 dark:border-slate-950 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                            </div>

                            {/* Alternating Slide-In Card */}
                            <motion.div
                                initial={{ 
                                    opacity: 0, 
                                    x: index % 2 === 0 ? -40 : 40 
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ type: "spring", stiffness: 260, damping: 25, delay: index * 0.05 }}
                            >
                                <motion.div
                                    whileHover={{ x: 2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Card className="border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl transition-all duration-300 hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:shadow-md rounded-3xl relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        <CardContent className="p-5 sm:p-6 space-y-4 relative z-10">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
                                                <div className="space-y-1">
                                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                                                        {item.organization}
                                                    </p>
                                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                                        <MapPin className="h-3.5 w-3.5 text-slate-400" />
                                                        {item.location}
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-950 px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/50">
                                                        <Calendar className="h-3 w-3 text-blue-500 animate-pulse" />
                                                        {item.period}
                                                    </span>
                                                    <span className="inline-flex items-center rounded-full bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 px-3 py-1 text-xs font-bold border border-blue-200/50 dark:border-blue-800/30 shadow-sm">
                                                        {item.result}
                                                    </span>
                                                </div>
                                            </div>

                                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                                                {item.description}
                                            </p>

                                            {/* Relevant Coursework */}
                                            {item.coursework && (
                                                <div className="pt-3.5 border-t border-slate-200/40 dark:border-slate-800/40">
                                                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2.5 flex items-center gap-1.5">
                                                        <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                                                        Relevant Coursework
                                                    </p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {item.coursework.map(course => (
                                                            <span 
                                                                key={course} 
                                                                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/70 dark:bg-slate-950/45 text-[10px] font-bold text-slate-600 dark:text-slate-300 border border-slate-200/30 dark:border-slate-800/30"
                                                            >
                                                                <Check className="w-3 h-3 text-blue-500" />
                                                                {course}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
