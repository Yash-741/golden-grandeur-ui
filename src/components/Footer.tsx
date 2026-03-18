import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gold/10">
      <div className="container mx-auto px-6 text-center">
        <a href="#home" className="font-display text-2xl font-bold text-gradient-gold">
          Poojari Banquet Hall
        </a>
        <p className="font-elegant text-foreground/50 mt-4 mb-6">
          Making every celebration a grand affair
        </p>
        <div className="flex justify-center gap-8 mb-8">
          {["Home", "Services", "Gallery", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="w-24 h-[1px] bg-gradient-gold mx-auto mb-6" />
        <p className="font-body text-xs text-muted-foreground flex items-center justify-center gap-1">
          © 2026 Poojari Banquet Hall. Crafted with <Heart className="w-3 h-3 text-primary" /> and elegance
        </p>
      </div>
    </footer>
  );
};

export default Footer;
