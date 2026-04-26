import { MapPin, Phone, Mail, Clock, Pizza, CreditCard, UtensilsCrossed, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/rectos-brand_small.webp";
import doordash from "@/assets/doordash.png";

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
                  <img src={doordash} alt="DoorDash" className="w-10 h-auto object-contain" />
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
