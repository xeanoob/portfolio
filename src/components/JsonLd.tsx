import React from 'react';

const JsonLd = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ambroise Boutrin",
        "url": "https://www.ambroise-boutrin.fr",
        "image": "https://www.ambroise-boutrin.fr/me.png",
        "jobTitle": "Développeur Fullstack",
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance / Étudiant"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Orléans",
            "addressRegion": "Centre-Val de Loire",
            "postalCode": "45000",
            "addressCountry": "FR"
        },
        "sameAs": [
            "https://www.linkedin.com/in/ambroise-boutrin/",
            "https://github.com/xeanoob",
            "https://twitter.com/ambroise_b"
        ],
        "knowsAbout": ["React", "Next.js", "TypeScript", "Node.js", "Web Development", "UI/UX Design"]
    };

    return (
        <section>
            {/* Structured Data for Local SEO (Orléans), Sitelinks & Person */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "Ambroise Boutrin - Studio Créatif Orléans",
                            "url": "https://www.ambroise-boutrin.fr"
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "itemListElement": [
                                { "@type": "SiteNavigationElement", "position": 1, "name": "Accueil", "url": "https://www.ambroise-boutrin.fr/" },
                                { "@type": "SiteNavigationElement", "position": 2, "name": "Services", "url": "https://www.ambroise-boutrin.fr/services" },
                                { "@type": "SiteNavigationElement", "position": 3, "name": "Projets", "url": "https://www.ambroise-boutrin.fr/projets" },
                                { "@type": "SiteNavigationElement", "position": 4, "name": "Compétences", "url": "https://www.ambroise-boutrin.fr/competences" },
                                { "@type": "SiteNavigationElement", "position": 5, "name": "Parcours", "url": "https://www.ambroise-boutrin.fr/parcours" },
                                { "@type": "SiteNavigationElement", "position": 6, "name": "Veille", "url": "https://www.ambroise-boutrin.fr/veille" },
                                { "@type": "SiteNavigationElement", "position": 7, "name": "Contact", "url": "https://www.ambroise-boutrin.fr/contact" }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            "name": "Ambroise Boutrin - Création de Sites Web Orléans",
                            "image": "https://www.ambroise-boutrin.fr/og-image.jpg",
                            "@id": "https://www.ambroise-boutrin.fr",
                            "url": "https://www.ambroise-boutrin.fr",
                            "telephone": "+33759878334",
                            "priceRange": "€€",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Centre Ville",
                                "addressLocality": "Orléans",
                                "addressRegion": "Centre-Val de Loire",
                                "postalCode": "45000",
                                "addressCountry": "FR"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 47.902964,
                                "longitude": 1.909251
                            },
                            "areaServed": [
                                {
                                    "@type": "City",
                                    "name": "Orléans"
                                },
                                {
                                    "@type": "State",
                                    "name": "Centre-Val de Loire"
                                }
                            ],
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
                                ],
                                "opens": "09:00",
                                "closes": "18:30"
                            },
                            "sameAs": [
                                "https://www.linkedin.com/in/ambroise-boutrin/",
                                "https://github.com/xeanoob"
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "name": "Ambroise Boutrin",
                            "url": "https://www.ambroise-boutrin.fr",
                            "jobTitle": "Développeur Fullstack & Expert Next.js",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Ambroise B. Studio"
                            },
                            "description": "Spécialiste en création d'applications web et sites internet performants à Orléans."
                        }
                    ])
                }}
            />
        </section>
    );
};

export default JsonLd;
