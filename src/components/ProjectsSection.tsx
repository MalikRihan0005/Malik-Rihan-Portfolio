import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team workspaces.",
    tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Generator",
    description: "AI-powered content creation platform using GPT-4 for generating marketing copy, blog posts, and social media content.",
    tags: ["Python", "FastAPI", "OpenAI", "Redis"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const ProjectsSection = () => {
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
                className="group glass rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              >
                {/* Project image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                
                {/* Project content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
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
                  
                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="gap-2 hover:text-primary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 hover:text-primary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
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

export default ProjectsSection;
