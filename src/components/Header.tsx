import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  onCartClick: () => void;
}

export function Header({ onCartClick }: HeaderProps) {
  const { isDark, toggleTheme } = useTheme();
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-glow">
            <i className="fa-solid fa-utensils text-primary-foreground text-lg"></i>
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground leading-tight">City Kebab</h1>
            <p className="text-xs text-muted-foreground">& Grill</p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-all duration-200 hover:scale-105"
            aria-label="Toggle theme"
          >
            <i className={`fa-solid ${isDark ? "fa-sun text-warning" : "fa-moon text-foreground"} text-lg`}></i>
          </button>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative w-10 h-10 rounded-xl bg-primary hover:bg-primary/90 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-glow"
            aria-label="Open cart"
          >
            <i className="fa-solid fa-shopping-bag text-primary-foreground text-lg"></i>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive text-destructive-foreground text-xs font-bold rounded-full flex items-center justify-center animate-bounce-in">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
