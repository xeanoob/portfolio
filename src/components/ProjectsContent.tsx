"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectsJsonLd from "@/components/ProjectsJsonLd";
import ScrollIndicator from "@/components/ScrollIndicator";

const ProjectCard = ({ project, index }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{ willChange: "transform, opacity" }}
            className="min-h-[80vh] py-10 flex items-center justify-center relative"
        >
            <div
                className={`flex flex-col relative w-[90vw] md:w-[70vw] max-w-[100%] h-[70vh] rounded-[2rem] p-6 md:p-10 shadow-2xl border border-[var(--border-color)] ${['bg-white', 'bg-[#f0f0f0]', 'bg-[#e0e0e0]'].includes(project.color) ? 'bg-[var(--bg-secondary)]' : project.color} ${project.textColor === 'text-black' ? 'text-[var(--foreground)]' : project.textColor} overflow-hidden group`}
            >
                {/* Make whole card clickable via overlay link */}
                <Link href={`/projets/${project.slug}`} className="absolute inset-0 z-20" aria-label={`Voir le détail du projet ${project.title}`} />

                <div className="flex justify-between items-start mb-4 md:mb-8">
                    <h2 className="text-2xl md:text-5xl font-bold text-center md:text-left leading-tight flex-1 mr-4">{project.title}</h2>
                    <Link
                        href={`/projets/${project.slug}`}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-lg relative z-30 ${project.textColor === 'text-white' ? 'bg-white text-black group-hover:scale-105' : 'bg-[var(--foreground)] text-[var(--background)] group-hover:scale-105'}`}
                    >
                        <span className="hidden md:inline">Voir le détail</span>
                        <span className="md:hidden">Voir</span>
                        <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row gap-6 md:gap-10 flex-1 min-h-0">
                    <div className="md:w-1/2 flex flex-col justify-between order-2 md:order-1 pb-2 md:pb-0 pointer-events-none items-center md:items-start text-center md:text-left">
                        <div className="overflow-hidden">
                            <span className="text-xs font-mono uppercase tracking-widest opacity-50 mb-2 md:mb-4 block">{project.category}</span>
                            <p className="text-sm md:text-lg opacity-80 leading-relaxed line-clamp-6 md:line-clamp-none">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4 md:mt-0 justify-center md:justify-start">
                            {project.tech.map((t: string, i: number) => (
                                <span key={i} className={`px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold shadow-sm ${project.textColor === 'text-white' ? 'bg-white text-black' : 'bg-[var(--foreground)] text-[var(--background)]'}`}>
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
                                    alt={project.imageAlt || `Aperçu du projet ${project.title}`}
                                    fill
                                    className="object-contain p-4" // Padding interne pour que l'image ne touche pas les bords du cadre
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[var(--foreground)]/5 text-[var(--foreground)]/10 font-serif text-8xl select-none rounded-xl">
                                {project.title.charAt(0)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default function ProjectsContent() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <main ref={container} className="relative mt-20 bg-[var(--background)]">
            {/* Ambient Light (Monochrome) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

            <ProjectsJsonLd projects={projects} />
            <ProjectsJsonLd projects={projects} />

            <div className="container mx-auto px-6 pt-24 md:pt-32 mb-16 md:mb-24">
                <div className="text-center mb-16 md:mb-24">
                    <h1 className="text-5xl md:text-8xl font-serif mb-6 text-[var(--foreground)] tracking-tight">
                        Travaux<span className="text-[var(--text-secondary)]">.</span>
                    </h1>
                    <p className="text-sm md:text-base font-mono text-[var(--text-secondary)] uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed">
                        Sélection R&D et Clients &mdash; Problèmes complexes, solutions simples.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <ScrollIndicator />
                    </div>
                </div>
            </div>

            <div className="mb-20">
                {projects.map((project, i) => {
                    return <ProjectCard key={i} index={i} project={project} />;
                })}
            </div>

            {/* Next Section Cue */}
            <div className="h-screen bg-[var(--bg-inverse)] text-[var(--text-inverse)] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">Vous avez un projet similaire ?</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[var(--background)] text-[var(--foreground)] rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-2"
                        >
                            Demander un devis <ArrowUpRight size={20} />
                        </Link>
                        <a
                            href="/images/fichiers/CV%20AMBROISE%20BOUTRIN%20INFORMATIQUE.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-[var(--text-inverse)] pb-1 hover:opacity-50 transition-opacity text-lg"
                        >
                            Ou consulter mon CV
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
