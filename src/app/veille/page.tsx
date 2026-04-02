"use client";

import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";

interface Article {
    title: string;
    pubDate: string;
    thumbnail?: string;
    description: string;
}

const curatedArticles: Article[] = [
    {
        title: "Vite 8.0, C++26 et de nouvelles standardisations",
        pubDate: "2026-03-10T00:00:00Z",
        thumbnail: "https://images.unsplash.com/photo-1618401471353-b98a5233c591?q=80&w=800&auto=format&fit=crop",
        description: "L'écosystème web front-end JavaScript a salué l'arrivée de Vite 8.0 avec l'intégration fulgurante du nouveau bundler Rolldown, décuplant la vélocité des builds applicatives. Du côté des systèmes critiques, le comité ISO a mis sur les rails les spécifications techniques de C++26."
    },
    {
        title: "Démocratisation et redéfinition du rôle de l'ingénieur",
        pubDate: "2026-02-18T00:00:00Z",
        thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
        description: "Un rapport révèle que 97 % des entreprises tech utilisent désormais l'IA en production. Le métier de développeur a drastiquement évolué, devenant de plus en plus un rôle d'orchestrateur. Le langage naturel redevient une interface de programmation."
    },
    {
        title: "Le 'Platform Engineering' contre la dette technique",
        pubDate: "2026-01-15T00:00:00Z",
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        description: "L'industrie a tiré la sonnette d'alarme face au 'vibe coding' générant de la dette technique. La réponse a été l'adoption accélérée du Platform Engineering, fournissant aux développeurs des portails internes standardisés qui intègrent nativement la conformité."
    },
    {
        title: "GPT-5.2 Codex et la modernisation du 'Legacy Code'",
        pubDate: "2025-12-10T00:00:00Z",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        description: "De nouvelles annonces comme l'arrivée du modèle avancé GPT-5.2 Codex ont bouleversé un postulat classique : la complexité liée à la réécriture d'applications vieillissantes. En automatisant la refactorisation, cette tâche jadis considérée comme un gouffre financier est devenue plus accessible."
    },
    {
        title: "L'impact croissant du DevSecOps face aux supply chains",
        pubDate: "2025-11-20T00:00:00Z",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        description: "Novembre a vu une vague de standardisation autour des paradigmes de sécurité. La nécessité d'un DevSecOps ultra-intégrée s'est fait sentir, notamment suite à des attaques visant des vulnérabilités de dépendances telles que la célèbre attaque NPM."
    },
    {
        title: "Microsoft Agent Framework et l'IA comme socle",
        pubDate: "2025-10-05T00:00:00Z",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        description: "Microsoft a dévoilé en open-source son Agent Framework (pour .NET et Python). Ce mois a officialisé une bascule : l'IA n'est plus une simple aide à la saisie de code, mais devient le socle structurel autour duquel gravitent la conception logicielle."
    },
    {
        title: "L'ascension des workflows agentiques",
        pubDate: "2025-09-15T00:00:00Z",
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
        description: "Arrivée à maturité d'outils d'IA dits 'agentiques' capables d'exécuter des tâches de code complexes de manière autonome. Des sorties majeures comme Claude Sonnet 4.5 ont poussé les architectes logiciels à revoir leurs pipelines CI/CD."
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
                        <motion.div
                            key={i}
                            className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col group overflow-hidden relative h-full"
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
                                </div>
                            )}
                            <div className="flex-1 flex flex-col">
                                <p className="text-xs text-[var(--text-tertiary)] font-mono mb-3">
                                    {new Date(article.pubDate).toLocaleDateString("fr-FR", {
                                        month: "long",
                                        year: "numeric"
                                    })}
                                </p>
                                <h2 className="text-xl font-bold mb-3 line-clamp-2 text-[var(--foreground)] transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">
                                    {article.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
