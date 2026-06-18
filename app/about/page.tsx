"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Shield, Target, Eye, Building2, Award, Zap, Heart, CheckCircle, Factory, TrendingUp, Users, Globe } from "lucide-react";

// Clean and professional Framer Motion variants
const fadeInUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

// Optimized Reusable Counter Component
function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(false);

  useEffect(() => {
    if (countRef.current) return;
    let startTimestamp: number | null = null;
    
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    const animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <>{count}</>;
}

// ============================================
// TEAM MEMBERS DATA (Corrected Profiles)
// ============================================
const teamMembers = [
  {
    id: 1,
    name: "Mr. Muhammad Nadeem",
    designation: "Founder",
    description: "Founder of Al Raheem Industries, has been serving the edible oil and ghee industry since 1982. With over 40 years of experience, his vision, dedication to quality, and commitment to customer satisfaction have established Al Raheem Industries as a trusted name in the market. His leadership continues to drive the company forward with a focus on excellence, innovation, and long-term growth.",
    image: "/images/aboutImages/founder.webp",
  },
  {
    id: 2,
    name: "Mr. Abdul Rehman",
    designation: "Co-Founder",
    description: "Co-Founder of Al Raheem Industries, has been associated with the company since 2015. As the eldest son of Founder Mr. Muhammad Nadeem, he has played a key role in the company's growth through his leadership, strategic vision, and commitment to maintaining the highest standards of quality and customer satisfaction.",
    image: "/images/aboutImages/rahman.webp",
  },
  {
    id: 3,
    name: "Mr. Abdul Aziz",
    designation: "Operations Director",
    description: "Son of Founder Mr. Muhammad Nadeem, joined Al Raheem Industries in 2022. He oversees the plant mechanics, production pipelines, and internal logistics, bringing modern engineering precision and a strict commitment to operational efficiency and excellence.",
    image: "/images/aboutImages/aziz.webp",
  },
  {
    id: 4,
    name: "Mr. Abdul Raheem",
    designation: "Business Development Director",
    description: "Son of Founder Mr. Muhammad Nadeem, joined Al Raheem Industries in 2022. He actively drives global client acquisitions, supply chain partnerships, and corporate strategy, expanding the company's distribution footprint across international borders.",
    image: "/images/aboutImages/raheem.webp",
  }
];

export default function About() {
  return (
    <>
      {/* ==========================================
          TOP HEADER SECTION
         ========================================== */}
      <div className="relative bg-white overflow-hidden">
        <PageHeader 
          title="Our Purity Legacy" 
          subtitle="Leading the food processing industry with a commitment to health and excellence since 1982." 
          backgroundImage="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop"
        />
      </div>
      
      {/* ==========================================
          1. COMPANY OVERVIEW SECTION
         ========================================== */}
      <section className="py-24 md:py-32 bg-white selection:bg-accent/20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Side: Content Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="order-2 lg:order-1"
            >
              <motion.div variants={fadeInUpVariant} className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Corporate Profile
              </motion.div>
              
              <motion.h2 variants={fadeInUpVariant} className="text-3xl md:text-5xl font-heading font-black mb-6 text-primary leading-[1.15] tracking-tight">
                Feeding Nations with <br className="hidden sm:block" />
                <span className="text-accent relative inline-block">Refined Excellence</span>
              </motion.h2>
              
              <motion.p variants={fadeInUpVariant} className="text-zinc-600 text-base md:text-lg mb-6 leading-relaxed font-normal">
                Established in 1982, Al Raheem Industries has grown into one of the most prominent 
                names in the edible oil and ghee manufacturing sector. Our journey began with a 
                single refining unit and has expanded into a global-scale operation driven by 
                innovation and a relentless focus on food safety.
              </motion.p>
              
              <motion.p variants={fadeInUpVariant} className="text-zinc-500 text-base md:text-lg mb-8 leading-relaxed">
                Today, our high-capacity manufacturing facilities process thousands of metric tons 
                annually, serving millions of households across multiple continents with products 
                that define quality.
              </motion.p>
              
              {/* Key Points */}
              <motion.div variants={fadeInUpVariant} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 border-l-2 border-accent/20 pl-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="text-zinc-700 text-sm font-semibold">ISO 22000 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="text-zinc-700 text-sm font-semibold">HACCP Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="text-zinc-700 text-sm font-semibold">Global Export Network</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-accent w-5 h-5 flex-shrink-0" />
                  <span className="text-zinc-700 text-sm font-semibold">100% Pure & Natural</span>
                </div>
              </motion.div>
              
              {/* Counter Stats Blocks */}
              <motion.div variants={fadeInUpVariant} className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-100">
                <div>
                  <span className="text-4xl md:text-5xl font-black text-primary mb-1 block tracking-tight">
                    <AnimatedCounter target={25} />+
                  </span>
                  <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-bold">Years of Heritage</span>
                </div>
                <div>
                  <span className="text-4xl md:text-5xl font-black text-primary mb-1 block tracking-tight">
                    <AnimatedCounter target={1} />M+
                  </span>
                  <span className="text-[11px] text-zinc-400 uppercase tracking-widest font-bold">Happy Households</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Side: Modern Image with Stats Overlay */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2 relative group px-4 lg:px-0"
            >
              <div className="relative max-w-md lg:max-w-none mx-auto">
                <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-zinc-100 bg-zinc-50">
                  <img 
                    src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop"
                    alt="Oil Refinery Plant" 
                    className="w-full h-[450px] md:h-[550px] object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                </div>
                
                {/* Floating Stats Card Left */}
                <div className="absolute -bottom-6 left-2 md:-left-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-zinc-200/50 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Factory className="text-accent w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-base font-black text-primary leading-tight">50K+</p>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Metric Tons/Year</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats Card Right */}
                <div className="absolute -bottom-6 right-2 md:-right-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-4 border border-zinc-200/50 transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Globe className="text-accent w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-base font-black text-primary leading-tight">20+</p>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Export Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==========================================
          2. MISSION, VISION & VALUES CARDS
         ========================================== */}
      <section className="py-24 bg-zinc-50/50 border-y border-zinc-100">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Card 1: Our Mission */}
            <motion.div variants={fadeInUpVariant} className="bg-white p-10 rounded-[2rem] shadow-sm border border-zinc-100 hover:border-primary/10 hover:shadow-xl transition-all duration-500 group">
              <div className="w-14 h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-8 transition-colors group-hover:bg-primary group-hover:text-white duration-300">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-heading font-black mb-4 tracking-tight text-primary">Our Mission</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                To provide households with the purest edible oils and ghee, ensuring every meal 
                is healthy, flavorful, and meets international food safety standards.
              </p>
            </motion.div>
            
            {/* Card 2: Our Vision */}
            <motion.div variants={fadeInUpVariant} className="bg-white p-10 rounded-[2rem] shadow-sm border border-zinc-100 hover:border-accent/20 hover:shadow-xl transition-all duration-500 group">
              <div className="w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-8 transition-colors group-hover:bg-accent group-hover:text-white duration-300">
                <Eye size={28} />
              </div>
              <h3 className="text-xl font-heading font-black mb-4 tracking-tight text-primary">Our Vision</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                To become the global leader in food processing, recognized for our commitment 
                to nutritional excellence and sustainable manufacturing practices.
              </p>
            </motion.div>
            
            {/* Card 3: Health First */}
            <motion.div variants={fadeInUpVariant} className="bg-white p-10 rounded-[2rem] shadow-sm border border-zinc-100 hover:border-emerald-500/10 hover:shadow-xl transition-all duration-500 group">
              <div className="w-14 h-14 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-8 transition-colors group-hover:bg-emerald-600 group-hover:text-white duration-300">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-heading font-black mb-4 tracking-tight text-primary">Health First</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">
                Integrity in every drop. We prioritize the cardiovascular health of our 
                consumers by ensuring all our products are strictly quality checked and cholesterol-monitored.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          3. KEY HIGHLIGHTS / PILLARS SECTION
         ========================================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl text-center">
          <div className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4">
            The Al Raheem Standard
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-16 tracking-tight text-primary">
            The Pillars of Our <span className="text-accent">Success</span>
          </h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
                className="bg-zinc-50/50 hover:bg-white p-8 rounded-[2rem] border border-zinc-100 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6 text-primary mx-auto border border-zinc-100 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <pillar.icon size={28} className="text-zinc-700" />
                </div>
                <h4 className="font-heading font-black text-base mb-2 tracking-tight text-primary">{pillar.label}</h4>
                <p className="text-zinc-400 text-xs max-w-[190px] leading-relaxed text-center mx-auto">{pillar.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          4. LEADERSHIP TEAM
         ========================================== */}
      <section className="py-24 bg-zinc-50/60 border-t border-zinc-100">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="text-center mb-20"
          >
            <motion.div variants={fadeInUpVariant} className="text-accent text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Leadership Team
            </motion.div>
            <motion.h2 variants={fadeInUpVariant} className="text-3xl md:text-5xl font-heading font-black text-primary tracking-tight">
              Meet Our <span className="text-accent">Visionaries</span>
            </motion.h2>
            <motion.p variants={fadeInUpVariant} className="text-zinc-500 text-base md:text-lg mt-3 max-w-2xl mx-auto">
              The driving force behind Al Raheem Industries' global footprint and commitment to elite food standards.
            </motion.p>
          </motion.div>

          {/* Founder - Premium Row Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-zinc-100 hover:shadow-md transition-all duration-500"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden flex-shrink-0 bg-zinc-100 border-4 border-accent/10 shadow-inner">
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                  <h3 className="text-2xl font-heading font-black text-primary">
                    {teamMembers[0].name}
                  </h3>
                  <span className="self-center md:self-auto bg-accent/10 text-accent text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                    {teamMembers[0].designation}
                  </span>
                </div>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-4xl">
                  {teamMembers[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Executive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.slice(1).map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100 hover:shadow-md hover:border-zinc-200/60 transition-all duration-500 text-center flex flex-col justify-between"
              >
                <div>
                  <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 bg-zinc-100 border-2 border-accent/10 shadow-sm">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-heading font-black text-primary mb-1">
                    {member.name}
                  </h4>
                  <span className="text-accent text-[11px] font-bold uppercase tracking-widest block mb-4">
                    {member.designation}
                  </span>
                  <p className="text-zinc-500 text-xs leading-relaxed px-2">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}