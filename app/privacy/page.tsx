"use client";

import React from "react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function PrivacyPolicy() {
  const lastUpdated = "June 16, 2026";

  return (
    <>
      <PageHeader 
        title="Privacy Policy" 
        subtitle="Your trust is our commitment. Here is how we protect your data." 
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-4xl">
          <div className="prose prose-slate prose-headings:font-heading prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed max-w-none">
            
            <p className="text-sm text-slate-500 mb-8 italic">Last Updated: {lastUpdated}</p>

            <h2 className="text-3xl text-slate-950 mb-4">1. Introduction</h2>
            <p>
              At Al Raheem Industries, we value your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, and safeguard the data you provide to us when interacting 
              with our website or utilizing our industrial solutions.
            </p>

            <h2 className="text-3xl text-slate-950 mt-10 mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Contact Information:</strong> Names, email addresses, phone numbers, and physical addresses provided during inquiries.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
              <li><strong>Communication Data:</strong> Records of your correspondence with us regarding our products or B2B services.</li>
            </ul>

            <h2 className="text-3xl text-slate-950 mt-10 mb-4">3. How We Use Your Data</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>To provide and improve our industrial products and services.</li>
              <li>To respond to your inquiries and bulk order requests.</li>
              <li>To send you updates, newsletters, and industrial news (only if you have subscribed).</li>
              <li>To comply with legal obligations and enforce our terms of service.</li>
            </ul>

            <h2 className="text-3xl text-slate-950 mt-10 mb-4">4. Data Security</h2>
            <p>
              We implement industry-standard security measures to ensure that your personal information is protected against 
              unauthorized access, disclosure, or alteration. While no method of data transmission over the internet is 
              100% secure, we strive to use commercially acceptable means to protect your data.
            </p>

            <h2 className="text-3xl text-slate-950 mt-10 mb-4">5. Third-Party Sharing</h2>
            <p>
              Al Raheem Industries does not sell, rent, or trade your personal information with third parties. We may only 
              share your information with trusted partners who assist us in operating our website or serving our customers, 
              provided that those parties agree to keep this information confidential.
            </p>

            <h2 className="text-3xl text-slate-950 mt-10 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding our Privacy Policy, please contact us directly:
            </p>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-4">
              <p className="font-bold text-slate-950">Al Raheem Industries</p>
              <p>Email: <a href="mailto:hello.alraheemindustries@gmail.com" className="text-emerald-900 underline">hello.alraheemindustries@gmail.com</a></p>
              <p>Phone: +92 321 8232432</p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}