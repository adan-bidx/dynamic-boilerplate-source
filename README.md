# Starter

A blank landing page starter built with **Next.js** and **shadcn/ui**. Ships with a single hero section — ready to build from scratch.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** shadcn/ui
- **Icons:** lucide-react
- **Theme:** next-themes (dark/light/system)
- **Language:** TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the page.

## Project Structure

```
app/
  page.tsx               — Main page (hero only)
  layout.tsx             — Root layout (font, theme provider)
  globals.css            — Base styles and CSS variables
components/
  Navbar.tsx             — Minimal navbar
  HeroSection.tsx        — Hero section
  theme/                 — Theme provider + toggle
  ui/                    — shadcn/ui primitives (do not edit)
content/
  content.ts             — All text/copy (types + defaults)
lib/
  utils.ts               — cn() class merge utility
scripts/
  generate-section.mjs   — Scaffold a new section component
  setup-env.mjs          — Create .env.local with defaults
```

See [FILES.md](./FILES.md) for a detailed file map.
See [RULES.md](./RULES.md) for coding conventions.

## Content System

All user-facing text lives in `content/content.ts`. Edit the exported `defaultContent` object to change headings and labels without touching component code.

## Adding Sections

```bash
node scripts/generate-section.mjs <SectionName>
```

Then add the content type to `content/content.ts` and render in `app/page.tsx`.

## Adding shadcn Components

```bash
npx shadcn@latest add <component-name>
```

Components install into `components/ui/`.

## Scripts

| Script | Purpose |
|--------|---------|
| `node scripts/generate-section.mjs <Name>` | Scaffolds `components/<Name>Section.tsx` |
| `node scripts/setup-env.mjs` | Creates `.env.local` if missing |
