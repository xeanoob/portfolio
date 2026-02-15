import React from 'react';

const JsonLd = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ambroise Boutrin",
        "url": "https://ambroise-boutrin.fr",
        "image": "https://ambroise-boutrin.fr/me.png", // Assurez-vous d'avoir une image de profil
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
            "https://twitter.com/ambroise_b" // Si fin
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
                            "name": "Ambroise B. Portfolio",
                            "url": "https://ambroise-boutrin.fr",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://ambroise-boutrin.fr/?q={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            "name": "Ambroise Boutrin - Développeur Web & Mobile",
                            "image": "https://ambroise-boutrin.fr/me.png",
                            "@id": "https://ambroise-boutrin.fr",
                            "url": "https://ambroise-boutrin.fr",
                            "telephone": "",
                            "priceRange": "$$-$$$",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Orléans",
                                "postalCode": "45000",
                                "addressCountry": "FR"
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 47.902964,
                                "longitude": 1.909251
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday"
                                ],
                                "opens": "09:00",
                                "closes": "18:00"
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
                            "jobTitle": "Développeur Fullstack",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Freelance"
                            }
                        }
                    ])
                }}
            />
        </section>
    );
};

export default JsonLd;
