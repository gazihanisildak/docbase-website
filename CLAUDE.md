# Docbase Website - Claude Development Guide

## Project Overview

Marketing website for the Docbase mobile app. Static site with landing page, privacy policy, and terms of service.

**Live URL:** https://docbase-website.vercel.app
**Repository:** https://github.com/gazihanisildak/docbase-website

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript**
- **Tailwind CSS v4**
- **Vercel** for hosting

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Minimal root layout
│   ├── globals.css             # Global styles + Tailwind
│   └── [locale]/
│       ├── layout.tsx          # Locale layout with Header/Footer
│       ├── page.tsx            # Landing page
│       ├── privacy/page.tsx    # Privacy Policy (EN/DE)
│       └── terms/page.tsx      # Terms of Service (EN/DE)
├── components/
│   ├── Header.tsx              # Navigation + language switcher
│   └── Footer.tsx              # Footer links
├── dictionaries/
│   ├── en.json                 # English translations
│   └── de.json                 # German translations
├── lib/
│   └── dictionaries.ts         # i18n helpers
└── middleware.ts               # Locale detection & redirect
```

## Internationalization

- **Default language:** English (`/en`)
- **Supported:** English, German (`/de`)
- **Locale detection:** Browser language, cookie persistence
- **Switcher:** EN/DE toggle in header

### Adding translations

1. Add keys to both `src/dictionaries/en.json` and `de.json`
2. Use in components via `dict.section.key`

## Development

```bash
# Install
npm install

# Dev server
npm run dev

# Build
npm run build

# Deploy to Vercel
npx vercel --prod
```

## Pages

| Route | Description |
|-------|-------------|
| `/en`, `/de` | Landing page with features, GDPR section, download CTAs |
| `/en/privacy`, `/de/privacy` | Privacy Policy |
| `/en/terms`, `/de/terms` | Terms of Service |

## Contact Info

- **Email:** info@gzhn.online
- **Name:** Gazihan Isildak
- **Country:** Germany

## Design

- Gradient branding: `#3B82F6 → #8B5CF6 → #10B981`
- Glassmorphic elements (`.glass` class)
- Dark mode support via CSS `prefers-color-scheme`
- Responsive design with Tailwind breakpoints

## Deployment

- **Hosting:** Vercel
- **Auto-deploy:** Push to `main` triggers rebuild
- **Custom domain:** Configure at Vercel dashboard → Settings → Domains

## Notes

- No Impressum page (landing page only, transactions via app stores)
- Middleware handles locale redirects (`/` → `/en`)
- Legal pages have full EN/DE translations inline (not from dictionary)
