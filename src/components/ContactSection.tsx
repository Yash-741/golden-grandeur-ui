import { FormEvent, useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    if (!name.trim() || !phone.trim() || !message.trim()) {
      toast({
        title: "Missing details",
        description: "Please add your name, phone number, and event details before sending.",
      });
      return;
    }

    const subject = encodeURIComponent(`Banquet Hall Inquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Email: ${email.trim() || "Not provided"}`,
        `Phone: ${phone.trim()}`,
        "",
        "Event details:",
        message.trim(),
      ].join("\n"),
    );

    window.open(`mailto:poojaribanqueth@gmail.com?subject=${subject}&body=${body}`, "_self");

    toast({
      title: "Inquiry ready",
      description: "Your email app should open with the banquet inquiry details filled in.",
    });
  };

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
                <a className="font-body text-muted-foreground hover:text-primary transition-colors" href="tel:+919503636866">
                  +91 95036 36866
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Email</h3>
                <a
                  className="font-body text-muted-foreground hover:text-primary transition-colors"
                  href="mailto:poojaribanqueth@gmail.com"
                >
                  poojaribanqueth@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">Location</h3>
                <a
                  className="font-body text-muted-foreground hover:text-primary transition-colors"
                  href="https://maps.app.goo.gl/tpKJLCi5AHhAFYhV7"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shiv Poojari Colony, High Tension Road,
                  <br />
                  Pragati Nagar, Nalasopara East - 401209
                </a>
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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData((current) => ({ ...current, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-card border border-gold/10 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData((current) => ({ ...current, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-card border border-gold/10 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData((current) => ({ ...current, phone: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-card border border-gold/10 text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Tell us about your event..."
                value={formData.message}
                onChange={(e) => setFormData((current) => ({ ...current, message: e.target.value }))}
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
