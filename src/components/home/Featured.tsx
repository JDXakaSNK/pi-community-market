
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/Card";

// Sample data for featured listings
const FEATURED_LISTINGS = [
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
  }
];

const Featured = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleCardClick = (id: number) => {
    navigate(`/listing/${id}`);
  };

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div 
            className={`transition-all duration-700 delay-100 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Listings</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover handpicked products and services from your local community that stand out for their quality and value.
            </p>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className={`group mt-4 md:mt-0 transition-all duration-700 delay-300 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            onClick={() => navigate('/listings')}
          >
            View all listings
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_LISTINGS.map((listing, index) => (
            <div 
              key={listing.id}
              className={`transition-all duration-700 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <Card.Listing
                image={listing.image}
                title={listing.title}
                price={listing.price}
                location={listing.location}
                category={listing.category}
                description={listing.description}
                onClick={() => handleCardClick(listing.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
