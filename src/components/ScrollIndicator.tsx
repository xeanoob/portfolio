"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator({ className = "" }: { className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className={`flex flex-col items-center gap-2 cursor-pointer ${className}`}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="bg-[var(--foreground)] text-[var(--background)] p-3 rounded-full shadow-lg border border-[var(--border-color)]"
            >
                <ChevronDown size={20} />
            </motion.div>
        </motion.div>
    );
}
