import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import venue10 from "@/assets/venue-10.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={venue10}
          alt="Poojari Banquet Hall grand venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="font-elegant text-lg md:text-xl tracking-[0.3em] uppercase text-primary/80 mb-4 animate-fade-in-up">
          Where Dreams Come to Life
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <span className="text-gradient-gold">Poojari</span>
          <br />
          <span className="text-foreground">Banquet Hall</span>
        </h1>
        <p className="font-elegant text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          An exquisite venue for weddings, receptions, and celebrations — crafted with elegance and grandeur
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            className="bg-gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase px-10 py-6 hover:opacity-90 transition-opacity shadow-gold"
          >
            Explore Our Venue
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 text-primary font-body text-sm tracking-widest uppercase px-10 py-6 hover:bg-primary/10 transition-colors"
          >
            Plan Your Event
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary/60" />
      </div>
    </section>
  );
};

export default HeroSection;
