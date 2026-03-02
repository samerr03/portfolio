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
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects", href: "#projects" },
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
            const currentPosition = window.scrollY + 100;

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
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent",
                scrolled
                    ? "bg-background/70 backdrop-blur-xl border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Code2 className="h-8 w-8 text-primary" />
                        <span className="font-bold text-xl tracking-tight">Portfolio</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out hover:text-primary",
                                            isActive ? "text-primary" : "text-muted-foreground"
                                        )}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-active"
                                                className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                            <ThemeToggle />
                            <Button size="sm" asChild>
                                <Link href="#contact">Hire Me</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border/40"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent/50"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="px-3 py-2">
                                <Button className="w-full" asChild>
                                    <Link href="#contact" onClick={() => setIsOpen(false)}>Hire Me</Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
