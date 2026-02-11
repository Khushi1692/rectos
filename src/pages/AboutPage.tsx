import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import brandImg from "@/assets/brand-personality.jpg";
import heroPizza from "@/assets/hero-pizza.jpg";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
              About <span className="text-primary">Recto's</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We're not just a pizza brand — we're a rectangle revolution.
            </p>
          </div>

          {/* Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto mb-20">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={heroPizza} alt="Recto's team" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Born in the heart of Clayton South, Recto's started with a simple idea: what if pizza was shaped for sharing? 
                Rectangle slices mean equal portions, crispier corners, and more topping coverage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we serve hundreds of happy customers daily with our signature rectangular pizzas, 
                crafted from fresh ingredients and baked to golden perfection.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto mb-20">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-4">
                Not Your <span className="text-primary">Regular</span> Pizza Brand
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We're fun, bold, and obsessed with rectangles. Every slice is crafted for maximum crunch, 
                flavor, and shareability.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { num: "500+", label: "Happy Customers" },
                  { num: "6", label: "Signature Pizzas" },
                  { num: "7", label: "Days a Week" },
                  { num: "1", label: "Bold Shape" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card rounded-xl p-4 border border-border text-center">
                    <div className="text-2xl font-extrabold text-primary">{stat.num}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
              <img src={brandImg} alt="Brand personality" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default AboutPage;
