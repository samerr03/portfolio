"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code2, Brain, Laptop, Zap, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const pitchItems = [
    {
        icon: Brain,
        title: "Strong DSA Foundation",
        desc: "Over 120+ algorithm challenges solved on GFG & LeetCode, with 60 consecutive days POTD completed."
    },
    {
        icon: Code2,
        title: "Full Stack Development",
        desc: "Proficient in React.js, Next.js, Node.js, and databases (SQL, MongoDB) to build end-to-end features."
    },
    {
        icon: Laptop,
        title: "Automation Testing",
        desc: "Experienced with Java, Selenium WebDriver, TestNG, and Maven to ensure reliable cross-browser builds."
    },
    {
        icon: Zap,
        title: "Quick Learner",
        desc: "Highly adaptable, enthusiastic about learning new tech stacks, and quick to integrate into new teams."
    },
    {
        icon: Users,
        title: "Team Player",
        desc: "Excellent communication, robust documentation habits, and collaborative attitude for tech engineering."
    },
    {
        icon: Sparkles,
        title: "Ready to Contribute",
        desc: "Equipped with deployment experience (Vercel, AWS), eager to join as an intern and deliver immediate value."
    }
];

export function WhyHireMe() {
    return (
        <section id="why-hire-me" className="py-14 px-4 sm:px-6 lg:px-8 bg-transparent relative">
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
                        Why Hire Me?
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full" />
                </motion.div>

                {/* Pitch Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pitchItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <Card className="h-full border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:scale-[1.01] hover:shadow-md transition-all duration-300 rounded-3xl overflow-hidden group">
                                <CardContent className="p-6 flex items-start gap-4">
                                    <div className="p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl transition-transform duration-300 group-hover:scale-110">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="font-bold text-slate-900 dark:text-white text-sm tracking-wide flex items-center gap-1.5">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                            {item.title}
                                        </h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                                            {item.desc}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
