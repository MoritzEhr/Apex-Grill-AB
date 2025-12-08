import { menuItems, categories } from "@/data/menuData";
import { MenuCard } from "./MenuCard";

interface MenuGridProps {
  activeCategory: string | null;
}

export function MenuGrid({ activeCategory }: MenuGridProps) {
  const filteredItems = activeCategory
    ? menuItems.filter((item) => item.category === activeCategory)
    : menuItems;

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || categoryId;
  };

  // Group items by category when showing all
  const groupedItems = activeCategory
    ? { [activeCategory]: filteredItems }
    : categories.reduce((acc, category) => {
        const items = menuItems.filter((item) => item.category === category.id);
        if (items.length > 0) {
          acc[category.id] = items;
        }
        return acc;
      }, {} as Record<string, typeof menuItems>);

  return (
    <section className="container mx-auto px-4 py-8">
      {Object.entries(groupedItems).map(([categoryId, items]) => (
        <div key={categoryId} id={categoryId} className="mb-12 last:mb-0">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {getCategoryName(categoryId)}
            </h2>
            <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
              {items.length} items
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
