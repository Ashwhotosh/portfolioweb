
import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const BusinessContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing leadership opportunities, collaborations, 
            or simply having a meaningful conversation about business and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <Mail className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a 
                      href="mailto:ashutoshgovindsingh2003@gmail.com" 
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      ashutoshgovindsingh2003@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <Linkedin className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/ashwhotosh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                      linkedin.com/in/ashwhotosh
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <MapPin className="text-cyan-400" size={24} />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300">Raichur, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-xl border border-cyan-500/30">
              <h4 className="text-lg font-bold text-cyan-400 mb-3">Looking For</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Business Development Opportunities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Management Trainee Positions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Strategic Planning Roles
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Leadership & Team Management
                </li>
              </ul>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col justify-center items-center text-center space-y-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-500/20 to-cyan-400/20 flex items-center justify-center border-2 border-cyan-500/30">
              <Mail size={48} className="text-cyan-400" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Connect?</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Whether you're looking for a dedicated team member or want to discuss potential 
                collaborations, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="bg-cyan-500 text-black hover:bg-cyan-400 px-8 py-3 text-lg font-medium rounded-lg w-full"
                  onClick={() => window.open("mailto:ashutoshgovindsingh2003@gmail.com")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-8 py-3 text-lg font-medium rounded-lg w-full"
                  onClick={() => window.open("https://linkedin.com/in/ashwhotosh", "_blank")}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessContactSection;
