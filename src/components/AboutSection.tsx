import { Star, MapPin, Users, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "10+", label: "Years of Excellence" },
  { icon: Users, value: "5000+", label: "Events Hosted" },
  { icon: Star, value: "500+", label: "Happy Families" },
  { icon: MapPin, value: "1", label: "Stunning Venue" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="font-elegant text-lg tracking-[0.3em] uppercase text-primary/70 mb-3">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
              About Us
            </h2>
            <div className="w-24 h-[2px] bg-gradient-gold mb-8" />
            <p className="font-elegant text-lg text-foreground/70 leading-relaxed mb-6">
              Poojari Banquet Hall has been the premier destination for grand celebrations
              and unforgettable events. Our sprawling venue features exquisite décor,
              state-of-the-art lighting, and a warm ambiance that transforms every occasion
              into a fairy tale.
            </p>
            <p className="font-elegant text-lg text-foreground/70 leading-relaxed mb-8">
              From opulent weddings adorned with thousands of roses to sophisticated
              corporate gatherings, our dedicated team ensures every detail is perfect.
              We believe every celebration deserves nothing less than extraordinary.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-8 rounded-lg border border-gold/10 bg-card glow-gold hover:border-primary/30 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-display text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-sm text-muted-foreground tracking-wider uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
