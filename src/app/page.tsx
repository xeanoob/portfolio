import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Manifesto />
      {/* Services Component removed as requested, replaced by Packages in Services page */}
    </main>
  );
}
