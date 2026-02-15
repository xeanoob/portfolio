"use client";

import { motion } from "framer-motion";

export default function ProcessVisual() {
    const steps = [
        { id: "01", label: "Audit" },
        { id: "02", label: "Design" },
        { id: "03", label: "Code" },
        { id: "04", label: "Ship" },
    ];

    return (
        <div className="w-full py-12 relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-[var(--border-color)] -translate-y-1/2 z-0 hidden md:block"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center gap-4 group">
                        {/* Circle Node */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="w-16 h-16 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] flex items-center justify-center relative z-10 group-hover:border-[var(--foreground)] transition-colors duration-500"
                        >
                            <span className="font-mono text-xs text-[var(--text-secondary)]">{step.id}</span>

                            {/* Pulse Effect */}
                            <div className="absolute inset-0 rounded-full border border-[var(--foreground)] opacity-0 group-hover:animate-ping"></div>
                        </motion.div>

                        {/* Label */}
                        <h4 className="text-lg font-bold text-[var(--foreground)] uppercase tracking-wider">{step.label}</h4>

                        {/* Vertical Line for Mobile */}
                        {index !== steps.length - 1 && (
                            <div className="h-8 w-px bg-[var(--border-color)] md:hidden"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
