import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import EducationSection from "@/sections/EducationSection";
import CertificationsSection from "@/sections/CertificationsSection";
import AchievementsSection from "@/sections/AchievementsSection";
import ContactSection from "@/sections/ContactSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string })?.scrollTo;
    if (target) {
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      window.history.replaceState({}, "");
    }
  }, [location.state]);
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
