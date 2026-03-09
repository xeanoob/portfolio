"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "@/data/projects";
import ProjectsJsonLd from "@/components/ProjectsJsonLd";
import ScrollIndicator from "@/components/ScrollIndicator";

const ProjectCard = ({ project, index }: any) => {
    const cardRef = useRef(null);
    const imageContainerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal animation
            gsap.to(cardRef.current, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                    once: true
                }
            });

            // Parallax image effect
            if (imageRef.current) {
                gsap.fromTo(imageRef.current,
                    { yPercent: -10 },
                    {
                        yPercent: 10,
                        ease: "none",
                        scrollTrigger: {
                            trigger: imageContainerRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            }
        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={cardRef}
            className="w-full py-12 md:py-24 flex items-center justify-center relative opacity-0 translate-y-[100px]"
        >
            <div
                className={`flex flex-col relative w-[92vw] md:w-[75vw] max-w-[1400px] h-auto rounded-[2rem] p-6 md:p-12 shadow-2xl border border-[var(--border-color)] ${['bg-white', 'bg-[#f0f0f0]', 'bg-[#e0e0e0]'].includes(project.color) ? 'bg-[var(--bg-secondary)] text-[var(--foreground)]' : `${project.color} ${project.textColor}`} overflow-hidden group`}
            >
                {/* Make whole card clickable via overlay link */}
                <Link href={`/projets/${project.slug}`} className="absolute inset-0 z-20 cursor-pointer" aria-label={`Voir le détail du projet ${project.title}`} />

                <div className="flex justify-between items-start mb-6 md:mb-12 gap-4 relative z-30">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-left leading-[1.1] flex-1 pr-2">{project.title}</h2>
                    <Link
                        href={`/projets/${project.slug}`}
                        className={`flex items-center justify-center min-w-[3rem] h-12 md:w-auto md:h-auto md:px-6 md:py-3 rounded-full font-bold uppercase tracking-wider text-xs transition-all duration-300 shadow-lg ${['bg-white', 'bg-[#f0f0f0]', 'bg-[#e0e0e0]'].includes(project.color) ? 'bg-[var(--foreground)] text-[var(--background)]' : 'bg-white text-black hover:bg-white/90'}`}
                    >
                        <span className="hidden md:inline mr-2">Voir le détail</span>
                        <ArrowUpRight size={20} />
                    </Link>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-12 flex-1">
                    <div className="md:w-1/2 flex flex-col justify-between order-2 md:order-1 pb-4 md:pb-0 pointer-events-none items-start text-left">
                        <div className="w-full">
                            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] opacity-50 mb-3 md:mb-6 block">{project.category}</span>
                            <p className="text-base md:text-lg opacity-80 leading-relaxed line-clamp-4 md:line-clamp-none mb-6">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-start mt-auto">
                            {project.tech.map((t: string, i: number) => (
                                <span key={i} className={`px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold shadow-sm ${['bg-white', 'bg-[#f0f0f0]', 'bg-[#e0e0e0]'].includes(project.color) ? 'bg-[var(--foreground)]/10 text-[var(--foreground)]' : 'bg-white/10 text-white'}`}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="md:w-1/2 h-full min-h-[240px] md:min-h-[400px] flex items-center justify-center relative order-1 md:order-2 p-0 md:p-8">
                        {project.image ? (
                            <div ref={imageContainerRef} className="relative w-full h-full min-h-[240px] md:h-full rounded-xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] bg-black/5">
                                <div ref={imageRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                                    <Image
                                        src={project.image}
                                        alt={project.imageAlt || `Aperçu du projet ${project.title}`}
                                        fill
                                        className="object-contain md:p-4"
                                        sizes="(max-width: 768px) 90vw, 40vw"
                                        priority={index === 0}
                                        loading={index === 0 ? undefined : "lazy"}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[var(--foreground)]/5 text-[var(--foreground)]/10 font-serif text-7xl md:text-9xl select-none rounded-xl">
                                {project.title.charAt(0)}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ProjectsContent() {
    return (
        <main className="relative mt-20 bg-[var(--background)] overflow-x-hidden">
            {/* Ambient Light (Monochrome) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-white opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

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
            <div className="h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center border-t border-[var(--border-color)]">
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-serif mb-6 text-[var(--foreground)]">Vous avez un projet similaire ?</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-2 shadow-xl"
                        >
                            Demander un devis <ArrowUpRight size={20} />
                        </Link>
                        <a
                            href="/images/fichiers/CV%20AMBROISE%20BOUTRIN%20INFORMATIQUE.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-b border-[var(--foreground)] pb-1 hover:opacity-50 transition-opacity text-lg text-[var(--foreground)]"
                        >
                            Ou consulter mon CV
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
