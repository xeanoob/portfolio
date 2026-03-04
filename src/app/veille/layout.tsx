import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Veille Technologique | Ambroise B.",
    alternates: { canonical: '/veille' }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
