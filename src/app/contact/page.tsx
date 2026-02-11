"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20 px-6">
            <ScrollReveal className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">

                {/* Left: Info */}
                <div className="md:w-1/2">
                    <h1 className="text-5xl md:text-8xl font-serif mb-10 tracking-tighter">
                        Parlons <br />
                        <span className="italic text-black/40">Projets</span>
                    </h1>

                    <p className="text-xl text-black/60 mb-12 max-w-md leading-relaxed">
                        Vous avez une idée en tête ou vous cherchez un développeur pour rejoindre votre équipe ? N'hésitez pas à me contacter.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-black/5 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-1">Email</span>
                                <a href="mailto:boutrinambroise@gmail.com" className="text-xl md:text-2xl font-serif">boutrinambroise@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-black/5 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                <Phone size={24} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-1">Téléphone</span>
                                <span className="text-xl md:text-2xl font-serif">07 59 87 83 34</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group cursor-pointer">
                            <div className="w-14 h-14 bg-black/5 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-1">Localisation</span>
                                <span className="text-xl md:text-2xl font-serif">Orléans, France</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="md:w-1/2 bg-zinc-50 p-10 md:p-14 rounded-3xl md:mt-20">
                    <form className="space-y-8">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-3">Nom Complet</label>
                            <input type="text" className="w-full bg-transparent border-b border-black/20 pb-4 text-xl focus:outline-none focus:border-black transition-colors" placeholder="Votre nom" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-3">Email</label>
                            <input type="email" className="w-full bg-transparent border-b border-black/20 pb-4 text-xl focus:outline-none focus:border-black transition-colors" placeholder="votre@email.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-black/40 mb-3">Message</label>
                            <textarea rows={4} className="w-full bg-transparent border-b border-black/20 pb-4 text-xl focus:outline-none focus:border-black transition-colors resize-none" placeholder="Parlez-moi de votre projet..."></textarea>
                        </div>

                        <button type="submit" className="w-full bg-black text-white py-6 rounded-full font-bold text-lg uppercase tracking-widest hover:bg-zinc-800 transition-colors flex items-center justify-center gap-3 group">
                            Envoyer le message
                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>

            </ScrollReveal>
        </main>
    );
}
