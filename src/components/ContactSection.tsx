import { Mail, MapPin, Phone, Send, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/30 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">Contact</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-6 text-foreground">
              Let's work{" "}
              <span className="text-primary italic">together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Get in touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/40">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="font-medium text-sm text-foreground">malikrehandafedar911@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/40">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Phone</div>
                    <div className="font-medium text-sm text-foreground">+91 9110604110</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/40">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Location</div>
                    <div className="font-medium text-sm text-foreground">Davangere, Karnataka</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-xs text-muted-foreground mb-3">Follow me</div>
                <div className="flex items-center gap-2">
                  <a href="https://www.linkedin.com/in/malik-rihan-926a28262" target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border hover:bg-accent hover:border-primary/30 transition-all duration-300 group">
                    <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a href="https://github.com/malikrihan" target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border hover:bg-accent hover:border-primary/30 transition-all duration-300 group">
                    <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl p-8 border border-border bg-card/40">
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="John" className="bg-background border-border focus:border-primary rounded-lg" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Doe" className="bg-background border-border focus:border-primary rounded-lg" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-background border-border focus:border-primary rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input placeholder="Project Discussion" className="bg-background border-border focus:border-primary rounded-lg" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea placeholder="Tell me about your project..." rows={4} className="bg-background border-border focus:border-primary resize-none rounded-lg" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
