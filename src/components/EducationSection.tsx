
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "IIIT Raichur",
    duration: "2022-2026",
    description: "Pursuing a Bachelor's degree in Computer Science with focus on algorithms, data structures, and software development.",
  },
  {
    degree: "ISC (12th Standard)",
    institution: "Ashoka Junior College, Nashik",
    duration: "2021",
    description: "Completed Indian School Certificate with 85% marks with focus on Science and Mathematics.",
  },
  {
    degree: "ICSE (10th Standard)",
    institution: "Ashoka Universal School",
    duration: "2019",
    description: "Achieved 91.8% in Indian Certificate of Secondary Education with distinction in Mathematics and Science.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="blur-circle top-20 left-0 opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="text-primary" size={28} />
          <h2 className="section-title">Education</h2>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2"></div>
          
          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((education, index) => (
              <div 
                key={index} 
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary transform md:-translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                }`}>
                  <h3 className="text-xl font-bold">{education.degree}</h3>
                  <p className="text-primary font-medium">{education.institution}</p>
                  <p className="text-muted-foreground">{education.duration}</p>
                  <p className="mt-2">{education.description}</p>
                </div>
                
                {/* Logo */}
                <div className={`hidden md:flex items-center ${
                  index % 2 === 0 ? "justify-start md:pl-12" : "justify-end md:pr-12"
                }`}>
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-primary/20 bg-white p-2 shadow-lg flex items-center justify-center">
                    {/* Institute Logo Placeholder */}
                    <img 
                      src="/placeholder.svg" 
                      alt={`${education.institution} Logo`}
                      className="w-full h-auto object-contain"
                      title={`Replace with ${education.institution} logo`}
                    />
                    {/* Add institute logo here - replace placeholder.svg with your logo */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
