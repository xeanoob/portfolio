"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, Zap, Shield, Sparkles } from "lucide-react";
import Link from "next/link";

const packages = [
    {
        name: "Essential",
        subtitle: "L'impact immédiat.",
        price: "dès 800€",
        description: "Une Landing Page ou un Portfolio conçu pour convertir. Idéal pour lancer une offre, présenter une identité ou tester un concept.",
        features: ["Design Exclusif (Pas de template)", "Développement Next.js", "Animations Scroll", "Optimisé Mobile & SEO", "1 Page Longue"],
        cta: "Lancer mon projet",
        icon: <Zap className="w-5 h-5" />,
        isPopular: false
    },
    {
        name: "Signature",
        subtitle: "L'expérience complète.",
        price: "dès 1800€",
        description: "Un site vitrine ou une application web de 5 à 10 pages pour asseoir votre autorité. Une architecture solide et une direction artistique poussée.",
        features: ["Stratégie de Contenu", "Jusqu'à 10 Pages / Vues", "CMS (Gestion de contenu)", "Interactions Avancées", "Analytics & GDPR", "Optimisation Performance"],
        cta: "Collaborer",
        icon: <Shield className="w-5 h-5" />,
        isPopular: true
    },
    {
        name: "Sur-Mesure",
        subtitle: "Sans limite.",
        price: "Sur Devis",
        description: "Logiciel métier (ERP/CRM), E-commerce complexe, SaaS ou Applications Web Full-stack. Une solution technique robuste pour des besoins critiques.",
        features: ["Architecture Headless", "Paiements (Stripe)", "Base de Données / API", "Comptes Utilisateurs", "Tableau de Bord Admin", "Maintenance Dédiée"],
        cta: "Discuter du projet",
        icon: <Sparkles className="w-5 h-5" />,
        isPopular: false
    }
];

const steps = [
    { title: "Discovery", desc: "Analyse de vos besoins, audit et définition de la stratégie business.", icon: "01" },
    { title: "Design", desc: "Direction artistique et prototypage interactif pour valider l'expérience.", icon: "02" },
    { title: "Development", desc: "Intégration pixel-perfect, animations et développement backend robuste.", icon: "03" },
    { title: "Delivery", desc: "Tests rigoureux, mise en production et accompagnement post-lancement.", icon: "04" }
];

export default function ServicesContent() {
    return (
        <main className="bg-[var(--background)] min-h-screen pb-24 transition-colors duration-300">
            {/* Hero Section - Theme Aware */}
            <header className="bg-[var(--background)] text-[var(--foreground)] pt-32 pb-20 md:pb-32 mb-16 md:mb-24 border-b border-[var(--border-color)] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--foreground),transparent)] opacity-[0.03] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-9xl font-serif mb-6 md:mb-8 tracking-tight">
                            Services<span className="opacity-30">.</span>
                        </h1>
                        <p className="text-lg md:text-3xl text-[var(--text-secondary)] max-w-3xl leading-relaxed font-light">
                            Trois niveaux d'excellence pour transformer vos ambitions en <span className="text-[var(--foreground)] font-normal">solutions digitales d'exception</span>.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Packages Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
                {packages.map((pkg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className={`group relative flex flex-col h-full rounded-3xl overflow-hidden transition-all duration-500 border border-[var(--border-color)] hover:border-[var(--border-hover)] glass-panel p-8 md:p-10 ${pkg.isPopular ? 'shadow-2xl ring-1 ring-[var(--foreground)]/5 border-[var(--foreground)]/20' : ''}`}
                    >
                        {pkg.isPopular && (
                            <div className="absolute top-6 right-6 bg-[var(--foreground)] text-[var(--background)] text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full z-20 shadow-xl">
                                Plus Demandé
                            </div>
                        )}

                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-2 bg-[var(--foreground)]/5 border border-[var(--border-color)] rounded-lg text-[var(--foreground)]">
                                {pkg.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-serif text-[var(--foreground)]">{pkg.name}</h3>
                                <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-tertiary)]">{pkg.subtitle}</p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <span className="text-4xl font-serif text-[var(--foreground)]">{pkg.price}</span>
                            {pkg.price !== "Sur Devis" && <span className="text-sm text-[var(--text-tertiary)] ml-2">min.</span>}
                        </div>

                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 min-h-[60px]">
                            {pkg.description}
                        </p>

                        <div className="h-px w-full bg-[var(--border-color)] mb-8"></div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {pkg.features.map((feat, i) => (
                                <li key={i} className="flex items-start gap-4 text-sm text-[var(--foreground)] group/item transition-colors">
                                    <div className="mt-1 p-0.5 rounded-full bg-[var(--foreground)]/5 border border-[var(--border-color)]">
                                        <Check size={12} className="text-[var(--text-tertiary)]" />
                                    </div>
                                    <span className="opacity-80 group-hover/item:opacity-100 transition-opacity">{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/contact"
                            className={`w-full py-4 flex items-center justify-center gap-3 text-xs font-mono uppercase tracking-[0.2em] transition-all duration-500 rounded-xl border ${pkg.isPopular
                                    ? 'bg-[var(--foreground)] text-[var(--background)] border-[var(--foreground)] hover:bg-transparent hover:text-[var(--foreground)] shadow-lg'
                                    : 'border-[var(--border-color)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]'
                                }`}
                        >
                            {pkg.cta} <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Visual Process Section */}
            <div className="max-w-7xl mx-auto px-6 mt-32 md:mt-48">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
                    <div>
                        <span className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-[0.3em] block mb-6">Workflow Professionnel</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-[var(--foreground)] mb-8 leading-tight">
                            Une approche méticuleuse du <span className="opacity-30">Pixel au Code.</span>
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-md">
                            Chaque projet suit une méthodologie rigoureuse pour garantir des performances optimales et une expérience utilisateur inégalée.
                        </p>
                    </div>

                    <div className="space-y-8 relative">
                        <div className="absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-[var(--border-color)] via-[var(--border-hover)] to-[var(--border-color)] hidden md:block"></div>

                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col md:flex-row gap-6 relative group"
                            >
                                <div className="w-14 h-14 shrink-0 rounded-full border border-[var(--border-color)] bg-[var(--background)] flex items-center justify-center font-serif text-xl text-[var(--text-tertiary)] group-hover:border-[var(--foreground)] group-hover:text-[var(--foreground)] transition-all duration-500 z-10 glass-panel shadow-xl">
                                    {step.icon}
                                </div>
                                <div className="pt-2">
                                    <h4 className="text-xl font-serif text-[var(--foreground)] mb-2 group-hover:translate-x-1 transition-transform duration-300">{step.title}</h4>
                                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-sm">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final High-Impact CTA */}
            <div className="max-w-7xl mx-auto px-6 mt-32 md:mt-48">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-3xl md:rounded-[3rem] bg-[var(--foreground)] text-[var(--background)] p-8 md:p-24 text-center border border-[var(--border-color)] shadow-3xl"
                >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--background)] opacity-[0.03] blur-[120px] rounded-full"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        <span className="text-[10px] md:text-xs font-mono opacity-40 uppercase tracking-[0.4em] block mb-6 md:mb-8 text-[var(--background)]">Prêt à passer au niveau supérieur ?</span>
                        <h2 className="text-3xl md:text-8xl font-serif mb-8 md:mb-12 tracking-tight leading-tight text-[var(--background)]">
                            Donnez à votre vision <br className="hidden md:block" /> la <span className="opacity-40">vitesse</span> qu'elle mérite.
                        </h2>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center w-full md:w-auto">
                            <Link
                                href="/contact"
                                className="w-full md:w-auto px-10 md:px-12 py-5 md:py-6 bg-[var(--background)] text-[var(--foreground)] rounded-full font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:scale-105 transition-transform shadow-2xl flex items-center justify-center gap-3 group"
                            >
                                Commencer un projet <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>

                            <a
                                href="mailto:boutrinambroise@gmail.com"
                                className="opacity-60 hover:opacity-100 border-b border-[var(--background)]/20 pb-1 transition-all text-base md:text-lg font-light tracking-wide truncate max-w-full text-[var(--background)]"
                            >
                                boutrinambroise@gmail.com
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
