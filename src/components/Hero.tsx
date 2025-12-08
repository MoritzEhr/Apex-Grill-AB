import heroImage from "@/assets/hero-food.jpg";

export function Hero() {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious döner kebab with fresh vegetables"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-end pb-8 md:pb-12">
        <div className="max-w-xl animate-fade-in">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 bg-success/20 text-success text-sm font-medium rounded-full">
              <i className="fa-solid fa-circle text-[6px] mr-2 animate-pulse"></i>
              Open Now
            </span>
            <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
              <i className="fa-solid fa-bolt mr-1"></i>
              Fast Delivery
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 leading-tight">
            City Kebab
            <span className="text-primary"> & Grill</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-6 max-w-md">
            Fresh ingredients, authentic flavors. From juicy döners to crispy schnitzels – taste the difference!
          </p>

          {/* Rating & Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5 bg-card/80 backdrop-blur px-3 py-2 rounded-lg">
              <i className="fa-solid fa-star text-warning"></i>
              <span className="font-bold text-foreground">4.8</span>
              <span className="text-muted-foreground">(2,847 reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-card/80 backdrop-blur px-3 py-2 rounded-lg">
              <i className="fa-solid fa-clock text-primary"></i>
              <span className="text-foreground">11:00 - 23:00</span>
            </div>
            <div className="flex items-center gap-1.5 bg-card/80 backdrop-blur px-3 py-2 rounded-lg">
              <i className="fa-solid fa-truck text-primary"></i>
              <span className="text-foreground">20-35 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
