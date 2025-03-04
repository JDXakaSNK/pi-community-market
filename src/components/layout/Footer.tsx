
import { Link } from "react-router-dom";
import { ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-12 bg-secondary/50">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link to="/" className="text-xl font-display font-bold inline-flex">
            <span className="text-primary">Pi</span>Marketplace
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            Your local community marketplace powered by Pi Network. 
            Discover products and services from people in your area.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Marketplace
          </h3>
          <ul className="space-y-3">
            {["All Items", "Featured", "Recent", "Popular"].map((item) => (
              <li key={item}>
                <Link 
                  to="#" 
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Community
          </h3>
          <ul className="space-y-3">
            {["Events", "Meet-ups", "Discussions", "Help Center"].map((item) => (
              <li key={item}>
                <Link 
                  to="#" 
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Legal
          </h3>
          <ul className="space-y-3">
            {["Terms of Service", "Privacy Policy", "Cookie Policy", "Contact Us"].map((item) => (
              <li key={item}>
                <Link 
                  to="#" 
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {year} PiMarketplace. All rights reserved.
        </p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <span className="text-xs text-muted-foreground">Made with</span>
          <Heart className="h-3 w-3 text-primary animate-pulse-soft" />
          <span className="text-xs text-muted-foreground">for the Pi Network community</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
