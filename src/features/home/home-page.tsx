import AboutSection from "@/features/about/about-section";
import ContactSection from "@/features/contact/contact-section";
import ExperienceSection from "@/features/experience/experience-section";
import ProjectsSection from "@/features/projects/projects-section";
import StackSection from "@/features/stack/stack-section";
import Hero from "./components/hero";

export default function HomePage() {
  return (
    <main id="content" className="flex flex-1 flex-col">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <StackSection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
