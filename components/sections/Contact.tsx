"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, Instagram, Clock, Briefcase, User, Tag, MessageSquare, ShieldCheck } from "lucide-react";

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Web3Forms Access Key
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
        <section id="contact" className="py-14 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight text-slate-900 dark:text-white">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-sky-400 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Contact Sidebar Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-5 flex flex-col justify-between gap-6"
                    >
                        {/* Clickable Social Cards Wrapper */}
                        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm flex-grow">
                            <div className="space-y-1">
                                <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                                    Contact Information
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold">
                                    Feel free to reach out through any of these channels.
                                </p>
                            </div>

                            {/* Clickable Card Items */}
                            <div className="space-y-4">
                                {[
                                    { icon: Mail, label: "Email", value: "patelsamerr03@gmail.com", href: "mailto:patelsamerr03@gmail.com" },
                                    { icon: Phone, label: "Phone", value: "+91 8085092137", href: "tel:+918085092137" },
                                    { icon: MapPin, label: "Location", value: "Mohali, Punjab, India", href: "https://maps.google.com/?q=Mohali,Punjab,India" },
                                ].map((item, idx) => (
                                    <a 
                                        key={idx}
                                        href={item.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center gap-4 p-4 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:scale-[1.01] hover:shadow-md rounded-2xl transition-all duration-300 cursor-pointer group"
                                    >
                                        <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl transition-transform duration-300 group-hover:scale-105">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                                {item.label}
                                            </p>
                                            <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {item.value}
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                                <p className="text-[9px] font-extrabold text-slate-400 dark:text-slate-500 mb-3.5 uppercase tracking-widest">
                                    Social Connect
                                </p>
                                <div className="flex gap-3">
                                    {[
                                        { icon: Github, href: "https://github.com/samerr03", label: "GitHub" },
                                        { icon: Linkedin, href: "https://www.linkedin.com/in/sameer-patel-b1ab4b349", label: "LinkedIn" },
                                        { icon: Instagram, href: "https://www.instagram.com/_samerr_03?igsh=M210MmdobGtqbnph", label: "Instagram" },
                                    ].map((social, idx) => (
                                        <a
                                            key={idx}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-slate-100 dark:bg-slate-950 hover:bg-blue-600 dark:hover:bg-blue-500 text-slate-500 hover:text-white dark:hover:text-white border border-slate-200/50 dark:border-slate-800/50 rounded-xl transition-all duration-300 scale-100 hover:scale-105"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="w-4 h-4" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Availability Details Card */}
                        <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-5 space-y-4 shadow-sm">
                            <div className="space-y-3">
                                <p className="text-[9px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                                    <Briefcase className="w-3.5 h-3.5 text-blue-500" />
                                    Available For
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Internship", "Full Time", "Freelance"].map((tag) => (
                                        <span 
                                            key={tag} 
                                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-500/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200/30 dark:border-blue-800/30 animate-pulse"
                                        >
                                            <CheckCircle2 className="w-3 h-3 text-blue-500" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-200/40 dark:border-slate-800/40 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                                <span className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 text-blue-500" />
                                    Average Response
                                </span>
                                <span className="font-bold text-slate-800 dark:text-slate-200">&lt; 24 Hours</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white/50 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200/60 dark:border-slate-800/60 hover:border-blue-500/30 dark:hover:border-blue-500/25 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-[0_20px_50px_rgba(59,130,246,0.06)] hover:scale-[1.002] transition-all duration-500 h-full flex flex-col justify-center relative overflow-hidden group">
                            {/* Decorative Blurred Gradient Circles inside the card for depth */}
                            <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[60px] pointer-events-none transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute -top-16 -left-16 w-60 h-60 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[60px] pointer-events-none transition-transform duration-700 group-hover:scale-110" />

                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="contact-form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-7 relative z-10"
                                    >
                                        {/* Short Heading inside the form */}
                                        <div className="space-y-1.5 text-left pb-1">
                                            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                                                Let's Build Something Together
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-semibold">
                                                Have an idea or an open position? Drop a message below and let's connect!
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Name Input with Floating Label and Icon */}
                                            <div className="relative group/field">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 transition-colors group-focus-within/field:text-blue-500 pointer-events-none" />
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    placeholder=" "
                                                    required
                                                    className="peer bg-white/50 dark:bg-slate-950/45 border border-slate-200/60 dark:border-slate-800/60 focus-visible:border-blue-500/50 focus-visible:ring-4 focus-visible:ring-blue-500/10 focus-visible:scale-[1.01] h-14 rounded-xl transition-all font-medium pt-5 pb-1 pl-11 pr-4 text-sm"
                                                />
                                                <label 
                                                    htmlFor="name" 
                                                    className="absolute left-11 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 dark:text-slate-500 transition-all duration-200 transform origin-left pointer-events-none
                                                               peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                                                               peer-focus:-translate-y-3.5 peer-focus:scale-75 peer-focus:text-blue-500
                                                               -translate-y-3.5 scale-75"
                                                >
                                                    Your Name
                                                </label>
                                            </div>

                                            {/* Email Input with Floating Label and Icon */}
                                            <div className="relative group/field">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 transition-colors group-focus-within/field:text-blue-500 pointer-events-none" />
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder=" "
                                                    required
                                                    className="peer bg-white/50 dark:bg-slate-950/45 border border-slate-200/60 dark:border-slate-800/60 focus-visible:border-blue-500/50 focus-visible:ring-4 focus-visible:ring-blue-500/10 focus-visible:scale-[1.01] h-14 rounded-xl transition-all font-medium pt-5 pb-1 pl-11 pr-4 text-sm"
                                                />
                                                <label 
                                                    htmlFor="email" 
                                                    className="absolute left-11 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 dark:text-slate-500 transition-all duration-200 transform origin-left pointer-events-none
                                                               peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                                                               peer-focus:-translate-y-3.5 peer-focus:scale-75 peer-focus:text-blue-500
                                                               -translate-y-3.5 scale-75"
                                                >
                                                    Email Address
                                                </label>
                                            </div>
                                        </div>

                                        {/* Subject Input with Floating Label and Icon */}
                                        <div className="relative group/field">
                                            <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 transition-colors group-focus-within/field:text-blue-500 pointer-events-none" />
                                            <Input
                                                id="subject"
                                                name="subject"
                                                placeholder=" "
                                                required
                                                className="peer bg-white/50 dark:bg-slate-950/45 border border-slate-200/60 dark:border-slate-800/60 focus-visible:border-blue-500/50 focus-visible:ring-4 focus-visible:ring-blue-500/10 focus-visible:scale-[1.01] h-14 rounded-xl transition-all font-medium pt-5 pb-1 pl-11 pr-4 text-sm"
                                            />
                                            <label 
                                                htmlFor="subject" 
                                                className="absolute left-11 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 dark:text-slate-500 transition-all duration-200 transform origin-left pointer-events-none
                                                           peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                                                           peer-focus:-translate-y-3.5 peer-focus:scale-75 peer-focus:text-blue-500
                                                           -translate-y-3.5 scale-75"
                                            >
                                                Subject
                                            </label>
                                        </div>

                                        {/* Message Textarea with Floating Label and Icon */}
                                        <div className="relative group/field">
                                            <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400 dark:text-slate-500 transition-colors group-focus-within/field:text-blue-500 pointer-events-none" />
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder=" "
                                                className="peer min-h-[150px] bg-white/50 dark:bg-slate-950/45 border border-slate-200/60 dark:border-slate-800/60 focus-visible:border-blue-500/50 focus-visible:ring-4 focus-visible:ring-blue-500/10 focus-visible:scale-[1.01] rounded-2xl resize-none pt-6 pb-2 pl-11 pr-4 transition-all font-medium text-sm"
                                                required
                                            />
                                            <label 
                                                htmlFor="message" 
                                                className="absolute left-11 top-4 text-xs font-bold text-slate-400 dark:text-slate-500 transition-all duration-200 transform origin-left pointer-events-none
                                                           peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                                                           peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-blue-500
                                                           -translate-y-3 scale-75"
                                            >
                                                Your Message
                                            </label>
                                        </div>

                                        {error && (
                                            <p className="text-red-500 text-xs font-semibold ml-1">
                                                {error}
                                            </p>
                                        )}

                                        {/* Response note and Submit button section */}
                                        <div className="space-y-4 pt-2">
                                            {/* Recruiter-friendly response rate badge */}
                                            <div className="flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 font-bold ml-1">
                                                <Clock className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
                                                Usually responds within 24 hours.
                                            </div>

                                            <Button
                                                type="submit"
                                                className="group w-full h-14 rounded-xl text-xs uppercase tracking-widest font-extrabold gap-2 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-700 hover:via-sky-600 hover:to-blue-700 text-white shadow-[0_4px_20px_rgba(59,130,246,0.15)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <div className="flex items-center gap-1.5 animate-pulse">
                                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        Sending...
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-1.5 justify-center">
                                                        Send Message <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                                                    </div>
                                                )}
                                            </Button>

                                            {/* Privacy Note */}
                                            <p className="text-[10px] text-slate-400 dark:text-slate-500 text-center font-semibold tracking-wide flex items-center justify-center gap-1">
                                                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> Your information is secure and will never be shared.
                                            </p>
                                        </div>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success-message"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-[360px] flex flex-col items-center justify-center text-center space-y-5 relative z-10"
                                    >
                                        <div className="p-4 bg-green-500/10 rounded-full border border-green-200/30 shadow-[0_4px_15px_rgba(34,197,94,0.1)]">
                                            <CheckCircle2 className="w-12 h-12 text-green-500 animate-bounce" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                                                Message Sent!
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold max-w-sm">
                                                Thank you for reaching out, Sameer will review it and get back to you shortly.
                                            </p>
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="rounded-xl px-6 border-slate-200 dark:border-slate-800 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-900"
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
