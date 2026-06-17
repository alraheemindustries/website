---
name: media-optimization
description: Techniques for lazy‑loading images and videos, using Next.js Image component, and configuring caching for faster load performance
source: auto-skill
extracted_at: '2026-06-17T06:27:14.316Z'
---

## Procedure for optimizing media loading in a Next.js project

1. **Add lazy‑loading to videos**
   ```tsx
   <video
     autoPlay
     loop
     muted
     playsInline
     preload="metadata"
     className="..."
   >
     <source src="/images/herovideo.mp4" type="video/mp4" />
   </video>
   ```
   *`preload="metadata"` ensures only the video header is fetched on initial load, preventing the video from blocking the first paint.*

2. **Replace raw `<img>` tags with Next.js `<Image>`**
   ```tsx
   import Image from "next/image";

   <Image
     src={src}
     alt={alt}
     width={800}
     height={600}
     className="..."
     loading="lazy"
     priority={false}
   />
   ```
   *Provides automatic responsive `srcset` generation, modern image formats (WebP/AVIF), and defers off‑screen images.*

3. **Configure `next.config.ts` for image optimisation and caching**
   ```ts
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     images: {
       domains: ["images.unsplash.com"], // allow external URLs used with <Image>
       remotePatterns: [],
     },
     // optional: enable long‑term caching for static assets
     async headers() {
       return [
         {
           source: "/:path*",
           headers: [
             { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
           ],
         },
       ];
     },
   };

   export default nextConfig;
   ```
   *The `images.domains` field lets Next.js optimize external images, while the `headers` function adds efficient caching headers for all static assets.*

4. **Add a small middleware (or `next.config.ts` headers) to set `Cache‑Control` for `/images/**` and `/videos/**`**
   ```ts
   // middleware.ts (optional if not using headers in next.config.ts)
   import { NextResponse } from "next/server";
   export function middleware(request) {
     const response = NextResponse.next();
     if (request.nextUrl.pathname.startsWith('/images/') || request.nextUrl.pathname.startsWith('/videos/')) {
       response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
     }
     return response;
   }
   ```
   *Ensures browsers cache media files for a long period, reducing repeat‑load cost.*

5. **Verify with Lighthouse / Web Vitals**
   - Run `next build && next start` locally.
   - Open Chrome DevTools → Lighthouse and check LCP, CLS, FID.
   - Confirm that LCP drops (the hero video no longer blocks) and that total transferred bytes decrease.

### How each step improves performance
- **Video metadata preload** prevents the large video file from being fetched during the initial paint, lowering LCP.
- **Next.js `<Image>`** serves appropriately sized, modern‑format images and lazy‑loads them, cutting download size and eliminating render‑blocking image requests.
- **Caching headers** let browsers reuse previously downloaded media, drastically reducing network latency on subsequent navigations.
- **Responsive sizing** means mobile devices receive smaller files, improving page speed on slower connections.
- **Lighthouse verification** guarantees that the visual appearance stays identical while Core Web Vitals improve.

---

*This skill captures the complete, repeatable process for media‑loading optimisation in this project, allowing future contributors to apply the same pattern without re‑inventing it.*