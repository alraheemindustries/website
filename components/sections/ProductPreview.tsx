"use client";

import React from "react";
import { motion, TargetAndTransition, Transition } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { animations } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

// TypeScript errors fix karne ke liye safe mapper
const getSafeAnimation = (anim: any) => {
  if (!anim) return {};
  return {
    initial: anim.initial as boolean | TargetAndTransition | string,
    animate: anim.animate as boolean | TargetAndTransition | string,
    transition: anim.transition as Transition,
  };
};

const products = [
  {
    id: 1,
    title: "Premium Banaspati Ghee",
    category: "Banaspati Ghee", // Ye category match honi chahiye catalog wali list se
    image: "/images/product ghee.webp",
  },
  {
    id: 2,
    title: "Cooking Oil",
    category: "Cooking Oils",
    image: "/images/product oil.webp",
  },
  {
    id: 3,
    title: "Industrial Grade Oils",
    category: "B2B Solutions",
    image: "/images/industrial grade.webp",
  },
];

export const ProductPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 w-full max-w-[100vw] overflow-x-hidden block">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col ">
        
        {/* Upper Info Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8 w-full">
          <div className="max-w-2xl w-full">
            <motion.div
              {...getSafeAnimation(animations.fadeIn)}
              className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4 block"
            >
              Our Product Range
            </motion.div>
            
            <motion.h2
              {...getSafeAnimation(animations.slideUp)}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight tracking-tighter mb-6"
            >
              Purity in Every <span className="text-accent">Drop</span>
            </motion.h2>
            
            <motion.p
              {...getSafeAnimation(animations.fadeIn)}
              className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed"
            >
              Explore our diverse portfolio of edible oils and ghee, meticulously refined 
              to meet the highest standards of taste and health.
            </motion.p>
          </div>
          
          <motion.div {...getSafeAnimation(animations.fadeIn)} className="shrink-0">
            <Link href="/products">
              <Button variant="outline" className="group rounded-full px-8 py-4 border-primary/20 hover:border-accent font-bold text-sm">
                View All Categories
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full justify-center">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[380px] md:h-[420px] lg:h-[450px] overflow-hidden rounded-2xl shadow-lg w-full"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 will-change-transform"
                style={{ backgroundImage: `url('${product.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-95 pointer-events-none" />
              
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end transform transition-all duration-500 group-hover:translate-y-[-4px]">
                <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">
                  {product.category}
                </span>
                
                <h3 className="text-xl md:text-2xl font-heading font-black text-white mb-4 tracking-tight leading-snug">
                  {product.title}
                </h3>
                
                <div>
                  {/* Dynamic Link: Ye click hone par products page par category filter laga dega */}
                  <Link 
                    href={`/products?category=${encodeURIComponent(product.category)}`}
                    className="inline-flex items-center text-white/80 font-bold uppercase tracking-widest text-[10px] group-hover:text-accent transition-colors duration-300"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};