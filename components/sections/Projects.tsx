"use client";

import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder } from "lucide-react";
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
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] mix-blend-multiply dark:mix-blend-screen opacity-50 z-0 animate-blob" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Featured Projects</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
                    <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
                        Innovative solutions I've built to demonstrate technical expertise, problem-solving skills, and a user-centric approach.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -8 }}
                            className="h-full group perspective-1000"
                        >
                            <Card className="h-full flex flex-col hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-500 border border-white/10 bg-background/60 backdrop-blur-xl overflow-hidden rounded-3xl z-10 hover:border-primary/30">
                                <div className="relative w-full h-[220px] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10 mix-blend-overlay" />
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <>
                                            <Folder className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </>
                                    )}
                                    {/* Subtle overlay fade on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                                </div>

                                <CardHeader className="pt-6 relative z-20">
                                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">{project.title}</CardTitle>
                                    <CardDescription className="line-clamp-3 mt-3 text-muted-foreground/90 font-medium text-sm leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex-grow pt-2">
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-primary hover:bg-primary/20 transition-colors shadow-sm bg-opacity-50 text-[11px] font-bold uppercase tracking-wider py-1 px-2.5">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                <CardFooter className="flex gap-4 pt-6 pb-8 border-t border-border/40 mt-auto bg-secondary/5">
                                    <Button variant="outline" size="sm" className="w-full gap-2 border-border/50 hover:bg-background/80 hover:text-primary transition-colors backdrop-blur-sm shadow-sm" asChild>
                                        <Link href={project.links.github} target="_blank" rel="noreferrer">
                                            <Github className="w-4 h-4" /> Code
                                        </Link>
                                    </Button>
                                    <Button size="sm" className="w-full gap-2 shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5" asChild>
                                        <Link href={project.links.demo} target="_blank" rel="noreferrer">
                                            <ExternalLink className="w-4 h-4" /> Live Demo
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="ghost" size="lg" className="text-primary gap-2" asChild>
                        <Link href="https://github.com/samerr03" target="_blank" rel="noreferrer">
                            View More on GitHub <Github className="w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
