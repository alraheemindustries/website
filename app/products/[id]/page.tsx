"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, ShieldCheck, CheckCircle2, Droplet, FileText, Info, Package, Calendar, Award, Factory } from "lucide-react";
import { motion } from "framer-motion";

// Updated products array with complete information
const products = [
  {
    id: 1,
    title: "Sooraj Cooking Oil",
    category: "Cooking Oils",
    image: "/images/product oil.webp",
    description: "Premium quality cooking oil refined for purity, lightness, and great taste. Ideal for frying, cooking, and everyday healthy meals.",
    longDescription: "Sooraj Cooking Oil is manufactured using advanced physical refining technology to ensure maximum purity and nutritional retention. This versatile cooking oil is perfect for all types of Pakistani and continental cuisines, offering a perfect balance of health and taste. Our oil is carefully processed to maintain essential nutrients while providing excellent frying performance.",
    specs: {
      packaging: "1 Litre Pouch, 3 Litre Bottle, 5 Litre Box, 16 Litre (Tin)",
      shelfLife: "24 Months from Manufacturing Date",
      ingredients: "100% Pure Refined Vegetable Oil, Vitamin E, Natural Antioxidants",
      certifications: "PSQCA Certified, HALAL, ISO 22000"
    },
    availability: {
      sizes: ["1 Litre", "3 Litre", "5 Litre", "16 Litre"],
      weights: ["1 kg", "3 kg", "5 kg", "16 kg"],
      packaging: ["Pouch", "Bottle", "Box", "Tin/Balti"]
    }
  },
  {
    id: 2,
    title: "Reydhan Banaspati Ghee",
    category: "Banaspati Ghee",
    image: "/images/reydhan ghee.webp",
    description: "Pure and authentic banaspati ghee crafted with traditional methods for rich flavor and aroma.",
    longDescription: "Reydhan Banaspati Ghee is produced using premium quality vegetable oils through a specialized hydrogenation process that creates the perfect grainy texture. Enriched with Vitamins A and D, this ghee provides the authentic taste and aroma essential for traditional Pakistani cooking, biryanis, and sweets.",
    specs: {
      packaging: "1 KG Pouch, 3 KG Bottle, 5 KG Box, 16 Litre Balti (Tin)",
      shelfLife: "18 Months from Manufacturing Date",
      ingredients: "Refined Vegetable Oils, Vitamin A, Vitamin D, Permitted Antioxidants",
      certifications: "PSQCA Certified, HALAL, ISO 22000, HACCP"
    },
    availability: {
      sizes: ["1 KG", "3 KG", "5 KG", "16 KG"],
      weights: ["1 kg", "3 kg", "5 kg", "16 kg"],
      packaging: ["Pouch", "Bottle", "Bottle", "Tin/Balti"]
    }
  },
  {
    id: 3,
    title: "Reydhan Cooking Oil",
    category: "Cooking Oils",
    image: "/images/reydhan oil.webp",
    description: "Premium cooking oil for everyday use. Complete nourishment for healthy cooking.",
    longDescription: "Reydhan Cooking Oil is a premium quality, physically refined oil that offers excellent heat stability and a neutral taste profile. Perfect for deep frying, shallow frying, and all general cooking applications. This oil is enriched with essential fatty acids and Vitamin E for a healthier lifestyle.",
    specs: {
      packaging: "1 Litre Pouch, 3 Litre Bottle, 5 Box , 16 Litre (Tin)",
      shelfLife: "24 Months from Manufacturing Date",
      ingredients: "Refined Vegetable Oil Blend, Vitamin E, Natural Antioxidants",
      certifications: "PSQCA Certified, HALAL, ISO 9001"
    },
    availability: {
      sizes: ["1 Litre", "3 Litre", "5 Litre", "16 Litre"],
      weights: ["1 Litre", "3 Litre", "5 Litre", "16 Litre"],
      packaging: ["Pouch", "Bottle", "Box", "Tin/Balti"]
    }
  },
  {
    id: 4,
    title: "Sooraj Banaspati Ghee",
    category: "Banaspati Ghee",
    image: "/images/product ghee.webp",
    description: "The beginning of taste and quality. Premium banaspati ghee for traditional cooking and baking.",
    longDescription: "Sooraj Banaspati Ghee is crafted with utmost care using the finest vegetable oils. Our unique manufacturing process ensures the perfect grainy texture and rich flavor that is essential for authentic Pakistani cuisine. Ideal for making traditional sweets, biryanis, and everyday cooking.",
    specs: {
      packaging: "1 kg Pouch, 3 kg Bottle, 5 kg Box, 16 kg Balti (Tin)",
      shelfLife: "18 Months from Manufacturing Date",
      ingredients: "Refined Palm Oil, Soyabean Oil, Vitamin A, Vitamin D, Permitted Antioxidants",
      certifications: "PSQCA Certified, HALAL, ISO 22000"
    },
    availability: {
      sizes: ["1 kg", "3 kg", "5 kg", "16 kg"],
      weights: ["1 kg", "3 kg", "5 kg", "16 kg"],
      packaging: ["Pouch", "Bottle", "Bottle", "Tin/Balti"]
    }
  }
];

export default function ProductDetails() {
  const params = useParams();
  
  const productId = parseInt(params.id as string, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-24 px-6 text-center">
        <Info className="text-gray-300 mb-4" size={48} />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-sm">The product you are looking for might have been moved or does not exist in our current catalog.</p>
        <Link href="/products">
          <Button className="rounded-full bg-primary text-white">
            <ArrowLeft className="mr-2" size={16} /> Back to Catalog
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHeader 
        title={product.title} 
        subtitle={`Discover the industrial parameters, specifications, and nutritional value of our premium ${product.category.toLowerCase()}.`}
        backgroundImage={product.image || "https://images.unsplash.com/photo-1474440692490-2e83ae13ba26?q=80&w=2070&auto=format&fit=crop"}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-amber-600 transition-colors group">
              <ArrowLeft className="mr-2 group-hover:-translate-x-0.5 transition-transform" size={16} />
              Back to Product Portfolio
            </Link>
          </div>

          {/* Main Product Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            
            {/* Left Column: Product Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl overflow-hidden border border-gray-100 shadow-lg h-[400px] relative">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    Product Image Coming Soon
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Product Details */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <ShieldCheck className="text-amber-600" size={18} />
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Premium Quality Standard</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                {product.title}
              </h2>

              <p className="text-gray-700 text-base font-medium leading-relaxed mb-4">
                {product.description}
              </p>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {product.longDescription}
              </p>

              <div className="border-t border-gray-100 pt-6">
                <Link href="/contact" className="block">
                  <Button className="w-full sm:w-auto rounded-full bg-amber-600 text-white hover:bg-amber-700 shadow-lg shadow-amber-600/20 px-8 py-6">
                    <Droplet className="mr-2" size={16} />
                    Place Bulk Inquiry
                  </Button>
                </Link>
              </div>
            </div>

          </div>

          {/* Technical Specifications */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-100 mb-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="text-amber-600" size={20} />
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">Technical Data & Specifications</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col bg-white p-4 rounded-xl border border-gray-100">
                <div className="flex items-center space-x-2 mb-2">
                  <Package className="text-amber-600" size={16} />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Packaging</span>
                </div>
                <span className="text-gray-800 text-sm font-medium">{product.specs.packaging}</span>
              </div>

              <div className="flex flex-col bg-white p-4 rounded-xl border border-gray-100">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="text-amber-600" size={16} />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Shelf Life</span>
                </div>
                <span className="text-gray-800 text-sm font-medium">{product.specs.shelfLife}</span>
              </div>

              <div className="flex flex-col bg-white p-4 rounded-xl border border-gray-100">
                <div className="flex items-center space-x-2 mb-2">
                  <Factory className="text-amber-600" size={16} />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ingredients</span>
                </div>
                <span className="text-gray-800 text-sm font-medium">{product.specs.ingredients}</span>
              </div>

              <div className="flex flex-col bg-white p-4 rounded-xl border border-gray-100">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="text-amber-600" size={16} />
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Certifications</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {product.specs.certifications.split(", ").map((cert, index) => (
                    <span key={index} className="inline-flex items-center bg-amber-50 text-amber-700 text-xs px-2.5 py-1 rounded-md font-medium">
                      <CheckCircle2 className="text-amber-600 mr-1" size={10} />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Availability & Packaging Sizes */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl p-6 md:p-10 border border-amber-100"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Package className="text-amber-600" size={20} />
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">Available Packaging Sizes</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.availability.sizes.map((size, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-lg font-bold text-amber-600">{size}</div>
                  <div className="text-xs text-gray-500 mt-1">Weight: {product.availability.weights[index]}</div>
                  <div className="text-xs text-gray-400 mt-1">{product.availability.packaging[index]}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      <ContactCTA />
    </>
  );
}