"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 5;
            });
        }, 80);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white"
        >
            <div className="flex flex-col items-center max-w-xs w-full px-6 space-y-6">
                {/* Logo Animation */}
                <div className="relative flex items-center justify-center">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600/10 border border-blue-500/30 text-3xl font-black text-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                    >
                        SP
                    </motion.div>
                    {/* Ring glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-[-8px] rounded-3xl bg-blue-500/5 blur-md"
                    />
                </div>

                {/* Loading Text */}
                <div className="space-y-3 w-full text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="text-xs font-bold uppercase tracking-widest text-slate-400"
                    >
                        Loading Portfolio...
                    </motion.p>
                    
                    {/* Progress Bar */}
                    <div className="h-1 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800/50">
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "easeOut", duration: 0.1 }}
                            className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
