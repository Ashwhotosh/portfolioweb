
import { Code, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const projectsData: Project[] = [
  {
    title: "Pothole Detection",
    description: "ML + OpenCV-based web app integrated with vehicle hardware for real-time pothole detection.",
    image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=1470&auto=format&fit=crop",
    technologies: ["Python", "OpenCV", "TensorFlow", "React.js"],
    github: "https://github.com/Ashwhotosh/pothole-detection",
  },
  {
    title: "LifeGuard",
    description: "Web app with real-time attendance tracking for security guards with location verification.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1470&auto=format&fit=crop",
    technologies: ["React.js", "Node.js", "Firebase", "MongoDB"],
    github: "https://github.com/Ashwhotosh/lifeguard",
    demo: "https://lifeguard-demo.vercel.app",
  },
  {
    title: "CGPA Calculator Extension",
    description: "Simple GPA calculator browser extension using JavaScript for quick grade calculations.",
    image: "https://images.unsplash.com/photo-1564865878688-9a244444042a?q=80&w=1470&auto=format&fit=crop",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Ashwhotosh/cgpa-calculator",
    demo: "https://chrome.google.com/webstore/detail/cgpa-calculator/",
  },
  {
    title: "Minix Task Manager",
    description: "OS-level system enhancement for Minix providing improved task management capabilities.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1474&auto=format&fit=crop",
    technologies: ["C", "OS Development", "System Programming"],
    github: "https://github.com/Ashwhotosh/minix-task-manager",
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="blur-circle -top-20 left-20 opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Code className="text-primary" size={28} />
          <h2 className="section-title">Projects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="project-card group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-5 flex flex-col h-full">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-primary/10 text-primary-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto flex gap-3">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="btn-primary"
            onClick={() => window.open("https://github.com/Ashwhotosh", "_blank")}
          >
            <Github className="mr-2 h-4 w-4" /> 
            View More Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
