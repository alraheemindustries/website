"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-gray-100" 
          : "bg-transparent py-6"
      )}
    >
      <nav className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 flex items-center justify-between">
        
        {/* Brand Logo Wrapper - Pure transparent and fixed width dimensions */}
        <Link href="/" className="flex items-center group relative z-20">
          <Image
            src="/images/logo.png"
            alt="Al Raheem Industries"
            width={160} // Next.js standard strict requirements fixed here
            height={48} // Aspect ratio safe boundary dimensions
            className="h-10 w-auto md:h-12 object-contain mix-blend-multiply transition-opacity duration-300 group-hover:opacity-90"
            priority
          />
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <ul className="flex items-center gap-6 lg:gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[11px] uppercase tracking-[0.15em] font-bold transition-all duration-300 block py-2",
                      scrolled
                        ? isActive ? "text-accent" : "text-primary/70 hover:text-accent"
                        : isActive ? "text-accent" : "text-white/80 hover:text-accent"
                    )}
                  >
                    {link.name}
                  </Link>
                  
                  {/* Active Route Dot Indicator */}
                  <motion.div 
                    initial={false}
                    animate={{ 
                      scale: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0 
                    }}
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                  />
                </li>
              );
            })}
          </ul>
          
          {/* Vertical Separator Line */}
          <div className={cn(
            "h-8 w-[1px] mx-2 transition-colors duration-500",
            scrolled ? "bg-primary/10" : "bg-white/20"
          )} />
          
          {/* Quote CTA Button */}
          <Link href="/contact">
            <Button 
              variant={scrolled ? "gold" : "outline"} 
              size="sm" 
              className={cn(
                "px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl transition-all duration-300",
                scrolled 
                  ? "shadow-accent/5" 
                  : "border-white/30 text-white hover:bg-white hover:text-primary hover:border-white shadow-none"
              )}
            >
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle Button */}
        <button
          className={cn(
            "md:hidden p-2 rounded-full transition-colors relative z-20",
            scrolled 
              ? "text-primary hover:bg-gray-100" 
              : "text-white hover:bg-white/10"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} className="text-black"/> : <Menu size={24} />}
        </button>
      </nav>

      {/* Full-screen Mobile Sliding Menu Panel - MODIFIED FOR PREMIUM LOOK */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-0 top-0 h-auto bg-white z-10 px-6 pt-24 pb-8 shadow-2xl border-b border-gray-100 rounded-b-3xl"
          >
            <ul className="flex flex-col space-y-1 mb-6">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.li
                    key={link.name}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-base font-medium tracking-wide flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200",
                        isActive 
                          ? "text-accent bg-accent/5 font-semibold" 
                          : "text-gray-600 hover:text-primary hover:bg-gray-50"
                      )}
                    >
                      {link.name}
                      <ChevronRight 
                        className={cn(
                          "transition-transform duration-300",
                          isActive ? "text-accent translate-x-0.5" : "text-gray-300"
                        )} 
                        size={18} 
                      />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Bottom Panel Actions inside Mobile Draw */}
            <div className="px-4 pt-4 border-t border-gray-100">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="gold" className="w-full py-5 text-[11px] uppercase tracking-[0.15em] font-bold rounded-xl shadow-lg shadow-accent/10">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};