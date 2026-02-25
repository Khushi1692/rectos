import { useState } from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
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
      <SEO
        title="Menu | Recto's Pizza – Rectangle Pizzas & More"
        description="Explore Recto's Pizza menu – classic, BBQ, veggie, and more rectangle pizzas with fresh ingredients. Order online or dine in at Clayton South."
        canonical="https://rectospizza.com/menu"
      />
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-3">
              Our <span className="text-primary">Menu</span>
            </h1>
            <p className="text-muted-foreground text-lg">All rectangular. All delicious.</p>
          </div>

          {/* Category tabs - bold bordered style like reference */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-3 font-heading font-bold text-sm sm:text-base uppercase tracking-wide transition-all border-2 border-foreground shadow-[3px_3px_0px_0px_hsl(var(--foreground))] ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards - vertical layout like reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {menuItems[active].map((item) => (
              <div
                key={item.name}
                className="bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] overflow-hidden group flex flex-col"
              >
                <div className="aspect-square overflow-hidden bg-primary/20">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-heading font-bold text-foreground uppercase mb-1">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-2 flex-1">{item.desc}</p>
                  <span className="text-primary font-heading font-bold text-xl">{item.price}</span>
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
