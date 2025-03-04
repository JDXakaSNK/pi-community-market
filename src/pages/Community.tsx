
import { useState, useEffect } from "react";
import { Calendar, MapPin, Users, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Sample data for community events (expanded from home/Community)
const COMMUNITY_EVENTS = [
  {
    id: 1,
    title: "Pi Network Meetup",
    date: "June 15, 2023",
    time: "6:00 PM - 8:00 PM",
    location: "Community Center",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    attendees: 42,
    description: "Join us for our monthly Pi Network meetup! We'll discuss the latest developments in the Pi ecosystem, share tips for using the platform, and network with other Pi enthusiasts. Refreshments will be provided."
  },
  {
    id: 2,
    title: "Local Makers Market",
    date: "June 18, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Town Square",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    attendees: 86,
    description: "Discover unique handmade products from local artisans and makers. Browse a wide selection of crafts, art, food, and more. Special section for Pi Network merchants with exclusive deals for Pi users."
  },
  {
    id: 3,
    title: "Pi Entrepreneur Workshop",
    date: "June 24, 2023",
    time: "1:00 PM - 3:00 PM",
    location: "Innovation Hub",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    attendees: 28,
    description: "Learn how to start and grow your business using Pi Network. This hands-on workshop will cover setting up your Pi merchant account, marketing strategies, and best practices for accepting Pi payments."
  },
  {
    id: 4,
    title: "Community Clean-up Day",
    date: "July 2, 2023",
    time: "9:00 AM - 12:00 PM",
    location: "Riverside Park",
    image: "https://images.unsplash.com/photo-1558618666-fcd25a3b6e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    attendees: 15,
    description: "Join us in keeping our community beautiful! We'll be cleaning up Riverside Park and the surrounding areas. All supplies will be provided. Pi rewards available for participants through our community fund."
  },
  {
    id: 5,
    title: "Pi Network: Beyond the Basics",
    date: "July 8, 2023",
    time: "5:30 PM - 7:30 PM",
    location: "Public Library, Meeting Room A",
    image: "https://images.unsplash.com/photo-1594750156278-5637097a4178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    attendees: 34,
    description: "An advanced workshop for Pi Network users who want to go beyond the basics. Topics include security best practices, upcoming features, and advanced trading strategies."
  },
  {
    id: 6,
    title: "Summer Block Party",
    date: "July 15, 2023",
    time: "3:00 PM - 8:00 PM",
    location: "Oak Street Community Center",
    image: "https://images.unsplash.com/photo-1546984575-757f4f7c13cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    attendees: 120,
    description: "The biggest community event of the summer! Join us for food, music, games, and fun for all ages. Special Pi Network exchange booth where you can trade goods and services with other community members."
  }
];

// Sample forum discussions
const FORUM_DISCUSSIONS = [
  {
    id: 1,
    title: "Best practices for Pi merchants",
    author: "JaneDoe",
    replies: 28,
    views: 342,
    lastActivity: "2 hours ago"
  },
  {
    id: 2,
    title: "Monthly community achievements thread",
    author: "PiEnthusiast",
    replies: 56,
    views: 890,
    lastActivity: "Yesterday"
  },
  {
    id: 3,
    title: "Help needed: Setting up a Pi marketplace booth",
    author: "NewSeller23",
    replies: 12,
    views: 145,
    lastActivity: "3 days ago"
  },
  {
    id: 4,
    title: "Upcoming Pi Network features discussion",
    author: "TechGuru",
    replies: 87,
    views: 1203,
    lastActivity: "1 week ago"
  }
];

const Community = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-6 py-12">
          <div 
            className={`mb-10 transition-all duration-500 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h1 className="text-3xl font-bold mb-4">Community</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Connect with other Pi Network users in your local area. 
              Attend events, join discussions, and build relationships within the community.
            </p>
          </div>

          {/* Upcoming Events */}
          <div 
            className={`mb-16 transition-all duration-500 delay-100 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMMUNITY_EVENTS.slice(0, 3).map((event) => (
                <Card 
                  key={event.id}
                  className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-md"
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
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
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
            
            <div className="mt-6 text-center">
              <Button variant="outline" className="group">
                View all events 
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Forum Discussions */}
          <div 
            className={`mb-16 transition-all duration-500 delay-200 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Community Forum</h2>
              <Button variant="outline" size="sm">
                New Topic
              </Button>
            </div>
            
            <Card>
              <div className="divide-y">
                {FORUM_DISCUSSIONS.map((discussion) => (
                  <div 
                    key={discussion.id}
                    className="p-4 hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium hover:text-primary transition-colors">
                          {discussion.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Started by {discussion.author}
                        </p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>{discussion.replies} replies</div>
                        <div>{discussion.views} views</div>
                        <div className="text-xs mt-1">Last activity: {discussion.lastActivity}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <div className="mt-6 text-center">
              <Button variant="outline" className="group">
                Browse all topics
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Join the community CTA */}
          <div 
            className={`glass-effect rounded-xl p-8 text-center max-w-3xl mx-auto transition-all duration-500 delay-300 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">Be Part of Our Community</h2>
            <p className="text-muted-foreground mb-6">
              Join our vibrant Pi Network community today. Connect with like-minded people, 
              discover local products and services, and help grow the ecosystem in our area.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button>
                Sign Up
              </Button>
              <Button variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
