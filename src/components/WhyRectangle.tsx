import { Leaf, Clock, Smile } from "lucide-react";

const features = [
  {
    icon: Leaf,
    iconColor: "text-green-500",
    iconBg: "bg-green-400",
    title: "Fresh Ingredients",
    description: "We use only the freshest ingredients in all our dishes.",
  },
  {
    icon: Clock,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-400",
    title: "Quick Serving",
    description: "Get your food served quickly and efficiently.",
  },
  {
    icon: Smile,
    iconColor: "text-golden",
    iconBg: "bg-golden",
    title: "Delicious Taste",
    description: "Our food is crafted to deliver a taste sensation.",
  },
];

const WhyRectangle = () => {
  return (
    <section id="why" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl text-primary-foreground mb-4">
            Why <span className="text-foreground">Rectangle</span>?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-lg">
            We reinvented pizza to make it easier to share, easier to eat, and more satisfying.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] p-8 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-16 h-16 rounded-full ${feature.iconBg} flex items-center justify-center mx-auto mb-5 border-2 border-foreground`}>
                <feature.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRectangle;
