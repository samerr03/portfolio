"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar, ExternalLink, ShieldCheck, Eye, Download, X, Loader2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface Certificate {
    title: string;
    issuer: string;
    date: string;
    credentialId: string;
    description: string;
    link: string;
    verifyLink?: string;
    thumbnail: string;
    type: string;
    tags: string[];
    isVerified?: boolean;
    isIndustryRecognized?: boolean;
}

// Client-side component to dynamically render first page of a PDF as thumbnail
function PDFThumbnail({ pdfUrl, title }: { pdfUrl: string; title: string }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let isMounted = true;
        let pdfDoc: any = null;

        const renderPDF = async () => {
            try {
                if (!(window as any).pdfjsLib) {
                    await new Promise<void>((resolve, reject) => {
                        const script = document.createElement("script");
                        script.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.min.js";
                        script.onload = () => resolve();
                        script.onerror = () => reject(new Error("Failed to load PDF.js"));
                        document.head.appendChild(script);
                    });
                }

                const pdfjsLib = (window as any).pdfjsLib;
                pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js";

                pdfDoc = await pdfjsLib.getDocument(pdfUrl).promise;
                if (!isMounted) return;

                const page = await pdfDoc.getPage(1);
                if (!isMounted) return;

                const canvas = canvasRef.current;
                if (!canvas) return;

                const context = canvas.getContext("2d");
                if (!context) return;

                const targetWidth = 320;
                const unscaledViewport = page.getViewport({ scale: 1.0 });
                const scale = targetWidth / unscaledViewport.width;
                const viewport = page.getViewport({ scale });

                canvas.width = viewport.width;
                canvas.height = viewport.height;

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };
                await page.render(renderContext).promise;

                if (isMounted) {
                    setLoading(false);
                }
            } catch (err) {
                console.error("Error rendering PDF thumbnail:", err);
                if (isMounted) {
                    setError(true);
                    setLoading(false);
                }
            }
        };

        renderPDF();

        return () => {
            isMounted = false;
            if (pdfDoc) {
                pdfDoc.destroy();
            }
        };
    }, [pdfUrl]);

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center gap-2.5 w-full h-full bg-slate-50/50 dark:bg-slate-950/20 text-slate-400 dark:text-slate-500">
                <div className="p-3 bg-blue-500/10 dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 rounded-2xl border border-blue-200/30 dark:border-blue-800/20 shadow-sm">
                    <FileText className="w-6 h-6 animate-pulse" />
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">Certificate PDF</span>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full flex items-center justify-center bg-slate-50 dark:bg-slate-950/20">
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50/80 dark:bg-slate-950/60 z-10">
                    <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
                </div>
            )}
            <canvas 
                ref={canvasRef} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                style={{ display: loading ? "none" : "block" }}
                title={title}
            />
        </div>
    );
}

const certificates: Certificate[] = [
    {
        title: "AINCAT 2026 - Certificate of Participation",
        issuer: "Naukri Campus (AIR-10335)",
        date: "2026",
        credentialId: "NC-AINCAT-2026-10335",
        description: "Successfully participated in AINCAT 2026 (All India NCAT), India's Biggest Career Aptitude Test conducted by Naukri Campus.",
        link: "/projects/ncat.pdf",
        thumbnail: "/projects/ncat_actual.png",
        type: "pdf",
        tags: ["Aptitude", "Logical Reasoning", "Quantitative", "Communication"]
    },
    {
        title: "Guidewire DEVTrails University Hackathon 2026",
        issuer: "Guidewire × EY",
        date: "2026",
        credentialId: "DEVTRAILS-2026",
        description: "Successfully participated in the Guidewire DEVTrails University Hackathon 2026 conducted in partnership with EY, demonstrating problem-solving, collaboration, and software engineering skills.",
        link: "/projects/dev.pdf",
        verifyLink: "/projects/dev.pdf",
        thumbnail: "",
        type: "pdf",
        tags: ["Guidewire", "EY", "Hackathon", "Problem Solving", "Teamwork", "Innovation"],
        isVerified: true,
        isIndustryRecognized: true
    },
    {
        title: "GeeksforGeeks 60 Days POTD Challenge",
        issuer: "GeeksforGeeks",
        date: "2026",
        credentialId: "GFG-POTD-60D-2026",
        description: "Successfully completed the GeeksforGeeks 60 Days Problem of the Day (POTD) Challenge, demonstrating consistent problem-solving and coding practice.",
        link: "/projects/gfg.png",
        thumbnail: "/projects/gfg.png",
        type: "image",
        tags: ["DSA", "Problem Solving", "Algorithms", "Consistency"]
    },
    {
        title: "Summer Training 2025 – Web Programming (React JS)",
        issuer: "Chandigarh University",
        date: "2025",
        credentialId: "CU-REACT-SUMMER-2025",
        description: "Completed a 6-week in-house Summer Training program focused on Web Programming using React JS. Gained practical exposure to component-based architecture and responsive UI development.",
        link: "/projects/InHouse.jpeg",
        thumbnail: "/projects/InHouse.jpeg",
        type: "image",
        tags: ["React JS", "6 Weeks", "Web Development"]
    },
    {
        title: "AWS Solutions Architect – Associate (Course Completion)",
        issuer: "Udemy",
        date: "2025",
        credentialId: "UC-0a04f34d-669c-4ba4-8fe7-9aca373f2f19",
        description: "Completed an AWS cloud architecture course covering EC2, S3, VPC, IAM, and deployment strategies.",
        link: "/projects/aws_actual.pdf",
        verifyLink: "https://www.udemy.com/certificate/UC-0a04f34d-669c-4ba4-8fe7-9aca373f2f19/",
        thumbnail: "",
        type: "pdf",
        tags: ["AWS", "Cloud Computing", "Solutions Architect"]
    },
    {
        title: "Advanced Data Science Using R",
        issuer: "Chandigarh University",
        date: "2024–2025",
        credentialId: "CU-R-DATA-SCIENCE-2024",
        description: "Completed a 36-hour value-added course focused on data analysis, statistical modeling, and visualization using R.",
        link: "/projects/R-Language.pdf",
        thumbnail: "",
        type: "pdf",
        tags: ["R Language", "Data Science", "Visualization"]
    },
];

export function Certificates() {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [previewType, setPreviewType] = useState<string | null>(null);
    const [zoomLevel, setZoomLevel] = useState<number>(1);

    const openPreview = (url: string, type: string) => {
        setPreviewUrl(url);
        setPreviewType(type);
        setZoomLevel(1);
    };

    const closePreview = () => {
        setPreviewUrl(null);
        setPreviewType(null);
    };

    const handleZoomIn = () => {
        setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
    };

    const handleZoomOut = () => {
        setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
    };

    return (
        <section id="certificates" className="py-14 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
            <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
                        Certifications
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full" />
                </motion.div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group h-full"
                        >
                            <Card className="h-full border border-slate-200/50 dark:border-slate-800/50 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg relative overflow-hidden rounded-3xl z-10 hover:border-blue-500/30 dark:hover:border-blue-500/20 flex flex-col justify-between">
                                {/* Border Shine Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="space-y-4 flex-grow flex flex-col justify-between">
                                    <div className="space-y-4">
                                        {/* Thumbnail Visual Container */}
                                        <div className="relative w-full h-[180px] bg-slate-100 dark:bg-slate-950 border-b border-slate-200/30 dark:border-slate-800/30 flex items-center justify-center overflow-hidden group/thumb">
                                            {/* Industry Recognized Badge */}
                                            {cert.isIndustryRecognized && (
                                                <div className="absolute top-3 right-3 z-30 inline-flex items-center gap-1 bg-amber-500/90 dark:bg-amber-600/90 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[8px] font-extrabold uppercase tracking-wider shadow-sm border border-amber-400/30">
                                                    <Award className="w-2.5 h-2.5" /> Industry Recognized
                                                </div>
                                            )}

                                            {/* Verified Badge */}
                                            {cert.isVerified && (
                                                <div className="absolute top-3 left-3 z-30 inline-flex items-center gap-1 bg-blue-600/90 dark:bg-blue-500/90 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[8px] font-extrabold uppercase tracking-wider shadow-sm border border-blue-400/30">
                                                    <ShieldCheck className="w-2.5 h-2.5 fill-white/20" /> Verified
                                                </div>
                                            )}

                                            {cert.thumbnail && (cert.thumbnail.endsWith('.png') || cert.thumbnail.endsWith('.jpeg') || cert.thumbnail.endsWith('.jpg')) ? (
                                                <Image
                                                    src={cert.thumbnail}
                                                    alt={cert.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            ) : (
                                                <PDFThumbnail pdfUrl={cert.link} title={cert.title} />
                                            )}
                                            <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    onClick={() => openPreview(cert.link, cert.type)}
                                                    className="rounded-full shadow-md gap-1.5 bg-white text-slate-900 hover:bg-slate-100 font-bold"
                                                >
                                                    <Eye className="w-4 h-4" /> Quick View
                                                </Button>
                                            </div>
                                        </div>

                                        {/* Content info */}
                                        <div className="px-6 pt-2">
                                            {cert.issuer === "Guidewire × EY" ? (
                                                <div className="flex items-center gap-1.5">
                                                    <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-200/30 dark:border-emerald-800/30 shadow-sm">
                                                        Guidewire
                                                    </div>
                                                    <span className="text-slate-400 dark:text-slate-600 text-xs font-bold">×</span>
                                                    <div className="inline-flex items-center gap-1.5 bg-yellow-500/10 text-yellow-600 dark:bg-yellow-400/10 dark:text-yellow-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-yellow-200/30 dark:border-yellow-800/30 shadow-sm">
                                                        EY
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border border-blue-200/30 dark:border-blue-800/30">
                                                    <ShieldCheck className="w-3.5 h-3.5" />
                                                    {cert.issuer}
                                                </div>
                                            )}
                                            <CardTitle className="text-xl font-bold text-slate-900 dark:text-white leading-tight mt-3 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 min-h-[3.5rem] flex items-center">
                                                {cert.title}
                                            </CardTitle>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-2 min-h-[5rem]">
                                                {cert.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Metadata & Actions Section */}
                                <div className="px-6 pb-6 pt-4 space-y-4">
                                    {/* Structured Recruiter Metadata */}
                                    <div className="space-y-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 bg-slate-50/20 dark:bg-slate-950/10 p-3 rounded-2xl border border-slate-200/30 dark:border-slate-800/30">
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400">Issued By:</span>
                                            <span className="text-slate-800 dark:text-slate-200 font-black">{cert.issuer}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400">Issue Date:</span>
                                            <span className="text-slate-800 dark:text-slate-200 font-black">{cert.date}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-slate-400">Credential ID:</span>
                                            <span className="text-slate-600 dark:text-slate-400 font-mono text-[9px] lowercase bg-slate-100/50 dark:bg-slate-900/55 px-1.5 py-0.5 rounded border border-slate-200/20 dark:border-slate-800/20">{cert.credentialId}</span>
                                        </div>
                                    </div>

                                    {cert.tags && (
                                        <div className="flex flex-wrap gap-1 pt-1">
                                            {cert.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 rounded bg-slate-100/40 dark:bg-slate-950/60 text-[9px] font-bold text-slate-500 dark:text-slate-400 border border-slate-200/20 dark:border-slate-800/20 uppercase tracking-wide"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-200/40 dark:border-slate-800/40">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="rounded-xl text-[9px] font-extrabold uppercase tracking-widest gap-1 h-9 border-slate-200 dark:border-slate-800 hover:text-blue-500 px-1"
                                            onClick={() => openPreview(cert.link, cert.type)}
                                            title="Preview certificate"
                                        >
                                            <Eye className="w-3.5 h-3.5" /> View
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="rounded-xl text-[9px] font-extrabold uppercase tracking-widest gap-1 h-9 border-slate-200 dark:border-slate-800 hover:text-blue-500 px-1"
                                            asChild
                                            title="Download certificate"
                                        >
                                            <a href={cert.link} download target="_blank" rel="noopener noreferrer">
                                                <Download className="w-3.5 h-3.5" /> Save
                                            </a>
                                        </Button>
                                        <Button
                                            size="sm"
                                            className="rounded-xl text-[9px] font-extrabold uppercase tracking-widest gap-1 h-9 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white shadow-sm px-1"
                                            asChild
                                            title="Verify credential ID"
                                        >
                                            <Link href={cert.verifyLink || cert.link} target="_blank">
                                                Verify <ExternalLink className="w-3 h-3" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay Viewer */}
            <AnimatePresence>
                {previewUrl && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePreview}
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-4xl max-h-[88vh] overflow-hidden shadow-2xl relative flex flex-col"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/20">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-slate-500 flex items-center gap-2">
                                    <Award className="w-5 h-5 text-blue-500" />
                                    Certificate Viewer
                                </h3>
                                <div className="flex items-center gap-2">
                                    {previewType === "image" && (
                                        <>
                                            <Button 
                                                variant="outline" 
                                                size="sm" 
                                                onClick={handleZoomOut} 
                                                className="rounded-xl px-3 text-xs"
                                            >
                                                Zoom -
                                            </Button>
                                            <Button 
                                                variant="outline" 
                                                size="sm" 
                                                onClick={handleZoomIn} 
                                                className="rounded-xl px-3 text-xs"
                                            >
                                                Zoom +
                                            </Button>
                                        </>
                                    )}
                                    <button
                                        onClick={closePreview}
                                        suppressHydrationWarning
                                        className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded-xl transition-colors ml-2"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 overflow-y-auto overflow-x-auto flex items-center justify-center bg-slate-100/50 dark:bg-slate-950/40 flex-grow min-h-[300px]">
                                {previewType === "image" ? (
                                    <div 
                                        className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 transition-transform duration-200 bg-white"
                                        style={{ transform: `scale(${zoomLevel})` }}
                                    >
                                        <Image
                                            src={previewUrl}
                                            alt="Certificate preview"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ) : (
                                    <iframe
                                        src={previewUrl}
                                        className="w-full h-[62vh] border-0 rounded-2xl shadow-inner bg-white"
                                        title="Certificate PDF Viewer"
                                    />
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
