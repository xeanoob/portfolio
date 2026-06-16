"use client";

import { Download, Mail, MapPin, Phone, Globe } from "lucide-react";

export default function CVPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] pt-32 pb-20 px-6 transition-colors duration-300">
            <div className="max-w-4xl mx-auto bg-[var(--bg-secondary)] shadow-2xl shadow-black/20 rounded-none md:rounded-3xl overflow-hidden print:shadow-none print:max-w-none border border-[var(--border-color)]">

                {/* Header */}
                <div className="bg-[var(--foreground)] text-[var(--background)] p-10 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 transition-colors duration-300 print:bg-white print:text-black print:p-0 print:border-b">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-2">Ambroise Boutrin</h1>
                        <p className="text-xl opacity-80 font-light uppercase tracking-widest">Étudiant L3 MIAGE | Développeur Fullstack Junior</p>
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
                            Futur étudiant en L3 MIAGE à l&apos;Université d&apos;Orléans après un BTS SIO et un an de BUT Informatique. Fort de deux expériences marquantes chez Sopra Steria et ADENES, je maîtrise le développement d&apos;applications, l&apos;intégration d&apos;APIs et l&apos;automatisation de processus. Rigoureux et doté de cette double sensibilité technique et fonctionnelle propre à la MIAGE, je recherche un stage de 3 mois pour accompagner vos projets SI.
                        </p>
                    </section>

                    {/* Expérience */}
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-10 border-b border-[var(--border-color)] pb-3">Expériences Professionnelles</h3>

                        <div className="space-y-12">
                            <div className="group">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-3 gap-2">
                                    <h4 className="text-2xl font-bold text-[var(--foreground)]">Stage — Sopra Steria</h4>
                                    <span className="font-mono text-sm px-3 py-1 bg-[var(--foreground)]/5 rounded-full text-[var(--text-secondary)]">2026</span>
                                </div>
                                <div className="text-[var(--text-secondary)] italic mb-6 flex items-center gap-2 text-lg">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/30"></span>
                                    Paris La Défense
                                </div>
                                <ul className="space-y-4 text-[var(--foreground)]/80 text-base md:text-lg">
                                    <li className="flex gap-4">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/20 mt-2.5"></span>
                                        <strong className="text-[var(--foreground)]">Automatisation Sécurité :</strong>&nbsp;Workflow de récupération d&apos;alertes et génération automatique de rapports d&apos;audit Word.
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/20 mt-2.5"></span>
                                        <strong className="text-[var(--foreground)]">DevOps :</strong>&nbsp;Déploiement d&apos;un outil de recherche par trigramme optimisé sur GitLab.
                                    </li>
                                </ul>
                            </div>

                            <div className="group">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-3 gap-2">
                                    <h4 className="text-2xl font-bold text-[var(--foreground)]">Créateur de solutions Web — Micro-entreprise</h4>
                                    <span className="font-mono text-sm px-3 py-1 bg-[var(--foreground)]/5 rounded-full text-[var(--text-secondary)]">Depuis janv. 2026</span>
                                </div>
                                <div className="text-[var(--text-secondary)] italic mb-6 flex items-center gap-2 text-lg">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/30"></span>
                                    Orléans
                                </div>
                                <ul className="space-y-4 text-[var(--foreground)]/80 text-base md:text-lg">
                                    <li className="flex gap-4">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/20 mt-2.5"></span>
                                        <strong className="text-[var(--foreground)]">Gestion de projet &amp; Client :</strong>&nbsp;Recueil des besoins, rédaction de cahiers des charges, devis et facturation.
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/20 mt-2.5"></span>
                                        <strong className="text-[var(--foreground)]">Développement :</strong>&nbsp;Conception et mise en ligne de sites web sur-mesure (vitrines et e-commerce).
                                    </li>
                                </ul>
                            </div>

                            <div className="group">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-3 gap-2">
                                    <h4 className="text-2xl font-bold text-[var(--foreground)]">Stage — ADENES</h4>
                                    <span className="font-mono text-sm px-3 py-1 bg-[var(--foreground)]/5 rounded-full text-[var(--text-secondary)]">2024/2025</span>
                                </div>
                                <div className="text-[var(--text-secondary)] italic mb-6 flex items-center gap-2 text-lg">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/30"></span>
                                    Lyon
                                </div>
                                <ul className="space-y-4 text-[var(--foreground)]/80 text-base md:text-lg">
                                    <li className="flex gap-4">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/20 mt-2.5"></span>
                                        <strong className="text-[var(--foreground)]">Outils collaboratifs :</strong>&nbsp;Création d&apos;un Add-in Outlook et d&apos;une API REST pour l&apos;archivage automatique de pièces jointes.
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--foreground)]/20 mt-2.5"></span>
                                        <strong className="text-[var(--foreground)]">Intégration Web :</strong>&nbsp;Développement d&apos;interfaces (HTML5/CSS3/W3C) et application des protocoles de sécurité.
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
                                    <h4 className="text-xl font-bold text-[var(--foreground)]">Licence MIAGE</h4>
                                    <span className="text-sm font-medium text-[var(--text-secondary)] bg-[var(--foreground)]/5 px-3 py-1 rounded-full">2026 - 2027</span>
                                </div>
                                <p className="text-[var(--text-secondary)] text-lg">Université d&apos;Orléans — 3ème année</p>
                            </div>
                            <div className="relative pl-8 border-l border-[var(--border-color)]">
                                <span className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[var(--foreground)]/50 pr-2"></span>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
                                    <h4 className="text-xl font-bold text-[var(--foreground)]">BTS SIO Option SLAM</h4>
                                    <span className="text-sm font-medium text-[var(--text-secondary)] bg-[var(--foreground)]/5 px-3 py-1 rounded-full">2024 - 2026</span>
                                </div>
                                <p className="text-[var(--text-secondary)] text-lg">Lycée Benjamin Franklin, Orléans</p>
                            </div>
                            <div className="relative pl-8 border-l border-[var(--border-color)]">
                                <span className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[var(--foreground)]/30 pr-2"></span>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
                                    <h4 className="text-xl font-bold text-[var(--foreground)]">BUT Informatique</h4>
                                    <span className="text-sm font-medium text-[var(--text-secondary)] bg-[var(--foreground)]/5 px-3 py-1 rounded-full">2023 - 2024</span>
                                </div>
                                <p className="text-[var(--text-secondary)] text-lg">IUT d&apos;Orléans — 1ère année</p>
                            </div>
                            <div className="relative pl-8 border-l border-[var(--border-color)]">
                                <span className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-[var(--foreground)]/15 pr-2"></span>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2 gap-2">
                                    <h4 className="text-xl font-bold text-[var(--foreground)]">Baccalauréat STI2D Option SIN</h4>
                                    <span className="text-sm font-medium text-[var(--text-secondary)] bg-[var(--foreground)]/5 px-3 py-1 rounded-full">2019 - 2023</span>
                                </div>
                                <p className="text-[var(--text-secondary)] text-lg">Lycée Sainte Croix - Sainte Euverte — Mention Assez Bien</p>
                            </div>
                        </div>
                    </section>

                    {/* Compétences Grid */}
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-10 border-b border-[var(--border-color)] pb-3">Compétences</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div>
                                <strong className="block text-xl font-serif mb-4 text-[var(--foreground)]">Développement Logiciel</strong>
                                <div className="flex flex-wrap gap-2 text-[var(--text-secondary)]">
                                    {["Java", "C#", "Python", "HTML/CSS", "JavaScript", "API REST"].map(t => (
                                        <span key={t} className="px-3 py-1 bg-[var(--foreground)]/5 rounded-md text-sm">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <strong className="block text-xl font-serif mb-4 text-[var(--foreground)]">DevOps & Base de données</strong>
                                <div className="flex flex-wrap gap-2 text-[var(--text-secondary)]">
                                    {["Git", "GitLab CI", "MySQL", "MariaDB", "Docker", "Automatisation"].map(t => (
                                        <span key={t} className="px-3 py-1 bg-[var(--foreground)]/5 rounded-md text-sm">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <strong className="block text-xl font-serif mb-4 text-[var(--foreground)]">Méthodes & Sécurité</strong>
                                <div className="flex flex-wrap gap-2 text-[var(--text-secondary)]">
                                    {["Agile / SCRUM", "Cybersécurité", "Gestion de Projet", "W3C"].map(t => (
                                        <span key={t} className="px-3 py-1 bg-[var(--foreground)]/5 rounded-md text-sm">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Langues */}
                    <section>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-10 border-b border-[var(--border-color)] pb-3">Langues</h3>
                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-3">
                                <Globe size={18} className="text-[var(--text-secondary)]" />
                                <span className="text-[var(--foreground)] font-medium">Français</span>
                                <span className="text-xs text-[var(--text-secondary)] bg-[var(--foreground)]/5 px-2 py-0.5 rounded-full">Langue Maternelle</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Globe size={18} className="text-[var(--text-secondary)]" />
                                <span className="text-[var(--foreground)] font-medium">Anglais</span>
                                <span className="text-xs text-[var(--text-secondary)] bg-[var(--foreground)]/5 px-2 py-0.5 rounded-full">B2</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Globe size={18} className="text-[var(--text-secondary)]" />
                                <span className="text-[var(--foreground)] font-medium">Espagnol</span>
                                <span className="text-xs text-[var(--text-secondary)] bg-[var(--foreground)]/5 px-2 py-0.5 rounded-full">B1</span>
                            </div>
                        </div>
                    </section>

                </div>
            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-10 right-10 z-50 print:hidden">
                <a
                    href="/images/fichiers/CV_Ambroise_Boutrin_MIAGE.pdf"
                    download="CV_Ambroise_Boutrin_MIAGE.pdf"
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
