import brandImg from "@/assets/brand-personality.webp";

const BrandSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={brandImg} alt="Blocky characters eating pizza" className="w-full h-full object-cover" />
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
