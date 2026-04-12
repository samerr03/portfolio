"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Code, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
    return (
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">About Me</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="bg-background/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="md:col-span-5"
                        >
                            <div className="relative max-w-sm mx-auto group">
                                {/* Profile Image Container */}
                                <div className="aspect-[4/5] rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 overflow-hidden shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl border border-white/10">
                                    <div className="absolute inset-0 flex items-center justify-center text-primary-foreground/50">
                                        <User className="w-32 h-32" />
                                    </div>
                                    <Image src="/smp.png" alt="Profile" fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                {/* Decorative background element */}
                                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-3xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="md:col-span-7 space-y-6"
                        >
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 shadow-sm backdrop-blur-sm">
                                    Full-Stack (React/Next)
                                </span>
                                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 shadow-sm backdrop-blur-sm">
                                    DSA / Problem Solving
                                </span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                                I’m a BE CSE student focused on Full-Stack Development and DSA, based in India.
                            </h3>
                            <div className="space-y-4 max-w-2xl">
                                <p className="text-muted-foreground leading-relaxed text-lg text-foreground/80">
                                    I build responsive web apps using React/Next.js and backend APIs with Node.js/Express. I enjoy solving problems and writing clean, scalable code.
                                </p>
                                <p className="text-muted-foreground leading-relaxed text-lg text-foreground/80">
                                    Recently, I’ve worked on projects like a Visitor Management System and Automation Testing framework, and I’m actively seeking internships / entry-level roles where I can contribute and grow.
                                </p>
                            </div>
                            <p className="text-sm text-primary/80 font-semibold tracking-wide mt-6">
                                Tech: React, Next.js, Node.js, Express, MongoDB, MySQL, Git
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                                <Card className="bg-background/40 backdrop-blur-md border border-white/10 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                                    <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                                        <div className="p-3 bg-primary/10 rounded-full mb-2">
                                            <Code className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="font-bold text-lg">Developer</h4>
                                        <p className="text-sm text-muted-foreground">Web Development & DSA</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-background/40 backdrop-blur-md border border-white/10 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                                    <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                                        <div className="p-3 bg-primary/10 rounded-full mb-2">
                                            <Briefcase className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="font-bold text-lg">Experience</h4>
                                        <p className="text-sm text-muted-foreground">Projects & Practice</p>
                                    </CardContent>
                                </Card>
                                <Card className="bg-background/40 backdrop-blur-md border border-white/10 hover:border-primary/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                                    <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                                        <div className="p-3 bg-primary/10 rounded-full mb-2">
                                            <GraduationCap className="w-6 h-6 text-primary" />
                                        </div>
                                        <h4 className="font-bold text-lg">Education</h4>
                                        <p className="text-sm text-muted-foreground">B.E. CSE</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
