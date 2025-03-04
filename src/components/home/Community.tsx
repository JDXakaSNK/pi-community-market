
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample data for community events
const COMMUNITY_EVENTS = [
  {
    id: 1,
    title: "Pi Network Meetup",
    date: "June 15, 2023",
    time: "6:00 PM - 8:00 PM",
    location: "Community Center",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    attendees: 42
  },
  {
    id: 2,
    title: "Local Makers Market",
    date: "June 18, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Town Square",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    attendees: 86
  },
  {
    id: 3,
    title: "Pi Entrepreneur Workshop",
    date: "June 24, 2023",
    time: "1:00 PM - 3:00 PM",
    location: "Innovation Hub",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    attendees: 28
  }
];

const Community = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div 
            className={`transition-all duration-700 delay-100 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">Community Events</h2>
            <p className="text-muted-foreground max-w-2xl">
              Connect with other Pi Network enthusiasts at local events and build stronger community relationships.
            </p>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className={`group mt-4 md:mt-0 transition-all duration-700 delay-300 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            See all events
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMMUNITY_EVENTS.map((event, index) => (
            <Card 
              key={event.id}
              className={`overflow-hidden group cursor-pointer transition-all duration-700 hover:shadow-md ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <Badge 
                  className="absolute top-3 right-3 bg-primary"
                >
                  Upcoming
                </Badge>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-3">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {event.date} • {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {event.attendees} attending
                  </div>
                </div>
                
                <Button className="w-full">
                  RSVP
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
