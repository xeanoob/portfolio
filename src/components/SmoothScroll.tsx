"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Only initialize Lenis on desktop browsers (width > 1024px)
        if (typeof window !== "undefined" && window.innerWidth < 1024) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom ease for "heavier" feel
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
        });

        lenisRef.current = lenis;

        // Synchronize Lenis and GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // Add Lenis's requestAnimationFrame to GSAP's ticker
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000); // GSAP gives time in seconds, Lenis needs ms
        });

        // Disable GSAP's lag smoothing to prevent stuttering
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(lenis.raf);
            lenis.destroy();
        };
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    return <>{children}</>;
}
