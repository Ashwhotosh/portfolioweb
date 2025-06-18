import { Crown, Calendar, Users, Target } from "lucide-react";

interface Leadership {
  title: string;
  organization: string;
  duration: string;
  description: string;
  achievements: string[];
  type: string;
}

const leadershipData: Leadership[] = [
  {
    title: "General Secretary",
    organization: "IIIT Raichur",
    duration: "2024–2025",
    description: "Leading student governance and representing 400+ students in institutional decision-making processes.",
    achievements: [
      "Enhanced student-administration communication",
      "Organized campus-wide events and initiatives",
      "Implemented student welfare programs",
      "Coordinated inter-departmental activities"
    ],
    type: "Student Governance"
  },
  {
    title: "PR Head",
    organization: "Training & Placement Cell",
    duration: "2025-2026",
    description: "Spearheading public relations strategy for career services, connecting students with industry opportunities.",
    achievements: [
      "Built relationships with 20+ recruiting companies",
      "Increased placement awareness by 40%",
      "Organized industry interaction sessions",
      "Managed social media presence and outreach"
    ],
    type: "Public Relations"
  },
  {
    title: "Pilot",
    organization: "Ashoka Junior College",
    duration: "Sep 2023 - Present",
    description: "Served as Pilot at junior college, conducting events and festivals with significant community engagement.",
    achievements: [
      "Conducted 20+ events and festivals",
      "Managed average footfall of 500+ attendees",
      "Collaborated with various celebrities and national players",
      "Enhanced event engagement through strategic partnerships"
    ],
    type: "Event Management"
  },
  {
    title: "Campus Executive",
    organization: "E-Cell, IIT Bombay",
    duration: "Jul 2023 - Jan 2024",
    description: "Worked as Campus Executive in internship role, contributing to entrepreneurship initiatives in Mumbai.",
    achievements: [
      "Supported entrepreneurship programs",
      "Facilitated campus outreach activities",
      "Contributed to startup ecosystem development",
      "Gained valuable industry experience"
    ],
    type: "Entrepreneurship"
  },
  {
    title: "E-Cell Coordinator",
    organization: "IIIT Raichur",
    duration: "2022-2024",
    description: "Fostered entrepreneurial culture on campus through workshops, competitions, and networking events.",
    achievements: [
      "Organized startup workshops for 200+ students",
      "Facilitated mentorship programs",
      "Coordinated pitch competitions",
      "Built partnerships with startup incubators"
    ],
    type: "Entrepreneurship"
  },
  {
    title: "Event Head",
    organization: "GameXcellence",
    duration: "2023",
    description: "Led the organization of a major gaming tournament, managing logistics, teams, and execution.",
    achievements: [
      "Successfully managed 150+ participants",
      "Coordinated with 8 different teams",
      "Ensured smooth event execution over 3 days",
      "Generated significant campus engagement"
    ],
    type: "Event Management"
  },
  {
    title: "Head of PR",
    organization: "IIIT Raichur",
    duration: "2023-2024",
    description: "Managed institutional public relations, social media strategy, and external communications.",
    achievements: [
      "Increased social media engagement by 60%",
      "Coordinated promotional campaigns",
      "Managed media relations for college events",
      "Enhanced institutional brand visibility"
    ],
    type: "Communications"
  }
];

const BusinessExperienceSection = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "Student Governance":
        return <Crown size={20} className="text-cyan-400" />;
      case "Public Relations":
        return <Users size={20} className="text-cyan-400" />;
      case "Event Management":
        return <Target size={20} className="text-cyan-400" />;
      default:
        return <Users size={20} className="text-cyan-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Crown className="text-cyan-400" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-white relative mb-6 inline-block">
            Leadership Experience
            <div className="absolute bottom-0 left-0 h-1 w-1/2 bg-cyan-500 rounded-full"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipData.map((exp, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-cyan-500/20 bg-black/30 hover:bg-black/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan-500/20 text-cyan-400 h-12 w-12 flex items-center justify-center shrink-0">
                  {getIcon(exp.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium">{exp.organization}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-400 mt-1 mb-3">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessExperienceSection;
