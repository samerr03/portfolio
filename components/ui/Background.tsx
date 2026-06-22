"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Background = () => {
    const bgRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [particles, setParticles] = useState<{ x: number; y: number; size: number; delay: number; duration: number }[]>([]);

    // Parallax scroll effect
    const yParallax = useTransform(scrollY, [0, 1000], [0, -100]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!bgRef.current) return;
            const { clientX, clientY } = e;
            bgRef.current.style.setProperty("--mouse-x", `${clientX}px`);
            bgRef.current.style.setProperty("--mouse-y", `${clientY}px`);
        };

        window.addEventListener("mousemove", handleMouseMove);
        
        // Generate stable random particle positions on mount
        const tempParticles = Array.from({ length: 20 }).map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 5,
            duration: Math.random() * 10 + 10,
        }));
        setParticles(tempParticles);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={bgRef}
            className="fixed inset-0 z-[-1] min-h-screen w-full bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-500"
        >
            {/* Parallax layered ambient blur circles */}
            <motion.div
                style={{ y: yParallax }}
                className="absolute inset-0 pointer-events-none"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.08, 1],
                        x: [0, 20, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-[120px]"
                />
                
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, -30, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/5 blur-[140px]"
                />
            </motion.div>

            {/* Slow floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-500/15 dark:bg-blue-400/15"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.size,
                            height: p.size,
                        }}
                        animate={{
                            y: [0, -60, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.15, 0.45, 0.15],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: p.delay,
                        }}
                    />
                ))}
            </div>

            {/* Mouse-follow glow effect */}
            <div
                className="absolute inset-0 pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), rgba(59, 130, 246, 0.08), transparent 80%)`,
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-0 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(500px circle at var(--mouse-x, -9999px) var(--mouse-y, -9999px), rgba(59, 130, 246, 0.04), transparent 80%)`,
                }}
            />

            {/* Premium subtle grid overlay */}
            <div
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"
            />
        </div>
    );
};
