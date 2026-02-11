import { useState } from "react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import pizzaClassic from "@/assets/pizza-classic.jpg";
import pizzaPepper from "@/assets/pizza-pepper.jpg";
import pizzaVeg from "@/assets/pizza-veg.jpg";
import pizzaCheese from "@/assets/pizza-cheese.jpg";
import pizzaBbq from "@/assets/pizza-bbq.jpg";
import pizzaMeat from "@/assets/pizza-meat.jpg";

const categories = ["Pizza", "Snacks", "Sips + Bites"] as const;

type Category = (typeof categories)[number];

const menuItems: Record<Category, { name: string; desc: string; price: string; image: string }[]> = {
  Pizza: [
    { name: "Recto Classic", desc: "Pepperoni, mozzarella & fresh basil", price: "$14.99", image: pizzaClassic },
    { name: "Pepper Grid", desc: "Colorful bell peppers & jalapeños", price: "$15.99", image: pizzaPepper },
    { name: "Veg Block", desc: "Mushrooms, tomatoes, olives & herbs", price: "$13.99", image: pizzaVeg },
    { name: "Cheese Stack", desc: "Four-cheese blend, extra melty", price: "$14.49", image: pizzaCheese },
    { name: "BBQ Ranch", desc: "BBQ chicken, red onion & cilantro", price: "$16.99", image: pizzaBbq },
    { name: "Meat Loader", desc: "Sausage, bacon, ham & pepperoni", price: "$17.99", image: pizzaMeat },
  ],
  Snacks: [
    { name: "Garlic Knots", desc: "Golden baked with garlic butter & herbs", price: "$6.99", image: pizzaClassic },
    { name: "Cheesy Breadsticks", desc: "Stuffed with mozzarella & parmesan", price: "$7.99", image: pizzaCheese },
    { name: "Chicken Wings", desc: "Crispy wings with your choice of sauce", price: "$9.99", image: pizzaBbq },
    { name: "Loaded Fries", desc: "Cheese, bacon bits & sour cream", price: "$8.49", image: pizzaMeat },
  ],
  "Sips + Bites": [
    { name: "Classic Cola", desc: "Ice-cold refreshment", price: "$2.99", image: pizzaClassic },
    { name: "Lemon Fizz", desc: "Sparkling lemonade with mint", price: "$3.49", image: pizzaVeg },
    { name: "Choco Shake", desc: "Thick chocolate milkshake", price: "$5.99", image: pizzaCheese },
    { name: "Cookie Box", desc: "4 freshly baked cookies", price: "$4.99", image: pizzaPepper },
  ],
};

const MenuPage = () => {
  const [active, setActive] = useState<Category>("Pizza");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
              Our <span className="text-primary">Menu</span>
            </h1>
            <p className="text-muted-foreground text-lg">All rectangular. All delicious.</p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm sm:text-base transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-foreground border border-border hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {menuItems[active].map((item) => (
              <div
                key={item.name}
                className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                    <span className="text-primary font-extrabold text-lg">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <Button variant="hero" size="sm" className="w-full gap-2">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default MenuPage;
