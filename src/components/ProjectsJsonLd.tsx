import React from 'react';

const ProjectsJsonLd = ({ projects }: { projects: any[] }) => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": projects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "SoftwareApplication",
                "name": project.title,
                "description": project.description,
                "applicationCategory": project.category,
                "operatingSystem": "Web, Windows, Android",
                "url": project.link !== "#" ? project.link : "https://ambroise-boutrin.fr/projets",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "EUR"
                },
                "author": {
                    "@type": "Person",
                    "name": "Ambroise Boutrin"
                }
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default ProjectsJsonLd;
