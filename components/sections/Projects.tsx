"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured online shopping platform with user authentication, product catalog, shopping cart, and payment gateway integration. Built for scalability and performance.",
        tags: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
        links: {
            demo: "https://example.com",
            github: "https://github.com",
        },
        // Placeholder image logic to be handled by CSS or generic icon
    },
    {
        title: "Task Management App",
        description: "A collaborative task management tool similar to Trello, featuring drag-and-drop boards, real-time updates using WebSockets, and team workspaces.",
        tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
        links: {
            demo: "https://example.com",
            github: "https://github.com",
        },
    },
    {
        title: "AI Chat Interface",
        description: "A modern chat application integrated with OpenAI API, supporting real-time conversation streaming, markdown rendering, and chat history persistence.",
        tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Firebase"],
        links: {
            demo: "https://example.com",
            github: "https://github.com",
        },
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects that demonstrate my technical expertise and problem-solving skills.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border-primary/10 overflow-hidden group">
                                <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                                    <Folder className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl">{project.title}</CardTitle>
                                    <CardDescription className="line-clamp-3 mt-2">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="outline" className="bg-background">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-4 pt-4 border-t border-border/50">
                                    <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                                        <Link href={project.links.github} target="_blank">
                                            <Github className="w-4 h-4" /> Code
                                        </Link>
                                    </Button>
                                    <Button size="sm" className="w-full gap-2" asChild>
                                        <Link href={project.links.demo} target="_blank">
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
                        <Link href="https://github.com" target="_blank">
                            View More on GitHub <Github className="w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
