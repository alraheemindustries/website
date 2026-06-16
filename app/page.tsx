import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ProductPreview } from "@/components/sections/ProductPreview";
import { ManufacturingProcess } from "@/components/sections/ManufacturingProcess";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Stats } from "@/components/sections/Stats";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      
      <Stats />
      
      <Features />
      
      <ProductPreview />
      
      <ManufacturingProcess />
      
      <ContactCTA />
    </main>
  );
}