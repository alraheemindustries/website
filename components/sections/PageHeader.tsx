"use client";

import React from "react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export const PageHeader = ({ title, subtitle, backgroundImage }: PageHeaderProps) => {
  return (
    <section className="relative h-[50vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/80 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage || "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"}')` }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-accent font-medium max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};
