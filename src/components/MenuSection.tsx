import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import margarita from "@/assets/margarita_small.webp";
import bbq_cottage from "@/assets/bbq_cottage_small.webp";
import cheesy_garlic from "@/assets/cheesy_garlic_small.webp";
import bhoot_julakia from "@/assets/bhoot_julakia_small.webp";
import chiplote_fair from "@/assets/chiplote_fair_small.webp";
import chocolate_meltdown from "@/assets/chocolate_meltdown_small.webp";

const pizzas = [
  { name: "OG Margherita", desc: "OG Margherita Pizza - topped with fresh tomato sauce, creamy mozzarella, and fragrant basil.", price: "$7", image: margarita, tags: ["Popular", "Jain", "Swaminarayan"] },
  { name: "BBQ Paneer", desc: "BBQ Paneer Pizza - loaded with smoky BBQ sauce, tender cottage cheese (paneer), and crunchy veggies.", price: "$12", image: bbq_cottage },
  { name: "Cheese Garlic Bread", desc: "Cheesy Garlic Bread - loaded with melted cheese, rich garlic butter, and a sprinkle of herbs.", price: "$7", image: cheesy_garlic },
  { name: "Bhooootttt Jolakia 🔥", desc: "Bhoot Jolokia Pizza - topped with fiery ghost pepper sauce, melted cheese, and loaded veggies.", price: "$12", image: bhoot_julakia, tags: ["Popular"] },
  { name: "Chipotle Chatakaz", desc: "Chipotle Chatakaz Pizza - smoky chipotle base with rich cheese and crunchy veggies on top.", price: "$12", image: chiplote_fair, tags: ["Jain", "Swaminarayan"] },
  { name: "Chocolate Melt Down", desc: "Chocolate Melt Down - rich, gooey chocolate loaded over a soft, warm base.", price: "$12", image: chocolate_meltdown, tags: ["Jain", "Swaminarayan"] },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
            Signature <span className="text-primary">Recto's</span> Pizzas
          </h2>
          <p className="text-muted-foreground text-lg">All rectangular. All delicious.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pizzas.map((pizza) => (
            <div key={pizza.name} className="bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] overflow-hidden group flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-square overflow-hidden bg-primary/20">
                <img src={pizza.image} alt={pizza.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-xl font-heading font-bold text-foreground uppercase">{pizza.name}</h3>
                  {pizza.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 bg-[#1a472a] text-white text-[9px] font-bold rounded-full uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 flex-1">{pizza.desc}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-primary font-bold text-2xl">{pizza.price}</span>
                  <span className="text-xs font-bold text-foreground/50 uppercase tracking-widest">Signature</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
            <Link to="/menu">Explore Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
