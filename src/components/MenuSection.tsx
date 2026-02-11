import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import pizzaClassic from "@/assets/pizza-classic.jpg";
import pizzaPepper from "@/assets/pizza-pepper.jpg";
import pizzaVeg from "@/assets/pizza-veg.jpg";
import pizzaCheese from "@/assets/pizza-cheese.jpg";
import pizzaBbq from "@/assets/pizza-bbq.jpg";
import pizzaMeat from "@/assets/pizza-meat.jpg";

const pizzas = [
  { name: "Recto Classic", desc: "Pepperoni, mozzarella & fresh basil", price: "$14.99", image: pizzaClassic },
  { name: "Pepper Grid", desc: "Colorful bell peppers & jalapeños", price: "$15.99", image: pizzaPepper },
  { name: "Veg Block", desc: "Mushrooms, tomatoes, olives & herbs", price: "$13.99", image: pizzaVeg },
  { name: "Cheese Stack", desc: "Four-cheese blend, extra melty", price: "$14.49", image: pizzaCheese },
  { name: "BBQ Ranch", desc: "BBQ chicken, red onion & cilantro", price: "$16.99", image: pizzaBbq },
  { name: "Meat Loader", desc: "Sausage, bacon, ham & pepperoni", price: "$17.99", image: pizzaMeat },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Signature <span className="text-primary">Recto's</span> Pizzas
          </h2>
          <p className="text-muted-foreground text-lg">All rectangular. All delicious.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pizzas.map((pizza) => (
            <div
              key={pizza.name}
              className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-lg font-bold text-foreground">{pizza.name}</h3>
                  <span className="text-primary font-extrabold text-lg">{pizza.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{pizza.desc}</p>
                <Button variant="hero" size="sm" className="w-full gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
