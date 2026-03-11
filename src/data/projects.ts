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
        logo: "/images/garanches.png",
        invertLogo: true,
        image: "/images/capturegaranches.png",
        imageAlt: "Page d'accueil du site e-commerce de vins Garances, design sombre et élégant",
        images: [
            "/images/gallery/garanches/garanches_boutique_1772901963034.png",
            "/images/gallery/garanches/garanches_domaine_1772902008131.png",
            "/images/gallery/garanches/garanches_engagements_1772901366104.png",
            "/images/gallery/garanches/garanches_contact_1772902040790.png",
            "/images/gallery/garanches/garanches_footer_1772901383005.png"
        ], // For detail gallery
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
        title: "Application ERP Web",
        slug: "erp-fullstack",
        category: "Outil Professionnel Web",
        role: "Développeur Fullstack",
        description: "Solution ERP complète pour la gestion d'entreprise. Développement fullstack avec interface moderne et backend robuste.",
        tech: ["React", "Vite", "Node.js", "Express"],
        mainTech: "React / Node.js",
        color: "bg-[#0f172a]", // Dark blue/navy based on the vercel link name "eight-navy"
        textColor: "text-white",
        github: null,
        demo: "https://erp-eight-navy.vercel.app/",
        logo: "/images/GSB.png",
        invertLogo: false,
        image: "/images/captureerp.png",
        imageAlt: "Dashboard de l'application ERP Web",
        images: [
            "/images/gallery/erp/erp_dashboard_1772901504214.png",
            "/images/gallery/erp/erp_catalogue_1772901543892.png",
            "/images/gallery/erp/erp_ventes_1772901553289.png",
            "/images/gallery/erp/erp_history_1772901558133.png",
            "/images/gallery/erp/erp_users_1772901595491.png"
        ],
        longDescription: "Développement d'une application ERP fullstack sur-mesure pour centraliser la gestion des processus métiers. L'architecture sépare clairement le frontend (React/Vite) du backend (Node.js/Express).",
        challenge: "Créer une interface d'administration complexe tout en conservant une excellente expérience utilisateur et des temps de réponse rapides.",
        solution: "Mise en place d'une SPA réactive avec React, connectée à une API RESTful Node.js performante pour le traitement des données en temps réel.",
        result: "Une plateforme centralisée fluide, sécurisée et facilement maintenable, prête pour un déploiement cloud à grande échelle.",
        problem: "Besoin d'un outil de gestion interne moderne, rapide et accessible depuis n'importe quel navigateur web.",
        stackDetails: [
            { name: "React & Vite", reason: "Interface utilisateur dynamique et build ultra-fast" },
            { name: "Node.js & Express", reason: "API robuste et traitement asynchrone des données" }
        ]
    },
    {
        id: "06",
        title: "NOMAD - House Music",
        slug: "nomad-collective",
        category: "Web & Art Expérience",
        role: "Développeur Lead & Design",
        description: "Collectif House Music & Évènementiel. Une exploration des textures sonores traduite dans une expérience web immersive et performante.",
        tech: ["Next.js", "Framer Motion", "TailwindCSS", "Lenis"],
        mainTech: "Next.js / Framer Motion",
        color: "bg-[#050505]",
        textColor: "text-white",
        github: "https://github.com/xeanoob/nomad",
        demo: "https://nomad-beige-phi.vercel.app/",
        logo: "/images/nomadelogo.png",
        invertLogo: true,
        image: "/images/capturenomad.png",
        imageAlt: "Interface immersive du site NOMAD, ambiance sombre et artistique",
        images: [
            "/images/gallery/nomad/nomad_hero.png",
            "/images/gallery/nomad/nomad_vision.png",
            "/images/gallery/nomad/nomad_about.png",
            "/images/gallery/nomad/nomad_gallery.png"
        ],
        longDescription: "Plus qu'une série de morceaux, NOMAD est une exploration des textures sonores. Nous sculptons chaque set pour transformer le dancefloor en une expérience immersive, loin des standards classiques. Le site web reflète cette philosophie avec des animations fluides, un grain de texture cinématographique et une navigation haute performance.",
        challenge: "Traduire l'atmosphère brute et sophistiquée des événements NOMAD dans une interface web sans compromettre les performances.",
        solution: "Utilisation de Next.js (App Router) pour la rapidité, Framer Motion pour les micro-interactions élégantes et Lenis pour un scroll fluide 'premium'.",
        result: "Une identité numérique forte qui complète l'expérience physique du collectif, avec un taux d'immersion maximal dès le splash screen.",
        problem: "Besoin d'une vitrine digitale qui ne soit pas juste un site informatif, mais une extension de l'expérience artistique du collectif.",
        stackDetails: [
            { name: "Next.js", reason: "Pour l'architecture moderne et le rendu ultra-rapide" },
            { name: "Framer Motion", reason: "Animations fluides et immersives" },
            { name: "Lenis", reason: "Smooth scrolling haute performance" },
            { name: "Tailwind CSS", reason: "Design système minimaliste et robuste" }
        ]
    },
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
        logo: "/images/bellenippelogo.png",
        invertLogo: true,
        image: "/images/capturebellenippe.png",
        imageAlt: "Logo et interface sombre du site e-commerce de luxe Bellenippe",
        images: [
            "/images/gallery/bellenippe/bellenippe_hero_1772901186956.png",
            "/images/gallery/bellenippe/bellenippe_la_maison_1772901878889.png",
            "/images/gallery/bellenippe/bellenippe_contact_1772901891116.png",
        ],
        longDescription: "Conception complète de l'identité numérique de Bellenippe, une marque de couture française. L'objectif était de traduire la texture et la rareté des pièces physiques dans une interface digitale. Utilisation de transitions fluides et d'une typographie éditoriale pour sublimer chaque vêtement.",
        challenge: "Comment vendre des pièces 'uniques' en ligne sans perdre l'émotion du toucher et de l'essayage ? Le site se devait de refléter les codes du luxe, en imposant une esthétique précise, épurée et très fluide.",
        solution: "Une direction artistique centrée on de larges visuels, une typographie élégante, soutenue par Next.js pour fluidifier la navigation sans rechargement. Shopify gère la vente en back-office de manière invisible via l'API Storefront (Headless).",
        result: "Un e-commerce ultra rapide (Green IT), une forte hausse d'engagement client (>30%) et une identité de marque parfaitement retranscrite dans le digital.",
        problem: "Comment vendre des pièces 'uniques' en ligne sans perdre l'émotion du toucher et de l'essayage ? Réponse : Une direction artistique centrée sur la matière et le détail visuel.",
        stackDetails: [
            { name: "Next.js 14", reason: "Performance et SEO pour le luxe" },
            { name: "Shopify Headless", reason: "Gestion robuste du catalogue back-office" },
            { name: "Framer Motion", reason: "Animations 'page-turn' pour l'immersion" }
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
        logo: "/images/graph.png",
        invertLogo: false,
        image: "/images/graph.png",
        imageAlt: "Visualisation de graphe de réseau complexe générée avec NetworkX et Matplotlib",
        images: [],
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
        logo: "/images/jo.png",
        invertLogo: false,
        image: "/images/jo.png",
        imageAlt: "Interface dashboard de l'application Java Swing pour la gestion des JO",
        images: [],
        longDescription: "Application de bureau pour la gestion centralisée des JO : athlètes, épreuves, résultats et médailles.",
        problem: "Besoin d'une interface robuste pour la saisie et la consultation rapide de grandes quantités de données sportives.",
        stackDetails: [
            { name: "Java Swing", reason: "Interface graphique native" },
            { name: "MySQL", reason: "Stockage relationnel structuré" }
        ]
    }
];
