"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Droplet } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full  flex items-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background with sophisticated overlay */}
      {/* Background with video - No yellow, light effect */}
<div className="absolute inset-0 z-0 overflow-hidden">
  {/* Dark/Light overlay - light effect ke liye */}
  <div className="absolute inset-0 bg-black/30 z-10" />
  
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/images/herovideo.mp4" type="video/mp4" />
  </video>
</div>
      {/* FIXED CONTAINER: Pinned inside strict screen limits */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 relative z-20">
        <div className="max-w-4xl">
          
          {/* Top Pill / Indicator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3 mb-6 md:mb-8"
          >
            <span className="w-12 h-[1px] bg-accent" />
            <span className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
              Excellence in Edible Oils
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[1.05] md:leading-[0.95] tracking-tighter mb-6 md:mb-8"
          >
            Pure Quality. <br className="hidden sm:block" />
            <span className="text-accent">Refined</span> Trust.
          </motion.h1>

          {/* Description Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-white/70 mb-10 md:mb-12 max-w-2xl leading-relaxed"
          >
            Al Raheem Industries is a premier leader in the manufacturing of high-grade 
            Oil & Ghee, committed to delivering health, purity, and taste to every household 
            with world-class refining technology.
          </motion.p>

          {/* CTA Buttons & Badges Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-8"
          >
            <div className="flex">
              <Button variant="gold" size="lg" className="group w-full sm:w-auto px-8 md:px-10 py-6 rounded-full shadow-2xl shadow-accent/20 text-sm md:text-base font-bold flex items-center justify-center">
                Explore Our Range
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={18} />
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm">
                  <ShieldCheck className="text-accent" size={18} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider">HACCP Certified</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm">
                  <Droplet className="text-accent" size={18} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider">100% Pure</span>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Corporate Vertical Floating Text */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none z-10">
        <span className="text-[120px] font-black text-white/[0.02] uppercase tracking-tighter vertical-text select-none block rotate-90 origin-right whitespace-nowrap">
          ESTABLISHED 1995
        </span>
      </div>

      {/* Decorative Blur Element */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none z-10" />
    </section>
  );
};
