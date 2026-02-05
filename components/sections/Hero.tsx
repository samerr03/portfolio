"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-70 animate-blob" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] opacity-70 animate-blob animation-delay-2000" />

            <div className="z-10 text-center max-w-4xl mx-auto space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium mb-4 backdrop-blur-sm border border-accent">
                        🚀 Open to Work & Internship Opportunities
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-4">
                        Hi, I'm <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Sameer Patel</span>
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
                        <Button size="lg" className="rounded-full px-8 w-full sm:w-auto text-lg gap-2 shadow-lg hover:shadow-primary/25 transition-all" asChild>
                            <Link href="#contact">
                                Hire Me <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full px-8 w-full sm:w-auto text-lg gap-2 backdrop-blur-sm" asChild>
                            <a href="/resume.pdf" download="Sameer_Patel_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                Download Resume <Download className="w-5 h-5" />
                            </a>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center justify-center gap-6 mt-12"
                    >
                        <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                            <Github className="w-8 h-8" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                            <Linkedin className="w-8 h-8" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200">
                            <Instagram className="w-8 h-8" />
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
