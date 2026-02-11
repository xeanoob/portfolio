"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
        category: "Outil Professionnel",
        description: "Plugin développé pour ADENES permettant d'automatiser le traitement des emails entrants. Analyse de contenu et classement automatique pour améliorer la productivité des équipes.",
        tech: ["C#", ".NET VSTO", "Outlook API"],
        color: "bg-[#e0e0e0]",
        textColor: "text-black",
        link: "#",
        image: "/images/outlook.png"
    }
];

const ProjectCard = ({ project, index, range, targetScale }: any) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(scrollYProgress, range, [1, targetScale]);

    // Determine wrapper element (Link if url exists, div otherwise)
    const Wrapper = project.link && project.link !== "#" ? Link : motion.div;
    const wrapperProps = project.link && project.link !== "#"
        ? { href: project.link, target: "_blank", className: "contents" }
        : { className: "contents" }; // 'contents' display to not break flex layout

    return (
        <div ref={container} className="h-[120vh] flex items-start justify-center sticky top-0 pt-[25vh]">
            <motion.div
                style={{
                    scale,
                    top: `calc(${index * 40}px)`
                }}
                className={`flex flex-col relative w-[90vw] md:w-[70vw] max-w-[100%] h-[70vh] rounded-[2rem] p-6 md:p-10 origin-top shadow-2xl border border-white/10 ${project.color} ${project.textColor} overflow-hidden`}
            >
                {/* Make whole card clickable via overlay link if needed, or wrap content */}
                {/* Because of complex layout inside, using an absolute overlay Link is safer for layout integrity */}
                {project.link && project.link !== "#" && (
                    <Link href={project.link} target="_blank" className="absolute inset-0 z-20" aria-label={`Voir le projet ${project.title}`} />
                )}

                <div className="flex justify-between items-start mb-4 md:mb-8 pointer-events-none"> {/* Text non-selectable via link overlay usually, but here pointer-events-none helps focus click on parent for some structures, though z-20 link handles it. Actually, standard content should be visible. */}
                    <h2 className="text-2xl md:text-5xl font-bold text-center md:text-left leading-tight">{project.title}</h2>
                    <div className={`p-3 md:p-4 rounded-full border ${project.textColor === 'text-white' ? 'border-white/20' : 'border-black/20'} transition-all duration-300`}>
                        <ArrowUpRight size={20} className="md:w-6 md:h-6" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-10 h-full overflow-hidden">
                    <div className="md:w-1/2 flex flex-col justify-between order-2 md:order-1 pb-6 md:pb-0 pointer-events-none">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest opacity-50 mb-2 md:mb-4 block">{project.category}</span>
                            <p className="text-sm md:text-lg opacity-80 leading-relaxed line-clamp-6 md:line-clamp-none"> {/* Increased line-clamp for mobile readability */}
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4 md:mt-8">
                            {project.tech.map((t: string, i: number) => (
                                <span key={i} className={`px-3 py-1 rounded-full text-[10px] md:text-xs font-bold border ${project.textColor === 'text-white' ? 'border-white/20 bg-white/5' : 'border-black/10 bg-black/5'}`}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 h-full min-h-[200px] relative rounded-2xl overflow-hidden bg-black/5 order-1 md:order-2 transform-gpu" style={{ maskImage: 'linear-gradient(white, white)', WebkitMaskImage: 'linear-gradient(white, white)' }}>
                        <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
                            {/* Correction : Affichage conditionnel de l'image uniquement si project.image existe */}
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain bg-white p-4" // MODIFIÉ ICI : object-contain pour tout voir + fond blanc
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            ) : (
                                // Placeholder si pas d'image (optionnel, pour éviter le vide complet)
                                <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-white/20 font-serif text-4xl">
                                    {project.title.charAt(0)}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function ProjectsPage() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <main ref={container} className="relative mt-20">
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-6xl md:text-9xl font-serif mb-6">Tous les Projets</h1>
                <p className="text-xl text-black/60">Une collection de défis techniques et créatifs.</p>
                <div className="w-px h-20 bg-black/10 mx-auto mt-10"></div>
            </div>

            <div className="mb-[20vh]">
                {projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.05);
                    return <ProjectCard key={i} index={i} project={project} range={[i * 0.25, 1]} targetScale={targetScale} />;
                })}
            </div>

            {/* Next Section Cue */}
            <div className="h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">Envie d'en voir plus ?</h2>
                    <Link href="/cv" className="inline-block border-b border-white pb-1 hover:opacity-50 transition-opacity text-xl">
                        Consulter mon CV
                    </Link>
                </div>
            </div>
        </main>
    );
}