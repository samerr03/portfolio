"use client";

import { useState, useEffect } from "react";
import { Loader } from "./Loader";
import { AnimatePresence } from "framer-motion";

export function LoadingWrapper({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [loading]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800); // matches the progress bar duration
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && <Loader />}
            </AnimatePresence>
            {children}
        </>
    );
}
