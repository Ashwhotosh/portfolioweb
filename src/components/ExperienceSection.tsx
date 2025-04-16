
import { Briefcase, Calendar } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const experienceData: Experience[] = [
  {
    title: "Internship",
    company: "E-Cell IIT Bombay",
    duration: "2023–2024",
    description: "Collaborated with the entrepreneurship cell team to develop and maintain their website. Implemented new features and improved user experience."
  },
  {
    title: "General Secretary",
    company: "IIIT Raichur",
    duration: "2024–2025",
    description: "Represented the student body, organized events and coordinated between students and administration to enhance campus experience."
  },
  {
    title: "PR Head",
    company: "TnP Cell",
    duration: "2025-2026",
    description: "Led the public relations team for the Training and Placement Cell, establishing connections with companies and organizing placement activities."
  },
  {
    title: "Coordinator",
    company: "E-Cell",
    duration: "2022-2024",
    description: "Organized entrepreneurship events, workshops and competitions to foster innovation and startup culture on campus."
  },
  {
    title: "Head of PR",
    company: "IIIT Raichur",
    duration: "2023-2024",
    description: "Managed the public relations for the institute, handled social media accounts and coordinated promotional campaigns."
  },
  {
    title: "Event Head",
    company: "GameXcellence",
    duration: "2023",
    description: "Led the organization of a gaming event, managing teams, logistics and ensuring smooth execution of the competition."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="blur-circle bottom-20 left-20 opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-primary" size={28} />
          <h2 className="section-title">Experience</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.map((exp, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-border bg-card/30 hover:shadow-xl transition-all duration-300 hover:shadow-purple-500/10 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary h-12 w-12 flex items-center justify-center shrink-0">
                  <Briefcase size={20} />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1 mb-3">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
