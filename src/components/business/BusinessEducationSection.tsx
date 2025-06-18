
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "IIIT Raichur",
    duration: "2022-2026",
    description: "Pursuing Bachelor's degree with focus on analytical thinking, problem-solving, and leadership development through various student positions.",
    logo: "/lovable-uploads/52ab38a5-2722-41b0-936b-7d906f20c85d.png",
    achievements: [
      "General Secretary (2024-2025)",
      "PR Head for Training & Placement Cell",
      "E-Cell Coordinator"
    ]
  },
  {
    degree: "ISC (12th Standard)",
    institution: "Ashoka Junior College, Nashik",
    duration: "2021",
    description: "Completed Indian School Certificate with 85% marks, demonstrating strong academic foundation and discipline.",
    logo: "/lovable-uploads/ace713de-a37e-4e93-a059-77e2e6d7345f.png",
    achievements: [
      "85% Overall Score",
      "Strong foundation in Mathematics and Science",
      "Leadership roles in school activities"
    ]
  },
  {
    degree: "ICSE (10th Standard)",
    institution: "Ashoka Universal School",
    duration: "2019",
    description: "Achieved 91.8% in Indian Certificate of Secondary Education with distinction in core subjects.",
    logo: "/lovable-uploads/ace713de-a37e-4e93-a059-77e2e6d7345f.png",
    achievements: [
      "91.8% Overall Score",
      "Distinction in Mathematics and Science",
      "Active participation in extracurricular activities"
    ]
  },
];

const BusinessEducationSection = () => {
  return (
    <section id="education" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-20 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="text-cyan-400" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-white relative mb-6 inline-block">
            Education
            <div className="absolute bottom-0 left-0 h-1 w-1/2 bg-cyan-500 rounded-full"></div>
          </h2>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyan-500/30 transform md:-translate-x-1/2"></div>
          
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
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-cyan-500 transform md:-translate-x-1/2 z-10"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                }`}>
                  <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                  <p className="text-cyan-400 font-medium">{education.institution}</p>
                  <p className="text-gray-400">{education.duration}</p>
                  <p className="mt-2 text-gray-300">{education.description}</p>
                  
                  {/* Achievements */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {education.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Logo */}
                <div className={`hidden md:flex items-center ${
                  index % 2 === 0 ? "justify-start md:pl-12" : "justify-end md:pr-12"
                }`}>
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-cyan-500/20 bg-white p-2 shadow-lg flex items-center justify-center">
                    <img 
                      src={education.logo}
                      alt={`${education.institution} Logo`}
                      className="w-full h-auto object-contain"
                    />
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

export default BusinessEducationSection;
