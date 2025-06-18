
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";

const BusinessHeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl">
              <img 
                src="/placeholder.svg" 
                alt="Ashutosh Singh" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
              Ashutosh Singh
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-cyan-200 mb-4">
            Student Leader & Strategic Thinker
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            General Secretary at IIIT Raichur with proven leadership experience. 
            Passionate about building communities, driving strategic initiatives, and creating meaningful impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-cyan-500 text-black hover:bg-cyan-400 px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Connect
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/ashwhotosh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-cyan-500/20 hover:bg-cyan-500 hover:text-black transition-all duration-300 group"
            >
              <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:ashutoshgovindsingh2003@gmail.com"
              className="p-3 rounded-full bg-cyan-500/20 hover:bg-cyan-500 hover:text-black transition-all duration-300 group"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHeroSection;
