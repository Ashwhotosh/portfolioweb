import { Code, Database, Terminal, Cpu, LucideIcon, Braces, Server, Globe } from "lucide-react";

const techCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "C/C++", logo: "/lovable-uploads/4072fa2b-210e-4e2c-b68f-8f7ea125f2ba.png" },
      { name: "Python", logo: "/lovable-uploads/7b78d007-a80e-4721-a193-699fcafd0e0a.png" },
      { name: "JavaScript", logo: "/lovable-uploads/695f141a-bb3f-406a-83e1-1ff950782000.png" },
      { name: "HTML+CSS", logo: "/lovable-uploads/77d3a851-4df3-4e3e-9a32-deb8673062f5.png" },
    ]
  },
  {
    title: "Web Technologies",
    icon: Globe,
    skills: [
      { name: "React.js", logo: "/logos/react.png" },
      { name: "Node.js", logo: "/logos/nodejs.png" },
      { name: "Express.js", logo: "/logos/express.png" },
      { name: "PHP", logo: "/logos/php.png" },
      { name: "Laravel", logo: "/logos/laravel.png" },
    ]
  },
  {
    title: "Developer Tools",
    icon: Terminal,
    skills: [
      { name: "VSCode" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Firebase" },
      { name: "GraphQL" },
    ]
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
    ]
  },
  {
    title: "ML & Data Science",
    icon: Cpu,
    skills: [
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "OpenCV" },
    ]
  },
  {
    title: "Other Skills",
    icon: Braces,
    skills: [
      { name: "Problem Solving" },
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "System Design" },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="blur-circle -bottom-20 right-20 opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Cpu className="text-primary" size={28} />
          <h2 className="section-title">Technical Skills</h2>
        </div>
        
        {techCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <category.icon size={24} />
              </div>
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="rounded-xl p-4 border border-border bg-card/30 hover:shadow-xl transition-all duration-300 hover:shadow-purple-500/10 hover:-translate-y-1 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 mb-3 bg-secondary/50 rounded-full flex items-center justify-center">
                    <img
                      src={skill.logo || "/placeholder.svg"}
                      alt={`${skill.name} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
