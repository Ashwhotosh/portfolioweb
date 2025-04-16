
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="blur-circle top-20 left-20 opacity-30"></div>
      <div className="blur-circle bottom-20 right-20 opacity-20"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 space-y-6 lg:pr-10">
            <div className="space-y-2 animate-fade-in">
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                Hi, I am
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Ashutosh Singh
              </h1>
              <p className="text-xl md:text-2xl font-medium gradient-text">
                Computer Science Undergrad | Web Developer | Tech Enthusiast
              </p>
            </div>

            <p className="text-muted-foreground text-lg md:text-xl opacity-0 animate-fade-in-delay">
              I'm a passionate developer with a focus on web technologies and machine learning.
              Currently pursuing B.Tech in Computer Science at IIIT Raichur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-delay-2">
              <Button 
                className="btn-primary"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Me <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                className="btn-outline"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                View Resume
              </Button>
            </div>

            <div className="flex gap-4 pt-2 opacity-0 animate-fade-in-delay-2">
              <a
                href="https://github.com/Ashwhotosh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ashwhotosh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ashutoshgovindsingh2003@gmail.com"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl animate-scale-in">
                <img
                  src="/lovable-uploads/ed641d9a-a061-4a74-a2ee-847ad794ab3b.png"
                  alt="Ashutosh Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-32 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          <div className="animate-fade-in text-center p-4 rounded-lg border border-border bg-card/50">
            <h3 className="font-medium mb-1 text-muted-foreground">Education</h3>
            <p className="text-3xl font-bold">IIIT Raichur</p>
          </div>
          
          <div className="animate-fade-in-delay text-center p-4 rounded-lg border border-border bg-card/50">
            <h3 className="font-medium mb-1 text-muted-foreground">Experience</h3>
            <p className="text-3xl font-bold">3+ Years</p>
          </div>
          
          <div className="animate-fade-in-delay-2 text-center p-4 rounded-lg border border-border bg-card/50 col-span-2 md:col-span-1">
            <h3 className="font-medium mb-1 text-muted-foreground">Projects</h3>
            <p className="text-3xl font-bold">10+</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
