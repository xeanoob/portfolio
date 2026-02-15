"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone, Code2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
    {
        id: "01",
        title: "Site Vitrine & E-commerce",
        description: "Une présence en ligne élégante et performante.",
        details: "Design sur mesure • SEO optimisé • Administrable",
        icon: <Globe />
    },
    {
        id: "02",
        title: "Applications Dédiées",
        description: "Des outils métiers pour votre croissance.",
        details: "SaaS • Tableaux de bord • CRM • Automatisation",
        icon: <Code2 />
    },
    {
        id: "03",
        title: "Mobile & API",
        description: "Vos services accessibles partout.",
        details: "React Native • PWA • API REST / GraphQL",
        icon: <Smartphone />
    }
];

export default function Services() {
    const [hoveredService, setHoveredService] = useState<string | null>(null);

    return (
        <section id="services" className="py-32 bg-[var(--background)] px-6">
            <ScrollReveal className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-[var(--border-color)] pb-8">
                    <div>
                        <h2 className="text-5xl md:text-8xl font-serif text-[var(--foreground)] mb-6">Expertise</h2>
                        <p className="text-[var(--text-secondary)] text-xl max-w-md">
                            Des solutions digitales sur mesure pour propulser votre activité.
                        </p>
                    </div>
                    <Link href="/contact" className="hidden md:flex items-center gap-2 text-[var(--foreground)] border border-[var(--border-color)] px-6 py-3 rounded-full hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all uppercase tracking-wide text-sm font-medium">
                        Démarrer un projet
                    </Link>
                </div>

                <div className="flex flex-col">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                            className="group relative border-b border-[var(--border-color)] py-12 md:py-20 transition-all duration-500 hover:border-[var(--foreground)]"
                        >
                            <Link href="/contact" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                {/* Index Number */}
                                <div className="hidden md:block col-span-1">
                                    <span className="text-sm font-mono text-[var(--text-secondary)]">({service.id})</span>
                                </div>

                                {/* Title */}
                                <div className="col-span-1 md:col-span-5">
                                    <h3 className="text-3xl md:text-5xl font-serif text-[var(--foreground)] group-hover:translate-x-4 transition-transform duration-500">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description & Details */}
                                <div className="col-span-1 md:col-span-4 flex flex-col gap-2">
                                    <p className="text-xl text-[var(--text-secondary)] group-hover:text-[var(--foreground)] transition-colors">
                                        {service.description}
                                    </p>
                                    <span className="text-sm font-mono text-[var(--text-secondary)] uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                                        [{service.details}]
                                    </span>
                                </div>

                                {/* Icon / Arrow */}
                                <div className="col-span-1 md:col-span-2 flex justify-end">
                                    <div className="w-12 h-12 rounded-full border border-[var(--border-color)] flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] group-hover:border-[var(--foreground)] transition-all duration-500 transform group-hover:scale-110">
                                        <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-500" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:hidden">
                    <Link href="/contact" className="flex justify-center items-center gap-2 text-[var(--foreground)] border border-[var(--border-color)] px-6 py-4 rounded-full hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all uppercase tracking-wide text-sm font-medium w-full">
                        Démarrer un projet
                    </Link>
                </div>
            </ScrollReveal>
        </section>
    );
}
