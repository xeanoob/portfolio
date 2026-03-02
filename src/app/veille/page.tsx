"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TransitionLink from "@/components/TransitionLink";

interface Article {
    title: string;
    pubDate: string;
    link: string;
    thumbnail: string;
    description: string;
}

export default function VeillePage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRSS = async () => {
            try {
                // Using rss2json API to parse the Korben.info RSS feed
                const RSS_URL = "https://korben.info/feed";
                const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

                const response = await fetch(API_URL);
                if (!response.ok) throw new Error("Erreur lors de la récupération du flux RSS");

                const data = await response.json();
                if (data.status === "ok") {
                    setArticles(data.items.slice(0, 9)); // Get the latest 9 articles
                } else {
                    throw new Error("Erreur de format de données");
                }
            } catch (err) {
                console.error(err);
                setError("Impossible de charger les actualités pour le moment.");
            } finally {
                setLoading(false);
            }
        };

        fetchRSS();
    }, []);

    const stripHtml = (html: string) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

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
                        Veille <span className="text-[var(--text-secondary)] italic">Informationnelle</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] font-light max-w-3xl leading-relaxed">
                        Restez informé des dernières actualités technologiques, tendances de développement et innovations numériques.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="glass-panel rounded-2xl p-6 h-80 animate-pulse flex flex-col justify-between">
                                <div className="w-full h-40 bg-[var(--border-color)] rounded-xl mb-4"></div>
                                <div className="h-6 bg-[var(--border-color)] rounded w-3/4 mb-2"></div>
                                <div className="h-4 bg-[var(--border-color)] rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    <div className="glass-panel rounded-2xl p-12 text-center text-red-500">
                        <p className="text-lg">{error}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, i) => (
                            <motion.a
                                key={i}
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col group overflow-hidden relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                {article.thumbnail && (
                                    <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-[var(--bg-secondary)]">
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
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric"
                                        })}
                                    </p>
                                    <h2 className="text-xl font-bold mb-3 line-clamp-2 text-[var(--foreground)] group-hover:text-[var(--text-secondary)] transition-colors">
                                        {article.title}
                                    </h2>
                                    <p className="text-sm text-[var(--text-secondary)] line-clamp-3 mb-6 flex-1">
                                        {stripHtml(article.description).substring(0, 150)}...
                                    </p>
                                    <div className="mt-auto flex items-center text-sm font-medium uppercase tracking-wider text-[var(--foreground)]">
                                        Lire l'article
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
