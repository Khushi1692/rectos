import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import SEO from "@/components/SEO";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["23 Meriton Pl,", "Clayton South VIC 3169, Australia"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+61 406 562 036"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@rectospizza.com"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: ["Monday – Thursday: 5:00 PM – 10:59 PM", "Friday – Sunday: 5:00 PM – 11:59 PM"],
  },
];

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact Us | Recto's Pizza Clayton South"
        description="Get in touch with Recto's Pizza for reservations, orders, or inquiries. Visit us at 23 Meriton Pl, Clayton South VIC 3169."
        canonical="https://rectospizza.com/contact"
      />
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg">Get in touch with us for reservations, orders, or any inquiries</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactCards.map((card) => (
                <div key={card.title} className="bg-card rounded-2xl p-6 border border-border shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <card.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{card.title}</h3>
                    {card.lines.map((line) => (
                      <p key={line} className="text-muted-foreground text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">First Name</label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Last Name</label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary/50 outline-none resize-none"
                    required
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">Find Us</h2>
            <div className="rounded-2xl overflow-hidden shadow-md border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.8!2d145.12!3d-37.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjMgTWVyaXRvbiBQbA!5e0!3m2!1sen!2sau!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Recto's Pizza Location"
              />
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default ContactPage;
