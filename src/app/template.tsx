"use client";

import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // On mount (New Page Load):
        // 1. We assume the curtain is COVERING the screen (from previous page exit)
        // 2. We actually don't need to do anything if we rely on the CSS 'body::after' 
        //    because the new page likely renders with a clean body unless we persist state.
        //    Wait, Next.js SPA navigation keeps body state.

        // Remove the exit class to slide the curtain Up/Away or Fade out.
        // Let's modify the logic: 
        // Exit: Slide UP from Bottom to Center (Cover)
        // Entry: Slide UP from Center to Top (Reveal)

        // Actually, simpler:
        // Exit: Body class adds cover.
        // Entry: Remove body class.

        const removeTransition = async () => {
            // Small delay to ensure render
            await new Promise(r => setTimeout(r, 100));
            document.querySelector("body")?.classList.remove("page-transition-exit");
        };

        removeTransition();
    }, []);

    return (
        <>
            {children}
        </>
    );
}
