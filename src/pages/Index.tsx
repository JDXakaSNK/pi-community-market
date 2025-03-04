
import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import Featured from "@/components/home/Featured";
import Categories from "@/components/home/Categories";
import Community from "@/components/home/Community";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Featured />
        <Categories />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
