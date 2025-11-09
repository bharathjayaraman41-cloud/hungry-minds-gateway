import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { menuItems } from "@/data/menuData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Flame, ArrowLeft, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ItemDetail = () => {
  const { id } = useParams();
  const item = menuItems.find(i => i.id === Number(id));

  if (!item) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Item not found</h1>
          <Button asChild>
            <Link to="/menu">Back to Menu</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/menu">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Menu
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full rounded-xl shadow-card aspect-square object-cover"
            />
            {item.isPopular && (
              <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-sm px-3 py-1">
                Popular Choice
              </Badge>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="mb-6">
              <Badge variant="outline" className="capitalize mb-3">
                {item.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
              <div className="flex items-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <ChefHat className="h-5 w-5" />
                  <span>Chef {item.chefName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="h-5 w-5 text-primary" />
                  <span>{item.calories} calories</span>
                </div>
              </div>
              <div className="text-5xl font-bold text-primary mb-6">
                ₹{item.price}
              </div>
            </div>

            {/* Ingredients */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-lg">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {item.ingredients.map((ingredient, index) => (
                    <Badge key={index} variant="secondary">
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button size="lg" className="flex-1 bg-hero-gradient hover:opacity-90">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                Order Now
              </Button>
            </div>

            {/* Nutritional Info */}
            <Card className="mt-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-lg">Nutritional Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Calories</p>
                    <p className="font-semibold">{item.calories} kcal</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-semibold capitalize">{item.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
