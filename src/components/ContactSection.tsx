import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-elegant text-lg tracking-[0.3em] uppercase text-primary/70 mb-3">
            Get in Touch
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Contact Us
          </h2>
          <div className="w-24 h-[2px] bg-gradient-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Phone</h3>
                <p className="font-body text-muted-foreground">+91 95036 36866</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email</h3>
                <p className="font-body text-muted-foreground">poojaribanqueth@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Location</h3>
                <p className="font-body text-muted-foreground">Shiv Poojari Colony, High Tension Road,<br />Pragati Nagar, Nalasopara East - 401209</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Hours</h3>
                <p className="font-body text-muted-foreground">Mon - Sun: 9:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-card border border-gold/10 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-card border border-gold/10 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-card border border-gold/10 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Tell us about your event..."
                className="w-full px-4 py-3 rounded-lg bg-card border border-gold/10 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-gold text-primary-foreground font-body text-sm tracking-widest uppercase py-6 hover:opacity-90 transition-opacity shadow-gold"
            >
              Send Inquiry
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
