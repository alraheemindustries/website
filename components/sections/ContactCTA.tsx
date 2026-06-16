"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const ContactCTA = () => {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* 🛠️ FIXED: Card background is now clean white with a premium thin border and shadow */}
        <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-16 relative overflow-hidden shadow-xl">
          
          {/* Subtle green decorative background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#256428]/[0.03] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12">
            <div className="max-w-2xl text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-heading font-bold text-[#256428] mb-6"
              >
                Ready to Start Your Next <span className="text-[#859728]">Big Project?</span>
              </motion.h2>
              
              {/* 🛠️ FIXED: Description text color changed to dark slate gray for readability on white background */}
              <p className="text-slate-600 text-lg mb-8">
                Connect with our expert team today to discuss your industrial requirements 
                and get a customized quote for your business.
              </p>
              
              {/* Contact Info Row with dynamic hover effects */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                <a 
                  href="tel:+923218232432" 
                  className="flex items-center text-slate-700 space-x-3 group/link hover:text-[#256428] transition-colors duration-300"
                >
                  {/* 🛠️ FIXED: Icon circle background uses light corporate green variant */}
                  <div className="w-10 h-10 rounded-full bg-[#256428]/10 flex items-center justify-center text-[#256428] group-hover/link:bg-[#256428]/20 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span className="font-semibold tracking-wide">+92 321 8232432</span>
                </a>
                
                <a 
                  href="mailto:hello.alraheemindustries@gmail.com" 
                  className="flex items-center text-slate-700 space-x-3 group/link hover:text-[#256428] transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-[#256428]/10 flex items-center justify-center text-[#256428] group-hover/link:bg-[#256428]/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="font-semibold break-all">hello.alraheemindustries@gmail.com</span>
                </a>
              </div>
            </div>
            
            {/* CTA Button Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="shrink-0"
            >
              <Link href="/contact">
                {/* 🛠️ FIXED: Button is now a striking solid green with white text */}
                <Button 
                // variant="default" 
                size="lg" className="px-10 py-8 text-xl group shadow-lg bg-[#256428] text-white hover:bg-[#1e5020]">
                  Request a Quote
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};