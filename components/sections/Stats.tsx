"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Years of Experience", value: 25, suffix: "+" },
  { label: "Industrial Projects", value: 500, suffix: "+" },
  { label: "Expert Engineers", value: 150, suffix: "+" },
  { label: "Global Partners", value: 80, suffix: "+" },
];

// Simple counter animation
const AnimatedCounter = ({ 
  target, 
  suffix = "" 
}: { 
  target: number; 
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = target;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};
// className="h-16 md:h-20 lg:h-24"

export const Stats = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-y h-16 md:h-20 lg:h-24 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-3">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};