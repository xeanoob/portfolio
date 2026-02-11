"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const skillCategories = [
    {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Three.js"]
    },
    {
        name: "Backend",
        skills: ["Node.js", "Python", "Java", "C#", "SQL", "API REST"]
    },
    {
        name: "DevOps & Tools",
        skills: ["Docker", "Git", "Linux", "CI/CD", "Vercel", "Figma"]
    }
];

export default function Skills() {
    return (
        <section className="py-32 bg-white px-6">
            <ScrollReveal className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-serif mb-4">Stack Technique</h2>
                    <p className="text-black/40 font-mono text-xs uppercase tracking-[0.2em]">Mon Arsenal de Développement</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-zinc-50 rounded-3xl p-8 border border-black/5 hover:border-black/20 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-black"></span>
                                {category.name}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1.5 bg-white border border-black/5 rounded-lg text-sm font-medium text-black/70 shadow-sm hover:scale-105 hover:text-black transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </ScrollReveal>
        </section>
    );
}
