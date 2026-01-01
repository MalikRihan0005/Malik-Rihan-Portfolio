import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Award } from "lucide-react";

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const projectImages = [
  "/images/project-1.jpg",
  "/images/project-2.jpg",
  "/images/project-3.jpg",
  "/images/project-4.jpg",
  "/images/project-5.jpg",
  "/images/project-6.jpg",
];

const ProjectDetailModal = ({ isOpen, onClose }: ProjectDetailModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Camera-Based Security System for Women & Physically Challenged
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8">
          {/* Project Description */}
          <div className="text-muted-foreground">
            <p>
              An innovative IoT-based camera security system designed specifically for the safety and 
              protection of women and physically challenged individuals. Features real-time monitoring, 
              smart surveillance algorithms for threat detection, and automated alert systems.
            </p>
          </div>
          
          {/* Project Images Grid */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Project Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {projectImages.map((image, index) => (
                <div 
                  key={index}
                  className="aspect-video rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <img 
                    src={image} 
                    alt={`Project image ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Certification Section */}
          <div className="border-t border-border pt-8">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold">Certification for the Project</h3>
            </div>
            <div className="rounded-lg overflow-hidden border border-border">
              <img 
                src="/images/certification.jpg" 
                alt="Project Certification from Athreya Technologies"
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Certificate from Athreya Technologies Pvt Ltd for completing 640 hours internship 
              in IoT field, working on Camera Based Security System for women and physically challenged people.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailModal;
