import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menuData";
import { ArrowRight, Clock, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-canteen.jpg";

const Index = () => {
  const popularItems = menuItems.filter(item => item.isPopular).slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="MEC Canteen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Delicious Meals,
              <span className="block bg-hero-gradient bg-clip-text text-transparent">
                Fresh Daily
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience authentic flavors crafted by our expert chefs. From traditional favorites to modern fusion, we serve happiness on every plate.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-hero-gradient hover:opacity-90" asChild>
                <Link to="/menu">
                  Browse Menu <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-hero-gradient rounded-lg mb-4">
                <Clock className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-2">65+</h3>
              <p className="text-muted-foreground">Menu Items</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-lg mb-4">
                <Users className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-2">7</h3>
              <p className="text-muted-foreground">Expert Chefs</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent rounded-lg mb-4">
                <Award className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-muted-foreground">Fresh Ingredients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Dishes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most loved items, handpicked by students and staff
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {popularItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/menu">
                View Full Menu <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Order?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Skip the line and order ahead. Your favorite meals, ready when you are.
          </p>
          <Button size="lg" variant="secondary" className="font-semibold" asChild>
            <Link to="/menu">Order Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
