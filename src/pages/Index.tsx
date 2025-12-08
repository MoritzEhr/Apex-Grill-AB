import { useState } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider, useCart } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryBar } from "@/components/CategoryBar";
import { MenuGrid } from "@/components/MenuGrid";
import { CartSidebar } from "@/components/CartSidebar";
import { OrderConfirmationModal } from "@/components/OrderConfirmationModal";
import { Footer } from "@/components/Footer";

function IndexContent() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);
  const { clearCart } = useCart();

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsOrderConfirmed(true);
    clearCart();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCartClick={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        <CategoryBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <MenuGrid activeCategory={activeCategory} />
      </main>

      <Footer />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <OrderConfirmationModal
        isOpen={isOrderConfirmed}
        onClose={() => setIsOrderConfirmed(false)}
      />
    </div>
  );
}

const Index = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <IndexContent />
      </CartProvider>
    </ThemeProvider>
  );
};

export default Index;
