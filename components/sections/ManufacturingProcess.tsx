"use client";

import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/lib/utils";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Raw Material Selection",
    description: "We source premium quality seeds and crude oils from globally certified sustainable farms.",
    image: "/images/ManufacturingProcess1.webp",
  },
  {
    number: "02",
    title: "Multi-Stage Refining",
    description: "Using advanced physical refining to remove impurities while preserving natural nutrients and aroma.",
    image: "/images/ManufacturingProcess2.webp",
  },
  {
    number: "03",
    title: "Fractionation & Blending",
    description: "Precision temperature control and blending to achieve the perfect consistency for Banaspati and Oils.",
    image: "/images/ManufacturingProcess3.webp",
  },
  {
    number: "04",
    title: "Hygienic Packaging",
    description: "Automated, zero-touch packaging in a controlled environment to ensure zero contamination.",
    image: "/images/ManufacturingProcess4.webp",
  },
];

export const ManufacturingProcess = () => {
  return (
    <section className="py-32 bg-primary text-white overflow-hidden relative">
      {/* Background patterns retained from original blueprint */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/[0.03] -skew-x-12 transform translate-x-20 pointer-events-none" />
      
      {/* Structural Fluid Container to match layout bounds */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            {...animations.fadeIn}
            className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-4"
          >
            The Refining Journey
          </motion.div>
          <motion.h2
            {...animations.slideUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-8 leading-tight tracking-tighter"
          >
            From Seed to <span className="text-accent">Table</span>
          </motion.h2>
          <motion.p
            {...animations.fadeIn}
            className="text-white/50 text-lg leading-relaxed"
          >
            Our systematic refining process ensures that every drop of Al Raheem oil 
            is pure, healthy, and high-performing.
          </motion.p>
        </div>

        {/* Steps Horizontal/Vertical Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group flex flex-col justify-between"
            >
              {/* Desktop connected route tracks */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-28 left-[80%] w-full h-[1px] bg-white/5 z-0" />
              )}
              
              <div className="relative z-10 w-full">
                {/* 📸 IMAGE CONTAINER WITH CORNER HOVER EFFECTS */}
                <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative border border-white/5 bg-white/[0.02]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                    loading="lazy"
                    priority={false}
                  />
                  {/* Subtle dark gradient overlay over image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* 🛠️ FIXED: Numbers ko dark, solid aur visible kar diya hai */}
                <span className="text-5xl font-heading font-black text-slate-800/80 mb-2 block group-hover:text-accent transition-colors duration-500 select-none tracking-tighter">
                  {step.number}
                </span>

                <h3 className="text-xl font-heading font-black mb-3 text-accent tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {step.title}
                </h3>
                
                <p className="text-white/40 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};