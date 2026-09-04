import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/navigation/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0808] text-[#F2EDE9] flex flex-col selection:bg-[#C81E3A] selection:text-[#F2EDE9]">
      <Navbar />
      <main className="flex-1 flex flex-col w-full">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
