import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import brandImg from "@/assets/brand-personality_small.webp";
import SEO from "@/components/SEO";
import journeyImg from "@/assets/our-journey_small.webp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Briefcase, Gamepad2, Quote, ChefHat, Heart, Sparkles } from "lucide-react";

const whyRectangle = [
  { title: "Perfect Portions", desc: "Every slice is equal. No more big vs small fights.", emoji: "🔲" },
  { title: "More Toppings", desc: "Rectangle shape gives more surface area for toppings.", emoji: "🍕" },
  { title: "Better Sharing", desc: "Fits perfectly in boxes, tables, and groups.", emoji: "🤝" },
];

const audience = [
  { icon: GraduationCap, label: "Students", emoji: "🎓" },
  { icon: Users, label: "Families", emoji: "👨‍👩‍👧‍👦" },
  { icon: Briefcase, label: "Office Orders", emoji: "💼" },
  { icon: Gamepad2, label: "Game Nights", emoji: "🎮" },
];

const timeline = [
  { year: "The Idea", text: "Why should all pizzas be round? A simple question that changed everything." },
  { year: "The Shape", text: "We experimented until we found the perfect rectangle — crispy corners, fluffy center." },
  { year: "The Launch", text: "Born in Clayton South, serving hundreds of happy customers daily." },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Recto's Pizza",
  "description": "Learn about the origin of our signature rectangle pizzas in Clayton South.",
  "publisher": {
    "@type": "Restaurant",
    "name": "Recto's Pizza",
    "url": "https://rectospizza.com"
  }
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Story | The Home of the Rectangle Slice - Recto's Pizza"
        description="Discover how we reinvented the pizza slice. Born in Clayton South, Recto's Pizza is bold, fun, and rectangle-obsessed. Learn about our journey and why rectangle is better."
        canonical="https://rectospizza.com/about"
        jsonLd={aboutJsonLd}
      />
      <Navbar />
      <div className="pt-24 pb-0">

        {/* Hero — Big & Bold */}
        <section className="relative pb-20 pt-4 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="relative container mx-auto text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              Our Story
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-5 leading-tight">
              Not Your <span className="text-primary">Regular</span> Pizza Brand
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto mb-4">
              We didn't change the pizza.<br />We changed the shape.
            </p>
            <div className="inline-block bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl mt-4">
              <p className="font-bold text-sm tracking-wide">
                <Quote className="w-4 h-4 inline mr-1 text-primary" />
                We didn't reinvent pizza. We reinvented the slice.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story — Timeline Style */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img src={journeyImg} alt="The crafting of Recto's signature rectangle pizza" className="w-full h-80 lg:h-[28rem] object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-secondary-foreground font-bold text-lg">Born in Clayton South 🧡</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl text-secondary-foreground mb-8">
                  Our <span className="text-primary">Journey</span>
                </h2>
                <div className="space-y-6">
                  {timeline.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                          {i + 1}
                        </div>
                        {i < timeline.length - 1 && <div className="w-0.5 h-full bg-primary/20 mt-2" />}
                      </div>
                      <div className="pb-2">
                        <h3 className="text-lg text-secondary-foreground mb-1">{item.year}</h3>
                        <p className="text-secondary-foreground/70 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Rectangle — Bold bordered cards like reference */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl text-primary-foreground mb-3">
                Why <span className="text-foreground">Rectangle</span>?
              </h2>
              <p className="text-primary-foreground/80 max-w-md mx-auto">Three reasons that make all the difference.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {whyRectangle.map((item) => (
                <div key={item.title} className="bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission — Bold Statement */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <ChefHat className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl text-secondary-foreground mb-5">
              Our Mission
            </h2>
            <p className="text-secondary-foreground/90 text-lg sm:text-xl leading-relaxed">
              To make pizza more fun, more fair, and more satisfying — <span className="font-bold">one rectangle at a time.</span>
            </p>
          </div>
        </section>

        {/* Personality — Side by Side */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-sm px-4 py-2 rounded-full mb-4">
                  <Heart className="w-4 h-4" />
                  Our Vibe
                </div>
                <h2 className="text-3xl sm:text-4xl text-foreground mb-5">
                  Bold, Fun & <span className="text-primary">Rectangle-Obsessed</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                  We're not a corporate pizza chain. We're a fun, creative brand that loves experimenting, 
                  building, and serving good food with good vibes.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Recto's started as a small idea — and grew into a bold brand. We believe food should be 
                  simple, fun, and unforgettable. 🧡
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2 group">
                <img src={brandImg} alt="Brand personality" className="w-full h-80 lg:h-[28rem] object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Made for Everyone — Fun Grid */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl text-secondary-foreground mb-3">
              Made for <span className="text-primary">Everyone</span>
            </h2>
            <p className="text-secondary-foreground/70 mb-10 max-w-lg mx-auto">
              Recto's is made for people who love sharing food and making memories.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-2xl mx-auto">
              {audience.map((item) => (
                <div key={item.label} className="group bg-card rounded-3xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl mb-3">{item.emoji}</div>
                  <p className="text-foreground font-bold text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 text-center">
            <p className="text-5xl mb-4">🍕</p>
            <h2 className="text-3xl sm:text-4xl text-foreground mb-3">Ready to try the <span className="text-primary">rectangle</span>?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We didn't reinvent pizza. We reinvented the slice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/menu">View Menu</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
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
