
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the homepage
  const isHomePage = location.pathname === "/";

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Browse", path: "/listings" },
    { name: "Categories", path: "/categories" },
    { name: "Community", path: "/community" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-display font-bold text-foreground relative"
        >
          <span className="flex items-center gap-2">
            <span className="text-primary">Pi</span>Marketplace
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                location.pathname === link.path
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Favorites</span>
          </Button>
          
          <Button 
            variant="default" 
            size="sm" 
            className="hidden md:flex"
          >
            List an Item
          </Button>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-20 animate-fade-in md:hidden">
          <nav className="container mx-auto px-6 py-8 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-4 text-lg font-medium border-b border-border ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-auto pt-6 flex flex-col space-y-4">
              <Button variant="outline" size="lg" className="w-full justify-start">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
              <Button variant="outline" size="lg" className="w-full justify-start">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Favorites
              </Button>
              <Button variant="default" size="lg" className="w-full">
                List an Item
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
