"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ArrowRight, Search, Droplet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const categories = ["All", "Banaspati Ghee", "Cooking Oils"];

const products = [
  {
    id: 1,
    title: "Sooraj Cooking Oil",
    category: "Cooking Oils",
    image: "/images/product oil.jpeg",
    description: "Premium quality cooking oil refined for purity, lightness, and great taste. Ideal for frying, cooking, and everyday healthy meals.",
    badge: "Premium Quality",
    weight: "3 Litre",
    brand: "Sooraj"
  },
  {
    id: 2,
    title: "Reydhan Banaspati Ghee",
    category: "Banaspati Ghee",
    image: "/images/reydhan ghee.jpeg",
    description: "Pure and authentic banaspati ghee crafted with traditional methods for rich flavor and aroma.",
    badge: "Pure & Authentic",
    weight: "16 kg",
    brand: "Reydhan"
  },
  {
    id: 3,
    title: "Reydhan Cooking Oil",
    category: "Cooking Oils",
    image: "/images/reydhan oil.jpeg",
    description: "Premium cooking oil for everyday use. Complete nourishment for healthy cooking.",
    badge: "Premium Quality",
    weight: "5 L",
    brand: "Reydhan"
  },
  {
    id: 4,
    title: "Sooraj Banaspati Ghee",
    category: "Banaspati Ghee",
    image: "/images/product ghee.jpeg",
    description: "The beginning of taste and quality. Premium banaspati ghee for traditional cooking and baking.",
    badge: "Traditional Quality",
    weight: "1 kg",
    brand: "Sooraj"
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <PageHeader 
        title="Our Product Portfolio" 
        subtitle="Nutrition, purity, and excellence delivered in every pack." 
        backgroundImage="https://images.unsplash.com/photo-1474440692490-2e83ae13ba26?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-full py-3.5 px-8 pl-14 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 text-sm"
              />
              <Search className="absolute left-5 top-3.5 text-gray-400" size={18} />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat 
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-600/20" 
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-amber-200 shadow-sm hover:shadow-xl transition-all duration-400 flex flex-col"
                >
                  {/* Image Section */}
                  <Link href={`/products/${product.id}`} className="relative h-52 overflow-hidden bg-gradient-to-br from-amber-50 to-emerald-50 block">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    ) : null}
                    
                    {/* Fallback content */}
                    <div className={`w-full h-full flex flex-col items-center justify-center p-6 text-center ${product.image ? 'absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity' : ''}`}>
                      <div className={`w-20 h-20 rounded-full bg-white/80 flex items-center justify-center mb-3 shadow-sm`}>
                        <Droplet className="w-10 h-10 text-amber-500" />
                      </div>
                      <h4 className="text-sm font-bold text-gray-700 uppercase tracking-wider">{product.brand}</h4>
                      <p className="text-xs text-gray-500 mt-1">{product.weight}</p>
                    </div>
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-amber-600/90 text-white text-[8px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                        {product.badge}
                      </span>
                    </div>
                  </Link>
                  
                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{product.category}</span>
                        <span className="text-xs font-bold text-gray-400">{product.weight}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Action */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <Link href={`/products/${product.id}`}>
                        <Button variant="outline" size="sm" className="rounded-full border-gray-200 hover:border-amber-500 text-xs px-3 py-1.5 h-auto">
                          Details
                          <ArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform" size={12} />
                        </Button>
                      </Link>
                      <Link href="/contact" className="text-amber-600 font-bold text-[10px] uppercase tracking-wider hover:text-amber-700 transition-colors">
                        Inquiry
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16 text-gray-400 bg-gray-50 rounded-2xl mt-8">
              <p className="text-sm">No products found.</p>
            </div>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}