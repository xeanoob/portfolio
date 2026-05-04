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
        title: "L'IA locale et la souveraineté du code : L'émergence des Small Language Models (SLM)",
        pubDate: "2026-05-02T00:00:00Z",
        link: "https://www.microsoft.com/en-us/research/blog/phi-3-mini-a-highly-capable-language-model-locally-on-your-phone/",
        thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=800&auto=format&fit=crop",
        description: "Face aux enjeux de confidentialité, 2026 marque le tournant vers les SLM (Small Language Models) exécutés localement. Ces modèles spécialisés égalent désormais les performances des géants du Cloud pour les tâches de programmation pure, garantissant une souveraineté totale du code source."
    },
    {
        title: "WebAssembly Garbage Collection (WasmGC) et l'explosion des langages managés",
        pubDate: "2026-04-12T00:00:00Z",
        link: "https://web.dev/articles/wasm-gc",
        thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format&fit=crop",
        description: "L'adoption massive de WasmGC par les navigateurs majeurs a ouvert la porte à une nouvelle génération de frameworks web. Il est désormais possible de faire tourner des langages comme Kotlin, Dart et Java nativement dans le navigateur avec des performances exceptionnelles."
    },
    {
        title: "Vite 8.0, C++26 et de nouvelles standardisations",
        pubDate: "2026-03-10T00:00:00Z",
        link: "https://vitejs.dev/blog/",
        thumbnail: "https://images.unsplash.com/photo-1618401471353-b98a5233c591?q=80&w=800&auto=format&fit=crop",
        description: "L'écosystème JavaScript salue l'arrivée de Vite 8.0 avec le bundler Rolldown, décuplant la vélocité des builds. Parallèlement, le comité ISO finalise C++26, apportant des améliorations majeures sur la sécurité mémoire et la gestion de la concurrence."
    },
    {
        title: "Démocratisation et redéfinition du rôle de l'ingénieur",
        pubDate: "2026-02-18T00:00:00Z",
        link: "https://www.forbes.com/sites/forbestechcouncil/2024/03/11/the-evolution-of-the-software-engineer-in-the-age-of-ai/",
        thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
        description: "Avec 97 % des entreprises utilisant l'IA, le développeur devient un orchestrateur d'agents. Ce mois marque une transition où la compréhension de l'architecture et la validation de l'intention deviennent plus critiques que l'écriture manuelle de syntaxe."
    },
    {
        title: "Le 'Platform Engineering' contre la dette technique",
        pubDate: "2026-01-15T00:00:00Z",
        link: "https://platformengineering.org/blog/what-is-platform-engineering",
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        description: "Pour contrer le 'vibe coding' qui génère une dette technique incontrôlée, les entreprises adoptent massivement le Platform Engineering. L'objectif est de créer des 'Internal Developer Platforms' (IDP) qui automatisent la conformité et les standards."
    },
    {
        title: "GPT-5.2 Codex et la modernisation du 'Legacy Code'",
        pubDate: "2025-12-10T00:00:00Z",
        link: "https://openai.com/news/devday-2024-api-updates/",
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        description: "OpenAI dévoile GPT-5.2 Codex, capable de comprendre des bases de code gigantesques. Cette avancée rend enfin financièrement viable la migration massive de systèmes critiques (COBOL, vieux Java) vers des architectures modernes et sécurisées."
    },
    {
        title: "L'impact croissant du DevSecOps face aux supply chains",
        pubDate: "2025-11-20T00:00:00Z",
        link: "https://snyk.io/blog/state-of-open-source-security-2024/",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        description: "Suite à des attaques sophistiquées sur les dépôts NPM, le DevSecOps devient une priorité absolue. La détection des vulnérabilités 'Shift-Left' s'automatise pour protéger les pipelines de déploiement contre l'injection de code malicieux via des dépendances tierces."
    },
    {
        title: "Microsoft Agent Framework et l'IA comme socle",
        pubDate: "2025-10-05T00:00:00Z",
        link: "https://microsoft.github.io/autogen/",
        thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        description: "Le lancement du framework AutoGen de Microsoft marque une rupture : on ne programme plus une IA, on conçoit des agents qui collaborent entre eux. Ce changement de paradigme transforme radicalement la manière de concevoir les architectures logicielles complexes."
    },
    {
        title: "L'ascension des workflows agentiques",
        pubDate: "2025-09-15T00:00:00Z",
        link: "https://www.anthropic.com/news/claude-3-5-sonnet",
        thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
        description: "Septembre 2025 voit l'émergence des assistants de code capables d'agir sur le système de fichiers et d'exécuter des tests. Claude 3.5 et GitHub Copilot Workspace ouvrent la voie à une productivité décuplée pour les tâches de refactorisation et de débogage."
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
