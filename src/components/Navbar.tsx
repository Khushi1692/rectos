import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import rectosLogo from "@/assets/rectos-brand_small.webp";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-secondary/95 backdrop-blur-md shadow-md py-1" 
        : (isHome ? "bg-transparent py-3" : "bg-secondary/95 backdrop-blur-md py-2")
    }`}>
      <div className="container mx-auto max-w-7xl flex items-center justify-between py-2 px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={rectosLogo} alt="Recto's Pizza" className="h-16 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-lg text-secondary-foreground/90 font-medium">
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
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-white rounded-full px-6" asChild>
            <a href="https://www.ubereats.com/au/store/rectos-pizza/m9zXvT5_X_OfV0w6x_6vGg" target="_blank" rel="noopener noreferrer">Order Now</a>
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
              className={`block py-4 text-xl transition-colors font-medium ${
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
