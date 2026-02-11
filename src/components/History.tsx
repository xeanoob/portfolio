"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const timeline = [
    { year: "2026", title: "Stage DevOps", company: "Sopra Steria", type: "work" },
    { year: "2024", title: "BTS SIO", company: "Lycée Benjamin Franklin", type: "edu" },
    { year: "2024", title: "Stage Dev Fullstack", company: "ADENES", type: "work" },
    { year: "2023", title: "BUT Informatique", company: "IUT d'Orléans", type: "edu" },
];

export default function History() {
    return (
        <section className="py-32 px-6 bg-white relative overflow-hidden">
            <ScrollReveal className="max-w-3xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-6xl font-serif mb-4">Mon Parcours</h2>
                    <p className="text-black/40 font-mono text-xs uppercase tracking-[0.2em]">Timeline</p>
                </div>

                <div className="relative">
                    {/* The Center Line Idea - Metro Map Style */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/10 -translate-x-1/2 hidden md:block"></div>

                    <div className="flex flex-col gap-0 md:gap-0">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""} relative py-12 group`}
                            >
                                {/* Content Side */}
                                <div className={`w-full md:w-1/2 p-6 flex flex-col ${index % 2 === 0 ? "md:items-start md:text-left" : "md:items-end md:text-right"} items-center text-center`}>
                                    <span className="text-5xl font-serif text-black/10 font-bold mb-2 block select-none">
                                        {item.year}
                                    </span>
                                    <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
                                    <p className="text-black/60 font-medium">{item.company}</p>
                                    <span className={`inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${item.type === 'work' ? 'bg-black text-white' : 'bg-zinc-200 text-black/60'}`}>
                                        {item.type === 'work' ? 'Pro' : 'Études'}
                                    </span>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-black rounded-full z-10 group-hover:scale-150 transition-transform duration-300 hidden md:block"></div>

                                {/* Mobile Line (Hidden on Desktop) */}
                                <div className="absolute left-6 top-0 bottom-0 w-px bg-black/10 md:hidden"></div>
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full md:hidden"></div>

                                {/* Spacer Side */}
                                <div className="w-full md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </ScrollReveal>
        </section>
    );
}
