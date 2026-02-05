"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Particle {
    id: number;
    x: number;
    duration: number;
    delay: number;
    left: number;
    top: number;
}

const educationData = [
    {
        title: "B.E. in Computer Science",
        organization: "Chandigarh University",
        period: "2023 - 2027",
        location: "Mohali, Punjab",
        description: "Bachelor of Engineering in Computer Science. Currently maintaining a strong academic record with focused studies in software development and algorithms.",
        result: "CGPA: 7.49/10",
    },
    {
        title: "Higher Secondary Education (12th)",
        organization: "Shree Ln Academy",
        period: "2021 - 2022",
        location: "Kherod Dhar, Madhya Pradesh",
        description: "Specialized in Science and Mathematics. Developed strong logical foundation and problem-solving skills.",
        result: "Percentage: 83%",
    },
    {
        title: "Secondary Education (10th)",
        organization: "Shree Ln Academy",
        period: "2019 - 2020",
        location: "Kherod Dhar, Madhya Pradesh",
        description: "Foundational education with a focus on core subjects and early interest in technology.",
        result: "Percentage: 90.33%",
    },
];

export function Education() {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const newParticles = [...Array(8)].map((_, i) => ({
            id: i,
            x: Math.random() * 60 - 30,
            duration: 8 + Math.random() * 6,
            delay: Math.random() * 5,
            left: Math.random() * 100,
            top: Math.random() * 100,
        }));
        setParticles(newParticles);
    }, []);
    return (
        <section id="education" className="py-20 md:py-24 relative overflow-hidden bg-background">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

                {/* Floating Particles */}
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-2 h-2 bg-primary/20 rounded-full"
                        animate={{
                            y: [0, -120, 0],
                            x: [0, particle.x, 0],
                            opacity: [0.1, 0.4, 0.1],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: particle.delay,
                        }}
                        style={{
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                        My <span className="text-primary italic relative inline-block">
                            Education
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary/40" />
                            </svg>
                        </span> Journey
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
                        A chronological timeline of my academic background and key milestones in my learning path.
                    </p>
                </motion.div>

                {/* Desktop Horizontal Layout */}
                <div className="hidden lg:block relative py-12">
                    {/* Horizontal Timeline Line */}
                    <div className="absolute top-[115px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    <div className="flex justify-between items-start gap-8">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="flex-1 relative"
                            >
                                {/* Milestone Dot */}
                                <div className="absolute top-[67px] left-1/2 -ml-4 w-8 h-8 rounded-full border-4 border-background bg-primary z-20 shadow-[0_0_20px_rgba(var(--primary),0.5)] flex items-center justify-center group cursor-default">
                                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 group-hover:opacity-40" />
                                    <GraduationCap className="w-3.5 h-3.5 text-primary-foreground relative z-30" />
                                </div>

                                {/* Date/Label above timeline */}
                                <div className="text-center mb-16">
                                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 shadow-sm uppercase tracking-widest transition-all hover:bg-primary/20">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {item.period}
                                    </span>
                                </div>

                                {/* Content Card below timeline */}
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="relative group p-[1px] rounded-2xl overflow-hidden mt-8 transition-all duration-300"
                                >
                                    {/* Animated Border Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/40 to-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <Card className="relative border-none bg-secondary/30 backdrop-blur-xl hover:bg-secondary/50 transition-all duration-500 shadow-xl group-hover:shadow-primary/10">
                                        <CardContent className="p-7">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight tracking-tight">
                                                    {item.title}
                                                </h3>
                                                <div className="flex flex-col items-end">
                                                    <span className="text-xs font-black text-primary/90 bg-primary/10 px-2 py-1 rounded-lg border border-primary/10 italic shadow-sm">{item.result}</span>
                                                </div>
                                            </div>

                                            <div className="mb-5">
                                                <p className="text-sm font-bold text-foreground/90 mb-1.5 tracking-wide">{item.organization}</p>
                                                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                                                    <MapPin className="w-3 h-3 text-primary/50" />
                                                    {item.location}
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground text-[14px] leading-relaxed font-medium transition-all duration-300 group-hover:text-foreground/80">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tablet/Mobile Vertical Layout */}
                <div className="lg:hidden relative py-5">
                    <div className="absolute left-0 sm:left-1/2 sm:-ml-px w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden sm:block" />

                    <div className="space-y-8">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-center justify-between sm:justify-normal ${index % 2 === 0 ? "sm:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="absolute left-0 sm:left-1/2 -ml-1 sm:-ml-4 w-8 h-8 rounded-full border-4 border-background bg-primary z-20 hidden sm:flex items-center justify-center shadow-lg">
                                    <GraduationCap className="w-3.5 h-3.5 text-primary-foreground" />
                                </div>

                                <div className="w-full sm:w-[46%]">
                                    <motion.div whileHover={{ scale: 1.02 }} className="transition-transform duration-300">
                                        <Card className="relative border-none bg-secondary/40 backdrop-blur-md shadow-lg rounded-2xl">
                                            <CardContent className="p-6">
                                                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-primary/10 text-primary border border-primary/10">
                                                        <Calendar className="w-3.5 h-3.5" />
                                                        {item.period}
                                                    </span>
                                                    <span className="text-[11px] font-black text-primary/80 italic font-bold">{item.result}</span>
                                                </div>
                                                <h3 className="text-lg font-bold mb-1.5">{item.title}</h3>
                                                <p className="text-sm font-bold text-foreground/80 mb-3">{item.organization}</p>
                                                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
