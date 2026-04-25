import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { MenuCharacter } from "@/components/MenuCharacter";
import { ThemeElements, PageTransition } from "@/components/ThemeElements";

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
import tea from "@/assets/tea.jpeg";

import combo from "@/assets/combo_small.webp";

const categories = ["Pizza","Korian", "Garlic Bread", "Drinks", "Combos", "Extra"] as const;
type Category = (typeof categories)[number];

const menuItems: Record<Category, { name: string; desc: string; price: string; image: string; tags?: string[] }[]> = {
    Pizza: [
      { name: "OG Margherita", desc: "OG Margherita Pizza - topped with fresh tomato sauce, creamy mozzarella, and fragrant basil.", price: "$7", image: margarita, tags: ["Popular", "Jain", "Swaminarayan"] },
      { name: "Cheesy Corn Pizza", desc: "A creamy blend of sweet corn and melted cheese on a perfectly baked base.", price: "$9", image: "", tags: ["Jain", "Swaminarayan"] },
      { name: "Paneer Onion Pizza", desc: "Loaded with soft paneer cubes, crunchy onions, and melted cheese on a flavorful base.", price: "$10", image: "", tags: ["Jain", "Swaminarayan"] },
      { name: "Mad Over4 Cheese ❤️", desc: "Loaded with a rich blend of four premium cheeses melted to perfection.", price: "$10", image: "", tags: ["Popular"] },
      { name: "Mushroom Truffle", desc: "A rich blend of earthy mushrooms and aromatic truffle oil over melted cheese.", price: "$12", image: "", tags: ["Jain", "Swaminarayan"] },
      { name: "Garden Fresh", desc: "Garden Fresh Pizza - loaded with crisp veggies, juicy tomatoes, and fresh flavors on a cheesy base.", price: "$12", image: garden_fresh, tags: ["Jain", "Swaminarayan"] },
      { name: "Sheikh Chilli 🔥", desc: "Pizza top with sirka onion, pickled chilli, capsicum, cheese blend, pizza cheese, sundried tomato & seasoning", price: "$12", image: sheikh_chilli, tags: ["Popular"] },
      { name: "Chipotle Chatakaz", desc: "Chipotle chatakaz Pizza - smoky chipotle base with rich cheese and crunchy veggies on top.", price: "$12", image: chiplote_fair, tags: ["Jain", "Swaminarayan"] },
      { name: "Italian Retreat Pizza", desc: "A classic Italian-style pizza topped with rich tomato sauce, herbs, and melted cheese.", price: "$12", image: sheikh_chilli, tags: ["Jain", "Swaminarayan"] },
      { name: "BBQ Paneer", desc: "BBQ Panner Pizza - loaded with smoky BBQ sauce, tender cottage cheese (paneer), and crunchy veggies.", price: "$12", image: bbq_cottage },
      { name: "Bhooootttt Jolakia 🔥", desc: "Bhoot Jolokia Pizza - topped with fiery ghost pepper sauce, melted cheese, and loaded veggies.", price: "$12", image: bhoot_julakia, tags: ["Popular"] },
      { name: "Tandoori Peppy Paneer", desc: "Tandoori marinated Paneer with capsicum, onion, tandoori mayo & pizza cheese", price: "$12", image: tandoori_peppy_paneer, tags: ["Jain", "Swaminarayan"] },
      { name: "Indian Tikka Masala", desc: "Loaded with rich tikka masala gravy, spiced toppings, and melted cheese.", price: "$12", image: sheikh_chilli, tags: ["Jain", "Swaminarayan"] },
      { name: "Peri Peri Crunchies", desc: "Peri-Peri Crunchies – crispy bites tossed in bold peri-peri seasoning for a fiery kick.", price: "$12", image: peri_peri_crunchies, tags: ["Jain", "Swaminarayan"] },
      { name: "Pesto Veg", desc: "Pizza with homemade pesto sauce, cheese sauce, capsicum, onion, broccoli, zucchini, black olive, mushroom, sundried tomato top with cheese", price: "$12", image: pesto_patola },
      { name: "Chocolate Melt Down", desc: "Chocolate Melt Down - rich, gooey chocolate loaded over a soft, warm base.", price: "$12", image: chocolate_meltdown, tags: ["Jain", "Swaminarayan"] },
   ],
     "Korian": [
      { name: "K-Pop Core Pizza", desc: "A vibrant mix of cheesy goodness, bold sauces, and exciting toppings inspired by Korean flavors.", price: "$13", image: "" },
      { name: "K-Pop Veggie Pizza", desc: "A colorful mix of fresh veggies, melty cheese, and bold Korean-inspired flavors.", price: "$13", image: "" },
      { name: "K-Pop Gochujang Pizza", desc: "A bold fusion of spicy gochujang sauce, melted cheese, and flavorful toppings.", price: "$13", image: "" },
    ],
    "Garlic Bread": [
      { name: "Cheeso Garlic Bread", desc: "Cheeso Garlic Bread – loaded with melted cheese, rich garlic butter, and a hint of herbs", price: "$6", image: "" },
      { name: "Cheese Garlic Bread", desc: "Baked bread with garlic paste blend with cheese sauce & top With pizza cheese, finish with seasoning", price: "$7", image: cheesy_garlic },
      { name: "Paneer Tikka Garlic Bread", desc: "Loaded with spiced paneer, rich garlic butter, and melted cheese on a soft, crispy base.", price: "$9", image: "" },
    ],
    "Drinks": [
      { name: "Water", desc: "", price: "$3", image: '' },
      { name: "Cold Drinks Tin", desc: "", price: "$4", image: '' },
      { name: "Masala Tea", desc: "", price: "$6", image: '' },
      { name: "Special Aroma Tea", desc: "", price: "$7", image: tea },
      { name: "Kiwi Cooler", desc: "A refreshing blend of tangy kiwi with a hint of sweetness and icy chill.", price: "$7", image: '' },
      { name: "Cold Coffee", desc: "A chilled blend of rich coffee, milk, and a touch of sweetness.", price: "$7", image: '' },
      { name: "Tiramisu Milkshake", desc: "A creamy blend of coffee, chocolate, and smooth milkshake", price: "$7", image: '' },
      { name: "Strawberry Milkshake", desc: "A delightful mix of juicy strawberries blended into a smooth, creamy shake.", price: "$7", image: '' },
      { name: "Green Apple Mojito", desc: "A zesty mix of green apple, mint, and a splash of lime for a refreshing twist.", price: "$7", image: '' },
      { name: "Chilli Guava Mojito", desc: "A bold blend of juicy guava, mint, and a hint of chilli for a spicy twist.", price: "$7", image: '' },
    ],
    "Combos": [
      { name: "OG Combo", desc: "OG Margherita Pizza + Cheeso Garlic Bread", price: "$12", image: '' },
      { name: "Double Down", desc: "OG Margherita + Garden Fresh Veggies", price: "$17", image: '' },
      { name: "Full Meal", desc: "Cheesy Corn Pizza + Cheeso Garlic Bread + Kiwi Cooler", price: "$21", image: '' },
      { name: "Crazy 3 Combo", desc: "Paneer Onion Pizza + Cheesy Corn Pizza + OG Margherita", price: "$23", image: combo },
    ],
    "Extra": [
      { name: "Toppings", desc: "Add extra toppings to your pizza", price: "$3", image: '' },
      { name: "Cheese", desc: "Extra melty cheese", price: "$3", image: '' },
      { name: "Any Dip", desc: "Your choice of dipping sauce", price: "$3", image: '' },
      { name: "Paneer", desc: "Extra cottage cheese cubes", price: "$3", image: '' },
    ],

};

const menuJsonLd = [
  {
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
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Home",
        "url": "https://rectospizza.com"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Menu",
        "url": "https://rectospizza.com/menu"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "About Our Journey",
        "url": "https://rectospizza.com/about"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Contact Us",
        "url": "https://rectospizza.com/contact"
      }
    ]
  }
];

const MenuPage = () => {
  const [active, setActive] = useState<Category>("Pizza");

  // GSAP Tilt Effect for Menu Cards
  useEffect(() => {
    const cards = document.querySelectorAll("[data-menu-item]");
    cards.forEach((card) => {
      const onMouseMove = (e: MouseEvent) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

        gsap.to(card, {
          rotateX,
          rotateY,
          transformPerspective: 1000,
          scale: 1.02,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      const onMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      };

      card.addEventListener("mousemove", onMouseMove as any);
      card.addEventListener("mouseleave", onMouseLeave);
      
      return () => {
        card.removeEventListener("mousemove", onMouseMove as any);
        card.removeEventListener("mouseleave", onMouseLeave);
      };
    });
  }, [active]);


  return (
    <div className="min-h-screen bg-background relative">
      {/* Theme elements - consistent Recto's branding across pages */}
      <ThemeElements variant="light" />

      <SEO
        title="Our Menu | Signature Rectangle Pizzas - Recto's Pizza"
        description="Explore our unique rectangle pizza menu! From classic Margarita to spicy Bhoot Jolokia, we offer perfectly sliced portions with more toppings. Check out our pizzas, snacks, and shakes."
        canonical="https://rectospizza.com/menu"
        jsonLd={menuJsonLd}
      />
      <Navbar />
      {/* Character is fixed at bottom-right, always visible */}
      <MenuCharacter 
        visible={true} 
        initialMessage="I am here to serve the menu" 
        initialSpeech="I am here to serve the menu"
      />

      {/* Increased pt-32 to prevent navbar overlap */}
      <div className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 id="menu-title" className="text-4xl sm:text-5xl text-foreground mb-3 inline-block relative">
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

          {/* Menu grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto py-10">
            {menuItems[active].map((item, index) => (
              <div
                key={item.name}
                data-menu-item={`${active}-${index}`}
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
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-heading font-bold text-foreground uppercase">{item.name}</h3>
                    {item.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-0.5 bg-[#1a472a] text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {active !== "Extra" && (
                    <p className="text-muted-foreground text-sm mb-2 flex-1">{item.desc}</p>
                  )}
                  <span className="text-primary font-bold text-xl">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Order Online Section */}
          <div className="mt-16 text-center bg-white/50 backdrop-blur-sm p-10 rounded-3xl border-2 border-primary/10 shadow-lg relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl text-foreground mb-6 uppercase font-black tracking-tight">Order <span className="text-primary">Online</span></h2>
              <div className="flex flex-wrap justify-center items-center gap-6">
                {/* DoorDash Themed Button */}
                <a 
                  href="#" 
                  className="flex items-center gap-3 bg-white border-2 border-foreground px-8 py-3 rounded-xl shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-[#FF3008] fill-current">
                      <path d="M23.111 6.883c-.156-.378-.456-.694-.833-.878l-1.334-.633c-.7-.34-1.54-.05-1.89.65l-2.05 4.1c-.08.16-.16.32-.23.49-.07-.17-.15-.33-.23-.49l-2.05-4.1c-.35-.7-1.19-.99-1.89-.65l-1.334.633c-.377.184-.677.5-.833.878-.156.378-.167.794-.033 1.178l.5 1.4c.14.39.43.7.8.88l.8.38c.17.08.34.13.52.16-.18.03-.35.08-.52.16l-.8.38c-.37.18-.66.49-.8.88l-.5 1.4c-.134.384-.123.8.033 1.178.156.378.456.694.833.878l1.334.633c.18.09.38.13.58.13.54 0 1.05-.3 1.31-.82l2.05-4.1c.08-.16.16-.32.23-.49.07.17.15.33.23.49l2.05 4.1c.26.52.77.82 1.31.82.2 0 .4-.04.58-.13l1.334-.633c.377-.184.677-.5.833-.878.156-.378.167-.794.033-1.178l-.5-1.4c-.14-.39-.43-.7-.8-.88l-.8-.38c-.17-.08-.34-.13-.52-.16.18-.03.35-.08.52-.16l.8-.38c.37-.18.66-.49.8-.88l.5-1.4c.134-.384.123-.8-.033-1.178z"/>
                    </svg>
                  </div>
                  <span className="text-xl font-black text-[#FF3008] uppercase tracking-tighter">Doordash</span>
                </a>

                {/* Uber Themed Button */}
                <a 
                  href="https://www.ubereats.com/store-browse-uuid/fd9542d7-6cb1-57a5-b09f-a7c72455e073?diningMode=DELIVERY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white border-2 border-foreground px-8 py-3 rounded-xl shadow-[4px_4px_0px_0px_hsl(var(--foreground))] hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-2xl font-bold text-black tracking-tight">Uber</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default MenuPage;
