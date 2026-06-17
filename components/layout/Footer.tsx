"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Lucide icons
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
// Brands icons from React Icons (FontAwesome)
import { FaFacebookF, FaWhatsapp, } from "react-icons/fa6";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Newsletter State Management Hooks
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Subscription failed. Please try again.");
      }

      setEmail("");
      setStatus({
        type: "success",
        message: "Subscribed Successfully! 🎉",
      });

      // Clear success toast message after 4 seconds
      setTimeout(() => setStatus(null), 4000);
    } catch (error: any) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-primary text-slate-900 pt-20 pb-10 w-full block border-t border-black/5">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 w-full">
          
          {/* Brand Column */}
          <div className="space-y-6 flex flex-col justify-start">
            <Link href="/" className="flex items-center space-x-3 group w-max">
              <div className="relative w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 drop-shadow-sm">
                <Image 
                  src="/images/logo.webp" 
                  alt="Al Raheem Industries Logo" 
                  width={48} 
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-xl leading-none tracking-tight text-slate-950 group-hover:text-emerald-900 transition-colors">
                  AL RAHEEM
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-800 font-bold mt-1">
                  Industries
                </span>
              </div>
            </Link>
            <p className="text-slate-800 font-medium text-sm leading-relaxed max-w-xs">
              Leading the industrial landscape with innovation, precision, and a commitment to excellence since 1995.
            </p>
            <div className="flex items-center space-x-3 pt-2">
  {/* ✅ Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=100064176757451&mibextid=wwXIfr&rdid=3HnXw3lCbWLTkRb0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1RefcLiiSY%2F%3Fmibextid%3DwwXIfr#"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full border border-slate-900/20 bg-white/40 flex items-center justify-center text-slate-900 hover:text-white hover:bg-[#256428] hover:border-[#256428] transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
  >
    <FaFacebookF size={14} />
  </a>
  
  {/* ✅ WhatsApp */}
  <a
    href="https://wa.me/923180014845"  // ✅ 
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 rounded-full border border-slate-900/20 bg-white/40 flex items-center justify-center text-slate-900 hover:text-white hover:bg-green-600 hover:border-green-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm"
  >
    <FaWhatsapp size={14} />
  </a>
</div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-widest mb-6 text-slate-950">Quick Links</h4>
            <ul className="space-y-3.5">
              {[
                { label: "About Us", path: "/about" },
                { label: "Our Products", path: "/products" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact Us", path: "/contact" }
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    className="text-slate-800 hover:text-emerald-900 font-medium flex items-center group transition-colors duration-300 text-sm"
                  >
                    <ArrowUpRight size={14} className="mr-1.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-emerald-900" />
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-widest mb-6 text-slate-950">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3.5">
                <MapPin className="text-emerald-900 shrink-0 mt-0.5" size={18} />
                <span className="text-slate-800 font-medium text-sm leading-relaxed">
                  Plot no. 196 north western industrial zone, Port Qasim,<br />Karachi, Pakistan
                </span>
              </li>
              <li className="flex items-center space-x-3.5">
                <Phone className="text-emerald-900 shrink-0" size={18} />
                <a href="tel:+922112345678" className="text-slate-800 font-medium text-sm hover:text-emerald-900 transition-colors">
                  +92 3218232432
                </a>
              </li>
              <li className="flex items-center space-x-3.5">
                <Mail className="text-emerald-900 shrink-0" size={18} />
                <a href="mailto:hello.alraheemindustries@gmail.com" className="text-slate-800 font-medium text-sm hover:text-emerald-900 transition-colors">
                  hello.alraheemindustries@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box Column with API triggers */}
          <div className="flex flex-col justify-start">
            <h4 className="font-heading font-black text-sm uppercase tracking-widest mb-6 text-slate-950">Newsletter</h4>
            <p className="text-slate-800 font-medium text-sm mb-5 leading-relaxed">
              Subscribe to get latest updates and industrial news.
            </p>
            
            <form className="relative w-full max-w-sm" onSubmit={handleSubscribe}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full bg-white/60 border border-slate-900/20 rounded-full py-3.5 pl-5 pr-24 text-sm text-slate-950 placeholder-slate-600 focus:outline-none focus:border-emerald-800 focus:bg-white transition-all duration-300 shadow-sm"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-1.5 top-1.5 bottom-1.5 px-5 bg-[#256428] hover:bg-[#1d4f20] text-white rounded-full text-xs font-black tracking-widest transition-colors duration-300 shadow-sm flex items-center justify-center disabled:opacity-75"
              >
                {isLoading ? "..." : "JOIN"}
              </button>
            </form>

            {/* Response Status Notification Layer */}
            {status && (
              <p className={`text-xs font-bold mt-3 pl-2 transition-all ${
                status.type === "success" ? "text-emerald-800" : "text-red-700"
              }`}>
                {status.message}
              </p>
            )}
          </div>
        </div>

        {/* Bottom copyright line section */}
        <div className="border-t border-slate-950/10 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 w-full">
          <p className="text-slate-700 font-semibold text-xs text-center md:text-left">
            © {currentYear} Al Raheem Industries. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-xs font-semibold text-slate-700">
            <Link href="/privacy" className="hover:text-slate-950 transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-950 transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};