import { Star, MapPin, Users, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "2021", label: "Established" },
  { icon: Users, value: "100+", label: "Events Hosted" },
  { icon: Star, value: "100+", label: "Happy Families" },
  { icon: MapPin, value: "2", label: "Venues" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
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
              Poojari Banquet Hall stands as a distinguished destination for grand
              celebrations and unforgettable occasions, where elegant interiors,
              refined decor, and a warm, welcoming ambiance come together to create
              truly memorable experiences.
            </p>
            <p className="font-elegant text-lg text-foreground/70 leading-relaxed mb-8">
              Under the visionary leadership of owner Mr. Bhaskar P. Poojari, we are
              committed to delivering heartfelt hospitality, impeccable service, and
              exceptional attention to detail. From lavish weddings to sophisticated
              corporate gatherings, every event is curated with care, grace, and a
              promise of excellence that makes each celebration extraordinary.
            </p>

            <div className="inline-flex items-center gap-4 rounded-2xl border border-gold/15 bg-card/80 px-5 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
              <img
                src="/owner-bhaskar-poojari.jpeg"
                alt="Mr. Bhaskar P. Poojari, owner of Poojari Banquet Hall"
                className="h-16 w-16 rounded-full object-cover object-top border border-primary/30"
              />
              <div>
                <p className="font-display text-lg text-foreground">
                  Mr. Bhaskar P. Poojari
                </p>
                <p className="font-body text-sm uppercase tracking-[0.25em] text-primary/70">
                  Owner
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-[2rem] border border-gold/15 bg-card p-4 shadow-[0_30px_80px_rgba(0,0,0,0.16)]">
              <img
                src="/owner-bhaskar-poojari.jpeg"
                alt="Mr. Bhaskar P. Poojari"
                className="h-auto w-full rounded-[1.5rem] object-contain"
              />
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
      </div>
    </section>
  );
};

export default AboutSection;
