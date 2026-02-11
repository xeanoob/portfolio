"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";

const timeline = [
    {
        year: "2026",
        date: "Janvier 2026 - Présent",
        title: "Stage DevOps & Cloud",
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

export default function ParcoursPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20 px-6">
            <ScrollReveal className="max-w-6xl mx-auto">

                <header className="mb-32 text-center">
                    <h1 className="text-6xl md:text-9xl font-serif mb-6">Mon Parcours</h1>
                    <p className="text-xl text-black/60 max-w-2xl mx-auto">
                        De la découverte à l'expertise.
                    </p>
                </header>

                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/10 -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-32">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20%" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                {/* Year / Visual Side */}
                                <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} w-full`}>
                                    <div className="relative z-20">
                                        <div className="relative z-30 bg-white border border-black/10 p-6 rounded-2xl shadow-sm max-w-sm">
                                            <span className="inline-block px-3 py-1 bg-black text-white rounded-md text-sm font-bold font-mono uppercase tracking-wider mb-2 relative z-40">
                                                {item.date}
                                            </span>
                                            <p className="text-sm text-black/60 font-medium uppercase tracking-widest relative z-40">{item.company}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`md:w-1/2 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'} w-full`}>
                                    <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">{item.title}</h3>
                                    <p className="text-lg text-black/70 leading-relaxed mb-6 max-w-md mx-auto md:mx-0 inline-block">
                                        {item.description}
                                    </p>
                                    <div className={`flex flex-wrap gap-2 justify-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                                        {item.stack.map((stack) => (
                                            <span key={stack} className="text-xs font-bold px-3 py-1 bg-zinc-100 rounded-full text-black/60">
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
                    <Link href="/cv" className="group flex items-center gap-4 text-xl font-serif border-b border-black pb-1 hover:opacity-50 transition-opacity">
                        <span className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Download size={20} />
                        </span>
                        Voir version CV imprimable
                    </Link>
                </div>

            </ScrollReveal>
        </main>
    );
}
