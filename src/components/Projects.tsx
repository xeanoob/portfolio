"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
    {
        title: "E-Commerce",
        category: "Web Fullstack",
        tech: "Next.js / Stripe",
        id: "01",
        color: "bg-zinc-50",
        image: "/images/garanches.png",
        link: "https://garanches.vercel.app/"
    },
    {
        title: "Analyse Graphes",
        category: "Data Science",
        tech: "Python / NetworkX",
        id: "02",
        color: "bg-zinc-900", // Dark theme for variety
        image: "/images/graph.png",
        link: "https://github.com/Xeananas/SAEGRAH"
    },
    {
        title: "Outlook Automation",
        category: "Pro Tool",
        tech: "C# / .NET",
        id: "05", // Corrigé : était "04"
        color: "bg-zinc-200",
        image: "/images/outlook.png",
        link: "#"
    },
    {
        title: "Gestion JO 2024",
        category: "Desktop App",
        tech: "Java / SQL",
        id: "03", // Corrigé : était "02"
        color: "bg-zinc-100",
        image: "/images/jo.png",
        link: "https://github.com/xeanoob/GSBcompterendu"
    },
    {
        title: "G.S.B.",
        category: "Web & Mobile",
        tech: "PHP / Symfony",
        id: "04", // Corrigé : était "03"
        color: "bg-zinc-50",
        image: "/images/gsb.png",
        link: "https://github.com/xeanoob/GSBcompterendu"
    }

];

export default function Projects() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    return (
        <section className="py-20 bg-white">

            {/* Standard Header Section (Not Sticky/Overlapping) */}
            <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif">Projets Récents</h2>
                    <p className="text-black/40 font-mono text-sm mt-2 uppercase tracking-widest">Une sélection de mes travaux</p>
                </div>
                <div className="hidden md:block text-sm text-black/40">
                    SCROLL &rarr;
                </div>
            </div>

            {/* Horizontal Scroll Container */}
            <div ref={targetRef} className="relative h-[250vh]">
                <div className="sticky top-20 flex h-[60vh] items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-8 pl-6 md:pl-20">
                        {projects.map((project) => (
                            <Link
                                href={project.link !== "#" ? project.link : "/projets"}
                                key={project.id}
                                className={`group relative h-[45vh] w-[85vw] md:w-[25vw] flex-shrink-0 overflow-hidden rounded-2xl bg-black p-6 flex flex-col justify-between border border-black/5 hover:border-black/20 transition-all hover:-translate-y-2`}
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 z-0">
                                    {/* Vérification si l'image existe pour éviter une erreur sur le projet "Analyse Graphes" */}
                                    {project.image && (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                                </div>

                                <div className="flex justify-between items-start z-10">
                                    <span className="font-serif text-2xl text-white/40">{project.id}</span>
                                    <span className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <ArrowUpRight size={20} />
                                    </span>
                                </div>

                                <div className="z-10">
                                    <span className="inline-block px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md text-[10px] text-white font-mono uppercase tracking-widest mb-3 border border-white/10">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-1 text-white">{project.title}</h3>
                                    <p className="text-white/60 text-sm">{project.tech}</p>
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}