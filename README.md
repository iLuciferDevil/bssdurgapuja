# BSS Durga Puja 2026 Prototype

A static, Vercel-ready prototype for Bengaluru Sreehatta Sammelani's Durga Puja 2026.

## What this prototype is trying to solve
- Put the 2026 event first, not the association's archive.
- Make dates, venue and visitor actions obvious.
- Make Hoodi a clear part of the experience.
- Keep the visual language festive without making the site cluttered.
- Build in simple hooks for GA4 events such as `get_directions_click` and `whatsapp_click`.

## Before production
1. Replace remote BSS image URLs with optimised local WebP/AVIF assets.
2. Add the final BSS logo and approved 2026 key visual.
3. Add final ritual/cultural timings when confirmed.
4. Add the real GA4 measurement ID and/or GTM container.
5. Add final WhatsApp number/link and official social links.
6. Preserve current SEO URLs or create a 301 redirect map before DNS switch.
7. Recreate the important current SEO metadata and structured data.
8. Test mobile, accessibility, Core Web Vitals, analytics and redirects before launch.

## Deploy to Vercel
This is plain HTML/CSS/JS, so it can be deployed as a static site. Import this folder into a GitHub repo and connect the repo to Vercel.
