import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Ambroise Boutrin Portfolio',
        short_name: 'Ambroise B.',
        description: 'Portfolio de développeur étudiant - Projets & Compétences',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/apple-icon',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
