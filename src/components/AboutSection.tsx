import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import ScrollAnimate from "./ScrollAnimate";

const highlights = [
  { icon: Code2, title: "Clean Code", description: "Writing maintainable, scalable code that stands the test of time." },
  { icon: Lightbulb, title: "Problem Solver", description: "Turning complex challenges into elegant, simple solutions." },
  { icon: Rocket, title: "Fast Learner", description: "Quickly adapting to new technologies and methodologies." },
  { icon: Users, title: "Team Player", description: "Collaborating effectively to deliver exceptional results." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">About Me</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-foreground">
                Passionate about solving{" "}
                <span className="text-primary italic">real-world problems</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                I'm a second-year Information Science Engineering student at BIET Davangere, 
                passionate about building web apps, learning data structures, and exploring Python-based technologies.
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <ScrollAnimate key={item.title} delay={index * 0.1}>
                <div className="group p-6 rounded-2xl border border-border bg-card/40 hover:bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>

          <ScrollAnimate delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-8 rounded-2xl border border-border bg-card/40">
              <div className="text-center">
                <div className="text-3xl font-serif text-primary mb-1">2nd</div>
                <div className="text-muted-foreground text-sm">Year ISE Student</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-primary mb-1">4+</div>
                <div className="text-muted-foreground text-sm">Languages Known</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-primary mb-1">IoT</div>
                <div className="text-muted-foreground text-sm">Project Domain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-primary mb-1">Open</div>
                <div className="text-muted-foreground text-sm">For Internships</div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
