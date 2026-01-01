import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectDetailModal from "./ProjectDetailModal";

const projects = [
  {
    id: "camera-security",
    title: "IoT-Based Camera Security System",
    description: "Engineered an innovative camera-based security system for women and physically challenged individuals, integrating IoT sensors with real-time monitoring, smart surveillance algorithms for threat detection, and automated alert systems.",
    tags: ["IoT", "Arduino", "ESP32-CAM", "Python", "Sensors", "PCB Design"],
    image: "/images/project-1.jpg",
    hasDetails: true,
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Featured{" "}
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion 
              for building innovative solutions.
            </p>
          </div>
          
          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.title}
                className="group glass rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => project.hasDetails && setSelectedProject(project.id)}
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  {project.hasDetails && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-primary font-medium">Click to view details</span>
                    </div>
                  )}
                </div>
                
                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-secondary rounded-md text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal 
        isOpen={selectedProject === "camera-security"} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default ProjectsSection;
