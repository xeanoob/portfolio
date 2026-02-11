"use client";

import { Download, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CVPage() {
    return (
        <main className="min-h-screen bg-zinc-50 pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-xl shadow-black/5 rounded-none md:rounded-lg overflow-hidden print:shadow-none print:max-w-none">

                {/* Header */}
                <div className="bg-[#1a1a1a] text-white p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 print:bg-white print:text-black print:p-0 print:border-b">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-2">Ambroise Boutrin</h1>
                        <p className="text-xl opacity-80 font-light">Développeur Fullstack Junior</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 text-sm opacity-70">
                        <a href="mailto:boutrinambroise@gmail.com" className="flex items-center gap-2 hover:text-white transition-opacity"><Mail size={14} /> boutrinambroise@gmail.com</a>
                        <span className="flex items-center gap-2"><MapPin size={14} /> Orléans, France</span>
                        <span className="flex items-center gap-2"><Phone size={14} /> 07 59 87 83 34</span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-10 md:p-16 space-y-12 print:p-8">

                    {/* Intro */}
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-6 border-b border-black/10 pb-2">Profil</h3>
                        <p className="text-lg leading-relaxed text-black/80 max-w-2xl">
                            Étudiant en informatique passionné par la création d'expériences numériques immersives et performantes.
                            Spécialisé dans l'écosystème JavaScript (Next.js) et l'architecture logicielle.
                            Je cherche à rejoindre une équipe ambitieuse pour relever de nouveaux défis techniques.
                        </p>
                    </section>

                    {/* Expérience */}
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-8 border-b border-black/10 pb-2">Expériences Professionnelles</h3>

                        <div className="space-y-10">
                            <div className="group">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-xl font-bold">Développeur Fullstack (Stage)</h4>
                                    <span className="font-mono text-sm text-black/50">2024</span>
                                </div>
                                <div className="text-black/60 italic mb-4">ADENES, Orléans</div>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-black/70 text-sm md:text-base marker:text-black/30">
                                    <li>Développement d'un plugin Outlook (VSTO/C#) pour l'automatisation des tâches administratives.</li>
                                    <li>Conception d'une API REST pour la synchronisation des données inter-services.</li>
                                    <li>Réduction du temps de traitement des emails de <strong>30%</strong> pour l'équipe support.</li>
                                </ul>
                            </div>

                            <div className="group">
                                <div className="flex justify-between items-baseline mb-2">
                                    <h4 className="text-xl font-bold">Projet Académique : Gestion JO 2024</h4>
                                    <span className="font-mono text-sm text-black/50">2024</span>
                                </div>
                                <div className="text-black/60 italic mb-4">Lycée Benjamin Franklin</div>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-black/70 text-sm md:text-base marker:text-black/30">
                                    <li>Création d'une application Desktop complète en Java (Swing/JDBC).</li>
                                    <li>Modélisation et implémentation d'une base de données relationnelle complexe.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Formation */}
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-8 border-b border-black/10 pb-2">Formation</h3>
                        <div className="flex flex-col gap-6">
                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h4 className="text-lg font-bold">BTS Services Informatiques aux Organisations (SIO)</h4>
                                    <span className="text-sm text-black/50">2024 - Présent</span>
                                </div>
                                <p className="text-black/60">Lycée Benjamin Franklin, Orléans - Option SLAM (Solutions Logicielles)</p>
                            </div>
                            <div>
                                <div className="flex justify-between items-baseline">
                                    <h4 className="text-lg font-bold">BUT Informatique</h4>
                                    <span className="text-sm text-black/50">2023</span>
                                </div>
                                <p className="text-black/60">IUT d'Orléans - 1ère année validée</p>
                            </div>
                        </div>
                    </section>

                    {/* Compétences Grid */}
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-8 border-b border-black/10 pb-2">Compétences</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-sm">
                            <div>
                                <strong className="block text-black mb-1">Frontend</strong>
                                <p className="text-black/60">React, Next.js, Tailwind, Framer Motion, TypeScript</p>
                            </div>
                            <div>
                                <strong className="block text-black mb-1">Backend</strong>
                                <p className="text-black/60">Node.js, C#, Java, Supabase, SQL</p>
                            </div>
                            <div>
                                <strong className="block text-black mb-1">Outils</strong>
                                <p className="text-black/60">Git, Docker, Figma, Linux</p>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-10 right-10 z-50 print:hidden">
                <a
                    href="/images/fichiers/CV%20AMBROISE%20BOUTRIN%20INFORMATIQUE.pdf"
                    download="CV_Ambroise_Boutrin.pdf" // Nom du fichier téléchargé (propre)
                    className="flex items-center gap-3 px-6 py-4 bg-black text-white rounded-full shadow-2xl hover:scale-110 transition-transform font-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Download size={20} />
                    <span>Télécharger mon CV</span>
                </a>
            </div>

        </main>
    );
}
