import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-heading font-extrabold text-primary">Recto's</span>
          <span className="text-xs text-secondary-foreground/70 font-medium hidden sm:inline">PIZZA ON THE GO</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-secondary-foreground/90 font-medium">
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#why" className="hover:text-primary transition-colors">Why Rectangle?</a>
          <a href="#how" className="hover:text-primary transition-colors">How It Works</a>
          <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <Button variant="hero" size="sm" className="gap-1.5">
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">Order Now</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
