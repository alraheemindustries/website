"use client";

import React from "react";
import { motion, TargetAndTransition, Transition } from "framer-motion";
import { ShieldCheck, Leaf, Globe, FlaskConical, Truck } from "lucide-react";
import { animations } from "@/lib/utils";

const getSafeAnimation = (anim: any) => {
  if (!anim) return {};
  return {
    initial: anim.initial as boolean | TargetAndTransition | string,
    animate: anim.animate as boolean | TargetAndTransition | string,
    transition: anim.transition as Transition,
  };
};

const features = [
  {
    title: "International Quality Standards",
    description: "Our manufacturing processes are ISO 22000 and HACCP certified, ensuring the highest food safety levels.",
    icon: ShieldCheck,
    video: "/videos/video1.mp4", 
  },
  {
    title: "100% Pure Ingredients",
    description: "We source the finest natural seeds and raw materials to ensure nutrient-rich, healthy products.",
    icon: Leaf,
    video: "/videos/video2.mp4",
  },
  {
    title: "Modern Refining Technology",
    description: "State-of-the-art physical and chemical refining pipelines to maintain natural aroma and purity.",
    icon: FlaskConical,
    video: "/videos/video3.mp4",
  },
  {
    title: "Eco-Friendly Production",
    description: "Sustainable manufacturing practices with minimal environmental impact and zero waste initiatives.",
    icon: Leaf,
    video: "/videos/video4.mp4",
  },
  {
    title: "Trusted Export Network",
    description: "Supplying premium Oil & Ghee to major global markets with a focus on reliability and speed.",
    icon: Globe,
    video: "/videos/video6.mp4",
  },
  {
    title: "Seamless Supply Chain",
    description: "Advanced logistics and storage infrastructure ensuring fresh product delivery to every distributor.",
    icon: Truck,
    video: "/videos/video5.mp4",
  },
];

export const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-white w-full max-w-[100vw] overflow-x-hidden block">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col items-center justify-center">
        {/* Header Section */}
        <div className="text-center w-full max-w-3xl mx-auto mb-16 md:mb-20 flex flex-col items-center justify-center">
          <motion.div
            {...getSafeAnimation(animations.fadeIn)}
            className="text-accent text-[10px] md:text-[11px] font-black uppercase tracking-[0.35em] mb-4 block text-center w-full"
          >
            The Al Raheem Edge
          </motion.div>
          
          <motion.h2
            {...getSafeAnimation(animations.slideUp)}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 leading-[1.2] tracking-tight text-center w-full"
          >
            Setting New Standards in <span className="text-accent">Food Safety</span>
          </motion.h2>
          
          <motion.p
            {...getSafeAnimation(animations.fadeIn)}
            className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl text-center"
          >
            We combine traditional values of purity with modern industrial innovation 
            to produce Oil & Ghee that households have trusted for decades.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={animations.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 w-full justify-center items-stretch"
        >
          {features.map((feature, idx) => (
            <div key={idx} className="h-full flex w-full relative">
              <motion.div
                variants={animations.slideUp}
                className="group w-full p-8 md:p-10 rounded-[2rem] border border-gray-100 bg-gray-50/40 hover:bg-white hover:border-accent/10 hover:shadow-[0_22px_50px_rgba(10,25,47,0.04)] transition-all duration-500 flex flex-col justify-between relative z-10 overflow-hidden"
              >
                {/* Background Video */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500 group-hover:scale-105"
                >
                  <source src={feature.video} type="video/mp4" />
                </video>
                {/* Dark Overlay for Readability */}
                <div className="absolute inset-0 bg-black/40 z-0 group-hover:bg-black/30 transition-all duration-500"></div>
                
                {/* Content (relative to stay above video/overlay) */}
                <div className="relative z-10 flex flex-col h-full justify-between backdrop-blur-[2px]">
                  <div>
                    {/* Icon Wrapper */}
                    <div className="w-14 h-14 rounded-2xl bg-white/90 shadow-sm flex items-center justify-center mb-6 md:mb-8 group-hover:scale-105 transition-transform duration-500 will-change-transform backdrop-blur-sm">
                      <feature.icon className="text-primary group-hover:text-accent transition-colors duration-300" size={26} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-heading font-black mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300 tracking-tight leading-snug text-white drop-shadow-md">
                      {feature.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/90 leading-relaxed text-sm md:text-base mt-2 drop-shadow-md">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
