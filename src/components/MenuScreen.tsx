"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MenuItem {
  id: string;
  name: string;
  image: string;
  category: string;
  allergies: string[];
}

interface MenuScreenProps {
  onSelectItem: (item: MenuItem) => void;
  cartCount: number;
  cartTotal: number;
  onViewCart: () => void;
}

const categories = [
  "Rice Bowl",
  "Salad Bowl",
  "Fries Bowl",
  "Naanarito",
  "Pita Wrap",
  "Naanadilla",
  "Hummus Bowl",
];

const allergyOptions = [
  "Gluten-Free",
  "Dairy-Free",
  "Nut-Free",
  "Vegan",
  "Vegetarian",
  "Soy-Free",
];

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Rice Bowl",
    image: "/ricebowl.png",
    category: "Rice Bowl",
    allergies: ["Gluten-Free", "Vegan", "Vegetarian"],
  },
  {
    id: "2",
    name: "Salad Bowl",
    image: "/saladbowl.png",
    category: "Salad Bowl",
    allergies: ["Gluten-Free", "Vegan", "Vegetarian"],
  },
  {
    id: "3",
    name: "Fries Bowl",
    image: "/friesbowl.png",
    category: "Fries Bowl",
    allergies: ["Vegetarian"],
  },
  {
    id: "4",
    name: "Naanarito",
    image: "/naanarito.png",
    category: "Naanarito",
    allergies: ["Vegetarian"],
  },
  {
    id: "5",
    name: "Pita Wrap",
    image: "/pitawrap.png",
    category: "Pita Wrap",
    allergies: ["Vegetarian"],
  },
  {
    id: "6",
    name: "Naanadilla",
    image: "/naanadilla.png",
    category: "Naanadilla",
    allergies: ["Vegetarian"],
  },
  {
    id: "7",
    name: "Hummus Bowl",
    image: "/hummus.png",
    category: "Hummus Bowl",
    allergies: ["Gluten-Free", "Vegan", "Vegetarian", "Nut-Free"],
  },
];

export function MenuScreen({
  onSelectItem,
  cartCount,
  cartTotal,
  onViewCart,
}: MenuScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState("Rice Bowl");
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);

  // Toggle allergy filter
  const toggleAllergyFilter = (allergy: string) => {
    setSelectedAllergies(prev => 
      prev.includes(allergy) 
        ? prev.filter(a => a !== allergy)
        : [...prev, allergy]
    );
  };

  // Filter menu items based on selected category and allergies
  const filteredMenuItems = menuItems.filter(item => {
    const categoryMatch = item.category === selectedCategory;
    const allergyMatch = selectedAllergies.length === 0 || 
      selectedAllergies.some(allergy => item.allergies.includes(allergy));
    return categoryMatch && allergyMatch;
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white pb-24"
    >
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 px-4 pt-4 sm:pt-6 pb-4 border-b border-gray-100">
        {/* MenuPro Logo */}
        <div className="flex justify-center mb-3 sm:mb-4">
          <img 
            src="/menupro-logo.svg" 
            alt="MenuPro Logo" 
            className="h-8 sm:h-10 w-auto"
          />
        </div>
        
        <h1 className="text-center mb-2 text-[#1C1C1E] text-lg sm:text-xl font-semibold">
          Discover Deliciousness 🍛
        </h1>
        <p className="text-center text-[#1C1C1E]/70 mb-4 text-sm sm:text-base">
          Build your own bowls or wraps — start with a style.
        </p>

        {/* Allergy Filters */}
        <div className="space-y-3">
          <h3 className="text-xs sm:text-sm font-medium text-[#1C1C1E]">Filter by Allergies</h3>
          <div className="flex flex-wrap gap-2">
            {allergyOptions.map((allergy) => (
              <button
                key={allergy}
                onClick={() => toggleAllergyFilter(allergy)}
                className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all ${
                  selectedAllergies.includes(allergy)
                    ? "bg-red-100 text-red-700 border-2 border-red-200"
                    : "bg-gray-100 text-gray-700 border-2 border-gray-200 hover:border-red-300"
                }`}
              >
                {allergy}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="overflow-x-auto px-4 py-3 sm:py-4 no-scrollbar">
        <div className="flex gap-2 min-w-max">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Badge
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-[#F97316] text-white hover:bg-[#F97316]/90 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer transition-all text-xs sm:text-sm font-medium"
                    : "bg-white text-[#1C1C1E] border-gray-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full cursor-pointer hover:border-[#F97316] transition-all text-xs sm:text-sm font-medium"
                }
              >
                {category}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="px-4 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {filteredMenuItems.map((item, index) => (
          <motion.div
            key={`${item.id}-${selectedCategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelectItem(item)}
            className="bg-[#1C1C1E] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Circular Image */}
            <div className="aspect-square p-4 sm:p-6">
              <div className="w-full h-full rounded-full overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="px-4 pb-4 sm:px-6">
              <h3 className="text-white mb-3 text-sm sm:text-base font-medium">{item.name}</h3>
              <Button className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white rounded-full h-9 sm:h-10 text-sm font-medium transition-all duration-200">
                View &gt;
              </Button>
            </div>
          </motion.div>
        ))}
        </AnimatePresence>
        </div>
      </div>

      {/* Floating Cart Button */}
      {cartCount > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-6 right-6 z-20"
        >
          <Button
            onClick={onViewCart}
            className="bg-[#F97316] hover:bg-[#F97316]/90 text-white rounded-full h-16 px-6 shadow-lg"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            <span className="mr-2">{cartCount}</span>
            <span>${cartTotal.toFixed(2)}</span>
          </Button>
        </motion.div>
      )}

    </motion.div>
  );
}