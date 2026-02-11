"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface TransitionLinkProps extends LinkProps {
    children: React.ReactNode;
    href: string;
    className?: string;
}

// Global function to trigger transition (could be in a context context but simple export works for now if imported)
// Actually, we'll just use a sleep function.

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLink({ children, href, className, ...props }: TransitionLinkProps) {
    const router = useRouter();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        // 1. Dispatch event to trigger "Exit" animation
        // We'll listen for this in the Template or Layout
        const body = document.querySelector("body");
        console.log("Transition Triggered", body);
        body?.classList.add("page-transition-exit");

        // 2. Wait for animation
        await sleep(500); // Wait for veil to fade in

        // 3. Navigate
        router.push(href);

        // 4. Cleanup handled by Template mounting new page which removes class
        // body?.classList.remove("page-transition-exit"); 
    };

    return (
        <Link
            onClick={handleTransition}
            href={href}
            className={className}
            {...props}
        >
            {children}
        </Link>
    );
}
