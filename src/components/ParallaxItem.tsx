"use client";

import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
    children: React.ReactNode;
    className?: string;
    offset?: number; // How much it moves (e.g. 50px)
}

export default function ParallaxItem({ children, className = "", offset = 50 }: ParallaxProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

    return (
        <div ref={ref} className={className}>
            <motion.div style={isMobile ? {} : { y }}>
                {children}
            </motion.div>
        </div>
    );
}
