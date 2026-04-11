import { useState } from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

import margarita from "@/assets/margarita.webp";
import bbq_cottage from "@/assets/bbq_cottage.webp";
import cheesy_garlic from "@/assets/cheesy_garlic.webp";
import bhoot_julakia from "@/assets/bhoot_julakia.webp";
import chiplote_fair from "@/assets/chiplote_fair.webp";
import chocolate_meltdown from "@/assets/chocolate_meltdown.webp";
import double_cheese_margarita from "@/assets/double_cheese_margarita.webp";
import pesto_patola from "@/assets/pesto_patola.webp";
import sheikh_chilli from "@/assets/sheikh_chilli.webp";
import tandoori_peppy_paneer from "@/assets/tandoori_peppy_paneer.webp";
import garden_fresh from "@/assets/garden_fresh.webp";
import peri_peri_crunchies from "@/assets/peri_peri_crunchies.webp";

import combo from "@/assets/combo.webp";

import coldCoffee from "@/assets/cold-coffee.webp";
import kitkatShake from "@/assets/kitkat-shake.webp";
import oreoShake from "@/assets/oreoShake.webp";

const categories = ["Pizza", "Snacks", "Sips + Bites"] as const;
type Category = (typeof categories)[number];

const menuItems: Record<Category, { name: string; desc: string; price: string; image: string }[]> = {
    Pizza: [
      { name: "Margarita", desc: "Classic Margarita Pizza - topped with fresh tomato sauce, creamy mozzarella, and fragrant basil.", price: "$17.99", image: margarita },
      { name: "Bbq cottage", desc: "BBQ Cottage Pizza - loaded with smoky BBQ sauce, tender cottage cheese (paneer), and crunchy veggies.", price: "$15.99", image: bbq_cottage },
      { name: "Cheesy garlic", desc: "Cheesy Garlic Bread - loaded with melted cheese, rich garlic butter, and a sprinkle of herbs.", price: "$14.99", image: cheesy_garlic },
      { name: "Bhoot julakia", desc: "Bhoot Jolokia Pizza - topped with fiery ghost pepper sauce, melted cheese, and loaded veggies.", price: "$14.49", image: bhoot_julakia },
      { name: "Chipotle fair", desc: "Chipotle Fair Pizza - smoky chipotle base with rich cheese and crunchy veggies on top.", price: "$16.99", image: chiplote_fair },
      { name: "Chocolate meltdown", desc: "Chocolate Meltdown - rich, gooey chocolate loaded over a soft, warm base.", price: "$14.99", image: chocolate_meltdown },
      { name: "Double cheese margarita", desc: "Pizza top with chipolte sauce, cheese sauce, capsicum, onion, broccoli, zucchini, sundried tomato, black olive, corn & finish with cheese & seasoning", price: "$13.99", image: double_cheese_margarita },
      { name: "Pesto patola", desc: "Pizza with homemade pesto sauce, cheese sauce, capsicum, onion, broccoli, zucchini, black olive, mushroom, sundried tomato top with cheese", price: "$13.99", image: pesto_patola },
      { name: "Sheikh chilli", desc: "Pizza top with sirka onion, pickled chilli, capsicum, cheese blend, pizza cheese, sundried tomato & seasoning", price: "$13.99", image: sheikh_chilli },
      { name: "Tandoori Peppy Paneer Pizza", desc: "Tandoori marinated Paneer pizza with capsicum, onion, tandoori mayo & pizza cheese", price: "$13.99", image: tandoori_peppy_paneer },
      { name: "Garden fresh", desc: "Garden Fresh Pizza - loaded with crisp veggies, juicy tomatoes, and fresh flavors on a cheesy base.", price: "$13.99", image: garden_fresh },
      { name: "Peri-peri crunchies", desc: "Peri-Peri Crunchies – crispy bites tossed in bold peri-peri seasoning for a fiery kick.", price: "$13.99", image: peri_peri_crunchies },
    ],
    Snacks: [
      { name: "Cheesy Garlic Bread", desc: "Baked bread with garlic paste blend with cheese sauce & top With pizza cheese, finish with seasoning", price: "$6.99", image: cheesy_garlic },
      { name: "Garlic Bread", desc: "Baked bread with arlic paste & sprinkle seasoni", price: "$7.99", image: cheesy_garlic },
    ],
    "Sips + Bites": [
      { name: "Combo", desc: "Combo Feast – a perfect trio of cheesy classics, spicy delights, and loaded flavors in one box.", price: "$2.99", image: combo },
      { name: "Classic.", desc: "Sparkling lemonade with mint", price: "$3.49", image: margarita },
      { name: "Cold Coffee", desc: "Thick chocolate milkshake", price: "$5.99", image: coldCoffee },
      { name: "Kitkat Shake", desc: "4 freshly baked cookies", price: "$4.99", image: kitkatShake },
      { name: "Oreo Shake", desc: "4 freshly baked cookies", price: "$4.99", image: oreoShake },
      { name: "Peri - Peri", desc: "4 freshly baked cookies", price: "$4.99", image: chiplote_fair },
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
                    loading="lazy"
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
