
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import BusinessNavbar from "@/components/business/BusinessNavbar";
import BusinessHeroSection from "@/components/business/BusinessHeroSection";
import BusinessAboutSection from "@/components/business/BusinessAboutSection";
import BusinessEducationSection from "@/components/business/BusinessEducationSection";
import BusinessExperienceSection from "@/components/business/BusinessExperienceSection";
import BusinessContactSection from "@/components/business/BusinessContactSection";
import BusinessFooter from "@/components/business/BusinessFooter";

const BusinessProfile = () => {
  const [isTechProfile, setIsTechProfile] = useState(false);
  const navigate = useNavigate();

  const handleToggle = (checked: boolean) => {
    console.log("Business toggle clicked, checked:", checked);
    setIsTechProfile(checked);
    if (checked) {
      console.log("Navigating to tech profile");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen relative bg-black text-white">
      {/* Toggle Switch */}
      <div className="fixed top-4 left-4 z-50 flex items-center gap-3 bg-black/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-cyan-500/30 shadow-lg">
        <span className="text-sm font-medium text-cyan-300">Business</span>
        <Switch
          checked={isTechProfile}
          onCheckedChange={handleToggle}
          aria-label="Switch between business and tech profile"
          className="data-[state=checked]:bg-cyan-500"
        />
        <span className="text-sm font-medium text-cyan-300">Tech</span>
      </div>
      
      <BusinessNavbar />
      <BusinessHeroSection />
      <BusinessAboutSection />
      <BusinessEducationSection />
      <BusinessExperienceSection />
      <BusinessContactSection />
      <BusinessFooter />
    </div>
  );
};

export default BusinessProfile;
