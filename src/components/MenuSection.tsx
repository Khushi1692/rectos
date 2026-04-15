import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import margarita from "@/assets/margarita_small.webp";
import bbq_cottage from "@/assets/bbq_cottage_small.webp";
import cheesy_garlic from "@/assets/cheesy_garlic_small.webp";
import bhoot_julakia from "@/assets/bhoot_julakia_small.webp";
import chiplote_fair from "@/assets/chiplote_fair_small.webp";
import chocolate_meltdown from "@/assets/chocolate_meltdown_small.webp";

const pizzas = [
  { name: "Margarita", desc: "Classic Margarita Pizza - topped with fresh tomato sauce, creamy mozzarella, and fragrant basil.", price: "$17.99", image: margarita },
  { name: "Bbq cottage", desc: "BBQ Cottage Pizza - loaded with smoky BBQ sauce, tender cottage cheese (paneer), and crunchy veggies.", price: "$15.99", image: bbq_cottage },
  { name: "Cheesy garlic", desc: "Cheesy Garlic Bread - loaded with melted cheese, rich garlic butter, and a sprinkle of herbs.", price: "$13.99", image: cheesy_garlic },
  { name: "Bhoot julakia", desc: "Bhoot Jolokia Pizza - topped with fiery ghost pepper sauce, melted cheese, and loaded veggies.", price: "$14.49", image: bhoot_julakia },
  { name: "Chiplote fair", desc: "Chipotle Fair Pizza - smoky chipotle base with rich cheese and crunchy veggies on top.", price: "$16.99", image: chiplote_fair },
  { name: "Chocolate meltdown", desc: "Chocolate Meltdown - rich, gooey chocolate loaded over a soft, warm base.", price: "$14.99", image: chocolate_meltdown },

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
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg text-foreground mb-1">{pizza.name}</h3>
                <p className="text-muted-foreground text-sm mb-2 flex-1">{pizza.desc}</p>
                <span className="text-primary font-bold text-xl">{pizza.price}</span>
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
