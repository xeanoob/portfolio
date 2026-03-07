import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import RecentProjects from "@/components/RecentProjects";
import Services from "@/components/Services";
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/' }
};

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Manifesto />
      <RecentProjects />
      {/* Services Component removed as requested, replaced by Packages in Services page */}
    </main>
  );
}
