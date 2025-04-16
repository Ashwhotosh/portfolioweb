
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Download, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#hero"
          className="font-bold text-xl md:text-2xl text-foreground flex items-center gap-2"
        >
          {/* Logo placeholder */}
          <div className="h-10 w-10 rounded-md overflow-hidden">
            {/* Add your logo here */}
            <img 
              src="/placeholder.svg" 
              alt="Logo" 
              className="h-full w-full object-contain"
              title="Replace with your logo"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-4">
            <li>
              <button 
                onClick={() => scrollToSection("about")} 
                className="nav-link"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("education")} 
                className="nav-link"
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("skills")} 
                className="nav-link"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("projects")} 
                className="nav-link"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("experience")} 
                className="nav-link"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="nav-link"
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Theme toggle button */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Button 
            className="bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <ul className="flex flex-col gap-6 text-center">
            <li>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-xl font-medium"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("education")} 
                className="text-xl font-medium"
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("skills")} 
                className="text-xl font-medium"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("projects")} 
                className="text-xl font-medium"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("experience")} 
                className="text-xl font-medium"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-xl font-medium"
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="flex flex-col gap-4 items-center">
            {/* Theme toggle button */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <Button 
              className="bg-primary text-white rounded-lg hover:bg-primary/90 w-40"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
            
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/Ashwhotosh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ashwhotosh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ashutoshgovindsingh2003@gmail.com"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors duration-300"
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

export default Navbar;
