export default function MentionsLegales() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-12">Mentions Légales</h1>

                <section className="mb-12 space-y-4">
                    <h2 className="text-2xl font-bold border-b border-[var(--border-color)] pb-4 mb-6">1. Édition du site</h2>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <strong className="text-[var(--foreground)]">ambroise-boutrin.fr</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-[var(--foreground)]/80">
                        <li><strong className="text-[var(--foreground)]">Propriétaire du site :</strong> Ambroise Boutrin</li>
                        <li><strong className="text-[var(--foreground)]">Contact :</strong> boutrinambroise@gmail.com</li>
                        <li><strong className="text-[var(--foreground)]">Adresse :</strong> Orléans, France</li>
                    </ul>
                </section>

                <section className="mb-12 space-y-4">
                    <h2 className="text-2xl font-bold border-b border-[var(--border-color)] pb-4 mb-6">2. Hébergement</h2>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        Le site est hébergé par :<br />
                        <strong className="text-[var(--foreground)]">Vercel Inc.</strong><br />
                        340 S Lemon Ave #4133<br />
                        Walnut, CA 91789<br />
                        États-Unis<br />
                        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-70 transition-opacity">https://vercel.com</a>
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h2 className="text-2xl font-bold border-b border-[var(--border-color)] pb-4 mb-6">3. Propriété intellectuelle</h2>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        <strong className="text-[var(--foreground)]">Ambroise Boutrin</strong> est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
                    </p>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de <strong className="text-[var(--foreground)]">Ambroise Boutrin</strong>.
                    </p>
                </section>

                <section className="mb-12 space-y-4">
                    <h2 className="text-2xl font-bold border-b border-[var(--border-color)] pb-4 mb-6">4. Données personnelles</h2>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        Ce site ne collecte aucune donnée personnelle à l'insu de l'utilisateur. Les informations communiquées via les liens de contact (email, LinkedIn) sont utilisées uniquement pour répondre aux sollicitations.
                    </p>
                    <p className="text-[var(--foreground)]/80 leading-relaxed">
                        Ce site n'utilise pas de cookies de traçage publicitaire.
                    </p>
                </section>

                <div className="mt-20 pt-10 border-t border-[var(--border-color)] text-center text-[var(--text-secondary)] text-sm">
                    <p>Dernière mise à jour : Février 2026</p>
                </div>
            </div>
        </main>
    );
}
