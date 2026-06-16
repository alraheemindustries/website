import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 'as const' lagane se TypeScript ko exact Framer Motion types mil jati hain
export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const; // <-- Bas yahan end par 'as const' laga diya hai