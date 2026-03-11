import { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";
import ScrollAnimate from "./ScrollAnimate";

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
    <section id="projects" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-foreground">
                Featured <span className="text-primary italic">Projects</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                Here are some of my recent projects that showcase my skills and passion for building innovative solutions.
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimate key={project.title} delay={index * 0.1}>
                <div
                  className="group rounded-2xl overflow-hidden border border-border bg-card/40 hover:shadow-card transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                  onClick={() => project.hasDetails && setSelectedProject(project.id)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    {project.hasDetails && (
                      <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-primary font-medium text-sm">Click to view details</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 bg-accent rounded-full text-xs font-medium text-accent-foreground">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>

      <ProjectDetailModal isOpen={selectedProject === "camera-security"} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default ProjectsSection;
