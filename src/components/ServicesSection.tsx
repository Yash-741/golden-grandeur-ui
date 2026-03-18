import { Heart, Utensils, Users, Music } from "lucide-react";
import venue4 from "@/assets/venue-4.jpeg";
import venue2 from "@/assets/venue-2.jpeg";
import venue8 from "@/assets/venue-8.jpeg";
import venue1 from "@/assets/venue-1.jpeg";

const services = [
  {
    icon: Heart,
    title: "Grand Weddings",
    description: "Create unforgettable moments with our lavishly decorated stage, floral arches, and elegant seating arrangements.",
    image: venue4,
  },
  {
    icon: Utensils,
    title: "Gourmet Catering",
    description: "Delight your guests with an exquisite spread of cuisines prepared by our expert chefs with finest ingredients.",
    image: venue2,
  },
  {
    icon: Users,
    title: "Corporate Events",
    description: "Host impactful conferences and seminars in our spacious, well-equipped hall with modern amenities.",
    image: venue8,
  },
  {
    icon: Music,
    title: "Elegant Decor",
    description: "Stunning floral arrangements, LED lighting, and bespoke décor themes tailored to your celebration.",
    image: venue1,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-elegant text-lg tracking-[0.3em] uppercase text-primary/70 mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Our Services
          </h2>
          <div className="w-24 h-[2px] bg-gradient-gold mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-lg border border-gold/10 bg-card hover:border-primary/30 transition-all duration-500 hover:shadow-gold"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="relative p-8 -mt-16 z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold mb-4 shadow-gold">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
