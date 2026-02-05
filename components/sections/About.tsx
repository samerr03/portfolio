"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Code, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-5"
                    >
                        <div className="relative max-w-sm mx-auto">
                            {/* Profile Image */}
                            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-tr from-primary to-accent overflow-hidden shadow-2xl relative z-10">
                                <div className="absolute inset-0 flex items-center justify-center text-primary-foreground/50">
                                    <User className="w-32 h-32" />
                                </div>
                                {/* Profile Image */}
                                <Image src="/smp.png" alt="Profile" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-full h-full bg-border rounded-2xl -z-10" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="md:col-span-7 space-y-6"
                    >
                        <h3 className="text-2xl font-semibold">
                            I’m a Computer Science Engineering student with a strong interest in Software Development, based in India.
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            I am a Computer Science Engineering student with a strong interest in software development. I enjoy building web applications and understanding how systems work behind the scenes. I focus on writing clean, readable code while continuously improving my technical skills.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            I have hands-on experience with technologies such as C++, Java, JavaScript, React, Next.js, PHP, MySQL, and Git through academic and personal projects.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Along with development, I regularly practice Data Structures and Algorithms, which helps me improve my problem-solving ability. I am currently looking for opportunities where I can learn from experienced professionals, contribute to real projects, and grow as a software developer.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary transition-colors">
                                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                                    <Code className="w-8 h-8 text-primary" />
                                    <h4 className="font-semibold">Developer</h4>
                                    <p className="text-xs text-muted-foreground">Web Development & Data Structures (DSA)</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary transition-colors">
                                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                                    <Briefcase className="w-8 h-8 text-primary" />
                                    <h4 className="font-semibold">Experience</h4>
                                    <p className="text-xs text-muted-foreground">Projects & Practice</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary transition-colors">
                                <CardContent className="p-4 flex flex-col items-center text-center gap-2">
                                    <GraduationCap className="w-8 h-8 text-primary" />
                                    <h4 className="font-semibold">Education</h4>
                                    <p className="text-xs text-muted-foreground">B.E. CSE</p>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
