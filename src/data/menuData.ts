export interface MenuItem {
  id: number;
  name: string;
  image: string;
  category: 'beverages' | 'veg' | 'nonveg' | 'snacks';
  price: number;
  chefName: string;
  ingredients: string[];
  calories: number;
  isPopular?: boolean;
}

export const menuItems: MenuItem[] = [
  // Beverages
  {
    id: 1,
    name: "Mango Lassi",
    image: "/src/assets/food/mango-lassi.jpg",
    category: "beverages",
    price: 45,
    chefName: "Mei Wong",
    ingredients: ["Mango", "Yogurt", "Sugar", "Cardamom"],
    calories: 180,
    isPopular: true
  },
  {
    id: 2,
    name: "Filter Coffee",
    image: "/api/placeholder/400/400",
    category: "beverages",
    price: 25,
    chefName: "Arjun Patel",
    ingredients: ["Coffee", "Milk", "Sugar"],
    calories: 90,
    isPopular: true
  },
  {
    id: 3,
    name: "Masala Chai",
    image: "/api/placeholder/400/400",
    category: "beverages",
    price: 20,
    chefName: "Rajesh Singh",
    ingredients: ["Tea", "Milk", "Ginger", "Cardamom", "Cloves"],
    calories: 80
  },
  {
    id: 4,
    name: "Fresh Lime Soda",
    image: "/api/placeholder/400/400",
    category: "beverages",
    price: 30,
    chefName: "Mei Wong",
    ingredients: ["Lime", "Soda", "Sugar", "Salt", "Mint"],
    calories: 60
  },
  {
    id: 5,
    name: "Buttermilk",
    image: "/api/placeholder/400/400",
    category: "beverages",
    price: 20,
    chefName: "Anita Desai",
    ingredients: ["Yogurt", "Water", "Salt", "Curry Leaves", "Cumin"],
    calories: 50
  },
  {
    id: 6,
    name: "Rose Milk",
    image: "/api/placeholder/400/400",
    category: "beverages",
    price: 35,
    chefName: "Mei Wong",
    ingredients: ["Milk", "Rose Syrup", "Sugar"],
    calories: 150
  },
  {
    id: 7,
    name: "Badam Milk",
    image: "/api/placeholder/400/400",
    category: "beverages",
    price: 40,
    chefName: "Arjun Patel",
    ingredients: ["Milk", "Almonds", "Sugar", "Saffron"],
    calories: 200
  },
  {
    id: 8,
    name: "Ginger Tea",
    image: "/api/placeholder/400/400",
    category: "beverages",
    price: 15,
    chefName: "Rajesh Singh",
    ingredients: ["Tea", "Ginger", "Sugar"],
    calories: 40
  },
  {
    id: 9,
    name: "Coconut Water",
    image: "/api/placeholder/400/400",
    category: "beverages",
    price: 30,
    chefName: "Anita Desai",
    ingredients: ["Fresh Coconut Water"],
    calories: 45
  },
  {
    id: 10,
    name: "Lemon Tea",
    image: "/api/placeholder/400/400",
    category: "beverages",
    price: 20,
    chefName: "Xiao Chen",
    ingredients: ["Tea", "Lemon", "Honey"],
    calories: 35
  },

  // Vegetarian
  {
    id: 11,
    name: "Vegetable Biryani",
    image: "/src/assets/food/veg-biryani.jpg",
    category: "veg",
    price: 80,
    chefName: "Lei Zhang",
    ingredients: ["Basmati Rice", "Mixed Vegetables", "Spices", "Yogurt"],
    calories: 420,
    isPopular: true
  },
  {
    id: 12,
    name: "Paneer Tikka",
    image: "/src/assets/food/paneer-tikka.jpg",
    category: "veg",
    price: 120,
    chefName: "Arjun Patel",
    ingredients: ["Paneer", "Bell Peppers", "Yogurt", "Spices"],
    calories: 280,
    isPopular: true
  },
  {
    id: 13,
    name: "Masala Dosa",
    image: "/src/assets/food/masala-dosa.jpg",
    category: "veg",
    price: 60,
    chefName: "Anita Desai",
    ingredients: ["Rice", "Lentils", "Potato", "Spices"],
    calories: 350,
    isPopular: true
  },
  {
    id: 14,
    name: "Chole Bhature",
    image: "/api/placeholder/400/400",
    category: "veg",
    price: 70,
    chefName: "Rajesh Singh",
    ingredients: ["Chickpeas", "Wheat Flour", "Spices", "Onion"],
    calories: 450
  },
  {
    id: 15,
    name: "Palak Paneer",
    image: "/api/placeholder/400/400",
    category: "veg",
    price: 100,
    chefName: "Anita Desai",
    ingredients: ["Spinach", "Paneer", "Cream", "Spices"],
    calories: 320
  },
  {
    id: 16,
    name: "Aloo Paratha",
    image: "/api/placeholder/400/400",
    category: "veg",
    price: 50,
    chefName: "Suresh Kumar",
    ingredients: ["Wheat Flour", "Potato", "Spices", "Butter"],
    calories: 380
  },
  {
    id: 17,
    name: "Veg Fried Rice",
    image: "/api/placeholder/400/400",
    category: "veg",
    price: 85,
    chefName: "Xiao Chen",
    ingredients: ["Rice", "Mixed Vegetables", "Soy Sauce", "Garlic"],
    calories: 340
  },
  {
    id: 18,
    name: "Dal Tadka",
    image: "/api/placeholder/400/400",
    category: "veg",
    price: 70,
    chefName: "Rajesh Singh",
    ingredients: ["Lentils", "Tomato", "Onion", "Spices"],
    calories: 240
  },
  {
    id: 19,
    name: "Pav Bhaji",
    image: "/api/placeholder/400/400",
    category: "veg",
    price: 75,
    chefName: "Arjun Patel",
    ingredients: ["Mixed Vegetables", "Butter", "Pav Bread", "Spices"],
    calories: 410
  },
  {
    id: 20,
    name: "Idli Sambar",
    image: "/api/placeholder/400/400",
    category: "veg",
    price: 45,
    chefName: "Anita Desai",
    ingredients: ["Rice", "Lentils", "Vegetables", "Spices"],
    calories: 280
  },
  {
    id: 21,
    name: "Veg Pulao",
    image: "/api/placeholder/400/400",
    category: "veg",
    price: 70,
    chefName: "Lei Zhang",
    ingredients: ["Basmati Rice", "Mixed Vegetables", "Ghee", "Spices"],
    calories: 320
  },
  {
    id: 22,
    name: "Paneer Butter Masala",
    image: "/api/placeholder/400/400",
    category: "veg",
    price: 110,
    chefName: "Rajesh Singh",
    ingredients: ["Paneer", "Tomato", "Cream", "Butter", "Spices"],
    calories: 380
  },
  {
    id: 23,
    name: "Mushroom Masala",
    image: "/api/placeholder/400/400",
    category: "veg",
    price: 95,
    chefName: "Suresh Kumar",
    ingredients: ["Mushrooms", "Onion", "Tomato", "Cream", "Spices"],
    calories: 260
  },
  {
    id: 24,
    name: "Veg Manchurian",
    image: "/api/placeholder/400/400",
    category: "veg",
    price: 90,
    chefName: "Xiao Chen",
    ingredients: ["Mixed Vegetables", "Cornflour", "Soy Sauce", "Garlic"],
    calories: 310
  },
  {
    id: 25,
    name: "Gobi Paratha",
    image: "/api/placeholder/400/400",
    category: "veg",
    price: 55,
    chefName: "Anita Desai",
    ingredients: ["Wheat Flour", "Cauliflower", "Spices", "Butter"],
    calories: 360
  },

  // Non-Vegetarian
  {
    id: 26,
    name: "Butter Chicken",
    image: "/src/assets/food/butter-chicken.jpg",
    category: "nonveg",
    price: 150,
    chefName: "Rajesh Singh",
    ingredients: ["Chicken", "Butter", "Tomato", "Cream", "Spices"],
    calories: 490,
    isPopular: true
  },
  {
    id: 27,
    name: "Chicken Biryani",
    image: "/api/placeholder/400/400",
    category: "nonveg",
    price: 130,
    chefName: "Lei Zhang",
    ingredients: ["Chicken", "Basmati Rice", "Yogurt", "Spices"],
    calories: 520,
    isPopular: true
  },
  {
    id: 28,
    name: "Fish Fry",
    image: "/api/placeholder/400/400",
    category: "nonveg",
    price: 140,
    chefName: "Suresh Kumar",
    ingredients: ["Fish", "Spices", "Curry Leaves", "Oil"],
    calories: 380
  },
  {
    id: 29,
    name: "Egg Curry",
    image: "/api/placeholder/400/400",
    category: "nonveg",
    price: 80,
    chefName: "Arjun Patel",
    ingredients: ["Eggs", "Onion", "Tomato", "Spices"],
    calories: 310
  },
  {
    id: 30,
    name: "Chicken Tikka",
    image: "/api/placeholder/400/400",
    category: "nonveg",
    price: 160,
    chefName: "Rajesh Singh",
    ingredients: ["Chicken", "Yogurt", "Spices", "Bell Peppers"],
    calories: 340
  },
  {
    id: 31,
    name: "Mutton Curry",
    image: "/api/placeholder/400/400",
    category: "nonveg",
    price: 180,
    chefName: "Suresh Kumar",
    ingredients: ["Mutton", "Onion", "Tomato", "Spices"],
    calories: 560
  },
  {
    id: 32,
    name: "Chicken Fried Rice",
    image: "/api/placeholder/400/400",
    category: "nonveg",
    price: 110,
    chefName: "Xiao Chen",
    ingredients: ["Chicken", "Rice", "Vegetables", "Soy Sauce"],
    calories: 420
  },
  {
    id: 33,
    name: "Prawn Masala",
    image: "/api/placeholder/400/400",
    category: "nonveg",
    price: 200,
    chefName: "Mei Wong",
    ingredients: ["Prawns", "Coconut", "Spices", "Curry Leaves"],
    calories: 380
  },
  {
    id: 34,
    name: "Chicken Kebab",
    image: "/api/placeholder/400/400",
    category: "nonveg",
    price: 145,
    chefName: "Rajesh Singh",
    ingredients: ["Chicken", "Spices", "Yogurt", "Mint"],
    calories: 320
  },
  {
    id: 35,
    name: "Egg Biryani",
    image: "/api/placeholder/400/400",
    category: "nonveg",
    price: 90,
    chefName: "Lei Zhang",
    ingredients: ["Eggs", "Basmati Rice", "Yogurt", "Spices"],
    calories: 440
  },
  {
    id: 36,
    name: "Fish Curry",
    image: "/api/placeholder/400/400",
    category: "nonveg",
    price: 150,
    chefName: "Suresh Kumar",
    ingredients: ["Fish", "Coconut Milk", "Tamarind", "Spices"],
    calories: 360
  },
  {
    id: 37,
    name: "Chicken Chilli",
    image: "/api/placeholder/400/400",
    category: "nonveg",
    price: 135,
    chefName: "Xiao Chen",
    ingredients: ["Chicken", "Bell Peppers", "Soy Sauce", "Chilli"],
    calories: 380
  },
  {
    id: 38,
    name: "Mutton Biryani",
    image: "/api/placeholder/400/400",
    category: "nonveg",
    price: 170,
    chefName: "Lei Zhang",
    ingredients: ["Mutton", "Basmati Rice", "Yogurt", "Spices"],
    calories: 580
  },
  {
    id: 39,
    name: "Chicken Korma",
    image: "/api/placeholder/400/400",
    category: "nonveg",
    price: 155,
    chefName: "Rajesh Singh",
    ingredients: ["Chicken", "Cashews", "Cream", "Spices"],
    calories: 460
  },
  {
    id: 40,
    name: "Egg Omelette",
    image: "/api/placeholder/400/400",
    category: "nonveg",
    price: 40,
    chefName: "Arjun Patel",
    ingredients: ["Eggs", "Onion", "Tomato", "Spices"],
    calories: 180
  },

  // Snacks
  {
    id: 41,
    name: "Samosa",
    image: "/src/assets/food/samosa.jpg",
    category: "snacks",
    price: 30,
    chefName: "Arjun Patel",
    ingredients: ["Potato", "Peas", "Wheat Flour", "Spices"],
    calories: 240,
    isPopular: true
  },
  {
    id: 42,
    name: "Vada Pav",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 35,
    chefName: "Suresh Kumar",
    ingredients: ["Potato", "Pav Bread", "Gram Flour", "Spices"],
    calories: 280
  },
  {
    id: 43,
    name: "Pakora",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 40,
    chefName: "Anita Desai",
    ingredients: ["Gram Flour", "Onion", "Spices", "Oil"],
    calories: 220
  },
  {
    id: 44,
    name: "Spring Roll",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 50,
    chefName: "Xiao Chen",
    ingredients: ["Vegetables", "Wrapper", "Soy Sauce"],
    calories: 200
  },
  {
    id: 45,
    name: "Bread Pakoda",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 35,
    chefName: "Rajesh Singh",
    ingredients: ["Bread", "Potato", "Gram Flour", "Spices"],
    calories: 260
  },
  {
    id: 46,
    name: "Cutlet",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 45,
    chefName: "Mei Wong",
    ingredients: ["Potato", "Vegetables", "Breadcrumbs", "Spices"],
    calories: 230
  },
  {
    id: 47,
    name: "Pani Puri",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 40,
    chefName: "Anita Desai",
    ingredients: ["Semolina", "Potato", "Tamarind", "Mint Water"],
    calories: 180
  },
  {
    id: 48,
    name: "Bhel Puri",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 35,
    chefName: "Suresh Kumar",
    ingredients: ["Puffed Rice", "Sev", "Tamarind", "Vegetables"],
    calories: 160
  },
  {
    id: 49,
    name: "Aloo Bonda",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 30,
    chefName: "Arjun Patel",
    ingredients: ["Potato", "Gram Flour", "Spices", "Curry Leaves"],
    calories: 210
  },
  {
    id: 50,
    name: "Corn Patties",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 50,
    chefName: "Mei Wong",
    ingredients: ["Corn", "Vegetables", "Breadcrumbs", "Spices"],
    calories: 190
  },
  {
    id: 51,
    name: "Cheese Sandwich",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 60,
    chefName: "Xiao Chen",
    ingredients: ["Bread", "Cheese", "Vegetables", "Butter"],
    calories: 320
  },
  {
    id: 52,
    name: "Veg Puff",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 35,
    chefName: "Rajesh Singh",
    ingredients: ["Pastry", "Vegetables", "Spices"],
    calories: 250
  },
  {
    id: 53,
    name: "French Fries",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 50,
    chefName: "Mei Wong",
    ingredients: ["Potato", "Oil", "Salt"],
    calories: 310
  },
  {
    id: 54,
    name: "Paneer Pakora",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 60,
    chefName: "Anita Desai",
    ingredients: ["Paneer", "Gram Flour", "Spices"],
    calories: 280
  },
  {
    id: 55,
    name: "Masala Peanuts",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 25,
    chefName: "Suresh Kumar",
    ingredients: ["Peanuts", "Gram Flour", "Spices"],
    calories: 340
  },
  {
    id: 56,
    name: "Onion Rings",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 55,
    chefName: "Xiao Chen",
    ingredients: ["Onion", "Flour", "Breadcrumbs", "Oil"],
    calories: 270
  },
  {
    id: 57,
    name: "Nachos",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 70,
    chefName: "Mei Wong",
    ingredients: ["Corn Chips", "Cheese", "Salsa", "Jalapenos"],
    calories: 380
  },
  {
    id: 58,
    name: "Chilli Paneer",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 95,
    chefName: "Xiao Chen",
    ingredients: ["Paneer", "Bell Peppers", "Soy Sauce", "Chilli"],
    calories: 320
  },
  {
    id: 59,
    name: "Medu Vada",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 40,
    chefName: "Anita Desai",
    ingredients: ["Lentils", "Curry Leaves", "Spices"],
    calories: 230
  },
  {
    id: 60,
    name: "Potato Wedges",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 55,
    chefName: "Suresh Kumar",
    ingredients: ["Potato", "Herbs", "Spices", "Oil"],
    calories: 290
  },
  {
    id: 61,
    name: "Banana Chips",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 30,
    chefName: "Anita Desai",
    ingredients: ["Banana", "Oil", "Salt"],
    calories: 260
  },
  {
    id: 62,
    name: "Dhokla",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 45,
    chefName: "Arjun Patel",
    ingredients: ["Gram Flour", "Yogurt", "Mustard Seeds", "Spices"],
    calories: 190
  },
  {
    id: 63,
    name: "Kachori",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 35,
    chefName: "Rajesh Singh",
    ingredients: ["Wheat Flour", "Lentils", "Spices"],
    calories: 270
  },
  {
    id: 64,
    name: "Panipuri Shots",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 50,
    chefName: "Suresh Kumar",
    ingredients: ["Semolina", "Spiced Water", "Tamarind", "Potato"],
    calories: 170
  },
  {
    id: 65,
    name: "Mirchi Bajji",
    image: "/api/placeholder/400/400",
    category: "snacks",
    price: 40,
    chefName: "Anita Desai",
    ingredients: ["Green Chilli", "Gram Flour", "Spices"],
    calories: 200
  }
];

export const chefs = [
  "Arjun Patel",
  "Rajesh Singh",
  "Lei Zhang",
  "Xiao Chen",
  "Anita Desai",
  "Mei Wong",
  "Suresh Kumar"
];

export const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'beverages', name: 'Beverages' },
  { id: 'veg', name: 'Vegetarian' },
  { id: 'nonveg', name: 'Non-Vegetarian' },
  { id: 'snacks', name: 'Snacks' }
];
