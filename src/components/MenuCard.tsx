import { MenuItem } from "@/data/menuData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChefHat, Flame } from "lucide-react";
import { Link } from "react-router-dom";

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard = ({ item }: MenuCardProps) => {
  return (
    <Link to={`/item/${item.id}`}>
      <Card className="group overflow-hidden hover:shadow-card-hover transition-all duration-300 cursor-pointer h-full">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {item.isPopular && (
            <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
              Popular
            </Badge>
          )}
          <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1">
            <Flame className="h-3 w-3 text-primary" />
            <span className="text-xs font-medium">{item.calories} cal</span>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
            {item.name}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <ChefHat className="h-3 w-3" />
            <span>{item.chefName}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-primary">₹{item.price}</span>
            <Badge variant="outline" className="capitalize">
              {item.category}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MenuCard;
