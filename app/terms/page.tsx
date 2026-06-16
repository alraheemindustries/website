"use client";

import React from "react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function TermsOfService() {
  const lastUpdated = "June 16, 2026";

  return (
    <>
      <PageHeader 
        title="Terms of Service" 
        subtitle="Please read these terms carefully before using our services." 
        backgroundImage="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-16 max-w-4xl">
          <div className="prose prose-slate prose-headings:font-heading prose-headings:font-black prose-p:text-slate-600 prose-p:leading-relaxed max-w-none">
            
            <p className="text-sm text-slate-500 mb-8 italic">Last Updated: {lastUpdated}</p>

            <h2 className="text-3xl text-slate-950 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website of Al Raheem Industries, you agree to be bound by these Terms of Service. 
              If you do not agree with any part of these terms, you are prohibited from using our website and services.
            </p>

            <h2 className="text-3xl text-slate-950 mt-10 mb-4">2. Use of License</h2>
            <p>
              Permission is granted to temporarily view the materials on our website for personal, non-commercial 
              transitory viewing only. This is the grant of a license, not a transfer of title. Under this license you may not:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Modify or copy the materials.</li>
              <li>Use the materials for any commercial purpose.</li>
              <li>Attempt to decompile or reverse engineer any software contained on our website.</li>
            </ul>

            <h2 className="text-3xl text-slate-950 mt-10 mb-4">3. Disclaimer</h2>
            <p>
              The materials on Al Raheem Industries' website are provided on an 'as is' basis. We make no warranties, 
              expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, 
              implied warranties or conditions of merchantability or fitness for a particular purpose.
            </p>

            <h2 className="text-3xl text-slate-950 mt-10 mb-4">4. Limitations of Liability</h2>
            <p>
              In no event shall Al Raheem Industries or its suppliers be liable for any damages (including, without limitation, 
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
              the materials on our website.
            </p>

            <h2 className="text-3xl text-slate-950 mt-10 mb-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Pakistan, 
              and you irrevocably submit to the exclusive jurisdiction of the courts in Karachi.
            </p>

            <h2 className="text-3xl text-slate-950 mt-10 mb-4">6. Changes to Terms</h2>
            <p>
              Al Raheem Industries reserves the right to revise these Terms of Service at any time without notice. 
              By using this website, you are agreeing to be bound by the then-current version of these terms.
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mt-10">
              <p className="font-bold text-slate-950">Questions?</p>
              <p className="text-sm">
                If you have any questions about these Terms of Service, please reach out to us at 
                <a href="mailto:hello.alraheemindustries@gmail.com" className="text-emerald-900 underline ml-1">
                  hello.alraheemindustries@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}