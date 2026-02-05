"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Laptop, Database, Globe, Wrench } from "lucide-react";

const skillsData = [
    {
        category: "Languages",
        icon: Laptop,
        skills: [
            { name: "Java", slug: "java" },
            { name: "Python", slug: "python" },
            { name: "JavaScript", slug: "javascript" },
            { name: "C++", slug: "cplusplus" },
            { name: "C", slug: "c" },
            { name: "SQL", slug: "postgresql" },
        ],
    },
    {
        category: "Frontend",
        icon: Globe,
        skills: [
            { name: "React.js", slug: "react" },
            { name: "Next.js", slug: "nextdotjs" },
            { name: "Tailwind CSS", slug: "tailwindcss" },
            { name: "HTML5/CSS3", slug: "html5" },
            { name: "Redux", slug: "redux" },
        ],
    },
    {
        category: "Backend",
        icon: Database,
        skills: [
            { name: "Node.js", slug: "nodedotjs" },
            { name: "Express", slug: "express" },
            { name: "REST APIs", slug: "json" },
        ],
    },
    {
        category: "Tools & DevOps",
        icon: Wrench,
        skills: [
            { name: "Git/GitHub", slug: "github" },
            { name: "Docker", slug: "docker" },
            { name: "VS Code", slug: "visualstudiocode" },
            { name: "Postman", slug: "postman" },
            { name: "Vercel", slug: "vercel" },
            { name: "Maven", slug: "maven" },
            { name: "TestNG", slug: "testng" },
            { name: "Selenium WebDriver", slug: "selenium" },

        ],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive list of the technologies and tools I work with.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow border-primary/10 bg-secondary/5">
                                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                                    <div className="p-2 bg-primary/10 rounded-lg">
                                        <category.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{category.category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <Badge key={skill.name} variant="secondary" className="hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default py-1.5 px-3 flex items-center gap-2 border-primary/5">
                                                <img
                                                    src={`https://cdn.simpleicons.org/${skill.slug}`}
                                                    alt={skill.name}
                                                    className="w-4 h-4"
                                                    loading="lazy"
                                                />
                                                <span className="text-sm font-medium">{skill.name}</span>
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
