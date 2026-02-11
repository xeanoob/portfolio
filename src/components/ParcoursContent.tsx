"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import ScrollIndicator from "@/components/ScrollIndicator";

const timeline = [
    {
        year: "2026",
        date: "Janvier 2026 - Présent",
        title: "Stage DevOps",
        company: "Sopra Steria",
        type: "work",
        description: "Automatisation des déploiements sur Azure, mise en place de pipelines CI/CD GitLab, et conteneurisation Docker/Kubernetes.",
        stack: ["Azure", "Kubernetes", "GitLab CI", "Terraform"]
    },
    {
        year: "2024",
        date: "Septembre 2024",
        title: "BTS SIO Option SLAM",
        company: "Lycée Benjamin Franklin",
        type: "edu",
        description: "Obtention du Brevet de Technicien Supérieur avec mention. Major de promotion sur les projets techniques.",
        stack: ["Java", "SQL", "Gestion de Projet"]
    },
    {
        year: "2024",
        date: "Mai 2024 - Juillet 2024",
        title: "Stage Développeur Fullstack",
        company: "ADENES",
        type: "work",
        description: "Conception et développement d'un plugin Outlook pour l'automatisation des flux de travail. Interface avec API REST interne.",
        stack: ["C#", ".NET", "React", "API"]
    },
    {
        year: "2023",
        date: "Septembre 2022 - Juin 2023",
        title: "BUT Informatique (1ère année)",
        company: "IUT d'Orléans",
        type: "edu",
        description: "Validation de la première année. Apprentissage des bases de l'algorithmique, du développement web et de la programmation système.",
        stack: ["C++", "HTML/CSS", "Linux"]
    },
];

export default function ParcoursContent() {
    return (
        <main className="min-h-screen bg-[var(--background)] pt-32 pb-20 px-6">
            <ScrollReveal className="max-w-6xl mx-auto">

                <header className="mb-32 text-center relative h-[80vh] flex flex-col justify-center items-center">
                    <div>
                        <h1 className="text-6xl md:text-9xl font-serif mb-6 text-[var(--foreground)]">Mon Parcours</h1>
                        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                            De la découverte à l'expertise.
                        </p>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                        <ScrollIndicator />
                    </div>
                </header>

                <div className="relative">
                    {/* Central Line Desktop */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border-color)] -translate-x-1/2 hidden md:block"></div>
                    {/* Left Line Mobile */}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--border-color)] md:hidden"></div>

                    <div className="space-y-16 md:space-y-32">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                style={{ willChange: "transform, opacity" }}
                                className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-20 relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                {/* Mobile Dot */}
                                <div className="absolute left-4 -translate-x-1/2 w-3 h-3 bg-[var(--foreground)] rounded-full md:hidden mt-2"></div>

                                {/* Year / Visual Side (Desktop: Box, Mobile: Integrated) */}
                                <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} w-full pl-10 md:pl-0`}>
                                    <div className="relative z-20 w-full md:w-auto">
                                        <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] p-4 md:p-6 rounded-2xl shadow-sm w-full md:max-w-sm relative group hover:scale-[1.02] transition-transform duration-300">
                                            <span className="inline-block px-3 py-1 bg-[var(--foreground)] text-[var(--background)] rounded-md text-xs font-bold font-mono uppercase tracking-wider mb-2">
                                                {item.date}
                                            </span>
                                            <p className="text-xs md:text-sm text-[var(--text-secondary)] font-medium uppercase tracking-widest">{item.company}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`md:w-1/2 w-full pl-10 md:pl-0 text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    <h3 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[var(--foreground)]">{item.title}</h3>
                                    <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 max-w-md md:mx-0 inline-block">
                                        {item.description}
                                    </p>
                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-start`}>
                                        {item.stack.map((stack) => (
                                            <span key={stack} className="text-[10px] md:text-xs font-bold px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-full text-[var(--text-secondary)]">
                                                {stack}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-32 flex justify-center">
                    <a
                        href="/images/fichiers/CV%20AMBROISE%20BOUTRIN%20INFORMATIQUE.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 text-xl font-serif border-b border-[var(--text-secondary)] pb-1 hover:opacity-50 transition-opacity text-[var(--foreground)]"
                    >
                        <span className="w-12 h-12 rounded-full bg-[var(--foreground)] text-[var(--background)] flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Download size={20} />
                        </span>
                        Voir version CV imprimable
                    </a>
                </div>

            </ScrollReveal>
        </main>
    );
}
