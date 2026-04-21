import brandImg from "@/assets/brand-personality_small.png";

const BrandSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="relative group">
            <div className="relative aspect-[4/3] bg-[#1a130f] border-[12px] border-white rounded-sm shadow-2xl -rotate-2 group-hover:rotate-0 transition-all duration-700 overflow-hidden">
              <img src={brandImg} alt="Blocky characters eating pizza" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            {/* Subtle background glow */}
            <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl text-secondary-foreground mb-4">
              Not your <span className="text-primary">regular</span> pizza brand.
            </h2>
            <p className="text-secondary-foreground/80 text-lg leading-relaxed">
              We're fun, bold, and obsessed with rectangles. Every slice is crafted for maximum crunch, flavor, and
              shareability. Join the rectangle revolution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
