import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import History from "@/components/History";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <Skills />
      <Projects />

    </main>
  );
}
