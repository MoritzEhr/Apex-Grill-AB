import { MenuItem } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export function MenuCard({ item, index }: MenuCardProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(item);
    setTimeout(() => setIsAdding(false), 300);
  };

  return (
    <article
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Bestseller Badge */}
        {item.isBestseller && (
          <div className="absolute top-3 left-3 bg-warning text-warning-foreground px-3 py-1 rounded-lg shadow-lg flex items-center gap-1.5 animate-pulse">
            <i className="fa-solid fa-fire text-sm"></i>
            <span className="font-bold text-xs uppercase tracking-wide">Bestseller</span>
          </div>
        )}
        
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-card/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg">
          <span className="font-bold text-primary">{item.price.toFixed(2)}€</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-card-foreground mb-1 line-clamp-1">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 min-h-[40px]">
          {item.description}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
            isAdding
              ? "bg-success text-primary-foreground scale-95"
              : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow"
          }`}
        >
          {isAdding ? (
            <>
              <i className="fa-solid fa-check animate-bounce-in"></i>
              Added!
            </>
          ) : (
            <>
              <i className="fa-solid fa-plus"></i>
              Add to Cart
            </>
          )}
        </button>
      </div>
    </article>
  );
}
