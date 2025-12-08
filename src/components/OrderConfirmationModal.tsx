import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OrderConfirmationModal({ isOpen, onClose }: OrderConfirmationModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-scale-in">
        {/* Success Icon */}
        <div className="pt-10 pb-6 flex justify-center">
          <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center animate-bounce-in">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center">
              <i className="fa-solid fa-check text-3xl text-primary-foreground"></i>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 text-center">
          <h2 className="text-2xl font-bold text-card-foreground mb-2">
            Order Confirmed!
          </h2>
          <p className="text-muted-foreground mb-6">
            Thank you for your order! Your delicious food is being prepared and will be delivered to you soon.
          </p>

          {/* Order Details */}
          <div className="bg-secondary/50 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-clock text-primary"></i>
                <span className="text-card-foreground">Est. 25-35 min</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-primary"></i>
                <span className="text-card-foreground">Tracking live</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-glow"
          >
            Continue Browsing
          </button>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-success/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
    </div>
  );
}
