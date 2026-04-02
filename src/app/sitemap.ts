import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.ambroise-boutrin.fr' // Remplacez par votre domaine réel

    const lastMod = '2024-03-18' // Date fixe pour éviter les re-indexations inutiles

    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/projets/${project.slug}`,
        lastModified: lastMod,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/projets`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/competences`,
            lastModified: lastMod,
            changeFrequency: 'yearly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/parcours`,
            lastModified: lastMod,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: lastMod,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/veille`,
            lastModified: lastMod,
            changeFrequency: 'weekly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/cv`,
            lastModified: lastMod,
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        ...projectUrls,
    ]
}
