
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Share2, Heart, MapPin, User, ArrowLeft, Info, Tag, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Sample listing data (we'll use the ID from the URL to "find" the listing)
const LISTING_DETAILS = {
  id: 1,
  title: "Handcrafted Wooden Coffee Table",
  price: "120",
  location: "Downtown",
  category: "Furniture",
  seller: {
    name: "Alex Johnson",
    joinDate: "February 2022",
    rating: 4.8,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  images: [
    "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1604074131665-7a4b13870ab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
  ],
  description: "Beautiful handmade coffee table made from reclaimed oak. Perfect centerpiece for any living room. Each piece is unique with natural wood grain patterns and slight variations that add character.\n\nDimensions: 48\" L x 24\" W x 18\" H\nMaterial: Reclaimed Oak\nFinish: Hand-rubbed natural oil finish that enhances the wood's natural beauty while providing protection.\n\nCan deliver within 10 miles of downtown for an additional fee, or pick up available.",
  listedDate: "May 15, 2023"
};

const ListingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [loaded, setLoaded] = useState(false);
  const [mainImage, setMainImage] = useState(LISTING_DETAILS.images[0]);
  const [isFavorited, setIsFavorited] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
    window.scrollTo(0, 0);
  }, []);

  // In a real app, we would fetch the listing details using the ID
  // For this demo, we'll just use the sample data
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-8">
          <div 
            className={`mb-6 transition-all duration-500 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <Link 
              to="/listings" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to listings
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Image Gallery */}
            <div 
              className={`lg:col-span-2 transition-all duration-700 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <div className="rounded-lg overflow-hidden bg-secondary/20 mb-4">
                <img 
                  src={mainImage} 
                  alt={LISTING_DETAILS.title} 
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {LISTING_DETAILS.images.map((image, index) => (
                  <button
                    key={index}
                    className={`rounded-lg overflow-hidden bg-secondary/20 cursor-pointer transition-all ${
                      mainImage === image ? "ring-2 ring-primary" : "opacity-80 hover:opacity-100"
                    }`}
                    onClick={() => setMainImage(image)}
                  >
                    <img 
                      src={image} 
                      alt={`${LISTING_DETAILS.title} - View ${index + 1}`} 
                      className="w-full h-full object-cover aspect-video"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Listing Details */}
            <div 
              className={`space-y-6 transition-all duration-700 delay-200 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{LISTING_DETAILS.category}</Badge>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => setIsFavorited(!isFavorited)}
                    >
                      <Heart 
                        className={`h-5 w-5 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} 
                      />
                      <span className="sr-only">Favorite</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-5 w-5" />
                      <span className="sr-only">Share</span>
                    </Button>
                  </div>
                </div>
                
                <h1 className="text-2xl font-bold">{LISTING_DETAILS.title}</h1>
                
                <div className="flex items-center mt-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{LISTING_DETAILS.location}</span>
                </div>
                
                <div className="mt-4">
                  <p className="text-3xl font-bold text-primary">{LISTING_DETAILS.price} π</p>
                </div>
              </div>
              
              <Card className="p-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={LISTING_DETAILS.seller.image} 
                      alt={LISTING_DETAILS.seller.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{LISTING_DETAILS.seller.name}</h3>
                    <p className="text-sm text-muted-foreground">Member since {LISTING_DETAILS.seller.joinDate}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Button className="w-full">Contact Seller</Button>
                </div>
              </Card>
              
              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Listed on {LISTING_DETAILS.listedDate}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Item ID: #{LISTING_DETAILS.id}</span>
                </div>
                <div className="flex items-center">
                  <Info className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Safe payment through Pi Network</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div 
            className={`mt-12 transition-all duration-700 delay-300 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-xl font-bold mb-4">Description</h2>
            <div className="prose max-w-none">
              {LISTING_DETAILS.description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-foreground">{paragraph}</p>
              ))}
            </div>
          </div>

          <Separator className="my-12" />

          {/* Similar items (placeholder) */}
          <div 
            className={`transition-all duration-700 delay-400 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-xl font-bold mb-6">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Placeholder cards - in a real app, these would be actual similar listings */}
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="h-48 animate-pulse">
                  <div className="h-full bg-secondary/40 rounded-lg" />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ListingDetail;
