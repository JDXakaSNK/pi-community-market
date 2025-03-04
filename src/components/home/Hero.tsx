
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, ChevronRight } from "lucide-react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-0 transition-opacity duration-1000 ${
            loaded ? "opacity-100" : ""
          }`}
        />
        
        {/* Abstract shapes */}
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-100 rounded-full filter blur-[120px] opacity-40" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100 rounded-full filter blur-[100px] opacity-30" />
      </div>

      <div 
        className={`container mx-auto px-6 relative z-10 transform transition-all duration-700 delay-100 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="max-w-4xl">
          <span className="inline-block px-3 py-1 bg-secondary text-foreground text-sm font-medium rounded-full mb-6 animate-fade-in">
            Local Community Marketplace
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight mb-6 text-balance">
            Discover Local Products & Services in Your Community
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl text-balance">
            Browse, buy, sell and exchange goods and services with people in your area 
            using <span className="text-primary font-medium">Pi Network</span> cryptocurrency.
          </p>

          <div className="relative max-w-xl">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-muted-foreground" />
            </div>
            <input
              type="search"
              className="block w-full p-4 pl-10 text-sm text-foreground border border-border rounded-lg bg-background/50 backdrop-blur-xs focus:ring-primary focus:border-primary transition-all"
              placeholder="What are you looking for today?"
            />
            <Button 
              className="absolute right-2.5 bottom-2.5"
            >
              Search
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 items-center">
            <Button 
              variant="outline" 
              className="group"
            >
              Browse Categories
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="ghost"
              className="group"
            >
              Community Events
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div 
        className={`absolute bottom-12 left-0 right-0 transition-all duration-1000 delay-500 ${
          loaded ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="glass-effect rounded-xl py-6 px-8 flex flex-wrap justify-around gap-8">
            {[
              { label: "Active Listings", value: "2,500+" },
              { label: "Community Members", value: "10,000+" },
              { label: "Successful Exchanges", value: "8,750+" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
