"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/TransitionLink";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-between items-center ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-black/5" : "bg-transparent"}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <TransitionLink href="/" className="font-serif text-xl font-bold tracking-tighter text-black z-50">
                    AB.
                </TransitionLink>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center bg-white/50 backdrop-blur-sm p-1 rounded-full border border-black/5 relative">
                    {[
                        { name: "Accueil", path: "/" },
                        { name: "Projets", path: "/projets" },
                        { name: "Compétences", path: "/competences" },
                        { name: "Parcours", path: "/parcours" }
                    ].map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <TransitionLink
                                key={item.path}
                                href={item.path}
                                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors z-10 ${isActive ? "text-white" : "text-black hover:text-black/60"}`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-black rounded-full -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {item.name}
                            </TransitionLink>
                        );
                    })}

                    <div className="w-px h-4 bg-black/10 mx-2"></div>

                    <TransitionLink href="/cv" className="text-sm font-medium hover:text-black/60 transition-colors px-2">
                        CV
                    </TransitionLink>

                    <TransitionLink href="/contact" className="px-5 py-2 bg-zinc-100 text-black rounded-full text-sm font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors ml-2">
                        Contact
                    </TransitionLink>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 text-black">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay - Modernized */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-white/10 backdrop-blur-xl flex flex-col justify-between p-6"
                    >
                        {/* Background Accent */}
                        <div className="absolute inset-0 bg-white/90 z-[-1]"></div>

                        <div className="flex justify-end">
                            {/* Close button is handled by the main nav button z-index, but we add safe space */}
                        </div>

                        <nav className="flex flex-col gap-6 mt-20">
                            {[
                                { name: "Accueil", path: "/" },
                                { name: "Projets", path: "/projets" },
                                { name: "Compétences", path: "/competences" },
                                { name: "Parcours", path: "/parcours" },
                                { name: "Contact", path: "/contact" }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                                >
                                    <TransitionLink
                                        href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-5xl md:text-6xl font-serif font-bold text-black hover:opacity-50 transition-opacity block"
                                    >
                                        {item.name}
                                    </TransitionLink>
                                    <div className="h-px bg-black/5 mt-4 w-full"></div>
                                </motion.div>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mb-10"
                        >
                            <p className="text-sm font-mono uppercase text-black/40 mb-2">Socials</p>
                            <div className="flex gap-4">
                                <a href="https://github.com" className="text-black text-lg underline">GitHub</a>
                                <a href="https://linkedin.com" className="text-black text-lg underline">LinkedIn</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
