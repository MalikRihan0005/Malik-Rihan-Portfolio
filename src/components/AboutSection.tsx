import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant, simple solutions.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and methodologies.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively to deliver exceptional results.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">About Me</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Passionate about building{" "}
              <span className="text-gradient">impactful products</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              With over 5 years of experience in software development, I specialize in creating 
              robust web applications that solve real-world problems and deliver exceptional user experiences.
            </p>
          </div>
          
          {/* Highlights grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="group p-6 glass rounded-2xl hover:bg-card/80 transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 p-8 glass rounded-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">5+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-muted-foreground text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">30+</div>
              <div className="text-muted-foreground text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">99%</div>
              <div className="text-muted-foreground text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
