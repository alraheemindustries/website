import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Al Raheem Industries | Premium Industrial Solutions",
    template: "%s | Al Raheem Industries",
  },
  description: "Al Raheem Industries is a leader in high-quality industrial manufacturing and corporate excellence, providing premium products and services globally.",
  keywords: ["Industrial", "Manufacturing", "Al Raheem Industries", "Premium Corporate", "Engineering"],
  
  // Strict priority bindings for icon rendering
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  openGraph: {
    title: "Al Raheem Industries | Premium Industrial Solutions",
    description: "Excellence in Industrial Manufacturing",
    url: "https://alraheemindustries.com",
    siteName: "Al Raheem Industries",
    locale: "en_US",
    type: "website",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-body text-primary antialiased flex flex-col">
        <Navbar />
        <main className="relative flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}