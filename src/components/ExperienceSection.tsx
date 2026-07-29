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
  { title: "NVIDIA", subtitle: "Getting Started with AI on Jetson Nano", description: "Hands-on training on deep learning inference and edge AI development using the NVIDIA Jetson Nano platform", link: "/images/cert-nvidia.pdf", company: "NVIDIA", logo: "https://cdn.simpleicons.org/nvidia" },
  { title: "Anthropic", subtitle: "Certificate of Completion: Claude Code 101", description: "Foundational training on using Claude Code for AI-assisted software development", link: "/images/cert-claude-101.pdf", company: "Anthropic", logo: "https://cdn.simpleicons.org/anthropic" },
  { title: "Anthropic", subtitle: "Claude Code in Action", description: "Advanced hands-on training applying Claude Code to real-world engineering workflows", link: "/images/cert-claude-in-action.pdf", company: "Anthropic", logo: "https://cdn.simpleicons.org/anthropic" },
  { title: "AI for Students: Build Your Own Generative AI Model", description: "Comprehensive AI/ML course with hands-on project implementation", company: "SkillUp India" },
  { title: "Machine Learning Model Deployment", description: "End-to-end ML deployment expertise using Flask and production practices", company: "Great Learning" },
  { title: "GEN AI : Acquiring Data", description: "Certificate in Generative AI data acquisition techniques and methodologies", link: "/images/cert-genai.pdf", company: "NASSCOM" },
  { title: "MongoDB", description: "MongoDB skills certification covering database fundamentals and operations", link: "/images/cert-mongodb.pdf", company: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
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
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {certifications.map((cert, index) => {
                      const pdfName = cert.link ? cert.link.split('/').pop() : null;
                      const Wrapper = cert.link ? 'a' : 'div';
                      const linkProps = cert.link ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" } : {};
                      return (
                        <Wrapper key={index} {...linkProps} className={`group relative rounded-xl border border-border bg-card/40 hover:bg-accent/50 transition-all duration-300 overflow-hidden ${cert.link ? 'cursor-pointer' : ''}`}>
                          <div className="p-4 flex flex-col items-center text-center h-full">
                            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors overflow-hidden">
                              {cert.logo ? (
                                <img src={cert.logo} alt={`${cert.company} logo`} className="w-7 h-7 object-contain" loading="lazy" />
                              ) : (
                                <FileText className="w-5 h-5 text-primary" />
                              )}
                            </div>
                            <h4 className="font-medium text-xs text-foreground leading-tight mb-1">{cert.title}</h4>
                            {cert.subtitle && <p className="text-[11px] font-medium text-primary leading-tight">{cert.subtitle}</p>}
                            <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2">{cert.description}</p>
                          </div>
                          {pdfName && (
                            <div className="absolute inset-0 bg-foreground/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="text-center px-3">
                                <p className="text-[10px] text-muted-foreground mb-1">PDF</p>
                                <p className="text-xs font-medium text-primary-foreground break-all">{pdfName}</p>
                              </div>
                            </div>
                          )}
                        </Wrapper>
                      );
                    })}
                  </div>
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
