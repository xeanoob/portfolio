import ContactContent from "@/components/ContactContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contactez Ambroise B. - Développeur Fullstack Orléans",
    description: "Discutons de vos projets web. Disponible pour freelance ou opportunités à Orléans et en remote.",
};

export default function ContactPage() {
    return <ContactContent />;
}
