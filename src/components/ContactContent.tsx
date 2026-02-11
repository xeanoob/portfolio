"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactContent() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        const mailtoLink = `mailto:boutrinambroise@gmail.com?subject=Contact via Portfolio - ${name}&body=Message de: ${name} (${email})%0D%0A%0D%0A${message}`;
        window.location.href = mailtoLink;
    };

    return (
        <main className="min-h-screen bg-[var(--background)] pt-32 pb-20 px-6">
            <ScrollReveal className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">

                {/* Left: Info */}
                <div className="md:w-1/2">
                    <h1 className="text-5xl md:text-8xl font-serif mb-10 tracking-tighter text-[var(--foreground)]">
                        Parlons <br />
                        <span className="italic text-[var(--text-secondary)]">Projets</span>
                    </h1>

                    <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-md leading-relaxed">
                        Vous avez une idée en tête ou vous cherchez un développeur pour rejoindre votre équipe ? N'hésitez pas à me contacter.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors duration-300 text-[var(--foreground)]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Email</span>
                                <a href="mailto:boutrinambroise@gmail.com" className="text-xl md:text-2xl font-serif text-[var(--foreground)]">boutrinambroise@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors duration-300 text-[var(--foreground)]">
                                <Phone size={24} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Téléphone</span>
                                <span className="text-xl md:text-2xl font-serif text-[var(--foreground)]">07 59 87 83 34</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)] transition-colors duration-300 text-[var(--foreground)]">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-1">Localisation</span>
                                <span className="text-xl md:text-2xl font-serif text-[var(--foreground)]">Orléans, France</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="md:w-1/2 bg-[var(--bg-secondary)] p-10 md:p-14 rounded-3xl md:mt-20 border border-[var(--border-color)]">
                    <form className="space-y-8" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-3">Nom Complet</label>
                            <input type="text" name="name" required className="w-full bg-transparent border-b border-[var(--border-color)] pb-4 text-xl focus:outline-none focus:border-[var(--foreground)] transition-colors text-[var(--foreground)] placeholder-[var(--text-secondary)]/50" placeholder="Votre nom" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-3">Email</label>
                            <input type="email" name="email" required className="w-full bg-transparent border-b border-[var(--border-color)] pb-4 text-xl focus:outline-none focus:border-[var(--foreground)] transition-colors text-[var(--foreground)] placeholder-[var(--text-secondary)]/50" placeholder="votre@email.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-3">Message</label>
                            <textarea name="message" required rows={4} className="w-full bg-transparent border-b border-[var(--border-color)] pb-4 text-xl focus:outline-none focus:border-[var(--foreground)] transition-colors resize-none text-[var(--foreground)] placeholder-[var(--text-secondary)]/50" placeholder="Parlez-moi de votre projet..."></textarea>
                        </div>

                        <button type="submit" className="w-full bg-[var(--foreground)] text-[var(--background)] py-5 md:py-6 rounded-full font-bold text-base md:text-lg uppercase tracking-widest hover:opacity-90 transition-opacity flex items-center justify-center gap-3 group">
                            <span>Envoyer le message</span>
                            <Send size={18} className="shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>

            </ScrollReveal>
        </main>
    );
}
