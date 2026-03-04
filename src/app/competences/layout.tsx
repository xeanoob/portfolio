import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Compétences | Ambroise B.",
    alternates: { canonical: '/competences' }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
