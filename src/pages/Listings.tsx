
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Sample data (reusing from Featured component)
const ALL_LISTINGS = [
  {
    id: 1,
    title: "Handcrafted Wooden Coffee Table",
    price: "120",
    location: "Downtown",
    category: "Furniture",
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Beautiful handmade coffee table made from reclaimed oak. Perfect centerpiece for any living room."
  },
  {
    id: 2,
    title: "Professional Photography Services",
    price: "75",
    location: "City Center",
    category: "Services",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Professional photography services for events, portraits, and product photography. High-quality results guaranteed."
  },
  {
    id: 3,
    title: "Organic Vegetable Basket",
    price: "30",
    location: "Farmer's Market",
    category: "Food",
    image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Fresh organic vegetables from my garden. Includes seasonal produce harvested the same day."
  },
  {
    id: 4,
    title: "Vintage Leather Messenger Bag",
    price: "85",
    location: "Old Town",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Genuine leather messenger bag in excellent condition. Multiple compartments and adjustable strap."
  },
  {
    id: 5,
    title: "iPhone 12 Pro Max - Like New",
    price: "550",
    location: "Tech District",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "iPhone 12 Pro Max in excellent condition. 256GB storage, Pacific Blue color. Includes original box and accessories."
  },
  {
    id: 6,
    title: "Homemade Sourdough Bread",
    price: "8",
    location: "Baker Street",
    category: "Food",
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Freshly baked sourdough bread using traditional methods. Crispy crust and soft interior. Made with organic flour."
  },
  {
    id: 7,
    title: "Tutoring Services - Math & Science",
    price: "25",
    location: "University Area",
    category: "Services",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Experienced tutor offering sessions in mathematics and sciences. Individual or group sessions available."
  },
  {
    id: 8,
    title: "Mountain Bike - Trek Marlin 7",
    price: "450",
    location: "Sports Center",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Trek Marlin 7 mountain bike in great condition. Size medium, hydraulic disc brakes, front suspension. Perfect for trails."
  }
];

const Listings = () => {
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  const handleCardClick = (id: number) => {
    navigate(`/listing/${id}`);
  };

  const filteredListings = ALL_LISTINGS.filter(listing => 
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-12">
          <div 
            className={`transition-all duration-500 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-3xl font-bold mb-8">Browse Listings</h1>
          </div>

          <div 
            className={`mb-8 transition-all duration-500 delay-100 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search listings..."
                  className="w-full pl-10 py-2 border border-border rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                
                <Button variant="outline" className="flex items-center gap-2">
                  Sort by
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div 
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-500 delay-200 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {filteredListings.map((listing) => (
              <Card.Listing
                key={listing.id}
                image={listing.image}
                title={listing.title}
                price={listing.price}
                location={listing.location}
                category={listing.category}
                description={listing.description}
                onClick={() => handleCardClick(listing.id)}
                className="h-full"
              />
            ))}
          </div>

          {filteredListings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No listings found matching your search.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Listings;
