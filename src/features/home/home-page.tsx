import AboutSection from "@/features/about/about-section";
import Hero from "./components/hero";

export default function HomePage() {
  return (
    <main id="content" className="flex flex-1 flex-col">
      <Hero />
      <AboutSection />
    </main>
  );
}
