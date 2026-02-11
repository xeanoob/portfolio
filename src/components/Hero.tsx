"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import ParallaxItem from "@/components/ParallaxItem";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen py-20 flex items-center justify-center relative overflow-hidden">

            {/* Fond abstrait léger */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full mix-blend-multiply opacity-50" />
                <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full mix-blend-multiply opacity-40" />
            </div>

            <div className="flex flex-col items-center justify-center text-center z-10 relative px-4">

                {/* Titre Principal */}
                {/* CHANGEMENT ICI : Ajout de 'mt-12' pour descendre le texte */}
                <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-black leading-[0.9] tracking-tighter mb-6">
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
                        className="block italic text-black/80"
                    >
                        Boutrin
                    </motion.span>
                </h1>

                {/* Sous-titre et Localisation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col items-center gap-4"
                >
                    <p className="text-xl md:text-2xl text-black/60 font-light max-w-2xl mx-auto leading-relaxed">
                        Développeur Fullstack Junior spécialisé en <span className="font-medium text-black">React</span> & <span className="font-medium text-black">Next.js</span>.
                    </p>

                    <div className="flex items-center gap-2 text-black/40 text-sm font-medium uppercase tracking-wide">
                        <MapPin size={16} />
                        <span>Basé à Orléans, France</span>
                    </div>
                </motion.div>

                {/* Boutons d'action */}
                <ParallaxItem offset={0} className="w-full mt-8">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">

                        {/* Bouton Projets (Noir) */}
                        <Link href="/projets" className="group relative">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-black text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/20 transition-all cursor-pointer"
                            >
                                Voir mes projets
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>

                        {/* Bouton Contact (Outline interactif) */}
                        <Link href="/contact">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 rounded-full font-medium border border-black/10 hover:border-black/30 bg-white/40 backdrop-blur-sm text-black transition-all flex items-center gap-2 cursor-pointer"
                            >
                                <Mail size={18} className="text-black/60" />
                                Me contacter
                            </motion.div>
                        </Link>
                    </div>
                </ParallaxItem>

                {/* Réseaux Sociaux */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex gap-6 text-black/40 justify-center pb-4"
                >
                    <a href="https://github.com/xeanoob" target="_blank" className="hover:text-black hover:scale-110 transition-all duration-300 p-2">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/ambroise-boutrin/" target="_blank" className="hover:text-blue-700 hover:scale-110 transition-all duration-300 p-2">
                        <Linkedin size={24} />
                    </a>
                </motion.div>
            </div>

        </section >
    );
}