"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import ParallaxItem from "@/components/ParallaxItem";
import { motion } from "framer-motion";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Hero() {
    return (
        <section className="min-h-screen py-20 flex items-center justify-center relative overflow-hidden">

            {/* Fond Grid Géométrique */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,var(--background),transparent)]"></div>

            <div className="flex flex-col items-center justify-center text-center z-10 relative px-4">

                {/* Titre Principal */}
                <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[var(--foreground)] leading-[0.9] tracking-tighter mb-6">
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="block"
                    >
                        Ambroise
                    </motion.span>
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="block italic text-[var(--text-secondary)]"
                    >
                        Boutrin
                    </motion.span>
                </h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-2xl md:text-4xl font-light mb-8 text-[var(--foreground)]"
                >
                    Concepteur d'expériences digitales <span className="italic font-serif">sur mesure</span>.
                </motion.h2>

                {/* Sous-titre et Localisation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col items-center gap-4"
                >
                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto leading-relaxed">
                        J'aide les entreprises et entrepreneurs à bâtir leur présence en ligne avec des <span className="font-medium text-[var(--foreground)]">sites web modernes</span> et performants.
                    </p>

                    <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm font-medium uppercase tracking-wide">
                        <MapPin size={16} />
                        <span>Basé à Orléans, France</span>
                    </div>
                </motion.div>

                {/* Boutons d'action */}
                <ParallaxItem offset={0} className="w-full mt-8">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">

                        {/* Bouton Projets (Inverse) */}
                        <Link href="/contact" className="group relative">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[var(--foreground)] text-[var(--background)] px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all cursor-pointer"
                            >
                                Démarrer mon projet
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>

                        {/* Bouton Contact (Outline interactif) */}
                        <Link href="/projets">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full font-medium border border-[var(--border-color)] hover:border-[var(--foreground)] bg-[var(--bg-secondary)] backdrop-blur-sm text-[var(--foreground)] transition-all flex items-center gap-2 cursor-pointer"
                            >
                                Voir mes réalisations
                            </motion.div>
                        </Link>
                    </div>
                </ParallaxItem>

                {/* Réseaux Sociaux */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex gap-6 text-[var(--text-secondary)] justify-center pb-4"
                >
                    <a href="https://github.com/xeanoob" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] hover:scale-110 transition-all duration-300 p-2" aria-label="Profil GitHub d'Ambroise Boutrin">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/ambroise-boutrin/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300 p-2" aria-label="Profil LinkedIn d'Ambroise Boutrin">
                        <Linkedin size={24} />
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <ScrollIndicator />
            </div>

        </section >
    );
}