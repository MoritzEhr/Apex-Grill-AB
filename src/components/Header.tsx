import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";

interface HeaderProps {
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ onCartClick, searchQuery, onSearchChange }: HeaderProps) {
  const { isDark, toggleTheme } = useTheme();
  const { totalItems } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-glow">
            <i className="fa-solid fa-utensils text-primary-foreground text-lg"></i>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-bold text-lg text-foreground leading-tight">City Kebab</h1>
            <p className="text-xs text-muted-foreground">& Grill</p>
          </div>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search dishes..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Search Toggle - Mobile */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-all duration-200"
            aria-label="Toggle search"
          >
            <i className={`fa-solid ${isSearchOpen ? "fa-xmark" : "fa-search"} text-foreground`}></i>
          </button>

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

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3 animate-fade-in">
          <div className="relative w-full">
            <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search dishes..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
