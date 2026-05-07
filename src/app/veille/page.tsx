"use client";

import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";

interface Article {
    title: string;
    pubDate: string;
    thumbnail?: string;
    description: string;
    link: string;
}

const curatedArticles: Article[] = [
    {
        title: "L'avènement des Value Objects en Java avec le Projet Valhalla",
        pubDate: "2026-05-02T00:00:00Z",
        link: "https://openjdk.org/projects/valhalla/",
        thumbnail: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop",
        description: "Le Projet Valhalla redéfinit la conception orientée objet en Java en introduisant les 'Value Types'. Cela permet de créer des objets immuables et légers qui se comportent comme des primitives, réduisant massivement l'empreinte mémoire et améliorant la performance."
    },
    {
        title: "Domain-Driven Design (DDD) simplifié par les Sealed Classes",
        pubDate: "2026-04-12T00:00:00Z",
        link: "https://openjdk.org/jeps/409",
        thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
        description: "Les 'Sealed Classes' offrent un contrôle strict sur la hiérarchie d'héritage. Cet article explore comment cette fonctionnalité clé de l'orienté objet moderne permet d'implémenter un Domain-Driven Design plus sécurisé, en limitant explicitement l'extension des classes."
    },
    {
        title: "Composition vs Héritage : Le nouveau paradigme Java",
        pubDate: "2026-03-10T00:00:00Z",
        link: "https://blogs.oracle.com/javamagazine/post/java-inheritance-composition",
        thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop",
        description: "La communauté Java se tourne massivement vers le principe 'Favoriser la composition plutôt que l'héritage'. Analyse des limites de l'héritage multiple (via interfaces par défaut) et comment les Records et la délégation redéfinissent l'architecture des applications."
    },
    {
        title: "Le Pattern Matching réinvente le polymorphisme",
        pubDate: "2026-02-18T00:00:00Z",
        link: "https://openjdk.org/jeps/441",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        description: "Le 'Pattern Matching' pour les switch redéfinit la façon de traiter le polymorphisme en Java. Fini les longues chaînes de 'instanceof' ou le Visitor Pattern complexe, le code devient plus expressif et concis."
    },
    {
        title: "Impact de Project Loom sur la conception Orientée Objet",
        pubDate: "2026-01-15T00:00:00Z",
        link: "https://openjdk.org/projects/loom/",
        thumbnail: "https://images.unsplash.com/photo-1618401471353-b98a5233c591?q=80&w=800&auto=format&fit=crop",
        description: "Avec l'intégration des Virtual Threads, la manière de concevoir des objets concurrents en Java change drastiquement. L'approche traditionnelle basée sur des pools de threads lourds laisse place à un modèle orienté objet beaucoup plus naturel et séquentiel."
    },
    {
        title: "La fin des POJOs classiques : L'ère des Records",
        pubDate: "2025-12-10T00:00:00Z",
        link: "https://openjdk.org/jeps/395",
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        description: "L'introduction des 'Records' a marqué un tournant dans la gestion des données en Java. En automatisant la création des getters, equals() et hashCode(), les développeurs peuvent enfin se concentrer sur la vraie logique métier orientée objet, en éliminant le boilerplate."
    },
    {
        title: "L'Immutabilité par défaut dans les architectures Java",
        pubDate: "2025-11-20T00:00:00Z",
        link: "https://dzone.com/articles/immutability-in-java",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        description: "Dans la conception moderne orientée objet, l'immutabilité est devenue la norme. Analyse de la manière dont les API Java récentes encouragent la création de structures de données non modifiables pour garantir la sécurité thread-safe."
    },
    {
        title: "Project Panama : Encapsulation Objet de la mémoire native",
        pubDate: "2025-10-05T00:00:00Z",
        link: "https://openjdk.org/projects/panama/",
        thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop",
        description: "La Foreign Function & Memory API (Project Panama) permet désormais de manipuler de la mémoire hors du tas (off-heap) tout en conservant une abstraction purement orientée objet en Java, remplaçant l'ancien et complexe JNI."
    },
    {
        title: "Généricité et Reification : Le futur du typage Java",
        pubDate: "2025-09-15T00:00:00Z",
        link: "https://cr.openjdk.org/~briangoetz/valhalla/erasure.html",
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
        description: "Retour sur l'évolution du système de types Java et la discussion autour de la réification des génériques. Un aspect complexe de l'orienté objet où l''erasure' montre ses limites, et comment la plateforme compte évoluer."
    }
];

export default function VeillePage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-serif mb-6 text-[var(--foreground)]">
                        Veille <span className="text-[var(--text-secondary)] italic">Technologique</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light max-w-3xl leading-relaxed">
                        Chaque mois, je sélectionne et résume un fait d'actualité majeur ou une tendance lourde dans le domaine de l'ingénierie logicielle.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {curatedArticles.map((article, i) => (
                        <motion.a
                            key={i}
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col group overflow-hidden relative h-full transition-all duration-300 hover:border-[var(--text-secondary)]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            {article.thumbnail && (
                                <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-[var(--bg-secondary)] shrink-0">
                                    <img
                                        src={article.thumbnail}
                                        alt={article.title}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-[10px] text-white uppercase tracking-widest font-bold">
                                        <span>Source</span>
                                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                            <div className="flex-1 flex flex-col">
                                <p className="text-xs text-[var(--text-tertiary)] font-mono mb-3 uppercase tracking-tighter">
                                    {new Date(article.pubDate).toLocaleDateString("fr-FR", {
                                        month: "long",
                                        year: "numeric"
                                    })}
                                </p>
                                <h2 className="text-xl font-bold mb-4 line-clamp-2 text-[var(--foreground)] group-hover:text-[var(--text-secondary)] transition-colors leading-tight">
                                    {article.title}
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                                        {article.description}
                                    </p>
                                    <div className="pt-2 flex items-center text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)] group-hover:text-[var(--foreground)] transition-colors">
                                        Consulter l'article original
                                        <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </main>
    );
}
