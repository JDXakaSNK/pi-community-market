
import { ReactNode } from 'react';
import { Card as ShadcnCard, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

interface CardProps {
  className?: string;
  children: ReactNode;
  glassEffect?: boolean;
}

const Card = ({ className, children, glassEffect = false }: CardProps) => {
  return (
    <ShadcnCard className={cn(
      "overflow-hidden transition-all duration-300 hover:shadow-md", 
      glassEffect && "glass-effect bg-opacity-70 border border-white/20 backdrop-blur-md",
      className
    )}>
      {children}
    </ShadcnCard>
  );
};

interface ListingCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  category: string;
  description?: string;
  className?: string;
  glassEffect?: boolean;
  onClick?: () => void;
}

const ListingCard = ({
  image,
  title,
  price,
  location,
  category,
  description,
  className,
  glassEffect = false,
  onClick
}: ListingCardProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden group cursor-pointer", 
        glassEffect && "glass-effect",
        className
      )}
      glassEffect={glassEffect}
    >
      <div className="relative aspect-[4/3] overflow-hidden" onClick={onClick}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <button 
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full hover:bg-white/100 transition-all"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Added to wishlist:", title);
          }}
        >
          <Heart className="h-4 w-4 text-gray-600 hover:text-rose-500 transition-colors" />
        </button>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
          {category}
        </div>
      </div>
      <CardHeader className="p-4 pb-2" onClick={onClick}>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium line-clamp-1">{title}</CardTitle>
          <div className="text-base font-semibold text-primary">{price} π</div>
        </div>
        <CardDescription className="text-sm text-muted-foreground">
          {location}
        </CardDescription>
      </CardHeader>
      {description && (
        <CardContent className="p-4 pt-0" onClick={onClick}>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </CardContent>
      )}
      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="text-xs text-muted-foreground">Listed 2 days ago</div>
      </CardFooter>
    </Card>
  );
};

Card.Listing = ListingCard;

export { Card };
