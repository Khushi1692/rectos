import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import brandImg from "@/assets/brand-personality.jpg";
import heroPizza from "@/assets/hero-pizza.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Briefcase, Gamepad2, Equal, Layers, Share2 } from "lucide-react";

const whyRectangle = [
  { icon: Equal, title: "Perfect Portions", desc: "Every slice is equal. No more big vs small fights." },
  { icon: Layers, title: "More Toppings", desc: "Rectangle shape gives more surface area for toppings." },
  { icon: Share2, title: "Better Sharing", desc: "Fits perfectly in boxes, tables, and groups." },
];

const audience = [
  { icon: GraduationCap, label: "Students" },
  { icon: Users, label: "Families" },
  { icon: Briefcase, label: "Office Orders" },
  { icon: Gamepad2, label: "Game Nights" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-0">
        {/* Hero */}
        <section className="text-center py-16 px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-4">
            Not Your <span className="text-primary">Regular</span> Pizza Brand
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto mb-2">
            We didn't change the pizza.<br />We changed the shape.
          </p>
          <p className="text-primary font-bold text-sm mt-4 tracking-wide uppercase">
            We didn't reinvent pizza. We reinvented the slice.
          </p>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={heroPizza} alt="Recto's pizza" className="w-full h-72 md:h-96 object-cover" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary-foreground mb-4">
                  Our <span className="text-primary">Story</span>
                </h2>
                <p className="text-secondary-foreground/80 leading-relaxed mb-4">
                  Recto's Pizza was born from one simple idea — why should all pizzas be round?
                </p>
                <p className="text-secondary-foreground/80 leading-relaxed mb-4">
                  We wanted a pizza that's easier to share, easier to eat, and more satisfying in every bite.
                  That's how the rectangle slice was created.
                </p>
                <p className="text-secondary-foreground/80 leading-relaxed">
                  Born in the heart of Clayton South, we now serve hundreds of happy customers daily with our 
                  signature rectangular pizzas, crafted from fresh ingredients and baked to golden perfection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Rectangle Exists */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground text-center mb-10">
              Why <span className="text-primary">Rectangle</span> Exists
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {whyRectangle.map((item) => (
                <div key={item.title} className="bg-card rounded-2xl p-8 text-center shadow-md border border-border">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary-foreground mb-4">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-secondary-foreground/80 text-lg leading-relaxed">
              Our mission is to make pizza more fun, more fair, and more satisfying — one rectangle at a time.
            </p>
          </div>
        </section>

        {/* Our Personality */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                  Our <span className="text-primary">Personality</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We're not a corporate pizza chain. We're a fun, creative brand that loves experimenting, 
                  building, and serving good food with good vibes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Recto's started as a small idea — and grew into a bold brand. We believe food should be 
                  simple, fun, and unforgettable.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
                <img src={brandImg} alt="Brand personality" className="w-full h-72 md:h-96 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Made for Everyone */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary-foreground mb-3">
              Made for <span className="text-primary">Everyone</span>
            </h2>
            <p className="text-secondary-foreground/70 mb-10 max-w-lg mx-auto">
              Recto's is made for people who love sharing food and making memories.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {audience.map((item) => (
                <div key={item.label} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-bold text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
              Ready to try the <span className="text-primary">rectangle</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We didn't reinvent pizza. We reinvented the slice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/menu">View Menu</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer">Order Now</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </div>
  );
};

export default AboutPage;
