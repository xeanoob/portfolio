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
            {/* Structured Data for Local SEO & Person */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
};

export default JsonLd;
