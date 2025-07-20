import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ResearchSection from "@/components/research-section";
import PublicationsSection from "@/components/publications-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-inter text-slate-800 bg-slate-50 min-h-screen">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <HeroSection />
        <ResearchSection />
        <PublicationsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
