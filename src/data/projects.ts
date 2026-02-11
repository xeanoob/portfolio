export const projects = [
    {
        id: "01",
        title: "E-Commerce de Vins Premium",
        slug: "garanches-ecommerce",
        category: "Web Fullstack",
        role: "Développeur Fullstack",
        description: "Plateforme de vente de vins avec gestion de panier, paiement sécurisé et back-office administrateur. Design premium et performance optimisée.",
        tech: ["Next.js", "Stripe", "TailwindCSS", "Prisma"],
        mainTech: "Next.js / Stripe",
        color: "bg-[#111]",
        textColor: "text-white",
        github: "https://github.com/xeanoob", // Placeholder if private
        demo: "https://garanches.vercel.app/",
        image: "/images/garanches.png",
        images: ["/images/garanches.png"], // For detail gallery
        longDescription: "Développement d'une plateforme e-commerce complète pour une cave à vin. Le défi principal était de créer une expérience utilisateur fluide et haut de gamme tout en assurant une gestion robuste des stocks et des paiements via Stripe.",
        problem: "Le client avait besoin d'une solution sur mesure pour vendre ses vins exclusifs, avec une identité visuelle forte que les solutions clés en main (Shopify) ne permettaient pas d'atteindre facilement.",
        stackDetails: [
            { name: "Next.js", reason: "Pour le rendu hybride et le SEO" },
            { name: "Stripe", reason: "Paiements sécurisés et gestion des factures" },
            { name: "Tailwind", reason: "Design rapide et responsive" },
            { name: "Prisma", reason: "Remplacement de Supabase pour l'ORM" }
        ]
    },
    {
        id: "02",
        title: "Outil d'Analyse Réseau",
        slug: "analyse-graphes",
        category: "Data Science & Algorithmique",
        role: "Data Scientist",
        description: "Projet d'analyse de réseaux d'acteurs utilisant la théorie des graphes. Implémentation d'algorithmes de centralité et de détection de communautés avec NetworkX.",
        tech: ["Python", "NetworkX", "Matplotlib", "SciPy"],
        mainTech: "Python / NetworkX",
        color: "bg-[#1a1a1a]",
        textColor: "text-white",
        github: "https://github.com/Xeananas/SAEGRAH",
        demo: null,
        image: "/images/graph.png",
        images: ["/images/graph.png"],
        longDescription: "Analyse approfondie d'un réseau de collaboration scientifique. Utilisation de métriques de centralité (PageRank, Betweenness) pour identifier les acteurs clés.",
        problem: "Comprendre les dynamiques de groupe au sein d'un large réseau de données non structurées.",
        stackDetails: [
            { name: "Python", reason: "Langage de référence pour la Data Science" },
            { name: "NetworkX", reason: "Manipulation de graphes complexes" }
        ]
    },
    {
        id: "03",
        title: "Gestion d'Événements (JO)",
        slug: "gestion-jo-2024",
        category: "Desktop Application",
        role: "Développeur Java",
        description: "Solution complète pour l'administration des épreuves et des résultats des Jeux Olympiques. Interface Java Swing moderne avec base de données relationnelle.",
        tech: ["Java", "Swing", "MySQL", "JDBC"],
        mainTech: "Java / SQL",
        color: "bg-[#f0f0f0]",
        textColor: "text-black",
        github: "https://github.com/xeanoob/GSBcompterendu",
        demo: null,
        image: "/images/jo.png",
        images: ["/images/jo.png"],
        longDescription: "Application de bureau pour la gestion centralisée des JO : athlètes, épreuves, résultats et médailles.",
        problem: "Besoin d'une interface robuste pour la saisie et la consultation rapide de grandes quantités de données sportives.",
        stackDetails: [
            { name: "Java Swing", reason: "Interface graphique native" },
            { name: "MySQL", reason: "Stockage relationnel structuré" }
        ]
    },
    {
        id: "04",
        title: "Plateforme Médicale GSB",
        slug: "plateforme-medicale-gsb",
        category: "Web & Mobile",
        role: "Développeur Backend",
        description: "Application de gestion des visites médicales pour les laboratoires Galaxy Swiss Bourdin. Suivi des comptes rendus, frais et planning des visiteurs.",
        tech: ["PHP", "Symfony", "Java", "Android"],
        mainTech: "PHP / Symfony",
        color: "bg-[#f0f0f0]",
        textColor: "text-black",
        github: "https://github.com/xeanoob/GSBcompterendu",
        demo: null,
        image: "/images/gsb.png",
        images: ["/images/gsb.png"],
        longDescription: "Refonte du système de suivi des visites médicales. Une partie web pour les comptables et une partie mobile pour les visiteurs médicaux.",
        problem: "Moderniser un processus papier obsolète et permettre la saisie hors ligne.",
        stackDetails: [
            { name: "Symfony", reason: "Framework PHP robuste pour le back-office" },
            { name: "Android", reason: "Application mobile native pour le terrain" }
        ]
    },
    {
        id: "05",
        title: "Plugin Outlook (Privé)",
        slug: "outlook-automation",
        category: "Outil Professionnel",
        role: "Développeur .NET",
        description: "Plugin développé pour ADENES permettant d'automatiser le traitement des emails entrants. Analyse de contenu et classement automatique.",
        tech: ["C#", ".NET VSTO", "Outlook API"],
        mainTech: "C# / .NET",
        color: "bg-[#e0e0e0]",
        textColor: "text-black",
        github: null,
        demo: null,
        image: "/images/outlook.png",
        images: ["/images/outlook.png"],
        longDescription: "Extension Outlook pour automatiser le tri et l'extraction de données des emails de sinistres. (Projet sous NDA, code non disponible).",
        problem: "Réduire le temps de traitement manuel des emails par les gestionnaires de sinistres.",
        stackDetails: [
            { name: "VSTO", reason: "Intégration native Office" },
            { name: "C#", reason: "Performance et typage fort" }
        ]
    }
];
