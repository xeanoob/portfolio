"use client";

import { Download, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CVPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] pt-32 pb-20 px-6 transition-colors duration-300">
            <div className="max-w-4xl mx-auto bg-[var(--bg-secondary)] shadow-2xl shadow-black/20 rounded-none md:rounded-3xl overflow-hidden print:shadow-none print:max-w-none border border-[var(--border-color)]">

                {/* Header */}
                <div className="bg-[var(--foreground)] text-[var(--background)] p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 transition-colors duration-300 print:bg-white print:text-black print:p-0 print:border-b">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-2">Ambroise Boutrin</h1>
                        <p className="text-xl opacity-80 font-light uppercase tracking-widest">Développeur Fullstack Junior</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-3 text-sm">
                        <a href="mailto:boutrinambroise@gmail.com" className="flex items-center gap-2 hover:opacity-70 transition-opacity"><Mail size={16} /> boutrinambroise@gmail.com</a>
                        <span className="flex items-center gap-2 opacity-80"><MapPin size={16} /> Orléans, France</span>
                        <span className="flex items-center gap-2 opacity-80"><Phone size={16} /> 07 59 87 83 34</span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-10 md:p-16 space-y-16 print:p-8">

                    {/* Intro */}
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-8 border-b border-[var(--border-color)] pb-3">Profil</h3>
                        <p className="text-lg leading-relaxed text-[var(--foreground)]/90 max-w-3xl">
                            Étudiant en informatique passionné par la création d'expériences numériques immersives et performantes.
                            Spécialisé dans l'écosystème JavaScript (Next.js) et l'architecture logicielle.
                            Je cherche à rejoindre une équipe ambitieuse pour relever de nouveaux défis techniques.
                        </p>
                    </section>

                    {/* Expérience */}
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-10 border-b border-[var(--border-color)] pb-3">Expériences Professionnelles</h3>

                        <div className="space-y-12">
                            <div className="group">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-3 gap-2">
                                    <h4 className="text-2xl font-bold text-[var(--foreground)]">Développeur Fullstack (Stage)</h4>
                                    <span className="font-mono text-sm px-3 py-1 bg-[var(--foreground)]/5 rounded-full text-[var(--text-secondary)]">2024</span>
                                </div>
                                <div className="text-[var(--text-secondary)] italic mb-6 flex items-center gap-2 text-lg">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/30"></span>
                                    ADENES, Orléans
                                </div>
                                <ul className="space-y-4 text-[var(--foreground)]/80 text-base md:text-lg">
                                    <li className="flex gap-4">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/20 mt-2.5"></span>
                                        Développement d'un plugin Outlook (VSTO/C#) pour l'automatisation des tâches administratives.
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/20 mt-2.5"></span>
                                        Conception d'une API REST pour la synchronisation des données inter-services.
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/20 mt-2.5"></span>
                                        Réduction du temps de traitement des emails de <strong className="text-[var(--foreground)]">30%</strong> pour l'équipe support.
                                    </li>
                                </ul>
                            </div>

                            <div className="group">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-3 gap-2">
                                    <h4 className="text-2xl font-bold text-[var(--foreground)]">Projet Académique : Gestion JO 2024</h4>
                                    <span className="font-mono text-sm px-3 py-1 bg-[var(--foreground)]/5 rounded-full text-[var(--text-secondary)]">2024</span>
                                </div>
                                <div className="text-[var(--text-secondary)] italic mb-6 flex items-center gap-2 text-lg">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/30"></span>
                                    Lycée Benjamin Franklin
                                </div>
                                <ul className="space-y-4 text-[var(--foreground)]/80 text-base md:text-lg">
                                    <li className="flex gap-4">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/20 mt-2.5"></span>
                                        Création d'une application Desktop complète en Java (Swing/JDBC).
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/20 mt-2.5"></span>
                                        Modélisation et implémentation d'une base de données relationnelle complexe.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Formation */}
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-10 border-b border-[var(--border-color)] pb-3">Formation</h3>
                        <div className="flex flex-col gap-8">
                            <div className="relative pl-8 border-l border-[var(--border-color)]">
                                <span className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[var(--foreground)] pr-2"></span>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
                                    <h4 className="text-xl font-bold text-[var(--foreground)]">BTS Services Informatiques (SIO)</h4>
                                    <span className="text-sm font-medium text-[var(--text-secondary)] bg-[var(--foreground)]/5 px-3 py-1 rounded-full">2024 - Présent</span>
                                </div>
                                <p className="text-[var(--text-secondary)] text-lg">Lycée Benjamin Franklin, Orléans - Option SLAM</p>
                            </div>
                            <div className="relative pl-8 border-l border-[var(--border-color)]">
                                <span className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[var(--foreground)]/30 pr-2"></span>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
                                    <h4 className="text-xl font-bold text-[var(--foreground)]">BUT Informatique</h4>
                                    <span className="text-sm font-medium text-[var(--text-secondary)] bg-[var(--foreground)]/5 px-3 py-1 rounded-full">2023</span>
                                </div>
                                <p className="text-[var(--text-secondary)] text-lg">IUT d'Orléans - 1ère année validée</p>
                            </div>
                        </div>
                    </section>

                    {/* Compétences Grid */}
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-10 border-b border-[var(--border-color)] pb-3">Compétences</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div>
                                <strong className="block text-xl font-serif mb-4 text-[var(--foreground)]">Frontend</strong>
                                <div className="flex flex-wrap gap-2 text-[var(--text-secondary)]">
                                    {["React", "Next.js", "TailwindCSS", "Framer Motion", "TypeScript"].map(t => (
                                        <span key={t} className="px-3 py-1 bg-[var(--foreground)]/5 rounded-md text-sm">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <strong className="block text-xl font-serif mb-4 text-[var(--foreground)]">Backend</strong>
                                <div className="flex flex-wrap gap-2 text-[var(--text-secondary)]">
                                    {["Node.js", "C#", "Java", "PostgreSQL", "API REST", "SQL"].map(t => (
                                        <span key={t} className="px-3 py-1 bg-[var(--foreground)]/5 rounded-md text-sm">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <strong className="block text-xl font-serif mb-4 text-[var(--foreground)]">Outils</strong>
                                <div className="flex flex-wrap gap-2 text-[var(--text-secondary)]">
                                    {["Git", "Docker", "Linux", "Figma", "Jira", "CI/CD"].map(t => (
                                        <span key={t} className="px-3 py-1 bg-[var(--foreground)]/5 rounded-md text-sm">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-10 right-10 z-50 print:hidden">
                <a
                    href="/images/fichiers/CV%20AMBROISE%20BOUTRIN%20INFORMATIQUE.pdf"
                    download="CV_Ambroise_Boutrin.pdf"
                    className="flex items-center gap-3 px-8 py-5 bg-[var(--foreground)] text-[var(--background)] rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all font-bold group"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Download size={22} className="group-hover:-translate-y-1 transition-transform" />
                    <span>Télécharger mon CV</span>
                </a>
            </div>

        </main>
    );
}
