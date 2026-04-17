import { useState } from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

import margarita from "@/assets/margarita_small.webp";
import bbq_cottage from "@/assets/bbq_cottage_small.webp";
import cheesy_garlic from "@/assets/cheesy_garlic_small.webp";
import bhoot_julakia from "@/assets/bhoot_julakia_small.webp";
import chiplote_fair from "@/assets/chiplote_fair_small.webp";
import chocolate_meltdown from "@/assets/chocolate_meltdown_small.webp";
import double_cheese_margarita from "@/assets/double_cheese_margarita_small.webp";
import pesto_patola from "@/assets/pesto_patola_small.webp";
import sheikh_chilli from "@/assets/sheikh_chilli_small.webp";
import tandoori_peppy_paneer from "@/assets/tandoori_peppy_paneer_small.webp";
import garden_fresh from "@/assets/garden_fresh_small.webp";
import peri_peri_crunchies from "@/assets/peri_peri_crunchies_small.webp";

import combo from "@/assets/combo_small.webp";

const categories = ["Pizza","Korean", "Garlic Bread", "Drinks", "Combos", "Extra"] as const;
type Category = (typeof categories)[number];

const menuItems: Record<Category, { name: string; desc: string; price: string; image: string }[]> = {
    Pizza: [
      { name: "OG Margarita", desc: "OG Margarita Pizza - topped with fresh tomato sauce, creamy mozzarella, and fragrant basil.", price: "$7", image: margarita },
      { name: "Cheesy Corn Pizza", desc: "A creamy blend of sweet corn and melted cheese on a perfectly baked base.", price: "$9", image: "" },
      { name: "Paneer Onion Pizza", desc: "Loaded with soft paneer cubes, crunchy onions, and melted cheese on a flavorful base.", price: "$10", image: "" },
      { name: "Madover 4 Cheese", desc: "Loaded with a rich blend of four premium cheeses melted to perfection.", price: "$10", image: "" },
      { name: "Mushroom Truffle", desc: "A rich blend of earthy mushrooms and aromatic truffle oil over melted cheese.", price: "$12", image: "" },
      { name: "Garden fresh", desc: "Garden Fresh Pizza - loaded with crisp veggies, juicy tomatoes, and fresh flavors on a cheesy base.", price: "$12", image: garden_fresh },
      { name: "Sheikh chilli", desc: "Pizza top with sirka onion, pickled chilli, capsicum, cheese blend, pizza cheese, sundried tomato & seasoning", price: "$12", image: sheikh_chilli },
      { name: "Chipotle chatakaz", desc: "Chipotle chatakaz Pizza - smoky chipotle base with rich cheese and crunchy veggies on top.", price: "$12", image: chiplote_fair },
      { name: "Italian Retred pizza", desc: "A classic Italian-style pizza topped with rich tomato sauce, herbs, and melted cheese.", price: "$12", image: sheikh_chilli },
      { name: "BBQ Paneer", desc: "BBQ Panner Pizza - loaded with smoky BBQ sauce, tender cottage cheese (paneer), and crunchy veggies.", price: "$12", image: bbq_cottage },
      { name: "Bhoot Jolakia", desc: "Bhoot Jolokia Pizza - topped with fiery ghost pepper sauce, melted cheese, and loaded veggies.", price: "$12", image: bhoot_julakia },
      { name: "Tandoori Peppy Paneer", desc: "Tandoori marinated Paneer with capsicum, onion, tandoori mayo & pizza cheese", price: "$12", image: tandoori_peppy_paneer },
      { name: "Indian Tikka Masala", desc: "Loaded with rich tikka masala gravy, spiced toppings, and melted cheese.", price: "$12", image: sheikh_chilli },
      { name: "Peri-peri Crunchies", desc: "Peri-Peri Crunchies – crispy bites tossed in bold peri-peri seasoning for a fiery kick.", price: "$12", image: peri_peri_crunchies },
      { name: "Pesto Veg", desc: "Pizza with homemade pesto sauce, cheese sauce, capsicum, onion, broccoli, zucchini, black olive, mushroom, sundried tomato top with cheese", price: "$12", image: pesto_patola },
      { name: "Chocolate Melt Down", desc: "Chocolate Melt Down - rich, gooey chocolate loaded over a soft, warm base.", price: "$12", image: chocolate_meltdown },
   ],
     "Korean": [
      { name: "K-Pop Core Pizza", desc: "A vibrant mix of cheesy goodness, bold sauces, and exciting toppings inspired by Korean flavors.", price: "$13", image: "" },
      { name: "K-Pop Veggie Pizza", desc: "A colorful mix of fresh veggies, melty cheese, and bold Korean-inspired flavors.", price: "$13", image: "" },
      { name: "K-Pop Gochujang Pizza", desc: "A bold fusion of spicy gochujang sauce, melted cheese, and flavorful toppings.", price: "$13", image: "" },
    ],
    "Garlic Bread": [
      { name: "Cheeso Garlic Bread", desc: "Cheeso Garlic Bread – loaded with melted cheese, rich garlic butter, and a hint of herbs", price: "$6", image: "" },
      { name: "Cheese Garlic Bread", desc: "Baked bread with garlic paste blend with cheese sauce & top With pizza cheese, finish with seasoning", price: "$7", image: cheesy_garlic },
      { name: "Paneer tikka garlic bread", desc: "Loaded with spiced paneer, rich garlic butter, and melted cheese on a soft, crispy base.", price: "$9", image: "" },
    ],
    "Drinks": [
     
      { name: "Water", desc: "", price: "$3", image: '' },
      { name: "Cold Drink Tin", desc: "", price: "$4", image: '' },
      { name: "Masala Tea", desc: "", price: "$6", image: '' },
      { name: "Special Aroma Tea", desc: "", price: "$7", image: '' },
      { name: "Kiwi Cooler", desc: "A refreshing blend of tangy kiwi with a hint of sweetness and icy chill.", price: "$7", image: '' },
      { name: "Cold Coffee", desc: "A chilled blend of rich coffee, milk, and a touch of sweetness.", price: "$7", image: '' },
      { name: "Tiramisu Milkshake", desc: "A creamy blend of coffee, chocolate, and smooth milkshake", price: "$7", image: '' },
      { name: "Strawberry Milkshake", desc: "A delightful mix of juicy strawberries blended into a smooth, creamy shake.", price: "$7", image: '' },
      { name: "Green Apple Majitio", desc: "A zesty mix of green apple, mint, and a splash of lime for a refreshing twist.", price: "$7", image: '' },
      { name: "Chilli Guava Mojito", desc: "A bold blend of juicy guava, mint, and a hint of chilli for a spicy twist.", price: "$7", image: '' },
    ],
    "Combos": [
     
      { name: "OG Combo", desc: "OG Margherita Pizza + Cheesy Garlic Bread ", price: "$12", image: '' },
      { name: "Double Down", desc: "OG Margherita + Garden Fresh Veggies", price: "$17", image: '' },
      { name: "Full Meal", desc: "Cheesy Corn Pizza + Chesszo Garlic Bread + Kiwi Cooler", price: "$21", image: '' },
      { name: "Crazy 3 Combo", desc: "Paneer Onion Pizza + Cheesy Corn Pizza + OG Margherita ", price: "$23", image: combo },
    ],
    "Extra": [
     
      { name: "Topping", desc: "OG Margherita Pizza + Cheesy Garlic Bread ", price: "$3", image: '' },
      { name: "Cheese", desc: "Cheesy Corn Pizza + Chesszo Garlic Bread + Kiwi Cooler", price: "$3", image: '' },
      { name: "Any Dip", desc: "OG Margherita + Garden Fresh Veggies", price: "$3", image: '' },
      { name: "Paneer", desc: "OG Margherita + Garden Fresh Veggies", price: "$3", image: '' },
      
    ],

};

const menuJsonLd = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Recto's Pizza Menu",
  "mainEntityOfPage": "https://rectospizza.com/menu",
  "hasMenuSection": [
    {
      "@type": "MenuSection",
      "name": "Pizza",
      "description": "Rectangle Pizzas",
      "hasMenuItem": [
        { "@type": "MenuItem", "name": "Margarita", "description": "Classic Margarita Pizza", "offers": { "@type": "Offer", "price": "17.99", "priceCurrency": "AUD" } },
        { "@type": "MenuItem", "name": "Bhoot Jolokia", "description": "Spicy Ghost Pepper Pizza", "offers": { "@type": "Offer", "price": "14.49", "priceCurrency": "AUD" } }
      ]
    }
  ]
};

const MenuPage = () => {
  const [active, setActive] = useState<Category>("Pizza");

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Our Menu | Signature Rectangle Pizzas - Recto's Pizza"
        description="Explore our unique rectangle pizza menu! From classic Margarita to spicy Bhoot Jolokia, we offer perfectly sliced portions with more toppings. Check out our pizzas, snacks, and shakes."
        canonical="https://rectospizza.com/menu"
        jsonLd={menuJsonLd}
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
                  {active !== "Extra" && (
                    <p className="text-muted-foreground text-sm mb-2 flex-1">{item.desc}</p>
                  )}
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
