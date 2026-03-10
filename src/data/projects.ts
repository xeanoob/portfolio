export const projects = [
    {
        id: "00", // New Top Project
        title: "Bellenippe - L'Art de l'Unicité",
        slug: "bellenippe-fashion",
        category: "E-Commerce Luxury",
        role: "Direction Artistique & Dev",
        description: "Maison de couture digitale prônant l'artisanat et l'unicité. Une expérience e-commerce immersive pour des pièces limitées.",
        tech: ["Next.js", "Shopify", "Framer Motion", "Tailwind"],
        mainTech: "Next.js / Shopify",
        color: "bg-[#0a0a0a]",
        textColor: "text-white",
        github: null, // Private client
        demo: "https://bellenippe.vercel.app/",
        image: "/images/bellenippelogo.png",
        imageAlt: "Logo et interface sombre du site e-commerce de luxe Bellenippe",
        images: ["/images/bellenippelogo.png"],
        longDescription: "Conception complète de l'identité numérique de Bellenippe, une marque de couture française. L'objectif était de traduire la texture et la rareté des pièces physiques dans une interface digitale. Utilisation de transitions fluides et d'une typographie éditoriale pour sublimer chaque vêtement.",
        challenge: "Comment vendre des pièces 'uniques' en ligne sans perdre l'émotion du toucher et de l'essayage ? Le site se devait de refléter les codes du luxe, en imposant une esthétique précise, épurée et très fluide.",
        solution: "Une direction artistique centrée sur de larges visuels, une typographie élégante, soutenue par Next.js pour fluidifier la navigation sans rechargement. Shopify gère la vente en back-office de manière invisible via l'API Storefront (Headless).",
        result: "Un e-commerce ultra rapide (Green IT), une forte hausse d'engagement client (>30%) et une identité de marque parfaitement retranscrite dans le digital.",
        problem: "Comment vendre des pièces 'uniques' en ligne sans perdre l'émotion du toucher et de l'essayage ? Réponse : Une direction artistique centrée sur la matière et le détail visuel.",
        stackDetails: [
            { name: "Next.js 14", reason: "Performance et SEO pour le luxe" },
            { name: "Shopify Headless", reason: "Gestion robuste du catalogue back-office" },
            { name: "Framer Motion", reason: "Animations 'page-turn' pour l'immersion" }
        ]
    },
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
        imageAlt: "Page d'accueil du site e-commerce de vins Garances, design sombre et élégant",
        images: ["/images/garanches.png"], // For detail gallery
        longDescription: "Développement d'une plateforme e-commerce complète pour une cave à vin. Le défi principal était de créer une expérience utilisateur fluide et haut de gamme tout en assurant une gestion robuste des stocks et des paiements via Stripe.",
        challenge: "Le client avait besoin d'une solution sur mesure pour vendre ses vins exclusifs, avec une identité visuelle forte que les solutions clés en main (Shopify) ne permettaient pas d'atteindre facilement.",
        solution: "Développement from scratch d'une application Next.js Fullstack, avec base de données Postgres (Prisma) pour la gestion des stocks. Stripe gère les paiements en toute sécurité.",
        result: "Processus d'achat réduit à 3 clics, conversions améliorées et autonomie complète du client via un Dashboard administrateur sécurisé.",
        problem: "Le client avait besoin d'une solution sur mesure pour vendre ses vins exclusifs, avec une identité visuelle forte que les solutions clés en main (Shopify) ne permettaient pas d'atteindre facilement.",
        stackDetails: [
            { name: "Next.js", reason: "Pour le rendu hybride et le SEO" },
            { name: "Stripe", reason: "Paiements sécurisés et gestion des factures" },
            { name: "Tailwind", reason: "Design rapide et responsive" },
            { name: "Prisma", reason: "Remplacement de Supabase pour l'ORM" }
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
        color: "bg-[#2a2a2a]",
        textColor: "text-white",
        github: null,
        demo: null,
        image: "/images/outlook.png",
        imageAlt: "Capture d'écran de l'interface Outlook avec le plugin d'automatisation activé",
        images: ["/images/outlook.png"],
        longDescription: "Extension Outlook pour automatiser le tri et l'extraction de données des emails de sinistres. (Projet sous NDA, code non disponible).",
        challenge: "Réduire le temps de traitement manuel des emails par les gestionnaires de sinistres dans un environnement d'entreprise ultra-sécurisé.",
        solution: "Développement d'un add-in Microsoft VSTO en C# qui s'intègre directement dans le client lourd Outlook, parse les courriels cibles et exécute des règles métiers complexes.",
        result: "Gain d'environ 2h/jour par gestionnaire. Erreurs de classement de dossiers réduites à zéro.",
        problem: "Réduire le temps de traitement manuel des emails par les gestionnaires de sinistres.",
        stackDetails: [
            { name: "VSTO", reason: "Intégration native Office" },
            { name: "C#", reason: "Performance et typage fort" }
        ]
    },
    {
        id: "02",
        title: "Outil d'Analyse Réseau",
        slug: "analyse-graphes",
        category: "Data Science & Archives",
        role: "Data Scientist",
        description: "Projet d'analyse de réseaux d'acteurs utilisant la théorie des graphes. Implémentation d'algorithmes de centralité et de détection de communautés avec NetworkX.",
        tech: ["Python", "NetworkX", "Matplotlib", "SciPy"],
        mainTech: "Python / NetworkX",
        color: "bg-[#1a1a1a]",
        textColor: "text-white",
        github: "https://github.com/Xeananas/SAEGRAH",
        demo: null,
        image: "/images/graph.png",
        imageAlt: "Visualisation de graphe de réseau complexe générée avec NetworkX et Matplotlib",
        images: ["/images/graph.png"],
        longDescription: "Analyse approfondie d'un réseau de collaboration scientifique. Utilisation de métriques de centralité (PageRank, Betweenness) pour identifier les acteurs clés.",
        challenge: "Comprendre les dynamiques de groupe au sein d'un large réseau de données non structurées.",
        solution: "Création d'un pipeline Python d'ingestion des datas et modélisation via algorithmiques de graphe.",
        result: "Modélisation fonctionnelle et identification des noeuds centraux du système étudié.",
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
        category: "Desktop Java & Archives",
        role: "Développeur Java",
        description: "Solution complète pour l'administration des épreuves et des résultats des Jeux Olympiques. Interface Java Swing.",
        tech: ["Java", "Swing", "MySQL", "JDBC"],
        mainTech: "Java / SQL",
        color: "bg-[#1f1f1f]",
        textColor: "text-white",
        github: "https://github.com/clemencebc1/SAe_JEUXIUTO",
        demo: null,
        image: "/images/jo.png",
        imageAlt: "Interface dashboard de l'application Java Swing pour la gestion des JO",
        images: ["/images/jo.png"],
        longDescription: "Application de bureau pour la gestion centralisée des JO : athlètes, épreuves, résultats et médailles.",
        problem: "Besoin d'une interface robuste pour la saisie et la consultation rapide de grandes quantités de données sportives.",
        stackDetails: [
            { name: "Java Swing", reason: "Interface graphique native" },
            { name: "MySQL", reason: "Stockage relationnel structuré" }
        ]
    }
];
