import { MapPin, Phone, Mail, Clock, Pizza, CreditCard, UtensilsCrossed, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/rectos-brand_small.webp";

const FooterSection = () => {
  return (
    <footer id="site-footer" className="bg-secondary py-16 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link to="/">
              <img src={logo} alt="Recto's Pizza" className="h-20 w-auto mb-4 hover:scale-105 transition-transform" />
            </Link>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              Rectangle pizza perfection in the heart of Clayton South. Fresh ingredients, bold flavors, modern comfort.
            </p>
            <div className="flex gap-4 items-center">
              <a href="#" className="hover:scale-110 transition-transform" title="Order on DoorDash">
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-md border border-border/50">
                  <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#FF3008] fill-current">
                    <path d="M23.111 6.883c-.156-.378-.456-.694-.833-.878l-1.334-.633c-.7-.34-1.54-.05-1.89.65l-2.05 4.1c-.08.16-.16.32-.23.49-.07-.17-.15-.33-.23-.49l-2.05-4.1c-.35-.7-1.19-.99-1.89-.65l-1.334.633c-.377.184-.677.5-.833.878-.156.378-.167.794-.033 1.178l.5 1.4c.14.39.43.7.8.88l.8.38c.17.08.34.13.52.16-.18.03-.35.08-.52.16l-.8.38c-.37.18-.66.49-.8.88l-.5 1.4c-.134.384-.123.8.033 1.178.156.378.456.694.833.878l1.334.633c.18.09.38.13.58.13.54 0 1.05-.3 1.31-.82l2.05-4.1c.08-.16.16-.32.23-.49.07.17.15.33.23.49l2.05 4.1c.26.52.77.82 1.31.82.2 0 .4-.04.58-.13l1.334-.633c.377-.184.677-.5.833-.878.156-.378.167-.794.033-1.178l-.5-1.4c-.14-.39-.43-.7-.8-.88l-.8-.38c-.17-.08-.34-.13-.52-.16.18-.03.35-.08.52-.16l.8-.38c.37-.18.66-.49.8-.88l.5-1.4c.134-.384.123-.8-.033-1.178z"/>
                  </svg>
                </div>
              </a>
              <a href="https://www.ubereats.com/store-browse-uuid/fd9542d7-6cb1-57a5-b09f-a7c72455e073?diningMode=DELIVERY" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform" title="Order on Uber Eats">
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-md border border-border/50">
                  <span className="text-sm font-black text-black tracking-tighter">UBER</span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-secondary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground/70">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition-colors">Menu</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg text-secondary-foreground mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2"><Pizza className="w-4 h-4 text-primary" /> Take Away</li>
              <li className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-primary" /> Uber Eats</li>
              <li className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-primary" /> DoorDash</li>
              <li className="flex items-center gap-2"><UtensilsCrossed className="w-4 h-4 text-primary" /> Dine In</li>
              <li className="flex items-center gap-2"><Leaf className="w-4 h-4 text-primary" /> Jain & Swaminarayan Options</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg text-secondary-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                23 Meriton Pl, Clayton South VIC 3169, Australia
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +61 415 080 657
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p>Sun - Thu  : 5:00 PM - 10:59 PM</p>
                  <p>Fri - Sat  : 5:00 PM - 11:59 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                rectospizzaaustralia@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center">
          <p className="text-secondary-foreground/50 text-sm">
            © 2026 Recto's Pizza on the Go. Made with ❤️ in Clayton South
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
