export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-glow">
                <i className="fa-solid fa-utensils text-primary-foreground text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-xl text-card-foreground">City Kebab</h3>
                <p className="text-sm text-muted-foreground">& Grill</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Serving the freshest and most delicious döner, burgers, pizza, and more since 2010. Quality ingredients, authentic recipes.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-card-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-primary"></i>
                Hauptstraße 123, 10115 Berlin
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-primary"></i>
                +49 30 1234567
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-primary"></i>
                info@citykebab.de
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-card-foreground mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-card-foreground">11:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-card-foreground">11:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-card-foreground">12:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 City Kebab & Grill. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
