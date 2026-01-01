import { Briefcase, GraduationCap, Award } from "lucide-react";

const experience = [
  {
    type: "work",
    title: "Software Development Intern",
    organization: "Athreya Technologies Private Limited",
    location: "Hubballi, Karnataka",
    period: "Dec 2024 – Mar 2025",
    description: [
      "Contributing to real-world software development projects using agile methodologies and industry-standard workflows",
      "Developing production-ready code using C, C++, Python, and Java to solve complex technical challenges",
      "Collaborating with cross-functional teams to deliver high-quality, well-tested code meeting strict deadlines",
      "Gaining hands-on experience with version control systems, code review processes, and modern engineering practices",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Engineering in Information Science Engineering",
    institution: "Bapuji Institute of Engineering & Technology (BIET)",
    location: "Davangere, Karnataka",
    period: "Aug 2025 – Jul 2028",
  },
  {
    degree: "Diploma in Electronics and Communications Engineering",
    institution: "JSS K.H.K Institute of Engineering",
    location: "Dharwad, Karnataka",
    period: "Aug 2022 – Apr 2025",
  },
];

const certifications = [
  {
    title: "AI for Students: Build Your Own Generative AI Model",
    description: "Comprehensive AI/ML course with hands-on project implementation",
  },
  {
    title: "Machine Learning Model Deployment",
    description: "Demonstrated end-to-end ML deployment expertise using Flask and production practices",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card/30 relative">
      <div className="absolute inset-0 bg-glow opacity-20" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm tracking-wider uppercase">Experience</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              My{" "}
              <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional experience, education, and certifications that have shaped my career.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Work Experience</h3>
              </div>
              
              {experience.map((exp, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 mb-4 hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-primary">{exp.title}</h4>
                    <span className="text-xs font-mono text-muted-foreground whitespace-nowrap ml-2">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{exp.organization} • {exp.location}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              {/* Certifications */}
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Certifications</h3>
                </div>
                
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="glass rounded-xl p-4 mb-3 hover:bg-primary/5 transition-all duration-300"
                  >
                    <h4 className="font-medium mb-1">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 mb-4 hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-primary">{edu.degree}</h4>
                  </div>
                  <p className="text-sm font-medium mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                  <p className="text-xs font-mono text-primary mt-2">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
