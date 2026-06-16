"use client";

import React, { useState, useEffect } from "react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Mail, Phone, MapPin, Clock, Send, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  // Form State Configuration mapping with Route API
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "Product Quotation",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => setSubmitStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => {
        const remaining = { ...prev };
        delete remaining[name];
        return remaining;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message field cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "Product Quotation",
        message: "",
      });
      
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your inquiry has been sent successfully.",
      });
    } catch (error: any) {
      setSubmitStatus({
        type: "error",
        message: error?.message || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to help you solve your industrial challenges." 
        backgroundImage="https://images.unsplash.com/photo-1516387933999-ed3216239172?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-24 bg-white">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl font-heading font-black tracking-tight text-[#859728] mb-6"
                >
                  Get in <span className="text-[#256428]">Touch</span>
                </motion.h2>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
                  Whether you have a specific project in mind or just want to learn more about our 
                  capabilities, we'd love to hear from you. Our team is available for technical 
                  consultations and project estimates.
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Headquarters */}
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-[#f4f6ec] border border-[#e2e7cd] rounded-full flex items-center justify-center text-[#859728] shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#859728] mb-1">Headquarters</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Plot no. 196 north western industrial zone, Port Qasim, Karachi,<br />Karachi, 75020, Pakistan</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-[#ecf4ec] border border-[#cde2cd] rounded-full flex items-center justify-center text-[#256428] shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#859728] mb-1">Phone</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">+92 3218232432</p>
                    <p className="text-slate-500 text-sm leading-relaxed">+92 3018232432</p>
                    <p className="text-slate-500 text-sm leading-relaxed">+92 3180014845</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-[#fdf8ec] border border-[#f9ecd2] rounded-full flex items-center justify-center text-[#b45309] shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#859728] mb-1">Email</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">hello.alraheemindustries@gmail.com</p>
                  </div>
                </div>
                
                {/* Working Hours */}
                <div className="flex items-start space-x-5">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-400 shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-[#859728] mb-1">Working Hours</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">24/7 — We're Here</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Matched Clean Shadow Form Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-white rounded-2xl p-8 lg:p-10 border border-slate-100 shadow-xl shadow-slate-100/70"
            >
              <h3 className="text-2xl font-heading font-bold text-[#859728] mb-8">Send an Inquiry</h3>
              
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 mb-6 text-sm font-semibold rounded-xl border ${
                      submitStatus.type === "success" 
                        ? "bg-emerald-50 text-emerald-800 border-emerald-200" 
                        : "bg-red-50 text-red-800 border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-bold text-[#1e293b] tracking-wide">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={`w-full bg-white border rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#859728] focus:border-[#859728] text-slate-800 placeholder-[#cbd5e1] text-sm transition-colors ${
                        errors.name ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-bold text-[#1e293b] tracking-wide">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className={`w-full bg-white border rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#859728] focus:border-[#859728] text-slate-800 placeholder-[#cbd5e1] text-sm transition-colors ${
                        errors.email ? "border-red-400" : "border-slate-200"
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="block text-xs font-bold text-[#1e293b] tracking-wide">Company Name</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company Ltd."
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#859728] focus:border-[#859728] text-slate-800 placeholder-[#cbd5e1] text-sm transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-xs font-bold text-[#1e293b] tracking-wide">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+92..."
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#859728] focus:border-[#859728] text-slate-800 placeholder-[#cbd5e1] text-sm transition-colors"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 relative">
                  <label htmlFor="subject" className="block text-xs font-bold text-[#1e293b] tracking-wide">Subject</label>
                  <div className="relative">
                    <select 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#859728] focus:border-[#859728] text-[#859728] text-sm appearance-none pr-10 transition-colors font-medium"
                    >
                      <option value="Product Quotation">Product Quotation</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#859728] pointer-events-none" size={18} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-bold text-[#1e293b] tracking-wide">Your Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us about your project requirements..."
                    className={`w-full bg-white border rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#859728] focus:border-[#859728] text-slate-800 placeholder-[#cbd5e1] text-sm resize-none transition-colors ${
                      errors.message ? "border-red-400" : "border-slate-200"
                    }`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                
                {/* Fixed Button: Standard HTML button used to avoid variant props error */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#256428] hover:bg-[#1d4f20] text-white py-4 rounded-xl font-bold text-sm tracking-wide shadow-sm transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={15} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Segment Frame */}
      <section className="h-[500px] w-full bg-gray-200 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://maps.google.com/maps?q=Port%20Qasim,%20Karachi&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
}