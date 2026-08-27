import { useState } from "react";
import ProjectDetailModal from "./ProjectDetailModal";
import ScrollAnimate from "./ScrollAnimate";

const projects = [
  {
    id: "camera-security",
    title: "IoT Camera Security System",
    description: "Engineered a smart surveillance system using IoT motion sensors and computer vision; automated real-time alerts delivered to a mobile UI, reducing manual monitoring overhead.",
    tags: ["Python", "Arduino", "IoT Sensors", "ESP32-CAM", "PCB Design"],
    image: "/images/project-1.jpg",
    hasDetails: true,
  },
  {
    id: "novapay",
    title: "NovaPay Digital Bank – Zero-Downtime CI/CD Pipeline",
    description: "Architected a production-grade 8-stage CI/CD pipeline for a fictional RBI-licensed bank, cutting commit-to-production time from a fortnightly manual cycle to under 2 hours. Implemented blue-green and canary deployments with automated rollback triggers on Kubernetes, targeting 99.999% availability.",
    tags: ["GitHub Actions", "Docker", "SonarQube", "OPA", "Kubernetes"],
    image: "/images/project-novapay.jpg",
    hasDetails: false,
  },
  {
    id: "mealmart",
    title: "MealMart – Smart Tiffin Subscription System",
    description: "Built a full-stack meal subscription platform with real-time order management, user authentication, and dynamic menu control using React hooks and Supabase Realtime APIs. Deployed on Vercel with a cloud PostgreSQL backend and role-based access for admin and subscriber flows.",
    tags: ["React.js", "Supabase", "Vercel", "PostgreSQL"],
    image: "/images/project-mealmart.jpg",
    hasDetails: false,
  },
  {
    id: "spendwise",
    title: "SpendWise – Expense Tracker",
    description: "Designed a MERN-stack finance app with JWT authentication, expense categorization, and interactive Recharts dashboards for spending analysis. Leveraged MongoDB Atlas for scalable cloud persistence with zero-cost deployment on Render and Vercel.",
    tags: ["MongoDB Atlas", "Express.js", "React.js", "Node.js", "JWT", "Recharts"],
    image: "/images/project-spendwise.jpg",
    hasDetails: false,
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
