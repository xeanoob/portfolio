import ParcoursContent from "@/components/ParcoursContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mon Parcours - Ambroise B.",
    description: "De l'IUT d'Orléans à Sopra Steria : découvrez mon parcours académique et professionnel en tant que développeur Fullstack et DevOps.",
};

export default function ParcoursPage() {
    return <ParcoursContent />;
}
