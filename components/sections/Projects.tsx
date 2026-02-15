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

const projects = [
    {
        title: "Visitor Management System",
        description:
            "A secure web-based Visitor Management System that allows admin and security staff to manage visitor entries, approvals, and pass generation. Includes role-based authentication, dashboard analytics, and real-time status updates.",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "AWS Amplify"],
        links: {
            demo: "https://your-amplify-domain.amplifyapp.com",
            github: "https://github.com/samerr03/Visitor-Pass-Management-System-.git",
        },
    },
    {
        title: "Cross-Browser Automation Testing – YouTube",
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
                            key={project.title}
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
                                        <Link href={project.links.github} target="_blank" rel="noreferrer">
                                            <Github className="w-4 h-4" /> Code
                                        </Link>
                                    </Button>
                                    <Button size="sm" className="w-full gap-2" asChild>
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
