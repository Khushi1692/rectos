import { Pizza, ChefHat, Truck } from "lucide-react";

const steps = [
  { icon: Pizza, title: "Choose Your Rectangle", desc: "Pick from our signature rectangular pizzas." },
  { icon: ChefHat, title: "Pick Toppings", desc: "Customize with your favorite toppings." },
  { icon: Truck, title: "Delivered Hot & Fresh", desc: "Right to your door in minutes." },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-14">
          How It <span className="text-primary">Works</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="text-sm font-bold text-primary mb-1">Step {i + 1}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
