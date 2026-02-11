"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

// Switch to Trigger-based animation (GSAP "ScrollTrigger" style)
// Elements reveal once when they enter the viewport and STAY visible.

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
    const ref = useRef(null);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }} // Trigger when 50px into view (better for mobile)
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom "Power3.out" ease
                delay
            }}
            className={`w-full ${className}`}
        >
            {children}
        </motion.div>
    );
}
