import { menuItems, categories } from "@/data/menuData";
import { MenuCard } from "./MenuCard";

interface MenuGridProps {
  activeCategory: string | null;
  searchQuery?: string;
}

export function MenuGrid({ activeCategory, searchQuery = "" }: MenuGridProps) {
  // Filter by search query first
  const searchFilteredItems = searchQuery.trim()
    ? menuItems.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : menuItems;

  // Then filter by category
  const filteredItems = activeCategory
    ? searchFilteredItems.filter((item) => item.category === activeCategory)
    : searchFilteredItems;

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || categoryId;
  };

  // If searching, show flat list
  if (searchQuery.trim()) {
    return (
      <section className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Search Results for "{searchQuery}"
          </h2>
          <p className="text-muted-foreground mt-1">
            {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"} found
          </p>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fa-solid fa-search text-3xl text-muted-foreground"></i>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No dishes found</h3>
            <p className="text-muted-foreground">Try a different search term</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>
        )}
      </section>
    );
  }

  // Group items by category when showing all
  const groupedItems = activeCategory
    ? { [activeCategory]: filteredItems }
    : categories.reduce((acc, category) => {
        const items = filteredItems.filter((item) => item.category === category.id);
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
