import ProjectsContent from "../../components/ProjectsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projets Web & Mobile - Ambroise B.",
    description: "Explorez mon portfolio de projets : E-commerce Next.js, Applications Java, Outils Data Science. Une démonstration de mes compétences techniques.",
};

export default function ProjectsPage() {
    return <ProjectsContent />;
}