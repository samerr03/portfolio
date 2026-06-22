"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Achievements", href: "#achievements" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Scroll spy logic
            const sections = navLinks.map(link => link.href.substring(1));
            const currentPosition = window.scrollY + 120;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (currentPosition >= offsetTop && currentPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
            <nav
                className={cn(
                    "transition-all duration-500 border pointer-events-auto flex items-center justify-between shadow-sm",
                    scrolled
                        ? "mt-3 w-[90%] max-w-5xl rounded-full bg-white/75 dark:bg-slate-950/75 border-slate-200/50 dark:border-slate-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(59,130,246,0.03)] py-1.5 px-6 backdrop-blur-md"
                        : "mt-6 w-[95%] max-w-6xl rounded-full bg-white/40 dark:bg-slate-950/40 border-slate-200/30 dark:border-slate-800/30 py-3.5 px-8 backdrop-blur-sm"
                )}
            >
                {/* Logo Section */}
                <Link
                    href="#"
                    className="flex-shrink-0 flex items-center gap-2 group cursor-pointer"
                >
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                        <Code2 className="h-5 w-5" />
                    </div>
                    <span className="font-bold text-base tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-50 dark:via-slate-100 dark:to-slate-50">
                        Sameer Patel
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center space-x-1 bg-slate-100/40 dark:bg-slate-900/40 p-1 rounded-full border border-slate-200/40 dark:border-slate-800/40 backdrop-blur-md">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ease-in-out",
                                        isActive
                                            ? "text-blue-600 dark:text-blue-400"
                                            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                                    )}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="navbar-active"
                                            className="absolute inset-0 bg-white dark:bg-slate-950 rounded-full -z-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.02)] border border-slate-200/50 dark:border-slate-800/50"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <Button size="sm" className="rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 shadow-md hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300" asChild>
                            <Link href="#contact">Hire Me</Link>
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation Toggle */}
                <div className="md:hidden flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        suppressHydrationWarning
                        className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-slate-950 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-16 left-4 right-4 z-40 md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-xl p-4 pointer-events-auto"
                    >
                        <div className="space-y-1">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "block px-4 py-2 rounded-xl text-sm font-semibold transition-colors",
                                            isActive
                                                ? "bg-blue-50/50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400"
                                                : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900/50"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                            <div className="pt-3 mt-2 border-t border-slate-200/50 dark:border-slate-800/50">
                                <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 font-semibold" asChild>
                                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                                        Hire Me
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
