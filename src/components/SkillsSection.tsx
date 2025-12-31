const skills = [
  { name: "C Language", level: 85 },
  { name: "Python", level: 80 },
  { name: "C++", level: 75 },
  { name: "Java", level: 70 },
  { name: "JavaScript", level: 60 },
  { name: "DSA", level: 65 },
];

const technologies = [
  "C", "C++", "Python", "Java", "JavaScript", "HTML", "CSS",
  "Data Structures", "Algorithms", "IoT", "Git", "GitHub",
  "Web Development", "Machine Learning", "Cloud Computing", "DevOps"
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="absolute inset-0 bg-glow opacity-20" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Skills</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Technologies I{" "}
              <span className="text-gradient">work with</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm constantly expanding my skillset and staying up-to-date with the latest technologies 
              to deliver cutting-edge solutions.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skill bars */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6">Core Competencies</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-primary font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Technology tags */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 glass rounded-xl text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
