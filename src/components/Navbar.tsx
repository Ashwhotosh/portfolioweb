
import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Mail, Download, Moon, Sun } from "lucide-react";
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
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md py-3 shadow-sm border-b border-border"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Removed logo section */}
        <div></div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-4">
            <li>
              <button 
                onClick={() => scrollToSection("about")} 
                className="relative px-3 py-1.5 text-muted-foreground font-medium hover:text-primary transition-colors duration-200"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("education")} 
                className="relative px-3 py-1.5 text-muted-foreground font-medium hover:text-primary transition-colors duration-200"
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("skills")} 
                className="relative px-3 py-1.5 text-muted-foreground font-medium hover:text-primary transition-colors duration-200"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("projects")} 
                className="relative px-3 py-1.5 text-muted-foreground font-medium hover:text-primary transition-colors duration-200"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("experience")} 
                className="relative px-3 py-1.5 text-muted-foreground font-medium hover:text-primary transition-colors duration-200"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="relative px-3 py-1.5 text-muted-foreground font-medium hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
            </li>
          </ul>

          <Button 
            className="bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 font-medium"
            onClick={() => window.open("https://drive.google.com/file/d/1Pb_aj5AjiiX7LIGZF_kI88LRyuXt1lZP/view?usp=sharing", "_blank")}
          >
            <Download className="mr-2 h-4 w-4" /> Resume
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-30 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <ul className="flex flex-col gap-6 text-center">
            <li>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-xl font-medium text-foreground hover:text-primary"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("education")} 
                className="text-xl font-medium text-foreground hover:text-primary"
              >
                Education
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("skills")} 
                className="text-xl font-medium text-foreground hover:text-primary"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("projects")} 
                className="text-xl font-medium text-foreground hover:text-primary"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("experience")} 
                className="text-xl font-medium text-foreground hover:text-primary"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-xl font-medium text-foreground hover:text-primary"
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="flex flex-col gap-4 items-center">
            <Button 
              className="bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 w-40"
              onClick={() => window.open("https://drive.google.com/file/d/1Pb_aj5AjiiX7LIGZF_kI88LRyuXt1lZP/view?usp=sharing", "_blank")}
            >
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
            
            <div className="flex gap-4 mt-4">
              <a
                href="https://linkedin.com/in/ashwhotosh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ashutoshgovindsingh2003@gmail.com"
                className="p-2 rounded-full bg-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
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
