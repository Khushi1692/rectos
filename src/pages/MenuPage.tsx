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
import cheesyGarlicBread from "@/assets/cheesy-garlic-bread.jpg";
import garlicBread from "@/assets/garlic-bread.jpg";
import coldCoffee from "@/assets/cold-coffee.jpg";
import kitkatShake from "@/assets/kitkat-shake.jpg";
import oreoShake from "@/assets/oreoShake.jpg"
// import periPeri from "@/assets/peri-peri.jpg";

const categories = ["Pizza", "Snacks", "Sips + Bites"] as const;
type Category = (typeof categories)[number];

const menuItems: Record<Category, { name: string; desc: string; price: string; image: string }[]> = {
   Pizza: [
    { name: "Garden Fresh Veggies Pizza", desc: "Pizza top with zucchini, broccoli, capsicum. tomato, bell pepper, onion, black olive, corn, mushroom, mayonnaise and cheese, seasonin", price: "$17.99", image: pizzaMeat },
    { name: "Bhooootttttt Jolakia Pizza", desc: "Spicy pizza top with capsicum, tomato, green Chilli, bhoot jolakia sauce, peri peri sauce. onion, mushroom , cheeses & Mayonnaise", price: "$15.99", image: pizzaPepper },
    { name: "Peri Peri Crunchies Pizza", desc: "Pizza top with capsicum, onion, tomato, sundried tomato, corn, peri peri mayo, cheese sauce, pizza cheese & crushed nacho chi s", price: "$14.99", image: pizzaClassic },
    { name: "Chocolate Meltdown Pizza", desc: "izza with cheese sauce. chocolate sauce, choco chips and cheese", price: "$14.49", image: pizzaCheese },
    { name: "Classic Margherita Pizza", desc: "Classic Cheese Pizza with marinara sauce, topped with cheddar & mozzarella.", price: "$16.99", image: pizzaBbq },
    { name: "Barbeque Cottage Cheese Pizza", desc: "Pizza top with Malai paneer, capsicum, onion, sundried toamto, BBQ sauce, pizza cheese", price: "$14.99", image: pizzaClassic },
    { name: "Chipotle Chatakaz Pizza", desc: "Pizza top with chipolte sauce, cheese sauce, capsicum, onion, broccoli, zucchini, sundried tomato, black olive, corn & finish with cheese & seasoning", price: "$13.99", image: pizzaVeg },
    { name: "Pesto Patola Pizza", desc: "Pizza with homemade pesto sauce, cheese sauce, capsicum, onion, broccoli, zucchini, black olive, mushroom, sundried tomato top with cheese", price: "$13.99", image: pizzaVeg },
    { name: "Sheikh Chilli Pizza", desc: "Pizza top with sirka onion, pickled chilli, capsicum, cheese blend, pizza cheese, sundried tomato & seasoning", price: "$13.99", image: pizzaVeg },
    { name: "Soya Chunky Sanki Pizza", desc: "Pizza with masala soya chunks, corn, mayonnaise, tandoori mayo & cheese with seasoning..", price: "$13.99", image: pizzaVeg },
    { name: "Tandoori Peppy Paneer Pizza", desc: "Tandoori marinated Paneer pizza with capsicum, onion, tandoori mayo & pizza cheese", price: "$13.99", image: pizzaVeg },
  
  
    ],
    Snacks: [
      { name: "Cheesy Garlic Bread", desc: "Baked bread with garlic paste blend with cheese sauce & top With pizza cheese, finish with seasoning", price: "$6.99", image: cheesyGarlicBread },
      { name: "Garlic Bread", desc: "Baked bread with arlic paste & sprinkle seasoni", price: "$7.99", image: garlicBread },
     
    ],
    "Sips + Bites": [
      { name: "Cheese", desc: "Ice-cold refreshment", price: "$2.99", image: pizzaClassic },
      { name: "Classic.", desc: "Sparkling lemonade with mint", price: "$3.49", image: pizzaVeg },
      { name: "Cold Coffee", desc: "Thick chocolate milkshake", price: "$5.99", image: coldCoffee },
      { name: "Kitkat Shake", desc: "4 freshly baked cookies", price: "$4.99", image: kitkatShake },
      { name: "Oreo Shake", desc: "4 freshly baked cookies", price: "$4.99", image: oreoShake },
      { name: "Peri - Peri", desc: "4 freshly baked cookies", price: "$4.99", image: pizzaClassic },
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
            <h1 className="text-4xl sm:text-5xl text-foreground mb-3">
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
                className={`px-6 py-3 font-bold text-sm sm:text-base transition-all border-2 border-foreground shadow-[3px_3px_0px_0px_hsl(var(--foreground))] ${
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
                className="bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_hsl(var(--foreground))] overflow-hidden group flex flex-col hover:-translate-y-2 transition-transform duration-300"
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
                  <span className="text-primary font-bold text-xl">{item.price}</span>
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
