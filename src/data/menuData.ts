export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isBestseller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "appetizers", name: "Appetizers", icon: "fa-french-fries" },
  { id: "doner", name: "Döner", icon: "fa-utensils" },
  { id: "burger", name: "Burger", icon: "fa-burger" },
  { id: "pizza", name: "Pizza", icon: "fa-pizza-slice" },
  { id: "schnitzel", name: "Schnitzel", icon: "fa-drumstick-bite" },
  { id: "vegetarian", name: "Vegetarian", icon: "fa-leaf" },
  { id: "soups", name: "Soups", icon: "fa-bowl-food" },
  { id: "desserts", name: "Desserts", icon: "fa-ice-cream" },
  { id: "drinks", name: "Drinks", icon: "fa-glass-water" },
];

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: "appetizer-1",
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries with garlic aioli dip",
    price: 4.90,
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop",
    category: "appetizers",
  },
  {
    id: "appetizer-2",
    name: "Classic Fries",
    description: "Golden crispy fries with your choice of ketchup or mayo",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
    category: "appetizers",
    isBestseller: true,
  },
  {
    id: "appetizer-3",
    name: "Onion Rings",
    description: "Crispy battered onion rings with BBQ sauce",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop",
    category: "appetizers",
  },
  {
    id: "appetizer-4",
    name: "Chicken Wings",
    description: "Spicy buffalo wings with blue cheese dip (6 pieces)",
    price: 7.90,
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop",
    category: "appetizers",
  },
  {
    id: "appetizer-5",
    name: "Mozzarella Sticks",
    description: "Breaded mozzarella sticks with marinara sauce",
    price: 5.90,
    image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=400&h=300&fit=crop",
    category: "appetizers",
  },

  // Döner
  {
    id: "doner-1",
    name: "Classic Döner Kebab",
    description: "Tender rotating meat, fresh salad, tomatoes, onions, and signature sauce in warm pita bread",
    price: 7.90,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop",
    category: "doner",
    isBestseller: true,
  },
  {
    id: "doner-2",
    name: "Döner Box",
    description: "Döner meat served with crispy fries, fresh salad, and your choice of sauce",
    price: 9.50,
    image: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=400&h=300&fit=crop",
    category: "doner",
  },
  {
    id: "doner-3",
    name: "Döner Plate",
    description: "Generous portion of döner meat with rice, salad, hummus, and warm bread",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop",
    category: "doner",
  },
  {
    id: "doner-4",
    name: "Chicken Döner",
    description: "Marinated chicken döner with garlic sauce, lettuce, and tomatoes",
    price: 8.50,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop",
    category: "doner",
  },

  // Burger
  {
    id: "burger-1",
    name: "Classic Cheeseburger",
    description: "Juicy beef patty, melted cheddar, lettuce, tomato, pickles, and special sauce",
    price: 8.90,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    category: "burger",
    isBestseller: true,
  },
  {
    id: "burger-2",
    name: "BBQ Bacon Burger",
    description: "Beef patty, crispy bacon, BBQ sauce, caramelized onions, and jalapeños",
    price: 11.50,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=300&fit=crop",
    category: "burger",
  },
  {
    id: "burger-3",
    name: "Double Smash Burger",
    description: "Two smashed beef patties, double cheese, pickles, and mustard",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
    category: "burger",
  },
  {
    id: "burger-4",
    name: "Crispy Chicken Burger",
    description: "Crispy fried chicken breast, coleslaw, and honey mustard sauce",
    price: 9.90,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=300&fit=crop",
    category: "burger",
  },

  // Pizza
  {
    id: "pizza-1",
    name: "Margherita",
    description: "Classic tomato sauce, fresh mozzarella, basil, and olive oil",
    price: 10.90,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
    category: "pizza",
  },
  {
    id: "pizza-2",
    name: "Pepperoni Lovers",
    description: "Tomato sauce, mozzarella, and generous pepperoni slices",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop",
    category: "pizza",
    isBestseller: true,
  },
  {
    id: "pizza-3",
    name: "Döner Pizza",
    description: "Our signature döner meat on pizza with garlic sauce and fresh vegetables",
    price: 14.50,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
    category: "pizza",
  },
  {
    id: "pizza-4",
    name: "Four Cheese",
    description: "Mozzarella, gorgonzola, parmesan, and goat cheese on creamy base",
    price: 13.90,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
    category: "pizza",
  },

  // Schnitzel
  {
    id: "schnitzel-1",
    name: "Wiener Schnitzel",
    description: "Classic breaded veal cutlet served with lemon and potato salad",
    price: 14.90,
    image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=400&h=300&fit=crop",
    category: "schnitzel",
  },
  {
    id: "schnitzel-2",
    name: "Jäger Schnitzel",
    description: "Breaded pork cutlet with creamy mushroom sauce and spätzle",
    price: 15.90,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop",
    category: "schnitzel",
  },
  {
    id: "schnitzel-3",
    name: "Chicken Schnitzel",
    description: "Crispy breaded chicken breast with fries and coleslaw",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=400&h=300&fit=crop",
    category: "schnitzel",
  },

  // Vegetarian
  {
    id: "veg-1",
    name: "Falafel Wrap",
    description: "Crispy falafel, hummus, tabbouleh, and tahini in warm flatbread",
    price: 7.90,
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop",
    category: "vegetarian",
  },
  {
    id: "veg-2",
    name: "Veggie Burger",
    description: "Grilled plant-based patty with avocado, sprouts, and chipotle mayo",
    price: 10.50,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop",
    category: "vegetarian",
  },
  {
    id: "veg-3",
    name: "Halloumi Plate",
    description: "Grilled halloumi cheese with Mediterranean salad, olives, and pita",
    price: 11.90,
    image: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=400&h=300&fit=crop",
    category: "vegetarian",
  },
  {
    id: "veg-4",
    name: "Mezze Platter",
    description: "Hummus, baba ganoush, falafel, tabbouleh, and warm pita bread",
    price: 13.90,
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=400&h=300&fit=crop",
    category: "vegetarian",
    isBestseller: true,
  },

  // Soups
  {
    id: "soup-1",
    name: "Lentil Soup",
    description: "Traditional red lentil soup with cumin and fresh lemon",
    price: 5.50,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
    category: "soups",
  },
  {
    id: "soup-2",
    name: "Chicken Noodle Soup",
    description: "Hearty chicken broth with tender chicken, vegetables, and noodles",
    price: 6.50,
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop",
    category: "soups",
  },
  {
    id: "soup-3",
    name: "Tomato Basil Soup",
    description: "Creamy tomato soup with fresh basil and garlic croutons",
    price: 5.90,
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&h=300&fit=crop",
    category: "soups",
  },

  // Desserts
  {
    id: "dessert-1",
    name: "Baklava",
    description: "Traditional Turkish pastry with pistachios and honey",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&h=300&fit=crop",
    category: "desserts",
  },
  {
    id: "dessert-2",
    name: "Künefe",
    description: "Warm cheese dessert with syrup and pistachios",
    price: 5.90,
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=300&fit=crop",
    category: "desserts",
  },
  {
    id: "dessert-3",
    name: "Tiramisu",
    description: "Classic Italian dessert with espresso and mascarpone",
    price: 5.50,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    category: "desserts",
  },
  {
    id: "dessert-4",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center and vanilla ice cream",
    price: 6.50,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop",
    category: "desserts",
    isBestseller: true,
  },
  {
    id: "dessert-5",
    name: "Ice Cream Selection",
    description: "3 scoops of your choice: Vanilla, Chocolate, Strawberry or Pistachio",
    price: 4.00,
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=300&fit=crop",
    category: "desserts",
  },
  {
    id: "dessert-6",
    name: "Sütlaç",
    description: "Turkish rice pudding with cinnamon and rosewater",
    price: 3.90,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    category: "desserts",
  },

  // Drinks
  {
    id: "drink-1",
    name: "Ayran",
    description: "Traditional Turkish yogurt drink, refreshing and cold",
    price: 2.50,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-2",
    name: "Fresh Lemonade",
    description: "Homemade lemonade with fresh mint leaves",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-3",
    name: "Turkish Tea",
    description: "Traditional black tea served in a classic tulip glass",
    price: 2.00,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-4",
    name: "Soft Drinks",
    description: "Coca-Cola, Fanta, Sprite, or sparkling water",
    price: 2.50,
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-5",
    name: "Mango Lassi",
    description: "Creamy mango yogurt drink from India",
    price: 3.90,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-6",
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-7",
    name: "Turkish Coffee",
    description: "Traditionally prepared Turkish mocha",
    price: 2.90,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-8",
    name: "Peach Iced Tea",
    description: "Refreshing homemade iced tea",
    price: 3.00,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-9",
    name: "Mineral Water",
    description: "Still or sparkling (0.5L)",
    price: 2.00,
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-10",
    name: "Apple Spritzer",
    description: "Refreshing apple juice with sparkling water",
    price: 2.90,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-11",
    name: "Energy Drink",
    description: "Red Bull or Monster (250ml)",
    price: 3.50,
    image: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400&h=300&fit=crop",
    category: "drinks",
  },
  {
    id: "drink-12",
    name: "Milkshake",
    description: "Vanilla, Chocolate or Strawberry with whipped cream",
    price: 4.50,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
    category: "drinks",
  },
];
