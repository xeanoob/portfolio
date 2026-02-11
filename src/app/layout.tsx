import type { Metadata } from "next";
import { inter, playfair } from "@/lib/fonts";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Portfolio - Étudiant Informatique",
  description: "Portfolio de développeur étudiant - Projets & Compétences",
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
      <body className="antialiased font-sans bg-white text-black selection:bg-black selection:text-white select-none overflow-x-hidden">
        <SmoothScroll>
          <div id="page-transition-curtain" className="fixed inset-0 bg-black z-[99999] opacity-0 pointer-events-none transition-opacity duration-500 ease-in-out"></div>
          <div className="bg-[#f0f0f0] bg-[url('/noise.png')] fixed inset-0 opacity-20 pointer-events-none -z-10"></div>
          <Navbar />
          <div className="relative z-0 min-h-screen"> {/* Main Content Container */}
            {children}
          </div>
          <div className="relative z-10">
            <Footer />
            <ScrollToTop />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
