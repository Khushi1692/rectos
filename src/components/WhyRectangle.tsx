const features = [
  {
    emoji: "🔲",
    title: "Crispy Corners",
    description: "Every corner gets that perfect golden crunch you crave.",
  },
  {
    emoji: "📦",
    title: "Fluffy Inside",
    description: "Soft, airy dough that's light yet satisfying in every bite.",
  },
  {
    emoji: "🔥",
    title: "More Toppings per Bite",
    description: "Rectangle shape means even distribution of all your favorites.",
  },
];

const WhyRectangle = () => {
  return (
    <section id="why" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Why <span className="text-primary">Rectangle</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            We reinvented pizza to make it easier to share, easier to eat, and more satisfying.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="text-5xl mb-4">{feature.emoji}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRectangle;
