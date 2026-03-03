"use client";

import { motion } from "framer-motion";
import React from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    className?: string;
}

export const ScrollReveal = ({ children, width = "100%", className = "" }: ScrollRevealProps) => {
    return (
        <div style={{ width }} className={`overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
};
