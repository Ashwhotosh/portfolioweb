
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="blur-circle -top-20 right-20 opacity-20"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <User className="text-primary" size={28} />
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-7 gap-10">
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <div className="relative w-full h-80 md:h-96">
              {/* Spline 3D viewer */}
              <div className="w-full h-full">
                <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js"></script>
                <spline-viewer url="https://prod.spline.design/ZL1QkjGMSH5FUsGH/scene.splinecode"></spline-viewer>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 space-y-6">
            <div className="glass p-6 space-y-4">
              <h3 className="text-2xl font-bold">I'm Ashutosh Singh</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a Computer Science undergraduate at IIIT Raichur, I am passionate about exploring cutting-edge technologies and building innovative solutions. My academic journey is complemented by hands-on experience in web development and machine learning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I have achieved notable success in competitive exams like JEE and CET, and have participated in challenges like the Amazon ML Challenge, where I honed my skills in practical problem-solving.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My passion lies at the intersection of development and machine learning, where I enjoy creating applications that leverage data to solve real-world problems. I am continuously enhancing my skills by working on diverse projects that challenge me to learn and grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
