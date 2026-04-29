# Koala Brothers

Marketing site for **Koala Brothers LLC** — an AI studio building the **Personal Agent OS** for the one-person company era.

Live at [koalabro.co](https://koalabro.co) (preview: [koala-brothers.pages.dev](https://koala-brothers.pages.dev)).

## Stack

- Next.js 16 (App Router, static export)
- Tailwind CSS 4
- Geist Sans + Geist Mono via `next/font/google`
- Framer Motion for orchestration, Lenis for smooth scroll
- Cloudflare Pages (deploy via `wrangler`)

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Build & deploy

```bash
pnpm build        # static export to ./out
wrangler pages deploy out --project-name koala-brothers --branch main
```

`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` need to be in the environment for deploys.

## Layout

```
src/
  app/
    layout.tsx           # fonts, metadata, smooth-scroll
    page.tsx             # landing page (Hero → Shift → Pain → OS → Products → Roadmap → Founder → CTA)
    globals.css          # design tokens, double-bezel utilities, motion primitives
    privacy/             # /privacy
    terms/               # /terms
    support/             # /support
  components/
    AgentOSDiagram.tsx   # animated SVG architecture (control plane / data plane)
    Mockups.tsx          # iPhone Brief mockup, Lead list, Channels grid, Crew avatars, Runtime terminal
    SmoothScroll.tsx     # Lenis client wrapper
    LegalShell.tsx       # shared chrome for /privacy /terms /support
```

## Design notes

- **Aesthetic**: Apple/Stripe-style premium light. Warm paper background `#fafaf9`, single terracotta accent `#c2410c`, soft eucalyptus secondary.
- **Typography**: Geist Sans display + body, Geist Mono for labels and metadata.
- **Cards**: every primary surface uses the double-bezel pattern (`.bezel` outer + `.bezel-inner`).
- **Motion**: `cubic-bezier(0.16, 1, 0.3, 1)` for entry, spring physics on hover; SVG path-draw + flowing dots in the architecture diagram.
- **Responsive**: split layouts kick in at `md` (768px) so 900–1023px viewports render correctly.

## License

All rights reserved · Koala Brothers LLC, 2026.
