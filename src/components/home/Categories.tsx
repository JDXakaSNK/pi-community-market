
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

type Category = {
  id: number;
  name: string;
  icon: string;
  count: number;
  background: string;
};

const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Electronics",
    icon: "https://cdn-icons-png.flaticon.com/256/3659/3659898.png",
    count: 256,
    background: "bg-blue-50"
  },
  {
    id: 2,
    name: "Home & Garden",
    icon: "https://cdn-icons-png.flaticon.com/256/1830/1830881.png",
    count: 189,
    background: "bg-green-50"
  },
  {
    id: 3,
    name: "Services",
    icon: "https://cdn-icons-png.flaticon.com/256/10643/10643203.png",
    count: 310,
    background: "bg-purple-50"
  },
  {
    id: 4,
    name: "Vehicles",
    icon: "https://cdn-icons-png.flaticon.com/256/3097/3097137.png",
    count: 87,
    background: "bg-red-50"
  },
  {
    id: 5,
    name: "Fashion",
    icon: "https://cdn-icons-png.flaticon.com/256/7593/7593374.png",
    count: 215,
    background: "bg-yellow-50"
  },
  {
    id: 6,
    name: "Real Estate",
    icon: "https://cdn-icons-png.flaticon.com/256/1373/1373296.png",
    count: 64,
    background: "bg-orange-50"
  },
  {
    id: 7,
    name: "Jobs",
    icon: "https://cdn-icons-png.flaticon.com/256/3662/3662817.png",
    count: 129,
    background: "bg-teal-50"
  },
  {
    id: 8,
    name: "Community",
    icon: "https://cdn-icons-png.flaticon.com/256/8722/8722201.png",
    count: 173,
    background: "bg-pink-50"
  }
];

const Categories = () => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div 
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 delay-100 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Browse Categories</h2>
          <p className="text-muted-foreground">
            Explore a wide range of products and services available in your local community,
            neatly organized into categories for easy discovery.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              className={`transition-all duration-700 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <button
                onClick={() => navigate(`/categories/${category.id}`)}
                className={cn(
                  "w-full h-full flex flex-col items-center justify-center p-6 rounded-xl border border-transparent",
                  "transition-all duration-300 hover:shadow-md hover:border-border",
                  category.background
                )}
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="font-medium text-lg mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} listings</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
