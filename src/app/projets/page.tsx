"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";

const projects = [
    {
        title: "Site E-commerce Garanches",
        category: "Web Fullstack",
        description: "Plateforme de vente de vins avec gestion de panier, paiement sécurisé et back-office administrateur. Design premium et performance optimisée.",
        tech: ["Next.js", "Stripe", "TailwindCSS", "Supabase"],
        color: "bg-[#111]",
        textColor: "text-white",
        link: "https://garanches.vercel.app/",
        image: "/images/garanches.png"
    },
    {
        title: "Analyse de Graphes (SAE)",
        category: "Data Science & Algorithmique",
        description: "Projet d'analyse de réseaux d'acteurs utilisant la théorie des graphes. Implémentation d'algorithmes de centralité et de détection de communautés avec NetworkX.",
        tech: ["Python", "NetworkX", "Matplotlib", "SciPy"],
        color: "bg-[#1a1a1a]",
        textColor: "text-white",
        link: "https://github.com/Xeananas/SAEGRAH",
        image: "/images/graph.png" // Si vous avez une image pour ce projet, mettez le chemin ici (ex: "/images/graph_project.jpg")
    },
    {
        title: "Application de Gestion JO 2024",
        category: "Desktop Application",
        description: "Solution complète pour l'administration des épreuves et des résultats des Jeux Olympiques. Interface Java Swing moderne avec base de données relationnelle pour le suivi des athlètes et des médailles.",
        tech: ["Java", "Swing", "MySQL", "JDBC"],
        color: "bg-[#f0f0f0]",
        textColor: "text-black",
        link: "https://github.com/xeanoob/GSBcompterendu",
        image: "/images/jo.png"
    },
    {
        title: "GSB - Gestion de Comptes Rendus",
        category: "Application Web & Mobile",
        description: "Application de gestion des visites médicales pour les laboratoires Galaxy Swiss Bourdin. Suivi des comptes rendus, frais et planning des visiteurs.",
        tech: ["PHP", "Symfony", "Java", "Android"],
        color: "bg-[#f0f0f0]",
        textColor: "text-black",
        link: "https://github.com/xeanoob/GSBcompterendu",
        image: "/images/gsb.png"
    },
    {
        title: "Outlook Add-in Automation",
        category: "Outil Professionnel (Projet Privé)",
        description: "Plugin développé pour ADENES permettant d'automatiser le traitement des emails entrants. Analyse de contenu et classement automatique pour améliorer la productivité des équipes. Code non public (NDA).",
        tech: ["C#", ".NET VSTO", "Outlook API"],
        color: "bg-[#e0e0e0]",
        textColor: "text-black",
        link: "#",
        image: "/images/outlook.png"
    }
];

const ProjectCard = ({ project, index }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="min-h-[80vh] py-10 flex items-center justify-center relative"
        >
            <div
                className={`flex flex-col relative w-[90vw] md:w-[70vw] max-w-[100%] h-[70vh] rounded-[2rem] p-6 md:p-10 shadow-2xl border border-white/10 ${project.color} ${project.textColor} overflow-hidden group`}
            >
                {/* Make whole card clickable via overlay link if needed, or wrap content */}
                {project.link && project.link !== "#" && (
                    <Link href={project.link} target="_blank" className="absolute inset-0 z-20" aria-label={`Voir le projet ${project.title}`} />
                )}

                <div className="flex justify-between items-start mb-4 md:mb-8">
                    <h2 className="text-2xl md:text-5xl font-bold text-center md:text-left leading-tight flex-1 mr-4">{project.title}</h2>
                    <div className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-lg ${project.textColor === 'text-white' ? 'bg-white text-black group-hover:scale-105' : 'bg-black text-white group-hover:scale-105'}`}>
                        {project.link !== "#" ? (
                            <>
                                <span className="hidden md:inline">Voir le projet</span>
                                <span className="md:hidden">Voir</span>
                                <ArrowUpRight size={18} />
                            </>
                        ) : (
                            <>
                                <span className="hidden md:inline">Projet Privé</span>
                                <span className="md:hidden">Privé</span>
                                <Lock size={18} />
                            </>
                        )}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-10 flex-1 min-h-0">
                    <div className="md:w-1/2 flex flex-col justify-between order-2 md:order-1 pb-2 md:pb-0 pointer-events-none">
                        <div className="overflow-hidden">
                            <span className="text-xs font-mono uppercase tracking-widest opacity-50 mb-2 md:mb-4 block">{project.category}</span>
                            <p className="text-sm md:text-lg opacity-80 leading-relaxed line-clamp-6 md:line-clamp-none">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                            {project.tech.map((t: string, i: number) => (
                                <span key={i} className={`px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold shadow-sm ${project.textColor === 'text-white' ? 'bg-white text-black' : 'bg-black text-white'}`}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 h-full min-h-[200px] flex items-center justify-center relative order-1 md:order-2 p-4 md:p-10">
                        {project.image ? (
                            <div className="relative w-full h-[80%] rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105 bg-white/5">
                                <Image
                                    src={project.image}
                                    alt={`Aperçu du projet ${project.title}`}
                                    fill
                                    className="object-contain p-4" // Padding interne pour que l'image ne touche pas les bords du cadre
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-black/5 text-black/10 font-serif text-8xl select-none rounded-xl">
                                {project.title.charAt(0)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

import ProjectsJsonLd from "@/components/ProjectsJsonLd";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function ProjectsPage() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <main ref={container} className="relative mt-20">
            <ProjectsJsonLd projects={projects} />
            <div className="container mx-auto px-6 h-[80vh] flex flex-col justify-center items-center text-center relative">
                <div>
                    <h1 className="text-4xl sm:text-6xl md:text-9xl font-serif mb-6">Tous les Projets</h1>
                    <p className="text-lg md:text-xl text-black/60">Une collection de défis techniques et créatifs.</p>
                </div>
                <div className="w-px h-20 bg-black/10 mx-auto mt-10"></div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                    <ScrollIndicator />
                </div>
            </div>

            <div className="mb-20">
                {projects.map((project, i) => {
                    return <ProjectCard key={i} index={i} project={project} />;
                })}
            </div>

            {/* Next Section Cue */}
            <div className="h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">Envie d'en voir plus ?</h2>
                    <a
                        href="/images/fichiers/CV%20AMBROISE%20BOUTRIN%20INFORMATIQUE.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-b border-white pb-1 hover:opacity-50 transition-opacity text-xl"
                    >
                        Consulter mon CV
                    </a>
                </div>
            </div>
        </main>
    );
}