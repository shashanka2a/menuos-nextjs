"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MenuItem {
  id: string;
  name: string;
  image: string;
  category: string;
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

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Rice Bowl",
    image: "https://images.unsplash.com/photo-1636401870585-a8852371e84a?w=800",
    category: "Rice Bowl",
  },
  {
    id: "2",
    name: "Salad Bowl",
    image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800",
    category: "Salad Bowl",
  },
  {
    id: "3",
    name: "Fries Bowl",
    image: "https://images.unsplash.com/photo-1639744210631-209fce3e256c?w=800",
    category: "Fries Bowl",
  },
  {
    id: "4",
    name: "Naanarito",
    image: "https://images.unsplash.com/photo-1667608929017-e5aa9f642be8?w=800",
    category: "Naanarito",
  },
  {
    id: "5",
    name: "Pita Wrap",
    image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=800",
    category: "Pita Wrap",
  },
  {
    id: "6",
    name: "Naanadilla",
    image: "https://images.unsplash.com/photo-1628838233717-be047a0b54fb?w=800",
    category: "Naanadilla",
  },
  {
    id: "7",
    name: "Hummus Bowl",
    image: "https://images.unsplash.com/photo-1683725519288-eab9fa352335?w=800",
    category: "Hummus Bowl",
  },
];

export function MenuScreen({
  onSelectItem,
  cartCount,
  cartTotal,
  onViewCart,
}: MenuScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState("Rice Bowl");

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white pb-24"
    >
      {/* Header */}
      <div className="sticky top-0 bg-white z-10 px-4 pt-6 pb-4 border-b border-gray-100">
        {/* MenuPro Logo */}
        <div className="flex justify-center mb-4">
          <img 
            src="/menupro-logo.svg" 
            alt="MenuPro Logo" 
            className="h-10 w-auto"
          />
        </div>
        
        <h1 className="text-center mb-2 text-[#1C1C1E]">
          Discover Deliciousness 🍛
        </h1>
        <p className="text-center text-[#1C1C1E]/70 mb-4">
          Build your own bowls or wraps — start with a style.
        </p>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1C1C1E]/40" />
          <Input
            placeholder="Search items or filter by allergies"
            className="pl-12 h-12 rounded-full bg-gray-50 border-0"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="overflow-x-auto px-4 py-4 no-scrollbar">
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
                    ? "bg-[#F97316] text-white hover:bg-[#F97316]/90 px-4 py-2 rounded-full cursor-pointer transition-all"
                    : "bg-white text-[#1C1C1E] border-gray-200 px-4 py-2 rounded-full cursor-pointer hover:border-[#F97316] transition-all"
                }
              >
                {category}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div className="px-4 grid grid-cols-2 gap-4">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelectItem(item)}
            className="bg-[#1C1C1E] rounded-2xl overflow-hidden cursor-pointer"
          >
            {/* Circular Image */}
            <div className="aspect-square p-4">
              <div className="w-full h-full rounded-full overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card Content */}
            <div className="px-4 pb-4">
              <h3 className="text-white mb-3 text-sm">{item.name}</h3>
              <Button className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white rounded-full h-9 text-sm">
                View &gt;
              </Button>
            </div>
          </motion.div>
        ))}
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