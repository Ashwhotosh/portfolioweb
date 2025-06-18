
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isBusinessProfile, setIsBusinessProfile] = useState(false);
  const navigate = useNavigate();

  const handleToggle = (checked: boolean) => {
    console.log("Toggle clicked, checked:", checked);
    setIsBusinessProfile(checked);
    if (checked) {
      console.log("Navigating to business profile");
      navigate("/business-profile");
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Toggle Switch - Increased z-index to be above navbar */}
      <div className="fixed top-4 left-4 z-[60] flex items-center gap-3 bg-background/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-border shadow-lg">
        <span className="text-sm font-medium text-foreground">Tech</span>
        <Switch
          checked={isBusinessProfile}
          onCheckedChange={handleToggle}
          aria-label="Switch between tech and business profile"
          className="data-[state=checked]:bg-primary"
        />
        <span className="text-sm font-medium text-foreground">Business</span>
      </div>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
