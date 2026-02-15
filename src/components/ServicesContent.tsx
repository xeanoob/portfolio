"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const packages = [
    {
        name: "Essential",
        subtitle: "L'impact immédiat.",
        description: "Une Landing Page ou un Portfolio conçu pour convertir. Idéal pour lancer une offre ou présenter une identité.",
        features: ["Design Exclusif (Pas de template)", "Développement Next.js", "Animations Scroll", "Optimisé Mobile & SEO", "1 Page Longue"],
        cta: "Lancer",
        isPopular: false
    },
    {
        name: "Signature",
        subtitle: "L'expérience complète.",
        description: "Un site vitrine de 5 à 10 pages pour asseoir votre autorité. Une architecture solide et une direction artistique poussée.",
        features: ["Stratégie de Contenu", " Jusqu'à 10 Pages", "CMS (Gestion de contenu)", "Interactions Avancées", "Analytics & GDPR", "Optimisation Performance"],
        cta: "Collaborer",
        isPopular: true
    },
    {
        name: "Sur-Mesure",
        subtitle: "Sans limite.",
        description: "E-commerce complexe, SaaS ou plateforme expérientielle. Une solution technique robuste pour des besoins spécifiques.",
        features: ["Architecture Headless", "Paiements (Stripe)", "Base de Données / API", "Comptes Utilisateurs", "Tableau de Bord Admin", "Maintenance Dédiée"],
        cta: "Discuter",
        isPopular: false
    }
];

export default function ServicesContent() {
    return (
        <section className="py-24 bg-[var(--background)] min-h-screen">

            {/* Header */}
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center">
                <h1 className="text-4xl md:text-8xl font-serif text-[var(--foreground)] mb-4 md:mb-6">
                    Création Web.
                </h1>
                <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                    Trois niveaux d'accompagnement pour transformer votre vision en réalité digitale.
                </p>
            </div>

            {/* Packages Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={`relative p-8 md:p-12 border border-white/10 flex flex-col justify-between group hover:border-white/30 transition-colors duration-500 ${pkg.isPopular ? 'bg-white/5' : ''}`}
                    >
                        {/* Popular Badge */}
                        {pkg.isPopular && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-xs font-mono uppercase tracking-widest px-4 py-1">
                                Recommandé
                            </div>
                        )}

                        <div>
                            {/* Header */}
                            <h3 className="text-4xl font-serif text-white mb-2">{pkg.name}</h3>
                            <p className="text-white/60 font-light mb-8">{pkg.subtitle}</p>

                            {/* Description */}
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-10 border-l border-white/10 pl-4">
                                {pkg.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-4 mb-12">
                                {pkg.features.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                        <Check size={16} className="mt-0.5 text-white/40 shrink-0" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <Link
                            href="/contact"
                            className={`w-full py-4 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest border transition-all duration-300 ${pkg.isPopular ? 'bg-white text-black border-white hover:bg-transparent hover:text-white' : 'border-white/20 text-white hover:bg-white hover:text-black'}`}
                        >
                            {pkg.cta}
                        </Link>

                    </motion.div>
                ))}
            </div>

            {/* FAQ / Process Teaser */}
            <div className="max-w-7xl mx-auto px-6 mt-32 border-t border-white/10 pt-20 flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="md:w-1/3">
                    <h4 className="text-2xl font-serif text-white mb-4">Le Processus</h4>
                    <p className="text-[var(--text-secondary)]">De la conception à la mise en ligne, chaque étape est validée pour garantir l'excellence.</p>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <span className="text-xs font-mono text-white/40 block mb-2">01. Discovery</span>
                        <p className="text-white/80">Analyse de vos besoins, audit de l'existant et définition de la stratégie.</p>
                    </div>
                    <div>
                        <span className="text-xs font-mono text-white/40 block mb-2">02. Design</span>
                        <p className="text-white/80">Recherche visuelle, direction artistique et prototypage directement dans le navigateur.</p>
                    </div>
                    <div>
                        <span className="text-xs font-mono text-white/40 block mb-2">03. Development</span>
                        <p className="text-white/80">Intégration pixel-perfect, animations et développement backend.</p>
                    </div>
                    <div>
                        <span className="text-xs font-mono text-white/40 block mb-2">04. Delivery</span>
                        <p className="text-white/80">Tests, mise en production, formation et suivi post-lancement.</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
