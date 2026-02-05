"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const certificates = [
    {
        title: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services (AWS)",
        date: "2025",
        description: "Expertise in designing distributed systems on AWS, focusing on scalability, security, and cost-optimization.",
        link: "#",
    },
    {
        title: "Microcontroller and Industrial Applications",
        issuer: "Industrial Certification",
        date: "2024",
        description: "Hands-on experience with microcontroller programming and their applications in industrial automation and control systems.",
        link: "#",
    },
    {
        title: "R Language for Data Science",
        issuer: "Infosys",
        date: "2024",
        description: "Certification in R programming for statistical analysis, data visualization, and data-driven decision making.",
        link: "#",
    }
];

export function Certificates() {
    return (
        <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        Professional certifications and achievements that validate my technical skills and dedication to learning.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl bg-secondary/5 group overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Award className="w-16 h-16 text-primary" />
                                </div>

                                <CardHeader className="pb-4">
                                    <div className="flex items-center gap-2 text-primary mb-2">
                                        <ShieldCheck className="w-5 h-5" />
                                        <span className="text-xs font-bold uppercase tracking-wider">{cert.issuer}</span>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {cert.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-2">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="w-4 h-4" />
                                            {cert.date}
                                        </div>
                                        <Button variant="ghost" size="sm" className="gap-2 text-primary hover:text-primary hover:bg-primary/10 px-0" asChild>
                                            <Link href={cert.link} target="_blank">
                                                Verify <ExternalLink className="w-4 h-4" />
                                            </Link>
                                        </Button>
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
