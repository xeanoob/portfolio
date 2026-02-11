"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Smartphone, Terminal, PenTool } from "lucide-react";

// Updated Data Structure: No arbitrary percentages, focused on "Stacks"
const skillStacks = [
    {
        title: "Architecture & Backend",
        icon: <Database className="w-6 h-6" />,
        description: "Des fondations solides et sécurisées pour vos applications.",
        tags: ["Node.js", "Express", "Symfony / PHP", "PostgreSQL", "Supabase", "REST API", "Docker"]
    },
    {
        title: "Frontend & Expérience",
        icon: <Layout className="w-6 h-6" />,
        description: "Interfaces réactives et animations fluides pixel-perfect.",
        tags: ["React", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"]
    },
    {
        title: "Outils & Design",
        icon: <PenTool className="w-6 h-6" />,
        description: "Un workflow optimisé de la conception au déploiement.",
        tags: ["Figma", "Git / GitHub", "Vercel", "Agile / Scrum", "CI/CD", "VS Code"]
    }
];

export default function SkillsPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center">
            <div className="container mx-auto max-w-6xl">

                {/* Header - Compact & Impactful */}
                <div className="mb-16 md:mb-24 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-6xl md:text-8xl font-serif mb-6 tracking-tight"
                    >
                        Expertise<span className="text-black/20">.</span>
                    </motion.h1>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 100 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="h-1 bg-black w-24 mb-6 md:mx-0 mx-auto"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-black/60 max-w-2xl"
                    >
                        Une approche pragmatique du développement moderne. Pas de pourcentages arbitraires, juste une maîtrise des technologies qui comptent.
                    </motion.p>
                </div>

                {/* Innovative "Bento" Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {skillStacks.map((stack, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-[#fafafa] p-8 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-2xl hover:border-black/10 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden"
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute -right-10 -bottom-10 opacity-[0.03] transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none">
                                {index === 0 ? <Database size={200} /> : index === 1 ? <Layout size={200} /> : <Terminal size={200} />}
                            </div>

                            <div>
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-black group-hover:scale-110 transition-transform duration-300">
                                    {stack.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{stack.title}</h3>
                                <p className="text-black/60 mb-8 leading-relaxed text-sm md:text-base pr-4">
                                    {stack.description}
                                </p>
                            </div>

                            {/* Tags "Cloud" */}
                            <div className="flex flex-wrap gap-2 z-10">
                                {stack.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1.5 bg-white border border-black/5 rounded-lg text-sm font-medium text-black/80 shadow-sm group-hover:border-black/20 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom spacer is minimal because Footer is right there */}
                <div className="h-20 md:h-0"></div>
            </div>
        </main>
    );
}
