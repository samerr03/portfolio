"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const certificates = [
    {
        title: "Summer Training 2025 – Web Programming (React JS)",
        issuer: "Chandigarh University",
        date: "2025",
        description: "Completed a 6-week in-house Summer Training program focused on Web Programming using React JS. Gained practical exposure to component-based architecture, state management, and responsive UI development.",
        link: "/projects/InHouse.jpeg",
        tags: ["React JS", "6 Weeks"]
    },
    {
        title: "AWS Solutions Architect – Associate (Course Completion)",
        issuer: "Udemy",
        date: "2025",
        description: "Completed an AWS cloud architecture course covering EC2, S3, VPC, and deployment strategies.",
        link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-0a04f34d-669c-4ba4-8fe7-9aca373f2f19.pdf",
    },
    {
        title: "Microcontroller and Industrial Applications",
        issuer: "Industrial Certification",
        date: "2024",
        description: "Hands-on experience with microcontroller programming and their applications in industrial automation and control systems.",
        link: "#",
    },
    {
        title: "Advanced Data Science Using R",
        issuer: "Chandigarh University",
        date: "2024–2025",
        description: "Completed a 36-hour value-added course focused on data analysis, statistical modeling, and visualization using R.",
        link: "/projects/R-Language.pdf",
        tags: ["R Language"]
    },

];

export function Certificates() {
    return (
        <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-50 z-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Certifications</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-500 mx-auto rounded-full" />
                    <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg">
                        Professional achievements that validate my technical skills and dedication to continuous learning.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group h-full"
                        >
                            <Card className="h-full border border-white/10 bg-background/50 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] relative overflow-hidden rounded-3xl z-10 group-hover:border-primary/40">
                                {/* Gradient overlay for glass effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                                <div className="absolute -right-6 -top-6 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/30 transition-colors duration-500" />

                                <div className="absolute top-0 right-0 p-5 opacity-20 group-hover:opacity-40 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 z-0">
                                    <Award className="w-20 h-20 text-primary" />
                                </div>

                                <CardHeader className="pb-4 relative z-10 pt-8">
                                    {/* Ribbon Badge Design */}
                                    <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 text-primary px-3 py-1.5 rounded-r-full -ml-6 mb-4 shadow-sm backdrop-blur-md">
                                        <ShieldCheck className="w-4 h-4 ml-2" />
                                        <span className="text-xs font-black uppercase tracking-widest">{cert.issuer}</span>
                                    </div>

                                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                                        {cert.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="space-y-6 relative z-10">
                                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                                        {cert.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-2 text-sm text-foreground/80 font-bold bg-secondary/50 px-3 py-1.5 rounded-lg border border-white/5 backdrop-blur-sm">
                                            <Calendar className="w-4 h-4 text-primary" />
                                            {cert.date}
                                        </div>
                                        <Button size="sm" className="gap-2 rounded-full shadow-md group-hover:shadow-primary/25 transition-all hover:scale-105" asChild>
                                            <Link href={cert.link} target="_blank">
                                                Verify <ExternalLink className="w-4 h-4" />
                                            </Link>
                                        </Button>
                                    </div>

                                    {cert.tags && (
                                        <div className="flex flex-wrap gap-2 pt-3 border-t border-border/20">
                                            {cert.tags.map(tag => (
                                                <span key={tag} className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20 shadow-sm backdrop-blur-sm uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
