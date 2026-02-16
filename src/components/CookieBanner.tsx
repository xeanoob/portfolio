"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cookie_consent");
        if (!consent) {
            // Small delay to not overwhelm user immediately
            const timer = setTimeout(() => setShowBanner(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "granted");
        setShowBanner(false);
        // Reload to activate analytics immediately or trigger an event
        window.location.reload();
    };

    const handleDecline = () => {
        localStorage.setItem("cookie_consent", "denied");
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-[100000] max-w-md w-full"
                >
                    <div className="bg-[var(--bg-secondary)]/80 backdrop-blur-md border border-[var(--border-color)] p-6 rounded-2xl shadow-2xl flex flex-col gap-4">
                        <div>
                            <h3 className="text-[var(--foreground)] font-serif text-lg mb-2">Cookies & Confidentialité</h3>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                Nous utilisons des cookies pour analyser le trafic et améliorer votre expérience. Aucune donnée personnelle n'est vendue.
                            </p>
                        </div>

                        <div className="flex gap-3 pt-2">
                            <button
                                onClick={handleAccept}
                                className="flex-1 bg-[var(--foreground)] text-[var(--background)] px-4 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:scale-105 transition-transform"
                            >
                                Accepter
                            </button>
                            <button
                                onClick={handleDecline}
                                className="flex-1 border border-[var(--border-color)] text-[var(--foreground)] px-4 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-colors"
                            >
                                Refuser
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
