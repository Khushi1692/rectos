import { Button } from "@/components/ui/button";
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
            <div key={pizza.name} className="bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] overflow-hidden group flex flex-col hover:-translate-y-2 transition-transform duration-300">
              <div className="aspect-square overflow-hidden bg-primary/20">
                <img src={pizza.image} alt={pizza.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-heading font-bold text-foreground uppercase mb-1">{pizza.name}</h3>
                <p className="text-muted-foreground text-sm mb-2 flex-1">{pizza.desc}</p>
                <span className="text-primary font-heading font-bold text-xl">{pizza.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
            <a href="/menu">Explore Menu</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
