import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import brandImg from "@/assets/brand-personality_small.webp";
import SEO from "@/components/SEO";
import heroImg from "@/assets/brand-personality_small.webp";
import aboutMainImg from "@/assets/about-main.webp";
import rootImg from "@/assets/root.webp";
import conceptImg from "@/assets/concept.webp";
import growthImg from "@/assets/growth.webp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, GraduationCap, Briefcase, Gamepad2, Quote, ChefHat, Heart, Sparkles, Pizza, MapPin, Rocket } from "lucide-react";
import { ThemeElements, PageTransition } from "@/components/ThemeElements";
import { MenuCharacter } from "@/components/MenuCharacter";

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
  { year: "The Roots", text: "Our story began in Ahmedabad, India, where the passion for bold flavors and perfect dough was first ignited." },
  { year: "The Concept", text: "We brought that passion to Australia, experimenting until we found the perfect rectangle — crispy corners, fluffy center." },
  { year: "The Growth", text: "Now proud to call Clayton South home, serving our signature rectangle pizzas to the Melbourne community." },
];

const aboutJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Recto's Pizza",
    "description": "Learn about the origin of our signature rectangle pizzas in Clayton South.",
    "publisher": {
      "@type": "Restaurant",
      "name": "Recto's Pizza",
      "url": "https://rectospizza.com"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Home",
        "url": "https://rectospizza.com"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Menu",
        "url": "https://rectospizza.com/menu"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "About Our Journey",
        "url": "https://rectospizza.com/about"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Contact Us",
        "url": "https://rectospizza.com/contact"
      }
    ]
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ThemeElements variant="light" />
      <SEO
        title="Our Story | The Home of the Rectangle Slice - Recto's Pizza"
        description="Discover how we reinvented the pizza slice. Born in Clayton South, Recto's Pizza is bold, fun, and rectangle-obsessed. Learn about our journey and why rectangle is better."
        canonical="https://rectospizza.com/about"
        jsonLd={aboutJsonLd}
      />
      <Navbar />
      <MenuCharacter 
        visible={true} 
        initialMessage="Let's see the story behind the Rectos" 
        initialSpeech="Let's see the story behind the Rectos" 
      />
      <div className="pt-24 pb-0 relative z-10">

        {/* Hero — Big & Bold */}
        <section className="relative pb-20 pt-4 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="relative container mx-auto text-center max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-center text-left">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold text-sm px-4 py-2 rounded-full mb-6">
                  <Sparkles className="w-4 h-4" />
                  Our Story
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-5 leading-tight">
                  Not Your <span className="text-primary">Regular</span> Pizza Brand
                </h1>
                <p className="text-muted-foreground text-lg sm:text-xl mb-6">
                  We didn't change the pizza.<br />We changed the shape.
                </p>
                <div className="bg-secondary text-secondary-foreground px-6 py-3 rounded-2xl inline-block">
                  <p className="font-bold text-sm tracking-wide">
                    <Quote className="w-4 h-4 inline mr-1 text-primary" />
                    We didn't reinvent pizza. We reinvented the slice.
                  </p>
                </div>
              </div>
              <div className="relative group">
                <div className="relative aspect-[4/3] bg-[#1a130f] border-[12px] border-white rounded-sm shadow-2xl -rotate-2 group-hover:rotate-0 transition-all duration-700 overflow-hidden">
                  <img src={heroImg} alt="Recto's Hero" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                {/* Subtle background glow */}
                <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey — Modern Storytelling Section */}
        <section className="py-24 bg-gradient-to-br from-[#0f0a07] to-[#1a130f] relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              
              {/* Left Side: Visual Container (Placeholder) */}
              <div className="relative group">
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#1a130f] border border-white/5">
                  <img 
                    src={aboutMainImg} 
                    alt="Recto's Journey" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  
                  {/* Soft shadow & gradient overlay as requested */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0f0a07]/60 pointer-events-none" />
                  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)] pointer-events-none" />
                </div>
                
                {/* Subtle background glow */}
                <div className="absolute -inset-4 bg-primary/5 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Right Side: Content & Timeline */}
              <div className="relative">
                <div className="mb-12">
                  <h2 className="text-5xl sm:text-6xl font-black tracking-tighter mb-4 leading-none">
                    <span className="text-white block">OUR</span>
                    <span className="text-primary block">JOURNEY</span>
                  </h2>
                  <div className="w-20 h-1 bg-primary rounded-full mb-6" />
                  <p className="text-white/60 text-lg max-w-md italic font-medium">
                    A story baked with passion, shaped with purpose.
                  </p>
                </div>

                {/* Vertical Timeline with Curved Path Effect */}
                <div className="relative space-y-24">
                  {/* Vertical Connecting Line (Subtle & Curved approach) */}
                  <div className="absolute left-[20%] top-2 bottom-2 w-0.5 border-l-2 border-dashed border-primary/20 hidden md:block" />

                  {/* Step 1: THE ROOTS */}
                  <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                    <div className="relative">
                      {/* Roots Polaroid Image */}
                      <div className="w-full md:w-56 aspect-[4/3] bg-[#1a130f] border-[6px] border-white rounded-sm shadow-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500 shrink-0 overflow-hidden">
                        <img src={rootImg} alt="Ahmedabad Roots" className="w-full h-full object-cover" />
                      </div>
                      {/* Icon on the RIGHT of the photo */}
                      <div className="absolute -right-5 -bottom-5 z-20 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-[#0f0a07] shadow-[0_0_20px_rgba(255,112,67,0.4)] group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="pt-4 md:pt-0">
                      <h3 className="text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-primary transition-colors uppercase">The Roots</h3>
                      <p className="text-white/70 leading-relaxed max-w-sm">
                        Our story began in Ahmedabad, India, where the passion for bold flavors and perfect dough was first ignited.
                      </p>
                    </div>
                  </div>

                  {/* Step 2: THE CONCEPT */}
                  <div className="relative flex flex-col md:flex-row items-center gap-8 group md:translate-x-12">
                    <div className="relative order-1 md:order-2">
                      {/* Concept Polaroid Image */}
                      <div className="w-full md:w-56 aspect-[4/3] bg-[#1a130f] border-[6px] border-white rounded-sm shadow-xl rotate-2 group-hover:rotate-0 transition-transform duration-500 shrink-0 overflow-hidden">
                        <img src={conceptImg} alt="Melbourne Concept" className="w-full h-full object-cover" />
                      </div>
                      {/* Icon on the LEFT of the photo */}
                      <div className="absolute -left-5 -bottom-5 z-20 w-12 h-12 rounded-full bg-[#1a130f] border-2 border-primary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#0f0a07] transition-all duration-300">
                        <Sparkles className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="pt-4 md:pt-0 order-2 md:order-1 text-right">
                      <h3 className="text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-primary transition-colors uppercase">The Concept</h3>
                      <p className="text-white/70 leading-relaxed max-w-sm ml-auto">
                        We brought that passion to Australia, experimenting until we found the perfect rectangle — crispy corners, fluffy center.
                      </p>
                    </div>
                  </div>

                  {/* Step 3: THE GROWTH */}
                  <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                    <div className="relative">
                      {/* Growth Polaroid Image */}
                      <div className="w-full md:w-56 aspect-[4/3] bg-[#1a130f] border-[6px] border-white rounded-sm shadow-xl -rotate-1 group-hover:rotate-0 transition-transform duration-500 shrink-0 overflow-hidden">
                        <img src={growthImg} alt="Clayton South Growth" className="w-full h-full object-cover" />
                      </div>
                      {/* Icon on the RIGHT of the photo */}
                      <div className="absolute -right-5 -bottom-5 z-20 w-12 h-12 rounded-full bg-[#1a130f] border-2 border-primary/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#0f0a07] transition-all duration-300">
                        <Rocket className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="pt-4 md:pt-0">
                      <h3 className="text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-primary transition-colors uppercase">The Growth</h3>
                      <p className="text-white/70 leading-relaxed max-w-sm">
                        Now proud to call Clayton South home, serving our signature rectangle pizzas to the Melbourne community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Info Bar — Matching the reference footer */}
            <div className="mt-24 max-w-6xl mx-auto bg-[#1a130f]/60 backdrop-blur-md border border-white/5 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="space-y-3">
                   <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                     <Pizza className="w-6 h-6 text-primary" />
                   </div>
                   <h4 className="text-white font-bold text-sm tracking-widest uppercase">Bold Flavors</h4>
                   <p className="text-white/50 text-xs leading-relaxed">Unique combinations that hit different.</p>
                </div>
                <div className="space-y-3">
                   <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                     <Sparkles className="w-6 h-6 text-primary" />
                   </div>
                   <h4 className="text-white font-bold text-sm tracking-widest uppercase">Rectangle Rev</h4>
                   <p className="text-white/50 text-xs leading-relaxed">Not your regular shape or experience.</p>
                </div>
                <div className="space-y-3">
                   <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                     <Heart className="w-6 h-6 text-primary" />
                   </div>
                   <h4 className="text-white font-bold text-sm tracking-widest uppercase">Made with Purpose</h4>
                   <p className="text-white/50 text-xs leading-relaxed">Quality ingredients, crafted with care.</p>
                </div>
                <div className="space-y-3">
                   <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                     <Users className="w-6 h-6 text-primary" />
                   </div>
                   <h4 className="text-white font-bold text-sm tracking-widest uppercase">Community First</h4>
                   <p className="text-white/50 text-xs leading-relaxed">Proudly serving our local community.</p>
                </div>
              </div>
              
              {/* Post-it Note style element */}
              <div className="absolute -bottom-6 -right-4 hidden lg:block bg-[#e8dcc4] p-6 rounded-sm shadow-xl rotate-3 max-w-[180px] border-b-4 border-r-4 border-black/10">
                <p className="text-[#3d2b1f] font-black text-xs uppercase leading-tight mb-2">Different Shape. Bigger Experience.</p>
                <div className="flex items-center gap-1 text-primary">
                  <Heart className="w-3 h-3 fill-current" />
                  <span className="text-[10px] font-bold">THAT'S RECTO'S</span>
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
                <a href="https://www.ubereats.com/store-browse-uuid/fd9542d7-6cb1-57a5-b09f-a7c72455e073?diningMode=DELIVERY" target="_blank" rel="noopener noreferrer">Order Now</a>
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
