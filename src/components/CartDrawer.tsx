import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const UBER_EATS_URL = "https://www.ubereats.com";

const CartDrawer = () => {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, clearCart, totalItems } = useCart();

  const totalPrice = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  const handleOrderNow = () => {
    window.open(UBER_EATS_URL, "_blank");
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-card border-border w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-foreground flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Your Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
            <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground font-medium">Your cart is empty</p>
            <p className="text-muted-foreground/60 text-sm mt-1">Add some delicious items!</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-3 py-4">
              {items.map((item) => (
                <div key={item.name} className="flex gap-3 bg-muted/50 rounded-xl p-3 border border-border">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-foreground font-semibold text-sm truncate">{item.name}</h4>
                    <p className="text-primary font-bold text-sm">{item.price}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                        className="w-7 h-7 rounded-lg bg-border flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-bold text-foreground w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity + 1)}
                        className="w-7 h-7 rounded-lg bg-border flex items-center justify-center hover:bg-primary/20 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.name)} className="text-muted-foreground hover:text-destructive transition-colors self-start">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-3">
              <div className="flex justify-between text-foreground font-bold text-lg">
                <span>Total</span>
                <span className="text-primary">${totalPrice.toFixed(2)}</span>
              </div>
              <Button variant="hero" className="w-full gap-2" size="lg" onClick={handleOrderNow}>
                Order Now on Uber Eats
              </Button>
              <button onClick={clearCart} className="w-full text-center text-sm text-muted-foreground hover:text-destructive transition-colors">
                Clear Cart
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
