import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
