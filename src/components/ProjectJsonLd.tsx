import React from 'react';

type ProjectData = {
    title: string;
    slug: string;
    description: string;
    category: string;
    image?: string;
};

export default function ProjectJsonLd({ project }: { project: ProjectData }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://www.ambroise-boutrin.fr"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Projets",
                "item": "https://www.ambroise-boutrin.fr/projets"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": project.title,
                "item": `https://www.ambroise-boutrin.fr/projets/${project.slug}`
            }
        ]
    };

    const creativeWorkJsonLd = {
        "@context": "https://schema.org",
        "@type": project.category.includes('Web') ? "WebApplication" : "CreativeWork",
        "name": project.title,
        "description": project.description,
        "url": `https://www.ambroise-boutrin.fr/projets/${project.slug}`,
        "author": {
            "@type": "Person",
            "name": "Ambroise Boutrin"
        },
        ...(project.image ? { "image": `https://www.ambroise-boutrin.fr${project.image}` } : {})
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
            />
        </>
    );
}
