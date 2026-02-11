import type { Metadata } from "next";
import { inter, playfair } from "@/lib/fonts";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "Ambroise B. - Portfolio Développeur Fullstack",
    template: "%s | Ambroise B."
  },
  description: "Portfolio de Ambroise Boutrin, étudiant développeur Fullstack basé à Orléans. Expert en React, Next.js, et développement web moderne.",
  applicationName: "Portfolio Ambroise B.",
  authors: [{ name: "Ambroise Boutrin", url: "https://www.linkedin.com/in/ambroise-boutrin/" }],
  generator: "Next.js",
  keywords: ["Développeur Web", "Fullstack", "React", "Next.js", "Portfolio", "Orléans", "Ambroise Boutrin", "Étudiant Informatique", "Frontend", "Backend"],
  referrer: "origin-when-cross-origin",
  creator: "Ambroise Boutrin",
  publisher: "Ambroise Boutrin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ambroise-boutrin.fr'), // Remplacez par votre URL réelle si différente
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ambroise B. - Portfolio Développeur Fullstack",
    description: "Découvrez mes projets et compétences en développement web. Basé à Orléans, spécialisé en React & Next.js.",
    url: 'https://ambroise-boutrin.fr',
    siteName: 'Ambroise B. Portfolio',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ambroise B. - Portfolio Développeur Fullstack",
    description: "Découvrez mes projets et compétences en développement web. Basé à Orléans.",
    creator: "@ambroise_b", // Mettez votre handle si vous en avez un
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // À remplacer par le vrai code si nécessaire
  },
  icons: {
    icon: '/icon.svg',
  },
};

import Navbar from "@/components/Navbar";

// ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased font-sans bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--foreground)] selection:text-[var(--background)] select-none overflow-x-hidden">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] px-4 py-2 bg-black text-white font-bold rounded-md">Passer au contenu</a>
        <SmoothScroll>
          <div id="page-transition-curtain" className="fixed inset-0 bg-[var(--bg-inverse)] z-[99999] opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out"></div>
          <div className="bg-transparent bg-[url('/noise.png')] fixed inset-0 opacity-20 pointer-events-none -z-10"></div>
          <Navbar />
          <div id="main-content" className="relative z-0 min-h-screen"> {/* Main Content Container */}
            {children}
          </div>
          <div className="relative z-10">
            <Footer />
            <ScrollToTop />
          </div>
        </SmoothScroll>
        <JsonLd />
      </body>
    </html>
  );
}
