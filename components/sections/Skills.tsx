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
            { name: "MongoDB", slug: "mongodb" },
        ],
    },
    {
        category: "Tools & DevOps",
        icon: Wrench,
        skills: [
            { name: "Git/GitHub", slug: "github" },
            { name: "VS Code", slug: "visualstudiocode" },
            { name: "Vercel", slug: "vercel" },
            { name: "Maven", slug: "maven" },
            { name: "TestNG", slug: "testng" },
            { name: "Selenium WebDriver", slug: "selenium" },
            { name: "Postman", slug: "postman" },

        ],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Technical Skills</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
                    <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
                        A comprehensive list of the technologies and tools I work with to build robust applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <Card className="h-full rounded-2xl bg-background/40 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-primary/40 transition-all duration-300">
                                <CardHeader className="flex flex-row items-center gap-3 pb-4">
                                    <div className="p-3 bg-primary/10 rounded-xl shadow-inner">
                                        <category.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl font-bold">{category.category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-3">
                                        {category.skills.map((skill) => (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Badge variant="secondary" className="bg-background/80 hover:bg-primary/20 hover:text-primary transition-colors cursor-default py-2 px-4 shadow-[0_2px_10px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_15px_rgba(37,99,235,0.2)] flex items-center gap-2 border border-border/50 text-sm">
                                                    <img
                                                        src={`https://cdn.simpleicons.org/${skill.slug}`}
                                                        alt={skill.name}
                                                        className="w-4 h-4"
                                                        loading="lazy"
                                                    />
                                                    <span className="font-semibold">{skill.name}</span>
                                                </Badge>
                                            </motion.div>
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
