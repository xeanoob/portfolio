import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

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
    };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[var(--background)]">

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 container mx-auto max-w-6xl">
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

                    <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight text-[var(--foreground)]">
                        {project.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </header>

            {/* Content Section */}
            <section className="px-6 pb-32 container mx-auto max-w-4xl">

                {/* Context & Challenge */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 font-serif text-[var(--foreground)]">Le Contexte</h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            {project.longDescription || project.description}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-6 font-serif text-[var(--foreground)]">Le Challenge</h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            {project.problem || "Créer une solution performante et intuitive répondant aux besoins spécifiques du client."}
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
