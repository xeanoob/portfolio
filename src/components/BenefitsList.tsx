"use client";

import { motion } from "framer-motion";
import { Timer, Trophy, TrendingUp, Gem, ShieldCheck, Rocket } from "lucide-react";

export default function BenefitsList({ mode = "home" }: { mode?: "home" | "services" }) {

    // Define benefits based on context
    const benefits = mode === "home" ? [
        {
            icon: <Gem size={32} strokeWidth={1} />,
            title: "Image de Marque",
            description: "Une identité visuelle forte qui vous distingue immédiatement de la concurrence."
        },
        {
            icon: <Rocket size={32} strokeWidth={1} />,
            title: "Performance",
            description: "Des produits ultra-rapides qui retiennent l'attention de vos visiteurs."
        },
        {
            icon: <ShieldCheck size={32} strokeWidth={1} />,
            title: "Sérénité",
            description: "Un code robuste et maintenable, pour un business qui tourne sans accrocs."
        }
    ] : [
        {
            icon: <TrendingUp size={32} strokeWidth={1} />,
            title: "Croissance",
            description: "Des outils pensés pour convertir vos visiteurs en clients fidèles."
        },
        {
            icon: <Timer size={32} strokeWidth={1} />,
            title: "Gain de Temps",
            description: "J'automatise vos processus pour que vous puissiez vous concentrer sur votre métier."
        },
        {
            icon: <Trophy size={32} strokeWidth={1} />,
            title: "Excellence",
            description: "Le souci du détail à chaque étape, de la conception à la mise en ligne."
        }
    ];

    return (
        <div className="w-full py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {benefits.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-start group"
                    >
                        <div className="p-4 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl mb-6 text-[var(--foreground)] group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                        </div>

                        <h4 className="text-xl font-bold uppercase tracking-wide text-[var(--foreground)] mb-3">
                            {item.title}
                        </h4>

                        <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
