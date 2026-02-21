import { Button } from "@/components/ui/button";
import heroPizza from "@/assets/hero-pizza.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroPizza} alt="Recto's rectangle pizza with friends" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-transparent" />
      </div>
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
            Rectangle Pizza for{" "}
            <span className="text-primary">Every Day</span>{" "}
            Cravings
          </h1>
          <p className="text-lg sm:text-xl text-secondary-foreground/80 mb-8 font-medium">
            Fresh. Cheesy. Perfectly sliced.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="/menu">Explore Menu</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
