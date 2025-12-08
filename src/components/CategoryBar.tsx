import { categories } from "@/data/menuData";
import { cn } from "@/lib/utils";

interface CategoryBarProps {
  activeCategory: string | null;
  onCategoryChange: (categoryId: string | null) => void;
}

export function CategoryBar({ activeCategory, onCategoryChange }: CategoryBarProps) {
  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border py-4">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {/* All Items */}
          <button
            onClick={() => onCategoryChange(null)}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-200",
              activeCategory === null
                ? "bg-primary text-primary-foreground shadow-glow"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            <i className="fa-solid fa-grip text-base"></i>
            All Items
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-200",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              <i className={`fa-solid ${category.icon} text-base`}></i>
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
