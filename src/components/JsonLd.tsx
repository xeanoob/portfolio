import React from 'react';

const JsonLd = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ambroise Boutrin",
        "url": "https://ambroise-boutrin.fr",
        "image": "https://ambroise-boutrin.fr/me.png",
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
                            "url": "https://ambroise-boutrin.fr"
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            "name": "Ambroise Boutrin - Création de Sites Web Orléans",
                            "image": "https://ambroise-boutrin.fr/og-image.jpg",
                            "@id": "https://ambroise-boutrin.fr",
                            "url": "https://ambroise-boutrin.fr",
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
                            "url": "https://ambroise-boutrin.fr",
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
