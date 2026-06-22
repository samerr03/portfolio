"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Laptop, Database, Globe, Wrench, Shield, Cpu, Play, Calendar, FolderGit2, Check } from "lucide-react";
import React from "react";

// Segmented level indicator helper (5 blocks)
function SkillSegmentedLevel({ level }: { level: string }) {
    let filled = 4; // Intermediate is 4
    if (level === "Advanced") filled = 5;
    if (level.includes("Beginner") || level === "Beginner/Int") filled = 3;

    return (
        <div className="flex gap-0.5" title={`Level: ${level}`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <div
                    key={i}
                    className={`h-1.5 w-3 rounded-[2px] transition-all duration-300 ${
                        i < filled
                            ? "bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-500 dark:to-sky-400 shadow-[0_0_6px_rgba(59,130,246,0.5)]"
                            : "bg-slate-200 dark:bg-slate-800"
                    }`}
                />
            ))}
        </div>
    );
}

const skillsCategories = [
    {
        category: "Languages",
        icon: Laptop,
        experience: "3+ Years",
        projectsBuilt: "8+ Projects",
        skills: [
            { name: "C++", slug: "cplusplus", level: "Advanced", exp: "3+ Yrs", projects: "5+ Proj", status: ["Comfortable", "Built Projects"] },
            { name: "Java", slug: "java", level: "Intermediate", exp: "2 Yrs", projects: "3 Proj", status: ["Comfortable", "Built Projects"] },
            { name: "JavaScript", slug: "javascript", level: "Intermediate", exp: "2+ Yrs", projects: "4+ Proj", status: ["Comfortable", "Used in Production"] },
        ],
    },
    {
        category: "Frontend",
        icon: Globe,
        experience: "2+ Years",
        projectsBuilt: "6+ Projects",
        skills: [
            { name: "React.js", slug: "react", level: "Intermediate", exp: "2 Yrs", projects: "4 Proj", status: ["Comfortable", "Built Projects"] },
            { name: "Next.js", slug: "nextdotjs", level: "Beginner/Int", exp: "1 Yr", projects: "2 Proj", status: ["Learning", "Built Projects"] },
            { name: "Tailwind CSS", slug: "tailwindcss", level: "Intermediate", exp: "2 Yrs", projects: "6 Proj", status: ["Comfortable", "Built Projects"] },
            { name: "HTML5/CSS3", slug: "html5", level: "Intermediate", exp: "3 Yrs", projects: "8 Proj", status: ["Comfortable", "Built Projects"] },
            { name: "Redux", slug: "redux", level: "Intermediate", exp: "1 Yr", projects: "2 Proj", status: ["Comfortable"] },
        ],
    },
    {
        category: "Backend",
        icon: Cpu,
        experience: "2+ Years",
        projectsBuilt: "4+ Projects",
        skills: [
            { name: "Node.js", slug: "nodedotjs", level: "Intermediate", exp: "2 Yrs", projects: "3 Proj", status: ["Comfortable", "Built Projects"] },
            { name: "Express", slug: "express", level: "Intermediate", exp: "2 Yrs", projects: "3 Proj", status: ["Comfortable", "Built Projects"] },
            { name: "REST APIs", slug: "json", level: "Intermediate", exp: "2 Yrs", projects: "4 Proj", status: ["Comfortable", "Used in Production"] },
        ],
    },
    {
        category: "Database",
        icon: Database,
        experience: "2+ Years",
        projectsBuilt: "5+ Projects",
        skills: [
            { name: "SQL", slug: "postgresql", level: "Intermediate", exp: "2 Yrs", projects: "4 Proj", status: ["Comfortable"] },
            { name: "MongoDB", slug: "mongodb", level: "Intermediate", exp: "2 Yrs", projects: "3 Proj", status: ["Comfortable", "Built Projects"] },
        ],
    },
    {
        category: "Tools",
        icon: Wrench,
        experience: "3+ Years",
        projectsBuilt: "10+ Projects",
        skills: [
            { name: "Git/GitHub", slug: "github", level: "Intermediate", exp: "3 Yrs", projects: "10+ Proj", status: ["Comfortable", "Used in Production"] },
            { name: "VS Code", slug: "visualstudiocode", level: "Intermediate", exp: "3 Yrs", projects: "All Proj", status: ["Comfortable"] },
            { name: "Postman", slug: "postman", level: "Intermediate", exp: "2 Yrs", projects: "5 Proj", status: ["Comfortable"] },
        ],
    },
    {
        category: "DevOps",
        icon: Shield,
        experience: "1+ Year",
        projectsBuilt: "3+ Projects",
        skills: [
            { name: "Vercel", slug: "vercel", level: "Intermediate", exp: "1+ Yr", projects: "4 Proj", status: ["Comfortable", "Used in Production"] },
            { name: "Maven", slug: "apachemaven", level: "Intermediate", exp: "1 Yr", projects: "2 Proj", status: ["Comfortable"] },
        ],
    },
    {
        category: "Testing",
        icon: Play,
        experience: "1+ Year",
        projectsBuilt: "2+ Projects",
        skills: [
            { name: "TestNG", slug: "testng", level: "Intermediate", exp: "1 Yr", projects: "2 Proj", status: ["Comfortable", "Built Projects"] },
            { name: "Selenium WebDriver", slug: "selenium", level: "Intermediate", exp: "1 Yr", projects: "2 Proj", status: ["Comfortable", "Built Projects"] },
        ],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-14 px-4 sm:px-6 lg:px-8 bg-transparent relative">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight text-slate-900 dark:text-white">
                        Technical Skills
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full" />
                </motion.div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skillsCategories.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="h-full"
                        >
                            <Card className="h-full rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:shadow-[0_8px_24px_rgba(59,130,246,0.03)] transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                                <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/20 dark:bg-slate-950/10">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl transition-transform duration-300 group-hover:scale-105">
                                            <category.icon className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-base font-bold text-slate-900 dark:text-white">
                                                {category.category}
                                            </CardTitle>
                                            <div className="flex items-center gap-2 mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                                <span className="flex items-center gap-0.5">
                                                    <Calendar className="w-3 h-3 text-blue-500" />
                                                    {category.experience}
                                                </span>
                                                <span>•</span>
                                                <span className="flex items-center gap-0.5">
                                                    <FolderGit2 className="w-3 h-3 text-blue-500" />
                                                    {category.projectsBuilt}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="pt-4 flex-grow">
                                    <div className="flex flex-col gap-3">
                                        {category.skills.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className="group/item flex flex-col gap-1.5 p-3 rounded-2xl bg-white/60 dark:bg-slate-950/45 border border-slate-100/40 dark:border-slate-900/50 hover:border-blue-500/20 dark:hover:border-blue-500/20 hover:bg-white dark:hover:bg-slate-950/80 transition-all duration-300"
                                            >
                                                {/* Title & Level blocks row */}
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-4 h-4 relative flex items-center justify-center">
                                                            <img
                                                                src={`https://cdn.simpleicons.org/${skill.slug}`}
                                                                alt=""
                                                                className="w-3.5 h-3.5 object-contain transition-transform duration-300 group-hover/item:rotate-12"
                                                                loading="lazy"
                                                                onError={(e) => {
                                                                    e.currentTarget.style.display = "none";
                                                                }}
                                                            />
                                                        </div>
                                                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                    <SkillSegmentedLevel level={skill.level} />
                                                </div>

                                                {/* Recruiter Details & Verification Tags */}
                                                <div className="flex flex-wrap items-center justify-between gap-1 mt-1 pt-1.5 border-t border-slate-100/50 dark:border-slate-900/40 text-[9px] font-extrabold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                                                    <span className="text-blue-600 dark:text-blue-400">
                                                        {skill.level} ({skill.exp})
                                                    </span>
                                                    <div className="flex flex-wrap gap-1">
                                                        {skill.status.map((st, i) => (
                                                            <span 
                                                                key={i} 
                                                                className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-blue-500/5 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-100/30 dark:border-blue-900/20"
                                                            >
                                                                <Check className="w-2.5 h-2.5 text-blue-500" />
                                                                {st}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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
