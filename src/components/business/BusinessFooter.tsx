
import { Mail, Linkedin } from "lucide-react";

const BusinessFooter = () => {
  return (
    <footer className="bg-black border-t border-cyan-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-cyan-500/20 flex items-center justify-center">
                <span className="text-cyan-400 font-bold text-sm">AS</span>
              </div>
              <span className="text-xl font-bold text-cyan-400">Ashutosh Singh</span>
            </div>
            <p className="text-gray-400 text-sm">
              Student Leader & Strategic Thinker passionate about building communities and driving meaningful change.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Education
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Leadership
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Connect</h3>
            <div className="flex gap-4">
              <a
                href="mailto:ashutoshgovindsingh2003@gmail.com"
                className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 hover:text-black transition-all duration-300 group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/ashwhotosh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 hover:text-black transition-all duration-300 group"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Open to leadership opportunities and meaningful collaborations.
            </p>
          </div>
        </div>
        
        <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ashutosh Singh. Crafted with dedication and vision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BusinessFooter;
