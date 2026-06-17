"use client";

import React from "react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  { 
    src: "/images/products.webp",  
    cols: "md:col-span-2", 
    rows: "md:row-span-2" 
  },
  { 
    src: "/images/gallery2.webp", 
    cols: "md:col-span-1", 
    rows: "md:row-span-1" 
  },
  { 
    src: "/images/ManufacturingProcess4.webp",
    cols: "md:col-span-1", 
    rows: "md:row-span-1" 
  },
  { 
    src: "/images/gallery4.webp",
    cols: "md:col-span-1", 
    rows: "md:row-span-2" 
  },
  { 
    src: "/images/gallery5.webp", 
    cols: "md:col-span-2", 
    rows: "md:row-span-1" 
  },
  { 
    src: "/images/gallery6.webp",
    cols: "md:col-span-1", 
    rows: "md:row-span-1" 
  },
  { 
    src: "/images/gllery7.webp", 
  
    cols: "md:col-span-1", 
    rows: "md:row-span-1" 
  },
];

export default function Gallery() {
  return (
    <>
       <PageHeader 
        title="Visual Journey" 
        subtitle="Inside our world-class facilities and engineering marvels."
        backgroundImage="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop"  // ✅ Background image
      />
      
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[300px]">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-2xl shadow-lg ${img.cols} ${img.rows}`}
              >
                <Image 
                  src={img.src} 
                  alt={"Gallery Image"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
                  <div>

                    <p className="text-amber-400 text-[10px] font-bold uppercase tracking-widest">Al Raheem Industries</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm max-w-2xl mx-auto italic">
              &quot;Witness the precision and scale of our operations. These visuals represent our commitment 
              to industrial excellence and technological advancement.&quot;
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}