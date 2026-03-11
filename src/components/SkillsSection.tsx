import ScrollAnimate from "./ScrollAnimate";

const skills = [
  { name: "C Language", level: 90 },
  { name: "C++", level: 85 },
  { name: "Python", level: 85 },
  { name: "Java", level: 80 },
  { name: "JavaScript", level: 60 },
  { name: "Data Structures & Algorithms", level: 75 },
];

const technologies = [
  "C", "C++", "Python", "Java", "JavaScript",
  "Arduino", "ESP32", "PCB Design", "AutoCAD", "Digital Electronics",
  "IoT", "Data Structures", "Algorithms", "OOP", "System Design",
  "Git", "GitHub", "Machine Learning", "AI", "Cloud Computing", "DevOps"
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Hindi", level: "Fluent" },
  { name: "Kannada", level: "Fluent" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/30 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Skills</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-foreground">
                Technologies I <span className="text-primary italic">work with</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                I'm constantly expanding my skillset and staying up-to-date with the latest technologies.
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollAnimate delay={0.1}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Programming Languages</h3>
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground text-sm">{skill.name}</span>
                      <span className="text-primary font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((lang) => (
                      <span key={lang.name} className="px-4 py-2 rounded-full border border-border bg-card/60 text-sm font-medium text-foreground">
                        {lang.name} <span className="text-primary">({lang.level})</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={0.2}>
              <div>
                <h3 className="text-xl font-semibold mb-6 text-foreground">Tech Stack & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-full border border-border bg-card/40 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground hover:border-primary/30 transition-all duration-300 cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
