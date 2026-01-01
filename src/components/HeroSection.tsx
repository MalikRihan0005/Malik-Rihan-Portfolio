import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-glow opacity-50" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-200" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-fade-up opacity-0">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up opacity-0 animation-delay-200">
            Hi, I'm{" "}
            <span className="text-gradient">Malik Rihan</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up opacity-0 animation-delay-400">
            A passionate <span className="text-foreground font-medium">Software Engineer</span> & ISE Student 
            exploring Web Dev, ML, Cloud & DevOps.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up opacity-0 animation-delay-600">
            <a href="#projects">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-all duration-300 hover:scale-105">
                View My Work
              </Button>
            </a>
            <a href="/Malik_Rihan_Resume.pdf" download>
              <Button variant="outline" size="lg" className="border-border hover:bg-secondary transition-all duration-300">
                Download Resume
              </Button>
            </a>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up opacity-0 animation-delay-600">
            <a 
              href="https://www.linkedin.com/in/malik-rihan-926a28262" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://github.com/malikrihan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:malikrehandafedar911@gmail.com"
              className="p-3 glass rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="p-2 glass rounded-full block">
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
