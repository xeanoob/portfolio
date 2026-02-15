import ServicesContent from "@/components/ServicesContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Ambroise Boutrin",
    description: "Découvrez mes services de développement web et création de sites internet sur mesure.",
};

export default function ServicesPage() {
    return (
        <ServicesContent />
    );
}
