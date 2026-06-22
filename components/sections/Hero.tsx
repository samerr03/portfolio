"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
    ArrowRight, 
    Download, 
    Github, 
    Linkedin, 
    Mail, 
    Code, 
    Code2, 
    GraduationCap, 
    Award, 
    Laptop, 
    Smartphone, 
    Sparkles, 
    Star, 
    Brain 
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Typewriter component for role rotation
function Typewriter({ words, delay = 150, period = 2000 }: { words: string[]; delay?: number; period?: number }) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        const currentWord = words[index % words.length];

        const handleType = () => {
            if (isDeleting) {
                setText((prev) => prev.slice(0, -1));
            } else {
                setText((prev) => currentWord.slice(0, prev.length + 1));
            }

            let typeSpeed = delay;
            if (isDeleting) {
                typeSpeed /= 2;
            }

            if (!isDeleting && text === currentWord) {
                typeSpeed = period;
                setIsDeleting(true);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setIndex((prev) => prev + 1);
                typeSpeed = 500;
            }

            timer = setTimeout(handleType, typeSpeed);
        };

        timer = setTimeout(handleType, delay);
        return () => clearTimeout(timer);
    }, [text, isDeleting, index, words, delay, period]);

    return (
        <span className="border-r-2 border-blue-500 pr-1 animate-pulse min-h-[1.5em] inline-block text-blue-600 dark:text-blue-400">
            {text}
        </span>
    );
}

// Helper component for animating stats numbers dynamically
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

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5 text-blue-500">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={`w-2.5 h-2.5 ${i < rating ? "fill-blue-500 text-blue-500" : "text-slate-200 dark:text-slate-800"}`}
                />
            ))}
        </div>
    );
}

export function Hero() {
    const stats = [
        { value: "120+", label: "DSA Problems", icon: Brain },
        { value: "7.51", label: "CGPA Score", icon: GraduationCap },
        { value: "6+", label: "Certificates", icon: Award },
        { value: "2+", label: "Projects", icon: Laptop },
        { value: "2027", label: "Graduate", icon: Sparkles }
    ];

    const featuredSkills = [
        { name: "React", rating: 3},
        { name: "Next.js", rating: 3 },
        { name: "Node.js", rating: 3 },
        { name: "MongoDB", rating: 3 },
        { name: "Express", rating: 3 },
        { name: "Java", rating: 3 },
    ];

    return (
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
            {/* Subtle background glow components managed by framer-motion */}
            <div className="absolute top-[15%] left-[10%] w-[320px] h-[320px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[15%] right-[10%] w-[380px] h-[380px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ 
                        opacity: 1, 
                        y: [0, -3, 0] 
                    }}
                    transition={{ 
                        opacity: { duration: 0.5 },
                        y: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    className="mx-auto select-none"
                    style={{ marginBottom: "28px" }} // Badge → Heading: 28px
                >
                    <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[11px] font-extrabold uppercase tracking-widest border border-blue-200/30 dark:border-blue-800/20 shadow-md backdrop-blur-sm">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                        Available for Internship 
                    </span>
                </motion.div>

                {/* Name & Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full flex flex-col items-center"
                    style={{ marginBottom: "24px" }} // Subtitle → Description: 24px
                >
                    <h1 
                        className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight text-center"
                        style={{ marginBottom: "18px" }} // Heading → Subtitle: 18px
                    >
                        Hi, I'm{" "}
                        <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 dark:from-blue-400 dark:via-sky-300 dark:to-indigo-400 font-black animate-gradient-x">
                            Sameer Patel
                        </span>
                    </h1>
                    
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-600 dark:text-slate-300 max-w-2xl mx-auto flex items-center justify-center gap-2 flex-wrap">
                        <span>A passionate</span>
                        <Typewriter words={["Full Stack Developer", "Software Engineer", "Problem Solver"]} />
                    </h2>
                </motion.div>

                {/* Recruiter-friendly description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto flex flex-col items-center gap-2"
                    style={{ marginBottom: "32px" }} // Description → CTA Buttons: 32px
                >
                    <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed font-medium text-center">
                        Final Year Computer Science Engineering student passionate about Full Stack Development, Data Structures & Algorithms, and scalable software engineering.
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed text-center">
                        Actively seeking Software Engineering Internship opportunities.
                    </p>
                </motion.div>

                {/* Polished CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-6 w-full"
                    style={{ marginBottom: "36px" }} // CTA Buttons → Stats: 36px
                >
                    <motion.div
                        whileHover={{ y: -3, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="relative group rounded-full p-[1px] bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 shadow-lg shadow-blue-500/20 dark:shadow-blue-500/10 h-12 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 blur-md opacity-40 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />
                        <Button 
                            className="relative rounded-full px-7 h-full text-xs uppercase tracking-widest font-extrabold flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 border-transparent transition-all duration-300"
                            asChild
                        >
                            <Link href="#contact" className="flex items-center gap-2 h-full">
                                <span>Contact Me</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -3, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="relative group rounded-full p-[1px] bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 hover:bg-gradient-to-r hover:from-blue-500/50 hover:via-sky-400/50 hover:to-indigo-500/50 transition-all duration-500 h-12 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <Button 
                            variant="outline"
                            className="relative rounded-full px-7 h-full text-xs uppercase tracking-widest font-extrabold flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-transparent hover:bg-white dark:hover:bg-slate-900 text-slate-800 dark:text-slate-200 transition-all duration-300"
                            asChild
                        >
                            <Link href="#projects" className="flex items-center gap-2 h-full">
                                <span>View Projects</span>
                                <Code className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -3, scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="relative group rounded-full p-[1px] bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 hover:bg-gradient-to-r hover:from-blue-500/50 hover:via-sky-400/50 hover:to-indigo-500/50 transition-all duration-500 h-12 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 rounded-full bg-blue-500/5 dark:bg-blue-500/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <Button 
                            variant="outline"
                            className="relative rounded-full px-7 h-full text-xs uppercase tracking-widest font-extrabold flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-transparent hover:bg-white dark:hover:bg-slate-900 text-slate-800 dark:text-slate-200 transition-all duration-300"
                            asChild
                        >
                            <a href="/resume.pdf" download="Sameer_Patel_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 h-full">
                                <span>Download Resume</span>
                                <Download className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Recruiter Quick Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto w-full justify-center justify-items-center"
                    style={{ marginBottom: "32px" }} // Stats → Skills Ribbon: 32px
                >
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            whileInView={{
                                y: [0, idx % 2 === 0 ? -6 : -4, 0]
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 5 + idx,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 p-4 rounded-3xl shadow-sm hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:scale-[1.02] hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group w-full h-[130px] max-w-[140px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="p-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl mb-2 transition-transform duration-300 group-hover:scale-110">
                                <stat.icon className="w-4 h-4" />
                            </div>
                            <p className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">
                                <AnimatedCounter value={stat.value} />
                            </p>
                            <p className="text-[9px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1 text-center">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Featured Skills Ribbon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="max-w-4xl mx-auto w-full"
                    style={{ marginBottom: "28px" }} // Skills Ribbon → Social Icons: 28px
                >
                    <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 p-5 rounded-3xl shadow-sm flex flex-col items-center justify-center gap-4 text-center">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 block w-full text-center">
                            Key Competencies
                        </span>
                        <div className="flex flex-wrap justify-center gap-3 w-full">
                            {featuredSkills.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-2 px-3.5 py-1.5 bg-white/50 dark:bg-slate-950/45 border border-slate-200/30 dark:border-slate-800/30 rounded-full shadow-sm hover:scale-[1.03] transition-transform duration-300 select-none">
                                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{skill.name}</span>
                                    <StarRating rating={skill.rating} />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Social Connect links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex items-center justify-center gap-6 w-full"
                >
                    <Link 
                        href="https://github.com/samerr03" 
                        target="_blank" 
                        className="p-3 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-800/40 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:scale-110 hover:-translate-y-0.5 rounded-xl transition-all duration-300"
                    >
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link 
                        href="https://www.linkedin.com/in/sameer-patel-b1ab4b349" 
                        target="_blank" 
                        className="p-3 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-800/40 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:scale-110 hover:-translate-y-0.5 rounded-xl transition-all duration-300"
                    >
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <a 
                        href="mailto:patelsamerr03@gmail.com" 
                        className="p-3 bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/40 dark:border-slate-800/40 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:scale-110 hover:-translate-y-0.5 rounded-xl transition-all duration-300"
                    >
                        <Mail className="w-5 h-5" />
                        <span className="sr-only">Email</span>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
        </section>
    );
}
