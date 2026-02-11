"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import ParallaxItem from "@/components/ParallaxItem";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">

            <div className="flex flex-col items-center justify-center text-center z-10 relative">
                <ParallaxItem offset={-20} className="mb-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="inline-block px-3 py-1 bg-black/5 border border-black/10 rounded-full text-xs font-bold tracking-widest uppercase text-black/70 mb-6">
                            Développeur Fullstack Junior
                        </span>
                    </motion.div>

                    <h1 className="font-serif text-7xl md:text-8xl lg:text-9xl text-black leading-[0.9] tracking-tighter mb-8 bg-clip-text">
                        <motion.span
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} // "Power4.out" like easing
                            className="block"
                        >
                            Ambroise
                        </motion.span>
                        <motion.span
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="block italic text-black/90"
                        >
                            Boutrin
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-xl md:text-2xl text-black/60 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        Concevoir des interfaces numériques qui allient <span className="font-medium text-black">esthétique</span> et <span className="font-medium text-black">performance</span>.
                    </motion.p>
                </ParallaxItem>

                <ParallaxItem offset={0} className="w-full mt-10">
                    <div className="flex flex-col sm:flex-row gap-8 space-y-4 sm:space-y-0 justify-center items-center w-full">
                        <Link
                            href="/projets"
                            className="bg-black text-white px-10 py-5 rounded-full font-medium hover:scale-105 hover:bg-zinc-900 transition-all duration-300 flex items-center gap-2 group shadow-xl shadow-black/20 z-20 text-lg"
                        >
                            Voir les projets
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="px-10 py-5 rounded-full font-medium border-2 border-black/10 hover:bg-black/5 hover:border-black/30 transition-all duration-300 text-black z-20 text-lg bg-white/50 backdrop-blur-sm"
                        >
                            Me contacter
                        </Link>
                    </div>
                </ParallaxItem>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 flex gap-8 text-black/40 justify-center"
                >
                    <a href="#" className="hover:text-black hover:scale-110 transition-all duration-300"><Github size={28} /></a>
                    <a href="#" className="hover:text-black hover:scale-110 transition-all duration-300"><Linkedin size={28} /></a>
                    <a href="#" className="hover:text-black hover:scale-110 transition-all duration-300"><Mail size={28} /></a>
                </motion.div>
            </div>

            {/* Abstract Background Element (Subtle) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-black/5 to-transparent blur-[100px] opacity-50 rounded-full" />
            </div>
        </section>
    );
}
