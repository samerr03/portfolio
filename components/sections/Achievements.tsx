"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Code2, Flame, Award, LineChart } from "lucide-react";

// Helper component for animating milestone numbers dynamically
function AnimatedCounter({ value, duration = 1.2 }: { value: string; duration?: number }) {
    const [count, setCount] = useState("0");

    useEffect(() => {
        const match = value.match(/(\d+(?:\.\d+)?)/);
        if (!match) {
            setCount(value);
            return;
        }

        const numStr = match[1];
        const end = parseFloat(numStr);
        const isFloat = numStr.includes(".");
        const decimalPlaces = isFloat ? numStr.split(".")[1].length : 0;
        
        const prefix = value.substring(0, match.index);
        const suffix = value.substring((match.index ?? 0) + numStr.length);

        if (end === 0) {
            setCount(value);
            return;
        }

        let start = 0;
        const totalSteps = 30;
        const increment = end / totalSteps;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            if (step >= totalSteps) {
                clearInterval(timer);
                setCount(`${prefix}${end.toFixed(decimalPlaces)}${suffix}`);
            } else {
                const current = increment * step;
                setCount(`${prefix}${current.toFixed(decimalPlaces)}${suffix}`);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [value, duration]);

    return (
        <span>
            {count}
        </span>
    );
}

const achievements = [
    {
        icon: Trophy,
        value: "AIR -10335",
        label: "All India Rank",
        description: "Ranked among top candidates in the National Career Aptitude Test (AINCAT 2026) conducted by Naukri Campus.",
        gridClass: "col-span-1 lg:col-span-2"
    },
    {
        icon: Code2,
        value: "120+ Solved",
        label: "DSA Problems",
        description: "Successfully resolved 120+ complex algorithms and data structure problems on GeeksforGeeks and LeetCode.",
        gridClass: "col-span-1 lg:col-span-2"
    },
    {
        icon: Flame,
        value: "60 Days POTD",
        label: "GFG Challenge",
        description: "Completed the consecutive 60 Days Problem of the Day (POTD) Challenge demonstrating high coding consistency.",
        gridClass: "col-span-1 lg:col-span-2"
    },
    {
        icon: Award,
        value: "AINCAT - 2026",
        label: "Naukri Campus Certificate",
        description: "Awarded a Certificate of Participation in AINCAT 2026, validating aptitude, reasoning, and quant skills.",
        gridClass: "col-span-1 lg:col-span-2 lg:col-start-2"
    },
    {
        icon: LineChart,
        value: "7.51 CGPA",
        label: "Academic Excellence",
        description: "Maintaining a strong, consistent academic track record in B.E. Computer Science Engineering.",
        gridClass: "col-span-1 sm:col-span-2 lg:col-span-2"
    }
];

export function Achievements() {
    return (
        <section id="achievements" className="py-14 px-4 sm:px-6 lg:px-8 bg-transparent relative">
            <div className="absolute top-[20%] left-[20%] w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight text-slate-900 dark:text-white">
                        Key Achievements
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full" />
                </motion.div>

                {/* Achievements Layout Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
                    {achievements.map((ach, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={`${ach.gridClass} h-full`}
                        >
                            <motion.div
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="h-full"
                            >
                                <Card className="h-full border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:shadow-[0_8px_30px_rgba(59,130,246,0.04)] transition-all duration-300 rounded-3xl flex flex-col justify-between group overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    <CardContent className="p-6 flex flex-col gap-5 relative z-10">
                                        {/* Icon Badge */}
                                        <div className="p-3.5 w-fit bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl transition-transform duration-300 group-hover:scale-105 shadow-inner">
                                            <ach.icon className="w-6 h-6 animate-pulse" />
                                        </div>

                                        {/* Value and Label */}
                                        <div className="space-y-1">
                                            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white leading-none">
                                                <AnimatedCounter value={ach.value} />
                                            </h3>
                                            <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-1">
                                                {ach.label}
                                            </p>
                                        </div>

                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                                            {ach.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
