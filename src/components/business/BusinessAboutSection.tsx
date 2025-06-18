
import { User } from "lucide-react";

const BusinessAboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <User className="text-cyan-400" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-white relative mb-6 inline-block">
            About Me
            <div className="absolute bottom-0 left-0 h-1 w-1/2 bg-cyan-500 rounded-full"></div>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a dedicated student leader currently serving as General Secretary at IIIT Raichur, 
              where I bridge the gap between students and administration while driving meaningful change 
              on campus.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My leadership journey spans across various roles including PR Head for the Training & 
              Placement Cell, E-Cell Coordinator, and Event Head for GameXcellence. I thrive in 
              collaborative environments and am passionate about building strong communities.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              With a strong foundation in strategic thinking and organizational management, I'm eager 
              to bring my leadership skills and fresh perspective to business and management roles.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <div className="text-2xl font-bold text-cyan-400 mb-2">4+</div>
                <div className="text-gray-300">Leadership Roles</div>
              </div>
              <div className="text-center p-6 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                <div className="text-2xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Students Impacted</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 p-8 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-2xl border border-cyan-500/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Core Strengths</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Strategic Leadership & Team Management
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Public Relations & Communication
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Event Planning & Execution
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Stakeholder Management
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Problem Solving & Innovation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAboutSection;
