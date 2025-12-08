import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

export function CartSidebar({ isOpen, onClose, onCheckout }: CartSidebarProps) {
  const { items, updateQuantity, removeItem, totalPrice, totalItems } = useCart();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-card z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <i className="fa-solid fa-shopping-bag text-primary text-lg"></i>
            </div>
            <div>
              <h2 className="text-xl font-bold text-card-foreground">Your Cart</h2>
              <p className="text-sm text-muted-foreground">{totalItems} items</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
            aria-label="Close cart"
          >
            <i className="fa-solid fa-xmark text-lg text-foreground"></i>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-basket-shopping text-3xl text-muted-foreground"></i>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Your cart is empty</h3>
              <p className="text-sm text-muted-foreground">Add some delicious items to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-secondary/50 rounded-xl p-3 animate-fade-in"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-card-foreground line-clamp-1">{item.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">€{item.price.toFixed(2)}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <i className="fa-solid fa-minus text-xs"></i>
                        </button>
                        <span className="w-8 text-center font-semibold text-card-foreground">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <i className="fa-solid fa-plus text-xs"></i>
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Remove item"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-semibold text-card-foreground">€{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-muted-foreground">Delivery</span>
              <span className="text-success font-medium">Free</span>
            </div>
            <div className="flex items-center justify-between mb-6 pt-4 border-t border-border">
              <span className="text-lg font-bold text-card-foreground">Total</span>
              <span className="text-2xl font-bold text-primary">€{totalPrice.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-glow hover:shadow-lg flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-bag-shopping"></i>
              Order Now
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
