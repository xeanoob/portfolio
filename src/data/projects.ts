export const projects = [
    {
        id: "10",
        title: "Complément Outlook",
        slug: "complement-outlook",
        category: "Productivité & Add-ins",
        role: "Développeur Fullstack",
        description: "Développement d'un complément Outlook sur mesure pour automatiser et enrichir la gestion des emails directement depuis le client de messagerie.",
        tech: ["Office.js", "React", "Node.js", "Microsoft Graph API"],
        mainTech: "Office.js / React",
        color: "bg-[#0078d4]",
        textColor: "text-white",
        github: null,
        demo: null,
        logo: null,
        invertLogo: false,
        image: "/microsoft_outlook_dark_mode_0.webp",
        video: "/Présentation V2 Complément(2).mp4",
        imageAlt: "Interface du Complément Outlook",
        images: ["/microsoft_outlook_dark_mode_0.webp"],
        longDescription: "Conception et développement d'un add-in pour Microsoft Outlook afin d'intégrer des fonctionnalités métiers directement dans l'interface de messagerie de l'utilisateur. Le complément permet d'extraire des informations des emails et de les synchroniser avec un système d'information interne.",
        challenge: "Intégrer une application web complète au sein de l'écosystème strict et sécurisé d'Outlook tout en garantissant une expérience utilisateur fluide sur les versions web et desktop.",
        solution: "Utilisation du framework Office.js avec React pour le frontend, connecté à un backend Node.js et communiquant avec la Microsoft Graph API pour l'authentification et l'accès aux données.",
        result: "Un gain de productivité significatif pour les utilisateurs, évitant les allers-retours entre la boîte mail et les applications métiers.",
        problem: "Les collaborateurs perdaient beaucoup de temps à copier-coller manuellement les informations des emails vers d'autres outils internes.",
        stackDetails: [
            { name: "Office.js", reason: "API officielle pour interagir avec les clients Office" },
            { name: "React", reason: "Création d'une interface utilisateur dynamique et réactive" },
            { name: "Microsoft Graph API", reason: "Accès sécurisé aux données de l'écosystème Microsoft 365" }
        ]
    },
    {
        id: "09",
        title: "Hound Search",
        slug: "hound-search",
        category: "Outil Interne & DevOps",
        role: "DevOps / Déploiement",
        description: "Déploiement et configuration d'un moteur de recherche de code ultra-rapide basé sur des expressions régulières pour l'exploration de dépôts volumineux.",
        tech: ["Docker", "Linux", "Git", "JSON"],
        mainTech: "Docker / Linux",
        color: "bg-[#2b2b2b]",
        textColor: "text-white",
        github: "https://github.com/hound-search/hound",
        demo: null,
        logo: null,
        invertLogo: false,
        image: "/images/screen_capture.gif",
        imageAlt: "Interface de Hound Search",
        images: ["/images/screen_capture.gif"],
        longDescription: "Mise en place de Hound Search, un outil open-source développé par Etsy, permettant de faire des recherches ultra-rapides sur d'énormes bases de code en utilisant des expressions régulières. Ce projet illustre mes compétences en déploiement de services internes, configuration via Docker, et gestion de l'intégration avec de multiples dépôts Git.",
        challenge: "Faciliter la navigation et la recherche de code source au sein d'une organisation possédant de nombreux dépôts de code dispersés.",
        solution: "Déploiement de Hound via des conteneurs Docker, avec une configuration centralisée en JSON permettant de cibler et d'indexer efficacement tous les dépôts pertinents.",
        result: "Un outil de recherche interne centralisé, extrêmement performant, réduisant drastiquement le temps passé par les développeurs à chercher des extraits de code.",
        problem: "Les développeurs perdaient un temps précieux à chercher des bouts de code spécifiques à travers des dizaines de dépôts différents.",
        stackDetails: [
            { name: "Docker", reason: "Conteneurisation pour un déploiement reproductible et isolé" },
            { name: "JSON", reason: "Format de configuration natif et flexible pour définir les dépôts" }
        ],
        deploymentDocs: [
            {
                step: "1. Prérequis & Préparation",
                content: "Assurez-vous d'avoir un serveur Linux (Ubuntu/Debian) avec Docker et Docker Compose installés.\n\n```bash\nsudo apt update\nsudo apt install docker.io docker-compose\n```"
            },
            {
                step: "2. Fichier de Configuration (config.json)",
                content: "Créez un fichier `config.json` pour déclarer les dépôts Git que Hound devra indexer. Voici un exemple basique :\n\n```json\n{\n  \"max-concurrent-indexers\": 2,\n  \"dbpath\": \"data\",\n  \"repos\": {\n    \"Portfolio\": {\n      \"url\": \"https://github.com/xeanoob/portfolio.git\"\n    }\n  }\n}\n```"
            },
            {
                step: "3. Fichier Docker Compose",
                content: "Créez un fichier `docker-compose.yml` pour définir et lancer le service Hound facilement.\n\n```yaml\nversion: '3'\nservices:\n  hound:\n    image: etsylabs/hound\n    ports:\n      - \"6080:6080\"\n    volumes:\n      - ./data:/data\n      - ./config.json:/config.json\n```"
            },
            {
                step: "4. Lancement et Utilisation",
                content: "Démarrez le conteneur en arrière-plan en utilisant Docker Compose.\n\n```bash\ndocker-compose up -d\n```\n\nUne fois le conteneur lancé, Hound va cloner les dépôts et construire son index. Vous pouvez accéder à l'interface web via `http://votre-ip:6080`."
            }
        ]

    },
    {
        id: "05",
        title: "Stocko - ERP Web",
        slug: "stocko-erp",
        category: "Outil Professionnel Web",
        role: "Développeur Fullstack",
        description: "Solution ERP complète pour la gestion d'entreprise. Développement fullstack avec interface moderne et backend robuste.",
        tech: ["React", "Vite", "Node.js", "Express"],
        mainTech: "React / Node.js",
        color: "bg-[#0f172a]",
        textColor: "text-white",
        github: null,
        demo: "https://erp-eight-navy.vercel.app/",
        logo: "/images/GSB.png",
        invertLogo: false,
        image: "/images/captureerp.png",
        imageAlt: "Dashboard de l'application Stocko ERP Web",
        images: [
            "/images/gallery/erp/erp_dashboard_1772901504214.png",
            "/images/gallery/erp/erp_catalogue_1772901543892.png",
            "/images/gallery/erp/erp_ventes_1772901553289.png",
            "/images/gallery/erp/erp_history_1772901558133.png",
            "/images/gallery/erp/erp_users_1772901595491.png"
        ],
        longDescription: "Développement de Stocko, une application ERP fullstack sur-mesure pour centraliser la gestion des processus métiers : stocks, ventes, achats, fournisseurs et utilisateurs. L'architecture sépare clairement le frontend (React/Vite) du backend (Node.js/Express).",
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
        id: "offtime",
        title: "OffTime | Creative Studio",
        slug: "offtime-studio",
        category: "Cinematic & Digital Art",
        role: "Creative Studio",
        description: "Experience. In Motion. THE ART OF THE CUT. THE SOUL OF THE FRAME. Une exploration des textures temporelles traduite dans une expérience web immersive.",
        tech: ["Next.js", "Three.js", "TailwindCSS", "GSAP"],
        mainTech: "Next.js / GSAP",
        color: "bg-[#050505]",
        textColor: "text-white",
        github: null,
        demo: "https://awwwards-lyart.vercel.app/",
        logo: null,
        invertLogo: false,
        image: "/images/offtime.webp",
        imageAlt: "Aperçu de la page d'accueil de OffTime Studio",
        images: [
            "/images/offtime.webp"
        ],
        longDescription: "Chez OffTime, nous ne nous contentons pas de capturer la lumière. Nous manipulons la perception du temps. À travers un montage méticuleux, une typographie cinétique et un design numérique fluide, nous transformons des secondes en moments profonds. Studio avant-gardiste opérant globalement, notre travail se situe à l'intersection du cinéma et de l'art interactif.",
        challenge: "Concevoir une expérience numérique qui traduit l'esthétique cinématographique et la vision avant-gardiste du studio.",
        solution: "Une direction artistique audacieuse couplée à des animations avancées (GSAP, Three.js) pour une immersion totale.",
        result: "Un portfolio immersif, rapide et mémorable qui agit comme une extension numérique de leur art.",
        problem: "Concevoir une expérience numérique qui traduit l'esthétique cinématographique et la vision avant-gardiste du studio sans compromettre les performances.",
        stackDetails: [
            { name: "Next.js", reason: "Performance, rendu hybride, architecture moderne" },
            { name: "Three.js", reason: "Rendu 3D et expériences visuelles complexes" },
            { name: "GSAP", reason: "Animations fluides haute-fidélité et scroll interactif" },
            { name: "Tailwind CSS", reason: "Stylisation agile et système de design sur-mesure" }
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
        logo: "/images/garanches.webp",
        invertLogo: true,
        image: "/images/capturegaranches.webp",
        imageAlt: "Page d'accueil du site e-commerce de vins Garances, design sombre et élégant",
        images: [
            "/images/gallery/garanches/garanches_boutique_1772901963034.webp",
            "/images/gallery/garanches/garanches_domaine_1772902008131.webp",
            "/images/gallery/garanches/garanches_engagements_1772901366104.webp",
            "/images/gallery/garanches/garanches_contact_1772902040790.webp",
            "/images/gallery/garanches/garanches_footer_1772901383005.webp"
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
        logo: "/images/nomadelogo.webp",
        invertLogo: true,
        image: "/images/capturenomad.webp",
        imageAlt: "Interface immersive du site NOMAD, ambiance sombre et artistique",
        images: [
            "/images/gallery/nomad/nomad_hero.webp",
            "/images/gallery/nomad/nomad_vision.webp",
            "/images/gallery/nomad/nomad_about.webp",
            "/images/gallery/nomad/nomad_gallery.webp"
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

    },
    {
        id: "07",
        title: "GSB - Compte Rendu",
        slug: "gsb-compte-rendu",
        category: "Web Fullstack",
        role: "Développeur Fullstack",
        description: "Application web de gestion des comptes rendus de visite pour les visiteurs médicaux du laboratoire Galaxy Swiss Bourdin. Interface CRUD complète avec authentification.",
        tech: ["PHP", "CodeIgniter 4", "MySQL", "Bootstrap"],
        mainTech: "CodeIgniter 4 / PHP",
        color: "bg-[#1a1a2e]",
        textColor: "text-white",
        github: "https://github.com/xeanoob/GSBcompterendu",
        demo: null,
        logo: "/images/gsb_logo.webp",
        invertLogo: false,
        image: "/images/gsb_logo.webp",
        imageAlt: "Interface de l'application GSB Compte Rendu",
        images: [],
        longDescription: "Application web développée dans le cadre du contexte GSB (Galaxy Swiss Bourdin) pour la gestion des comptes rendus de visite des visiteurs médicaux. Le système permet la saisie, la consultation et la modification des rapports de visite auprès des praticiens.",
        challenge: "Mettre en place un système de gestion complet avec authentification sécurisée et une interface intuitive pour les visiteurs médicaux.",
        solution: "Utilisation du framework CodeIgniter 4 pour une architecture MVC propre, avec une base de données MySQL pour le stockage structuré des données.",
        result: "Une application fonctionnelle et sécurisée permettant aux visiteurs médicaux de gérer efficacement leurs comptes rendus de visite.",
        problem: "Besoin d'un outil centralisé pour la saisie et le suivi des visites médicales, remplaçant les processus manuels.",
        stackDetails: [
            { name: "CodeIgniter 4", reason: "Framework PHP MVC léger et performant" },
            { name: "MySQL", reason: "Base de données relationnelle pour les données métiers" },
            { name: "Bootstrap", reason: "Interface responsive et professionnelle" }
        ]

    },
    {
        id: "08",
        title: "Alunisson",
        slug: "alunisson",
        category: "Web Associatif",
        role: "Développeur Web",
        description: "Site vitrine pour l'association Alunisson, un collectif de couture solidaire. Ateliers créatifs accessibles dès 8 ans, partenariats sociaux et réservation en ligne.",
        tech: ["Next.js", "TailwindCSS", "Framer Motion"],
        mainTech: "Next.js / Tailwind",
        color: "bg-[#f5e6e0]",
        textColor: "text-[#1a1a1a]",
        github: "https://github.com/xeanoob/alunisson",
        demo: "https://alunisson.eu",
        logo: null,
        invertLogo: false,
        image: "/images/capturealunisson.webp",
        imageAlt: "Page d'accueil du site Alunisson, association de couture solidaire",
        images: [
            "/images/gallery/alunisson/alunisson_hero.webp",
            "/images/gallery/alunisson/alunisson_ateliers.webp",
            "/images/gallery/alunisson/alunisson_infolab.webp",
            "/images/gallery/alunisson/alunisson_footer.webp"
        ],
        longDescription: "Conception et développement du site vitrine de l'association Alunisson, un collectif de couture solidaire basé à Orléans. Le site met en avant les ateliers créatifs accessibles dès 8 ans, les partenariats sociaux avec l'ODAS et les centres aérés, ainsi que la possibilité de réserver un atelier en ligne.",
        challenge: "Créer un site chaleureux et accueillant qui reflète les valeurs d'inclusion et de partage de l'association, tout en facilitant les réservations d'ateliers.",
        solution: "Un design moderne aux couleurs douces avec Next.js pour la performance et Tailwind pour un style cohérent. Intégration d'un système de réservation et d'une newsletter.",
        result: "Un site engageant qui a permis d'augmenter la visibilité de l'association et de faciliter les inscriptions aux ateliers de couture.",
        problem: "L'association avait besoin d'une présence en ligne professionnelle pour attirer de nouveaux membres et faciliter l'organisation des ateliers.",
        stackDetails: [
            { name: "Next.js", reason: "Performance et SEO pour la visibilité associative" },
            { name: "Tailwind CSS", reason: "Design cohérent et responsive" },
            { name: "Framer Motion", reason: "Animations douces pour un site accueillant" }
        ]

    }
];
