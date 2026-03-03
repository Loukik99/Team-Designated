# Team Designated — Luxury Event Management Website

## Tech Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** (custom black & gold theme)
- **Framer Motion** (scroll animations)
- **TypeScript**

---

## Project Structure

```
team-designated/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles + fonts
├── components/
│   ├── Navbar.tsx           # Sticky transparent→black navbar
│   ├── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx      # Fullscreen video hero
│       ├── AboutSection.tsx     # Split layout + stats
│       ├── ServicesSection.tsx  # Gold hover cards grid
│       ├── PortfolioSection.tsx # Grid + lightbox modal
│       ├── HighlightBanner.tsx  # Wedding & corporate panels
│       ├── TestimonialsSection.tsx # Auto carousel
│       └── ContactSection.tsx   # Form + WhatsApp
├── public/
│   ├── video/
│   │   └── hero.mp4         # ← ADD YOUR VIDEO HERE
│   └── images/
│       └── hero-poster.jpg  # ← ADD POSTER IMAGE HERE
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## Adding Your Hero Video

Place your video at `/public/video/hero.mp4`

**Compress the video to under 5MB:**
```bash
ffmpeg -i your-video.mp4 \
  -vcodec libx264 \
  -crf 28 \
  -vf scale=1920:-1 \
  -an \
  -movflags +faststart \
  public/video/hero.mp4
```

Add a poster image at `/public/images/hero-poster.jpg` (shown while video loads)

---

## Customization

### Update WhatsApp Number
In `components/sections/ContactSection.tsx`, change:
```
https://wa.me/919876543210
```
Replace `919876543210` with your actual number (country code + number, no spaces).

### Update Contact Email
Search for `hello@teamdesignated.com` and replace in:
- `components/sections/ContactSection.tsx`
- `components/Footer.tsx`

### Form Submission
In `ContactSection.tsx`, the `handleSubmit` function shows a success state.
To actually send emails, integrate one of:
- **Formspree**: `fetch('https://formspree.io/f/YOUR_ID', ...)`
- **EmailJS**: `emailjs.send(...)`
- **Next.js API Route**: Create `/app/api/contact/route.ts`

### Portfolio Images
Replace Unsplash URLs in `PortfolioSection.tsx` with your own event photos.

---

## Deploy to Vercel (Recommended — Free)

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
# Follow prompts — it auto-detects Next.js
```

### Option 2: GitHub + Vercel Dashboard
1. Push code to GitHub: `git push`
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — done!

### Environment Variables (if needed)
Add in Vercel Dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_EMAIL=hello@teamdesignated.com
```

---

## Performance Tips
- Compress all images to WebP format
- Keep hero.mp4 under 5MB
- Vercel CDN handles edge caching automatically
- Images use `next/image` for automatic optimization

---

## Color Reference
| Color | Hex |
|-------|-----|
| Background Black | `#0D0D0D` |
| Gold | `#C9A227` |
| Gold Light | `#E2BC4E` |
| Gold Dark | `#A07D10` |
| Soft White | `#F5F5F5` |

---

*Built for Team Designated · Luxury Event Management*
"# Team-Designated" 
