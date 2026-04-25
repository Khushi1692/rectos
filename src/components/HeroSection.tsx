import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Pizza } from "lucide-react";
import heroImage from "@/assets/hero.webp";

const HeroSection = () => {
  return (
    <section className="relative h-[100svh] min-h-[700px] flex items-center overflow-hidden bg-[#0f0a07]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="The Ultimate Rectangle Pizza Experience" 
          className="w-full h-full object-cover object-[95%_15%] lg:object-[right_15%] scale-105 animate-in fade-in duration-1000"
        />
        {/* Powerful Sidebar Gradient for Text Clarity */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0a07] via-[#0f0a07]/60 to-transparent z-10" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_transparent_0%,_#0f0a07_100%)] opacity-60 z-10" />
      </div>

      <div className="container mx-auto px-6 sm:px-16 relative z-20 pt-24 md:pt-32">
        <div className="max-w-2xl lg:max-w-3xl space-y-8 md:space-y-10 animate-in fade-in slide-in-from-left duration-1000">
          
          {/* Tagline */}
          <div className="inline-flex items-center gap-3 bg-primary/20 backdrop-blur-md px-4 py-2 rounded-full border border-primary/30 w-fit">
            <Pizza className="w-4 h-4 text-primary" />
            <span className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest">Premium Rectangle Pizza</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1.1] tracking-tight text-white drop-shadow-lg">
              DIFFERENT <span className="text-primary">SHAPE.</span><br />
              BIGGER <span className="text-primary uppercase font-bold tracking-tighter">Experience.</span>
            </h1>
          </div>

          {/* Subtext */}
          <div className="max-w-lg">
            <p className="text-lg sm:text-xl text-white/80 font-medium leading-relaxed italic border-l-4 border-primary pl-6">
              Freshly baked. Cheesy. Perfectly sliced. <br />
              That's <span className="text-primary font-bold">Recto's.</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="group relative bg-primary hover:bg-primary/90 text-white text-xl sm:text-2xl font-black px-10 py-8 rounded-2xl shadow-[0_20px_50px_rgba(255,112,67,0.4)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              asChild
            >
              <a href="https://www.ubereats.com/store-browse-uuid/fd9542d7-6cb1-57a5-b09f-a7c72455e073?diningMode=DELIVERY" target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center gap-6 uppercase tracking-tight">
                  Order Now
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <Pizza className="w-6 h-6 text-white" />
                  </div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
