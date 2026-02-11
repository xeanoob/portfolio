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

                {/* Detailed Technical Arsenal */}
                <div className="mt-32">
                    <h2 className="text-4xl md:text-5xl font-serif mb-12 border-b border-black/10 pb-6">Arsenal Technique Détaillé</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* Frontend Column */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Frontend
                            </h3>
                            <ul className="space-y-3">
                                <SkillItem name="React.js" level="Avancé" detail="Hooks, Context, Performance" />
                                <SkillItem name="Next.js" level="Avancé" detail="App Router, SSR, Server Actions" />
                                <SkillItem name="TypeScript" level="Intermédiaire" detail="Typage strict, Interfaces" />
                                <SkillItem name="Tailwind CSS" level="Note 10/10" detail="Design System, Responsive" />
                                <SkillItem name="Framer Motion" level="Passionné" detail="Micro-interactions, Layout animations" />
                                <SkillItem name="Vue.js" level="Basique" detail="Options API, Composition API" />
                            </ul>
                        </div>

                        {/* Backend Column */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Backend
                            </h3>
                            <ul className="space-y-3">
                                <SkillItem name="Node.js" level="Intermédiaire" detail="Express, API REST" />
                                <SkillItem name="PHP / Symfony" level="Scolaire" detail="MVC, Doctrine, Twig" />
                                <SkillItem name="C# / .NET" level="Professionnel" detail="VSTO, WinForms, LINQ" />
                                <SkillItem name="Supabase" level="Fan" detail="Auth, Realtime DB, Edge Functions" />
                                <SkillItem name="Java" level="Scolaire" detail="POO, Swing, JDBC" />
                            </ul>
                        </div>

                        {/* Database & DevOps Column */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span> Ops & Data
                            </h3>
                            <ul className="space-y-3">
                                <SkillItem name="PostgreSQL" level="Solide" detail="Relations, Indexing" />
                                <SkillItem name="MySQL" level="Standard" detail="Projets scolaires" />
                                <SkillItem name="Git" level="Quotidien" detail="Flow, Rebasing, Conflicts" />
                                <SkillItem name="Docker" level="Apprentissage" detail="Conteneurisation basique" />
                                <SkillItem name="Vercel" level="Expert" detail="Déploiement continu, Analytics" />
                            </ul>
                        </div>

                        {/* Tools & Soft Skills Column */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Outils &+
                            </h3>
                            <ul className="space-y-3">
                                <SkillItem name="Figma" level="Créatif" detail="Maquettage, Prototypage" />
                                <SkillItem name="VS Code" level="IDE" detail="Extensions, Debugging" />
                                <SkillItem name="Anglais" level="B2" detail="Documentation technique" />
                                <SkillItem name="Agile / Scrum" level="Vécu" detail="Sprints, Dailies" />
                                <SkillItem name="Curiosité" level="Infini" detail="Veille techno permanente" />
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom spacer is minimal because Footer is right there */}
                <div className="h-20 md:h-0"></div>
            </div>
        </main>
    );
}

// Helper Component for the detailed list
function SkillItem({ name, level, detail }: { name: string, level: string, detail: string }) {
    return (
        <li className="border-b border-black/5 pb-2 hover:pl-2 transition-all duration-300">
            <div className="flex justify-between items-baseline mb-1">
                <span className="font-bold text-lg">{name}</span>
                <span className="text-xs font-mono bg-black/5 px-2 py-0.5 rounded text-black/60">{level}</span>
            </div>
            <p className="text-xs text-black/40 italic">{detail}</p>
        </li>
    );
}
