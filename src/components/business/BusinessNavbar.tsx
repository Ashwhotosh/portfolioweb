
import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const BusinessNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-3 shadow-sm border-b border-cyan-500/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Removed logo section */}
        <div></div>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-4">
            <li>
              <button 
                onClick={() => scrollToSection("about")} 
                className="relative px-3 py-1.5 text-white/80 font-medium hover:text-cyan-400 transition-colors duration-200"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("education")} 
                className="relative px-3 py-1.5 text-white/80 font-medium hover:text-cyan-400 transition-colors duration-200"
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("experience")} 
                className="relative px-3 py-1.5 text-white/80 font-medium hover:text-cyan-400 transition-colors duration-200"
              >
                Leadership
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="relative px-3 py-1.5 text-white/80 font-medium hover:text-cyan-400 transition-colors duration-200"
              >
                Contact
              </button>
            </li>
          </ul>

          <Button 
            className="bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 font-medium"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-30 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <ul className="flex flex-col gap-6 text-center">
            <li>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-xl font-medium text-white hover:text-cyan-400"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("education")} 
                className="text-xl font-medium text-white hover:text-cyan-400"
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("experience")} 
                className="text-xl font-medium text-white hover:text-cyan-400"
              >
                Leadership
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-xl font-medium text-white hover:text-cyan-400"
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="flex flex-col gap-4 items-center">
            <Button 
              className="bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 w-40"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
            
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com/in/ashwhotosh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500 hover:text-black transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ashutoshgovindsingh2003@gmail.com"
                className="p-2 rounded-full bg-cyan-500/20 hover:bg-cyan-500 hover:text-black transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BusinessNavbar;
