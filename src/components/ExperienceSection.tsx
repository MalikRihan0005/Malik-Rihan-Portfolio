import { Briefcase, GraduationCap, Award, FileText } from "lucide-react";
import ScrollAnimate from "./ScrollAnimate";

const experience = [
  {
    title: "Software Development Intern",
    organization: "Athreya Technologies Private Limited",
    location: "Hubballi, Karnataka",
    period: "Dec 2024 – Mar 2025",
    description: [
      "Contributing to real-world software development projects using agile methodologies",
      "Developing production-ready code using C, C++, Python, and Java",
      "Collaborating with cross-functional teams to deliver high-quality code",
      "Gaining hands-on experience with version control and modern engineering practices",
    ],
  },
];

const education = [
  { degree: "Bachelor of Engineering in Information Science Engineering", institution: "Bapuji Institute of Engineering & Technology (BIET)", location: "Davangere, Karnataka", period: "Aug 2025 – Jul 2028" },
  { degree: "Diploma in Electronics and Communications Engineering", institution: "JSS K.H.K Institute of Engineering", location: "Dharwad, Karnataka", period: "Aug 2022 – Apr 2025" },
];

const certifications = [
  { title: "Anthropic", subtitle: "Certificate of Completion: Claude Code 101", description: "Foundational training on using Claude Code for AI-assisted software development", link: "/images/cert-claude-101.pdf" },
  { title: "Anthropic", subtitle: "Claude Code in Action", description: "Advanced hands-on training applying Claude Code to real-world engineering workflows", link: "/images/cert-claude-in-action.pdf" },
  { title: "AI for Students: Build Your Own Generative AI Model", description: "Comprehensive AI/ML course with hands-on project implementation" },
  { title: "Machine Learning Model Deployment", description: "End-to-end ML deployment expertise using Flask and production practices" },
  { title: "GEN AI : Acquiring Data", description: "Certificate in Generative AI data acquisition techniques and methodologies", link: "/images/cert-genai.pdf" },
  { title: "MongoDB", description: "MongoDB skills certification covering database fundamentals and operations", link: "/images/cert-mongodb.pdf" },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card/30 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">Experience</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-foreground">
                My <span className="text-primary italic">Journey</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                My professional experience, education, and certifications.
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ScrollAnimate>
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Work Experience</h3>
                </div>
              </ScrollAnimate>

              {experience.map((exp, index) => (
                <ScrollAnimate key={index} delay={0.1}>
                  <div className="rounded-2xl p-6 mb-4 border border-border bg-card/40 hover:shadow-card transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-primary">{exp.title}</h4>
                      <span className="text-xs font-mono text-muted-foreground whitespace-nowrap ml-2">{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{exp.organization} • {exp.location}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1 text-xs">●</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimate>
              ))}

              <ScrollAnimate delay={0.2}>
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Award className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
                  </div>
                  {certifications.map((cert, index) => {
                    const Wrapper = cert.link ? 'a' : 'div';
                    const linkProps = cert.link ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" } : {};
                    return (
                      <Wrapper key={index} {...linkProps} className={`block rounded-xl p-4 mb-3 border border-border bg-card/40 hover:bg-accent/50 transition-all duration-300 ${cert.link ? 'cursor-pointer' : ''}`}>
                        <h4 className="font-medium mb-1 text-foreground">{cert.title}</h4>
                        {cert.subtitle && <p className="text-sm font-medium text-primary mb-1">{cert.subtitle}</p>}
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                      </Wrapper>
                    );
                  })}
                </div>
              </ScrollAnimate>
            </div>

            <div>
              <ScrollAnimate>
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">Education</h3>
                </div>
              </ScrollAnimate>

              {education.map((edu, index) => (
                <ScrollAnimate key={index} delay={index * 0.1}>
                  <div className="rounded-2xl p-6 mb-4 border border-border bg-card/40 hover:shadow-card transition-all duration-300">
                    <h4 className="text-lg font-semibold text-primary mb-1">{edu.degree}</h4>
                    <p className="text-sm font-medium text-foreground mb-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                    <p className="text-xs font-mono text-primary mt-2">{edu.period}</p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
