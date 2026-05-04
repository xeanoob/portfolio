import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mes Certifications | Ambroise B. - Développeur Web",
    description: "Découvrez mes certifications obtenues auprès d'OpenClassrooms, W3C, ANSSI et plus encore. Un parcours d'apprentissage continu pour garantir une expertise technique de pointe.",
    alternates: { canonical: '/certifications' }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
