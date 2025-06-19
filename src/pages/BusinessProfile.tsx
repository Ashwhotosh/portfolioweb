
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
  const [isBusinessProfile, setIsBusinessProfile] = useState(true);
  const navigate = useNavigate();

  const handleToggle = (checked: boolean) => {
    console.log("Business toggle clicked, checked:", checked);
    setIsBusinessProfile(checked);
    if (!checked) {
      console.log("Navigating to tech profile");
      // Add a small delay to show the animation before navigation
      setTimeout(() => {
        navigate("/");
      }, 150);
    }
  };

  return (
    <div className="min-h-screen relative bg-black text-white">
      {/* Toggle Switch - Fixed positioning and consistent layout */}
      <div className="fixed top-4 left-4 z-50 flex items-center gap-3 bg-black/90 backdrop-blur-sm px-4 py-3 rounded-lg border border-purple-500/30 shadow-lg">
        <span className={`text-sm font-medium transition-colors duration-300 ${!isBusinessProfile ? 'text-cyan-400' : 'text-white/60'}`}>Tech</span>
        <Switch
          checked={isBusinessProfile}
          onCheckedChange={handleToggle}
          aria-label="Switch between business and tech profile"
          className="data-[state=checked]:bg-purple-500 data-[state=unchecked]:bg-cyan-500 transition-all duration-300"
        />
        <span className={`text-sm font-medium transition-colors duration-300 ${isBusinessProfile ? 'text-purple-400' : 'text-white/60'}`}>Business</span>
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
