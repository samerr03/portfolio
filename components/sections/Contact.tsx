"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Instagram } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // IMPORTANT: Replace with your actual Web3Forms Access Key
    const WEB3FORMS_ACCESS_KEY = "2779261c-2661-40a2-826d-9ee150cf19a1";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSubmitted(true);
                e.currentTarget.reset();
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                setError(data.message || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Unable to connect to the server. Please check your internet.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
            {/* Dynamic Background Blobs */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/20 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Let's Create <span className="text-primary">Together</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        Currently seeking new opportunities and creative collaborations.
                        Whether you have a specific project in mind or just want to connect, my inbox is always open.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Contact Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="bg-secondary/20 backdrop-blur-xl border border-primary/10 rounded-3xl p-8 space-y-8 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 -m-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold tracking-tight">Contact Information</h3>
                                <p className="text-muted-foreground">Feel free to reach out through any of these channels.</p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: Mail, label: "Email", value: "patelsamerr03@gmail.com", href: "mailto:patelsamerr03@gmail.com" },
                                    { icon: Phone, label: "Phone", value: "+91 8085092137", href: "tel:+918085092137" },
                                    { icon: MapPin, label: "Location", value: "Mohali, Punjab, India", href: null },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-5 transition-transform hover:translate-x-1 duration-300">
                                        <div className="p-4 bg-primary/10 rounded-2xl text-primary ring-1 ring-primary/20 shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-lg font-medium hover:text-primary transition-colors">{item.value}</a>
                                            ) : (
                                                <p className="text-lg font-medium">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-primary/10">
                                <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Social Connect</p>
                                <div className="flex gap-4">
                                    {[
                                        { icon: Github, href: "https://github.com", label: "GitHub" },
                                        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                                        { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                                    ].map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-secondary/40 hover:bg-primary hover:text-primary-foreground border border-primary/10 rounded-xl transition-all duration-300 scale-100 hover:scale-110 active:scale-95 shadow-sm"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Availability Card */}
                        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0" />
                                    <div className="w-3 h-3 bg-green-500 rounded-full relative" />
                                </div>
                                <span className="font-medium">Available for New Projects</span>
                            </div>
                            <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">Hire Me</span>
                        </div>
                    </motion.div>

                    {/* Contact Form Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-background border border-primary/10 rounded-3xl p-8 md:p-10 shadow-2xl relative">
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="contact-form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-semibold ml-1">Your Name</label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    placeholder="Enter your name"
                                                    required
                                                    className="bg-secondary/10 border-primary/5 focus:border-primary/40 focus:ring-primary/10 h-12 rounded-xl transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-semibold ml-1">Email Address</label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="example@email.com"
                                                    required
                                                    className="bg-secondary/10 border-primary/5 focus:border-primary/40 focus:ring-primary/10 h-12 rounded-xl transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-semibold ml-1">Subject</label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                placeholder="What's this about?"
                                                required
                                                className="bg-secondary/10 border-primary/5 focus:border-primary/40 focus:ring-primary/10 h-12 rounded-xl transition-all"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-semibold ml-1">Message</label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Tell me more about your project..."
                                                className="min-h-[160px] bg-secondary/10 border-primary/5 focus:border-primary/40 focus:ring-primary/10 rounded-2xl resize-none py-4 transition-all"
                                                required
                                            />
                                        </div>
                                        {error && (
                                            <p className="text-red-500 text-sm font-medium ml-1 animate-pulse">
                                                {error}
                                            </p>
                                        )}
                                        <Button
                                            type="submit"
                                            className="w-full h-14 rounded-xl text-lg font-bold gap-3 shadow-[0_10px_30px_rgba(var(--primary),0.3)] hover:shadow-primary/40 transition-all duration-300"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                                    Sending...
                                                </div>
                                            ) : (
                                                <>
                                                    Send Message <Send className="w-5 h-5" />
                                                </>
                                            )}
                                        </Button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success-message"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-[400px] flex flex-col items-center justify-center text-center space-y-6"
                                    >
                                        <div className="p-4 bg-green-500/10 rounded-full ring-4 ring-green-500/20">
                                            <CheckCircle2 className="w-16 h-16 text-green-500" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-3xl font-bold tracking-tight">Message Sent!</h3>
                                            <p className="text-muted-foreground text-lg">
                                                Thank you for reaching out. I'll get back to you as soon as possible.
                                            </p>
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="rounded-xl px-8"
                                            onClick={() => setIsSubmitted(false)}
                                        >
                                            Send another message
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
