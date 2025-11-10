# CLAUDE.md - Jordan-AI Website

## Project Overview

A modern, minimal, and elegant single-page website for **Jordan-AI** - a business that helps companies leverage AI tools and automations to boost productivity, efficiency, and growth through a simple, human-centered approach.

## Design Philosophy

### Visual Direction
- **Aesthetic**: Luxury editorial design inspired by high-end templates (UNO Editorial, The Muse 2.0, Showit)
- **Mood**: Calm, confident, intelligent - a blend of human warmth and advanced technology
- **Typography**: Large, refined typography with generous white space
- **Colors**: Grayscale/desaturated tones only - no bright colors

### Color Palette
```css
--color-background: #F8F7F4  /* Off-white background */
--color-primary: #1A1A1A      /* Primary text - near black */
--color-secondary: #5E5E5E    /* Secondary text - medium gray */
--color-accent: #E8E5DF       /* Subtle beige/sand for dividers */
```

### Typography
- **Headings**: Playfair Display (serif) - elegant, editorial
- **Body**: Inter (sans-serif) - clean, readable
- **Styling**: Increased tracking, elegant line height, smooth rendering

## Tech Stack

### Core Technologies
- **Framework**: Next.js 16 (App Router) - Latest React framework with server components
- **Language**: TypeScript - Type-safe development
- **Styling**: Tailwind CSS v4 - Modern CSS-based configuration
- **Animations**: Framer Motion - Smooth, performant animations
- **Email API**: Resend - Contact form integration

### Key Features
- **Modern CSS-First Approach**: Using Tailwind v4's `@theme` directive for configuration
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Performance Optimized**: Google Fonts preconnect, smooth scroll, lazy loading
- **Type Safety**: Full TypeScript coverage
- **Smooth Interactions**: Framer Motion for fade-ins, scroll animations, hover effects

## Project Structure

```
jordan-ai/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Contact form API endpoint (Resend integration)
│   ├── layout.tsx               # Root layout with metadata & fonts
│   ├── page.tsx                 # Main page composing all sections
│   └── globals.css              # Tailwind v4 config + global styles
├── components/
│   ├── Header.tsx               # Sticky navigation with smooth scroll
│   ├── Hero.tsx                 # Split layout hero with CTA
│   ├── About.tsx                # Brand story section
│   ├── Process.tsx              # 3-step approach cards
│   ├── Services.tsx             # 6 service offerings grid
│   ├── Contact.tsx              # Contact form with validation
│   └── Footer.tsx               # Footer with social links
├── public/
│   └── jordan-ai-logo.png       # Company logo
├── postcss.config.mjs           # PostCSS with @tailwindcss/postcss
├── tsconfig.json                # TypeScript configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
└── .gitignore                   # Git ignore rules
```

## Components Breakdown

### 1. Header
- Sticky navigation with scroll-based backdrop blur
- Smooth scroll to sections (About, Services, Process, Contact)
- Logo click returns to top
- Responsive with mobile menu button (ready for expansion)

### 2. Hero Section
- Split layout: placeholder image left, content right
- Large headline: "Empower your business with AI"
- CTA button: "Book a Discovery Call" → scrolls to contact form
- Framer Motion entrance animations (fade + slide)

### 3. About Section
- Grid layout: text left, placeholder image right
- Explains Jordan-AI's approach and philosophy
- Scroll-triggered animations with `useInView`
- Emphasizes human-centered AI

### 4. Services Section
- 3-column grid (responsive to 2-col, 1-col)
- 6 service cards with hover effects
- Services:
  - Workflow Automations
  - Smart Data Dashboards
  - AI-powered Customer Support
  - Business Intelligence Tools
  - Custom Integrations
  - Strategy & Training

### 5. Process Section
- 3-step horizontal cards
- Steps: Discover → Design → Deliver
- Subtle shadows, numbered indicators
- Supporting text about starting small for maximum value

### 6. Contact Section
- Full contact form with validation
- Fields: Name (required), Email (required), Phone (optional), Message (optional)
- API integration with `/api/contact` endpoint (ready for Resend)
- Success/error state handling
- Direct contact info: email & phone displayed below form

### 7. Footer
- Minimal single-line design
- Copyright © 2025 Jordan-AI
- Social media icons (LinkedIn, Instagram) with hover effects

## Animations & Interactions

### Framer Motion Patterns
- **Entrance animations**: Fade-in with slight Y/X translation
- **Scroll-triggered**: Using `useInView` hook with `-100px` margin
- **Staggered delays**: Sequential reveal for visual hierarchy
- **Hover states**: Subtle scale (1.02) on buttons, opacity on links
- **Button interactions**: Tap scale (0.98) for tactile feedback

### CSS Transitions
- Smooth scroll behavior (`scroll-behavior: smooth`)
- Color transitions on hover (200-300ms duration)
- Backdrop blur on header scroll
- Border color transitions on form focus

## Configuration Details

### Tailwind CSS v4 Setup
**Approach**: CSS-based configuration using `@theme` directive (modern v4 standard)

```css
@import "tailwindcss";

@theme {
  --color-background: #F8F7F4;
  --color-primary: #1A1A1A;
  --color-secondary: #5E5E5E;
  --color-accent: #E8E5DF;

  --font-family-playfair: "Playfair Display", serif;
  --font-family-inter: "Inter", sans-serif;
}
```

**Why this approach?**
- Tailwind v4 moved to CSS-first configuration
- No need for separate `tailwind.config.ts` file
- Theme variables directly in CSS using CSS custom properties
- Better performance and more standards-aligned

### PostCSS Configuration
Uses `@tailwindcss/postcss` (v4 requirement):
```js
plugins: {
  '@tailwindcss/postcss': {},
}
```

### Font Loading Strategy
Google Fonts loaded via HTML `<link>` tags in layout:
- Preconnect to `fonts.googleapis.com` and `fonts.gstatic.com`
- Display swap for performance
- Prevents CSS `@import` ordering issues with Tailwind

## API Integration

### Contact Form Endpoint
**File**: `app/api/contact/route.ts`

**Setup**: Ready for Resend email API integration
- Environment variable: `RESEND_API_KEY`
- Recipient: `shaylee@jordan-ai.com`
- Validates required fields
- Returns proper error/success responses

**To activate**:
1. Sign up at resend.com
2. Get API key
3. Add to `.env.local`: `RESEND_API_KEY=re_xxxxx`
4. Form will automatically start sending emails

## Development

### Commands
```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Build for production
npm start      # Start production server
npm run lint   # Run Next.js linter
```

### Environment Setup
1. Clone repository
2. Install dependencies: `npm install`
3. (Optional) Add `.env.local` for Resend API key
4. Run dev server: `npm run dev`

### Known Warnings
- **Turbopack root warning**: Next.js detects multiple lockfiles - safe to ignore or configure `turbopack.root` in `next.config.js`

## Customization Guide

### Replacing Placeholder Images
**Hero section** ([components/Hero.tsx](components/Hero.tsx:17-28)):
```tsx
// Replace the placeholder div with:
<Image
  src="/hero-image.jpg"
  alt="Jordan-AI Hero"
  fill
  className="object-cover"
/>
```

**About section** ([components/About.tsx](components/About.tsx:39-50)):
```tsx
// Same pattern - replace placeholder with actual image
```

### Adding Real Images
1. Place images in `/public` folder
2. Use Next.js `<Image>` component for optimization
3. Recommended: Professional photography or AI-themed abstract visuals
4. Maintain grayscale/desaturated aesthetic

### Updating Content
- **Contact info**: Edit [components/Contact.tsx](components/Contact.tsx:142-151)
- **Service offerings**: Edit [components/Services.tsx](components/Services.tsx:11-34)
- **Process steps**: Edit [components/Process.tsx](components/Process.tsx:8-23)
- **About copy**: Edit [components/About.tsx](components/About.tsx:25-35)

### Color Adjustments
Edit CSS variables in [app/globals.css](app/globals.css:4-7):
```css
@theme {
  --color-background: #F8F7F4;  /* Change background */
  --color-primary: #1A1A1A;     /* Change primary text */
  /* etc. */
}
```

### Typography Changes
Update Google Fonts link in [app/layout.tsx](app/layout.tsx:19-22) and CSS variables.

## Deployment

### Recommended: Vercel
1. Push to GitHub
2. Import to Vercel
3. Add environment variables (if using Resend)
4. Deploy

### Other Platforms
- **Netlify**: Works with Next.js
- **AWS Amplify**: Supports Next.js
- **Self-hosted**: Use `npm run build && npm start`

## Performance Optimizations

- ✅ Font preconnect for faster loading
- ✅ Image component for automatic optimization
- ✅ CSS-based Tailwind config (faster builds)
- ✅ Framer Motion tree-shaking
- ✅ Server components by default (smaller JS bundle)
- ✅ Smooth scroll with CSS (no JS library)

## Accessibility

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (h1 → h6)
- ✅ Form labels with `htmlFor`
- ✅ ARIA labels on social links
- ✅ Focus states on interactive elements
- ✅ Color contrast meets WCAG AA standards

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Future Enhancements

### Potential Additions
1. **Mobile menu**: Expand hamburger menu with slide-out navigation
2. **Blog section**: Add case studies or AI insights
3. **Testimonials**: Client success stories
4. **Portfolio**: Showcase previous projects
5. **Analytics**: Google Analytics or Plausible integration
6. **SEO**: Add structured data, meta tags, sitemap
7. **Dark mode**: Toggle for user preference
8. **Calendly integration**: Direct booking in CTA button
9. **Image gallery**: Project showcase with lightbox
10. **Loading states**: Skeleton screens for better UX

### Technical Improvements
- Add end-to-end tests (Playwright/Cypress)
- Implement proper error boundaries
- Add loading states for async operations
- Set up CI/CD pipeline
- Add security headers
- Implement rate limiting on contact form
- Add reCAPTCHA to prevent spam

## Troubleshooting

### Common Issues

**Issue**: CSS not loading / blank page
- **Solution**: Ensure `@tailwindcss/postcss` is installed and configured correctly

**Issue**: Fonts not showing
- **Solution**: Check network tab for font loading, verify Google Fonts link in layout

**Issue**: Contact form not sending
- **Solution**: Check `RESEND_API_KEY` in `.env.local`, verify API endpoint

**Issue**: TypeScript errors
- **Solution**: Run `npm install` to ensure all type definitions are installed

**Issue**: Port already in use
- **Solution**: Kill process on port 3000: `npx kill-port 3000` or use different port

## Credits

- **Design inspiration**: UNO Editorial, The Muse 2.0, Showit templates
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Heroicons (social media icons)
- **Framework**: Next.js by Vercel
- **Built with**: Claude Code by Anthropic

## Contact & Support

**Business Contact**:
- Email: shaylee@jordan-ai.com
- Phone: +972 054 972 8712

**Technical Stack**:
- Next.js: https://nextjs.org
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://framer.com/motion
- Resend: https://resend.com

---

**Last Updated**: November 2025
**Version**: 1.0.0
**Status**: Production Ready
