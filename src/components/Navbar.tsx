import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-heading font-extrabold text-primary">Recto's</span>
          <span className="text-xs text-secondary-foreground/70 font-medium hidden sm:inline">PIZZA ON THE GO</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm text-secondary-foreground/90 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`transition-colors ${
                location.pathname === link.href
                  ? "text-primary font-bold"
                  : "hover:text-primary text-secondary-foreground/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen(true)}
            className="relative w-9 h-9 flex items-center justify-center text-secondary-foreground hover:text-primary transition-colors"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <Button variant="hero" size="sm" className="gap-1.5" asChild>
            <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer">Order Now</a>
          </Button>
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-secondary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-secondary border-t border-secondary-foreground/10 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 transition-colors font-medium ${
                location.pathname === link.href
                  ? "text-primary font-bold"
                  : "text-secondary-foreground/90 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
