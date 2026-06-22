"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, CheckCircle2, Star, AlertCircle, TrendingUp, HelpCircle, Layers, CheckSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Visitor Management System",
        image: "/projects/vms.png",
        description:
            "A secure web-based Visitor Management System that allows admin and security staff to manage visitor entries, approvals, and pass generation. Includes role-based authentication, dashboard analytics, and real-time status updates.",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
        links: {
            demo: "https://d3rhxd4jwoeunz.cloudfront.net/",
            github: "https://github.com/samerr03/Visitor-Pass-Management-System-.git",
        },
        metrics: [
            "JWT Authentication",
            "QR Pass",
            "Role Access",
            "Dashboard Analytics",
            "REST APIs",
            "40+ Components",
            "25+ APIs",
            "100% Responsive"
        ],
        problem: "Traditional manual visitor logs in offices are slow, prone to data entry errors, and insecure, making it hard to track visitor history or generate real-time security passes.",
        solution: "Built a secure web-based Visitor Management System with React, Node.js, Express, and MongoDB. Implemented tokenized JWT sessions and automated QR-code pass generation for seamless digital check-in.",
        highlights: [
            "JWT Authentication",
            "Role Based Access Control",
            "QR Pass Generation",
            "Admin Dashboard Analytics"
        ],
        impact: [
            "Reduced manual visitor registration overhead",
            "Secure, tokenized user sessions",
            "Highly responsive mobile-friendly dashboard"
        ],
        challenges: [
            "Managed simultaneous multi-role session tokens securely.",
            "Optimized real-time analytics query times.",
            "Handled automated QR code generation dynamically."
        ],
        learnings: [
            "Mastered secure session management and authentication flow.",
            "Realized query index optimizations in MongoDB for reporting analytics.",
            "Learned modular component isolation in React for high code reusability."
        ]
    },
    {
        title: "Cross-Browser Automation Testing – YouTube",
        image: "/projects/youtube.png",
        description:
            "Developed an automated cross-browser testing framework using Java and TestNG to validate YouTube's core functionalities across Chrome, Firefox, and Edge. Implemented structured Maven configuration, test suites, and automated report generation to ensure compatibility and consistent user experience.",
        tags: ["Java", "Selenium WebDriver", "TestNG", "Maven", "Automation Testing"],
        links: {
            demo: "#",
            github: "https://github.com/samerr03/Cross-Browser-Testing-On-Youtube.git",
        },
        metrics: [
            "Cross-browser",
            "TestNG Suite",
            "Selenium",
            "Extent Reports",
            "Maven Build",
            "Parallel Execution",
            "3+ Browsers",
            "50+ Test Cases",
            "100% Thread-Safe"
        ],
        problem: "Manual validation of complex web applications like YouTube across multiple browsers is time-consuming, inconsistent, and highly error-prone.",
        solution: "Developed a modular automation framework using Java, Selenium WebDriver, and TestNG. Implemented Maven configuration to execute parallel testing suites and generate Extent Reports.",
        highlights: [
            "Selenium WebDriver",
            "TestNG Test Suite Suites",
            "Chrome, Firefox, & Edge testing",
            "Automated Extent Reports"
        ],
        impact: [
            "Rigorous multi-browser compatibility coverage",
            "Modular Maven dependency build integration",
            "Immediate fail/pass automated reporting log"
        ],
        challenges: [
            "Bypassed browser element sync latencies.",
            "Decoupled configurations for cross-browser nodes.",
            "Implemented thread-safe parallel test execution logs."
        ],
        learnings: [
            "Experienced deep thread safety in test automation architectures.",
            "Configured environment setups for multiple local nodes.",
            "Designed complex XML test suites in TestNG for modular validation."
        ]
    },
];

// Sub-component for individual project tabs
function ProjectTabs({ project }: { project: typeof projects[0] }) {
    const [activeTab, setActiveTab] = useState<"overview" | "problem" | "specs" | "challenges">("overview");

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "problem", label: "Problem & Solution" },
        { id: "specs", label: "Technical Specs" },
        { id: "challenges", label: "Challenges & Learnings" },
    ];

    return (
        <div className="flex flex-col flex-grow">
            {/* Tabs Control Row */}
            <div className="flex flex-wrap gap-1 p-1 bg-slate-100/60 dark:bg-slate-950/40 rounded-2xl border border-slate-200/40 dark:border-slate-800/40 backdrop-blur-md mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        suppressHydrationWarning
                        className={`relative px-4 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all duration-300 ${
                            activeTab === tab.id
                                ? "text-blue-600 dark:text-blue-400"
                                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                        }`}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId={`project-tab-${project.title}`}
                                className="absolute inset-0 bg-white dark:bg-slate-900 rounded-xl -z-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.02)] border border-slate-200/50 dark:border-slate-800/50"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tabs Content Container */}
            <div className="flex-grow min-h-[220px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                    >
                        {activeTab === "overview" && (
                            <div className="space-y-4">
                                <CardDescription className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                    {project.description}
                                </CardDescription>
                                {/* Metrics List */}
                                <div className="space-y-2">
                                    <p className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                                        Project Metrics
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.metrics.map((metric) => (
                                            <span
                                                key={metric}
                                                className="px-2 py-0.5 rounded bg-blue-500/5 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-100/20 dark:border-blue-900/20 text-[9px] font-bold"
                                            >
                                                {metric}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "problem" && (
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <h4 className="text-[10px] font-extrabold text-red-500 uppercase tracking-widest flex items-center gap-1">
                                        <HelpCircle className="w-3.5 h-3.5" /> The Problem
                                    </h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                                        {project.problem}
                                    </p>
                                </div>
                                <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-900/40">
                                    <h4 className="text-[10px] font-extrabold text-green-500 uppercase tracking-widest flex items-center gap-1">
                                        <Layers className="w-3.5 h-3.5" /> The Solution
                                    </h4>
                                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                                        {project.solution}
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === "specs" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Highlights */}
                                <div className="space-y-2">
                                    <h4 className="text-[10px] font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center gap-1">
                                        <Star className="w-3.5 h-3.5 text-blue-500 fill-blue-500" /> Key Features
                                    </h4>
                                    <ul className="space-y-1.5">
                                        {project.highlights.map((highlight, idx) => (
                                            <li key={idx} className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-semibold">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Impact */}
                                <div className="space-y-2">
                                    <h4 className="text-[10px] font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center gap-1">
                                        <TrendingUp className="w-3.5 h-3.5 text-blue-500" /> Real-World Impact
                                    </h4>
                                    <ul className="space-y-1.5">
                                        {project.impact.map((imp, idx) => (
                                            <li key={idx} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1.5 font-semibold">
                                                <span className="text-blue-500 font-bold leading-none mt-0.5">•</span>
                                                <span>{imp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === "challenges" && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {/* Challenges */}
                                <div className="space-y-2">
                                    <h4 className="text-[10px] font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center gap-1">
                                        <AlertCircle className="w-3.5 h-3.5 text-blue-500" /> Challenges Solved
                                    </h4>
                                    <ul className="space-y-1.5">
                                        {project.challenges.map((challenge, idx) => (
                                            <li key={idx} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1.5 font-semibold">
                                                <span className="text-red-500 font-bold leading-none mt-0.5">•</span>
                                                <span>{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Learnings */}
                                <div className="space-y-2">
                                    <h4 className="text-[10px] font-extrabold text-slate-800 dark:text-slate-200 uppercase tracking-widest flex items-center gap-1">
                                        <CheckSquare className="w-3.5 h-3.5 text-blue-500" /> Key Learnings
                                    </h4>
                                    <ul className="space-y-1.5">
                                        {project.learnings.map((learning, idx) => (
                                            <li key={idx} className="text-xs text-slate-500 dark:text-slate-400 flex items-start gap-1.5 font-semibold">
                                                <span className="text-green-500 font-bold leading-none mt-0.5">•</span>
                                                <span>{learning}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export function Projects() {
    return (
        <section id="projects" className="py-14 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
            <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight text-slate-900 dark:text-white">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full" />
                    <p className="mt-6 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
                        Innovative solutions I've built to demonstrate technical expertise, problem-solving skills, and a user-centric approach.
                    </p>
                </motion.div>

                {/* Projects Column (Larger Cards) */}
                <div className="space-y-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:scale-[1.002] transition-all duration-500 flex flex-col lg:flex-row items-stretch">
                                {/* Image Container (Left on Desktop) */}
                                <div className="lg:w-[45%] relative min-h-[280px] lg:min-h-auto bg-slate-100 dark:bg-slate-950 flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-200/30 dark:border-slate-800/30 group">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 45vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-indigo-500/5" />
                                    )}
                                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>

                                {/* Content Details (Right on Desktop) */}
                                <div className="lg:w-[55%] flex flex-col justify-between p-8 lg:p-10">
                                    <div className="space-y-6">
                                        <div>
                                            <CardTitle className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                                                {project.title}
                                            </CardTitle>
                                            <div className="flex flex-wrap gap-1.5 mt-2">
                                                {project.tags.map((tag) => (
                                                    <Badge
                                                        key={tag}
                                                        variant="secondary"
                                                        className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200/30 dark:border-blue-800/20 py-0.5 px-2.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Project Detail Tabs */}
                                        <ProjectTabs project={project} />
                                    </div>

                                    {/* Action links */}
                                    <div className="flex gap-4 pt-6 border-t border-slate-200/40 dark:border-slate-800/40 mt-6">
                                        <motion.div
                                            whileHover={{ y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full"
                                        >
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full gap-2 rounded-full border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors shadow-sm font-extrabold h-10 uppercase tracking-widest text-[9px]"
                                                asChild
                                            >
                                                <Link href={project.links.github} target="_blank" rel="noreferrer">
                                                    <Github className="w-3.5 h-3.5" /> Repository
                                                </Link>
                                            </Button>
                                        </motion.div>

                                        {project.links.demo && project.links.demo !== "#" ? (
                                            <motion.div
                                                whileHover={{ y: -2 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="w-full"
                                            >
                                                <Button
                                                    size="sm"
                                                    className="w-full gap-2 rounded-full shadow-md bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 font-extrabold h-10 text-white uppercase tracking-widest text-[9px]"
                                                    asChild
                                                >
                                                    <Link href={project.links.demo} target="_blank" rel="noreferrer">
                                                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                                                    </Link>
                                                </Button>
                                            </motion.div>
                                        ) : (
                                            <Button
                                                size="sm"
                                                disabled
                                                className="w-full gap-2 rounded-full font-extrabold h-10 bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-600 cursor-not-allowed border border-transparent uppercase tracking-widest text-[9px]"
                                            >
                                                <ExternalLink className="w-3.5 h-3.5" /> Demo N/A
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* More on Github */}
                <div className="text-center mt-16">
                    <Button variant="ghost" size="lg" className="rounded-full text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-500/5 gap-2 font-bold" asChild>
                        <Link href="https://github.com/samerr03" target="_blank" rel="noreferrer">
                            View More on GitHub <Github className="w-4.5 h-4.5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
