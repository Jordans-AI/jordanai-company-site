# Jordan-AI Website

A modern, minimal, and elegant single-page website for Jordan-AI - helping businesses leverage AI tools and automations to boost productivity, efficiency, and growth.

## Design Features

- **Luxury Editorial Design**: Inspired by high-end editorial websites with clean typography and ample white space
- **Elegant Color Palette**: Off-white background (#F8F7F4) with sophisticated grayscale tones
- **Premium Typography**: Playfair Display for headings, Inter for body text
- **Smooth Animations**: Framer Motion for subtle fade-ins and interactions
- **Fully Responsive**: Optimized for all devices from mobile to desktop

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Playfair Display + Inter)

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
jordan-ai/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page integrating all sections
│   └── globals.css      # Global styles and Tailwind directives
├── components/
│   ├── Header.tsx       # Sticky navigation header
│   ├── Hero.tsx         # Hero section with CTA
│   ├── About.tsx        # About section
│   ├── Process.tsx      # Three-step process section
│   ├── Services.tsx     # Services grid
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer with social links
├── public/
│   └── jordan-ai-logo.png
└── tailwind.config.ts   # Tailwind configuration
```

## Sections

1. **Header** - Sticky navigation with smooth scroll to sections
2. **Hero** - Split layout with compelling headline and CTA
3. **About** - Brand story and mission statement
4. **Services** - Six core service offerings in an elegant grid
5. **Process** - Three-step approach (Discover, Design, Deliver)
6. **Contact** - Contact form with business contact information
7. **Footer** - Copyright and social media links

## Customization

### Colors

Edit colors in `tailwind.config.ts`:
```typescript
colors: {
  background: "#F8F7F4",
  primary: "#1A1A1A",
  secondary: "#5E5E5E",
  accent: "#E8E5DF",
}
```

### Content

Update text content in individual component files under `/components`

### Images

Replace placeholder images in `Hero.tsx` and `About.tsx` with actual images

## Contact Information

- Email: shaylee@jordan-ai.com
- Phone: +972 054 972 8712

## License

All rights reserved © 2025 Jordan-AI
