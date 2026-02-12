import { MapPin, Phone, Mail, Clock, Pizza, CreditCard, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer id="contact" className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-primary mb-3 font-heading">Recto's</h3>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Rectangle pizza perfection in the heart of Clayton South. Fresh ingredients, bold flavors, modern comfort.
            </p>
            <div className="flex gap-3 mt-4">
              <div className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                <Pizza className="w-4 h-4 text-primary" />
              </div>
              <div className="w-9 h-9 rounded-full bg-secondary-foreground/10 flex items-center justify-center">
                <UtensilsCrossed className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-secondary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground/70">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition-colors">Menu</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-bold text-secondary-foreground mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2"><Pizza className="w-4 h-4 text-primary" /> Take Away</li>
              <li className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-primary" /> Online Ordering</li>
              <li className="flex items-center gap-2"><UtensilsCrossed className="w-4 h-4 text-primary" /> Dine In</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> Phone Orders</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-bold text-secondary-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                23 Meriton Pl, Clayton South VIC 3169, Australia
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +61 406 562 036
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                Open 11am – 11pm Daily
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                info@rectospizza.com
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
