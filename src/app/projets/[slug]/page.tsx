import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { Metadata } from "next";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Projet non trouvé",
        };
    }

    return {
        title: `${project.title} - Portfolio Ambroise B.`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: project.image ? [{ url: project.image }] : [],
        },
        alternates: { canonical: `/projets/${slug}` },
    };
}
import ProjectJsonLd from "@/components/ProjectJsonLd";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[var(--background)]">
            <ProjectJsonLd project={project} />

            {/* Hero Section */}
            <header className="bg-[var(--background)] text-[var(--foreground)] pt-32 pb-20 mb-20 transition-colors duration-300 border-b border-[var(--border-color)]">
                <div className="px-6 container mx-auto max-w-6xl">
                    <div className="flex flex-col gap-6 mb-12">
                        <div className="flex flex-wrap gap-4 items-center mb-4">
                            <span className="px-4 py-1.5 bg-[var(--foreground)] text-[var(--background)] rounded-full text-xs font-bold uppercase tracking-wider">
                                {project.category}
                            </span>
                            {project.role && (
                                <span className="px-4 py-1.5 border border-[var(--border-color)] rounded-full text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                                    {project.role}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                            {project.logo && (
                                <div className="relative w-24 h-24 md:w-32 md:h-32 shrink-0">
                                    <Image
                                        src={project.logo}
                                        alt={`Logo ${project.title}`}
                                        fill
                                        className="object-contain"
                                        style={{ filter: project.invertLogo ? "brightness(0) invert(var(--logo-invert))" : "none" }}
                                    />
                                </div>
                            )}
                            <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight">
                                {project.title}
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                </div>
            </header>

            {/* Content Section */}
            <section className="px-6 pb-32 container mx-auto max-w-4xl">

                {/* Case Study Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="md:col-span-1 border-l-2 border-[var(--text-secondary)]/30 pl-6">
                        <h2 className="text-xl font-bold mb-4 font-serif text-[var(--foreground)]">Le Défi</h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            {project.challenge || project.problem || "Créer une solution performante répondant aux besoins du client."}
                        </p>
                    </div>

                    <div className="md:col-span-1 border-l-2 border-[var(--text-secondary)]/30 pl-6">
                        <h2 className="text-xl font-bold mb-4 font-serif text-[var(--foreground)]">La Solution</h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            {project.solution || "Développement d'une plateforme moderne, sécurisée et rapide."}
                        </p>
                    </div>

                    <div className="md:col-span-1 border-l-2 border-[var(--foreground)] pl-6">
                        <h2 className="text-xl font-bold mb-4 font-serif text-[var(--foreground)]">Le Résultat</h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            {project.result || "Un produit robuste, optimisé et prêt pour la croissance."}
                        </p>
                    </div>
                </div>

                {/* Tech Stack Details */}
                <div className="mb-20">
                    <h2 className="text-3xl font-serif font-bold mb-10 border-b border-[var(--border-color)] pb-4 text-[var(--foreground)]">Stack Technique</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.stackDetails ? (
                            project.stackDetails.map((item: any, i: number) => (
                                <div key={i} className="p-6 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)] hover:border-[var(--foreground)]/20 transition-colors">
                                    <h3 className="font-bold text-lg mb-2 text-[var(--foreground)]">{item.name}</h3>
                                    <p className="text-[var(--text-secondary)] text-sm">{item.reason}</p>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-2 text-[var(--text-secondary)] italic">Détails techniques non disponibles.</div>
                        )}
                    </div>
                </div>

                {/* Project Gallery */}
                {project.images && project.images.length > 0 && (
                    <div className="mb-20">
                        <h2 className="text-3xl font-serif font-bold mb-10 border-b border-[var(--border-color)] pb-4 text-[var(--foreground)]">Galerie</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.images.map((imgUrl: string, index: number) => (
                                <div key={index} className={`relative w-full overflow-hidden rounded-xl border border-[var(--border-color)] ${index === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[16/9]"}`}>
                                    <Zoom wrapElement="span" classDialog="custom-zoom-overlay">
                                        <div className="relative w-full h-full aspect-[16/9]">
                                            <Image
                                                src={imgUrl}
                                                alt={`${project.title} screenshot ${index + 1}`}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-700"
                                                sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                                            />
                                        </div>
                                    </Zoom>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA / Links */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-20">
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-[var(--foreground)] text-[var(--background)] rounded-full font-bold uppercase tracking-wider flex items-center gap-3 hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                        >
                            Voir la Démo
                            <ExternalLink size={18} />
                        </a>
                    )}

                    {project.github ? (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-full font-bold uppercase tracking-wider flex items-center gap-3 hover:bg-[var(--bg-secondary)]/80 transition-colors text-[var(--foreground)]"
                        >
                            Voir le Code
                            <Github size={18} />
                        </a>
                    ) : (
                        <div className="px-8 py-4 bg-[var(--bg-secondary)] rounded-full font-bold uppercase tracking-wider text-[var(--text-secondary)]/50 flex items-center gap-3 cursor-not-allowed">
                            Code Privé (NDA)
                        </div>
                    )}
                </div>
            </section>

        </main>
    );
}
