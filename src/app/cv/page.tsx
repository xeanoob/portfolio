import CVPage from "@/components/CV";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'CV | Ambroise Boutrin',
    alternates: { canonical: '/cv' }
};

export default function Page() {
    return <CVPage />;
}
