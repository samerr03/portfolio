"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
            {/* Background Gradients */}
            <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-primary/30 rounded-full blur-[120px] opacity-60 animate-blob mix-blend-multiply dark:mix-blend-screen" />
            <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] opacity-60 animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen" />
            <div className="absolute bottom-[10%] left-[20%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px] opacity-60 animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen" />

            <div className="z-10 text-center max-w-4xl mx-auto space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-background/50 text-foreground text-sm font-medium mb-6 backdrop-blur-md border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                        ✨ Open to Work & Internship Opportunities
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-6 drop-shadow-sm">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-primary to-indigo-600 animate-gradient-x">Sameer Patel</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                        Software Developer | Full Stack & DSA Enthusiast
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-6"
                >
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Building efficient full-stack web applications using React and Next.js. Strong in problem-solving with Data Structures & Algorithms and familiar with backend APIs and automation testing.
                    </p>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Actively seeking internships and entry-level opportunities to learn from industry professionals and contribute to real-world projects.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
                    >
                        <Button size="lg" className="rounded-full px-8 w-full sm:w-auto text-lg gap-2 shadow-lg hover:shadow-primary/40 hover:-translate-y-1 hover:scale-105 transition-all duration-300" asChild>
                            <Link href="#contact">
                                Hire Me <ArrowRight className="w-5 h-5 ml-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto text-lg gap-2 backdrop-blur-md bg-background/50 border-border/50 hover:bg-background/80 hover:-translate-y-1 hover:shadow-md transition-all duration-300" asChild>
                            <a href="/resume.pdf" download="Sameer_Patel_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                Download Resume <Download className="w-5 h-5 ml-1" />
                            </a>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center justify-center gap-6 mt-12"
                    >
                        <Link href="https://github.com/samerr03" target="_blank" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                            <Github className="w-8 h-8" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/sameer-patel-b1ab4b349" target="_blank" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                            <Linkedin className="w-8 h-8" />
                        </Link>
                        <a href="mailto:patelsamerr03@gmail.com" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200 cursor-pointer">
                            <Mail className="w-8 h-8" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
