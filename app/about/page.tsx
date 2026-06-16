"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Shield, Target, Eye, Building2, Award, Zap, Heart } from "lucide-react";

// Strict type cast for Framer Motion transitions
const fadeInUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
} as const;

// Reusable Counter Component for numbers running from 0 to target
function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <>{count}</>;
}

export default function About() {
  return (
    <>
      {/* ==========================================
          TOP HEADER SECTION
         ========================================== */}
      <div className="relative bg-white overflow-hidden">
        <PageHeader 
          title="Our Purity Legacy" 
          subtitle="Leading the food processing industry with a commitment to health and excellence since 1995." 
          backgroundImage="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop"
        />
      </div>
      
      {/* ==========================================
          1. COMPANY OVERVIEW SECTION
         ========================================== */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Side: Modern Image Frame */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-[3rem] shadow-2xl border border-gray-100/80">
                <img 
                  src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=2070&auto=format&fit=crop"

                  alt="Modern Refining Plant" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            
            {/* Right Side: Content Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.12 } }
              }}
            >
              <motion.div variants={fadeInUpVariant} className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">
                Corporate Profile
              </motion.div>
              
              <motion.h2 variants={fadeInUpVariant} className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-8 text-primary leading-tight tracking-tighter">
                Feeding Nations with <span className="text-accent">Refined Excellence</span>
              </motion.h2>
              
              <motion.p variants={fadeInUpVariant} className="text-gray-500 text-lg mb-6 leading-relaxed">
                Established in 1995, Al Raheem Industries has grown into one of the most prominent 
                names in the edible oil and ghee manufacturing sector. Our journey began with a 
                single refining unit and has expanded into a global-scale operation driven by 
                innovation and a relentless focus on food safety.
              </motion.p>
              
              <motion.p variants={fadeInUpVariant} className="text-gray-500 text-lg mb-12 leading-relaxed">
                Today, our high-capacity manufacturing facilities process thousands of metric tons 
                annually, serving millions of households across multiple continents with products 
                that define quality.
              </motion.p>
              
              {/* Counter Stats Blocks */}
              <motion.div variants={fadeInUpVariant} className="grid grid-cols-2 gap-12 pt-8 border-t border-gray-100">
                <div>
                  <span className="text-5xl md:text-6xl font-black text-primary mb-2 block">
                    <AnimatedCounter target={25} />+
                  </span>
                  <span className="text-[10px] text-accent uppercase tracking-widest font-black">Years of Heritage</span>
                </div>
                <div>
                  <span className="text-5xl md:text-6xl font-black text-primary mb-2 block">
                    <AnimatedCounter target={1} />M+
                  </span>
                  <span className="text-[10px] text-accent uppercase tracking-widest font-black">Happy Households</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          2. MISSION, VISION & VALUES CARDS
         ========================================== */}
      <section className="py-32 bg-gray-50/60 border-y border-gray-100/80">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1: Our Mission */}
            <motion.div variants={fadeInUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-10">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-heading font-black mb-6 tracking-tight text-primary">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                To provide households with the purest edible oils and ghee, ensuring every meal 
                is healthy, flavorful, and meets international food safety standards.
              </p>
            </motion.div>
            
            {/* Card 2: Our Vision */}
            <motion.div variants={fadeInUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:border-accent/20 hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 text-accent flex items-center justify-center mb-10">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-heading font-black mb-6 tracking-tight text-primary">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                To become the global leader in food processing, recognized for our commitment 
                to nutritional excellence and sustainable manufacturing practices.
              </p>
            </motion.div>
            
            {/* Card 3: Health First */}
            <motion.div variants={fadeInUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:border-secondary/20 hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-10">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-heading font-black mb-6 tracking-tight text-primary">Health First</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Integrity in every drop. We prioritize the cardiovascular health of our 
                consumers by ensuring all our products are cholesterol-monitored.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          3. KEY HIGHLIGHTS / PILLARS SECTION
         ========================================== */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="text-accent text-[10px] font-black uppercase tracking-[0.4em] mb-6">
            The Al Raheem Standard
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-24 tracking-tighter text-primary">
            The Pillars of Our <span className="text-accent">Success</span>
          </h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Building2, label: "Advanced Refining", text: "Physical & Chemical processing" },
              { icon: Shield, label: "Food Safety", text: "HACCP & ISO 22000 Certified" },
              { icon: Zap, label: "Agile Supply", text: "Real-time logistics network" },
              { icon: Award, label: "Purity Guarantee", text: "100% natural raw materials" },
            ].map((pillar, idx) => (
              <motion.div 
                variants={fadeInUpVariant} 
                key={idx} 
                className="bg-gray-50/50 hover:bg-white p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-6 text-primary mx-auto border border-gray-100 shadow-sm">
                  <pillar.icon size={36} />
                </div>
                <h4 className="font-heading font-black text-lg mb-3 tracking-tight text-primary">{pillar.label}</h4>
                <p className="text-gray-400 text-sm max-w-[190px] leading-relaxed text-center mx-auto">{pillar.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}