# Eyeworks Bangkok - Premium Eyewear Website

A luxury, responsive website for Bangkok's premier eyewear boutique, built with Next.js 14 and featuring bilingual support (English/Thai).

## 🌟 Features

- **Bilingual Support**: Full English and Thai language support with proper routing
- **Luxury Design**: Premium aesthetic with sophisticated color palette and typography
- **Responsive**: Mobile-first design that works perfectly on all devices
- **SEO Optimized**: Comprehensive sitemap and meta tags for maximum visibility
- **Static Generation**: Fast loading times with Next.js static site generation
- **Service Pages**: Dedicated pages for all eyewear services
- **Location Pages**: Coverage of all major Bangkok districts

## 🛠️ Tech Stack

- **Framework**: Next.js 14.2.23
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (serif) + Inter (sans-serif)
- **Deployment**: Static export ready

## 🏗️ Project Structure

```
app/
├── [locale]/                 # Bilingual routing
│   ├── page.tsx             # Homepage
│   ├── services/            # Services pages
│   ├── locations/           # Location pages
│   ├── contact/             # Contact page
│   └── about/               # About page
├── globals.css              # Global styles
├── layout.tsx               # Root layout
├── sitemap.ts              # SEO sitemap
└── robots.ts               # Search engine rules

components/
├── Navigation.tsx           # Main navigation
├── Hero.tsx                # Hero section
├── Services.tsx            # Services showcase
├── Locations.tsx           # Locations grid
└── Footer.tsx              # Site footer

lib/
└── i18n.ts                 # Internationalization config
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

## 🌍 Languages

- **English**: `/en/` routes
- **Thai**: `/th/` routes

## 📍 Services Covered

- Prescription Lenses
- Designer Frames
- On-Site Lens Cutting
- Comprehensive Eye Examinations

## 🏢 Bangkok Locations

- Sukhumvit - International business district
- Silom - Financial center
- Siam - Shopping district
- Thonglor - Trendy neighborhood
- Phrom Phong - Upscale residential
- Asok - Transportation hub

## 🎨 Design Features

- **Color Palette**: Deep navy/charcoal with gold accents
- **Typography**: Elegant serif headings with clean sans-serif body text
- **Components**: Luxury cards, gradient buttons, smooth animations
- **Mobile-First**: Fully responsive design

## 📈 SEO Features

- Comprehensive sitemap generation
- Proper meta tags and structured data
- hreflang implementation for international SEO
- Service + Location page combinations for local SEO
- Robots.txt configuration

## 🔧 Configuration

The site is configured for static export and can be deployed to any static hosting platform. All images are unoptimized for static deployment compatibility.

## 📞 Contact Integration

Ready for integration with:
- Contact forms
- Appointment booking systems
- Google Maps integration
- Phone/email links

---

Built with ❤️ for Bangkok's finest eyewear boutique