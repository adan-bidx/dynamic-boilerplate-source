# File Map

Every file in this project and what it does.

## Root Config

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and npm scripts |
| `tsconfig.json` | TypeScript configuration |
| `next.config.mjs` | Next.js configuration |
| `tailwind.config.ts` | Tailwind configuration (used by shadcn/ui internally) |
| `postcss.config.mjs` | PostCSS plugins |
| `components.json` | shadcn/ui CLI configuration |
| `.gitignore` | Git ignore rules |

## Documentation

| File | Purpose |
|------|---------|
| `README.md` | Project overview and setup instructions |
| `FILES.md` | This file — documents every file and its role |
| `RULES.md` | Coding conventions and project standards |

## `app/`

| File | Purpose |
|------|---------|
| `page.tsx` | Main page — renders Navbar + HeroSection |
| `layout.tsx` | Root layout — Inter font, ThemeProvider, metadata |
| `globals.css` | Base styles and CSS variables for theming |

## `components/`

| File | Purpose |
|------|---------|
| `Navbar.tsx` | Top navigation — displays brand name from content |
| `HeroSection.tsx` | Hero section — heading, description, two CTA buttons (all from content) |

## `components/ui/`

shadcn/ui primitives — auto-generated via `npx shadcn@latest add`. Do not edit manually.

| Component | Notes |
|-----------|-------|
| `button.tsx` | Button with variants and sizes |
| `badge.tsx` | Inline badge with variants |
| `sheet.tsx` | Sliding panel / mobile drawer |
| `separator.tsx` | Horizontal / vertical divider |

## `components/theme/`

| File | Purpose |
|------|---------|
| `theme-provider.tsx` | Wraps next-themes ThemeProvider |
| `theme-toggle.tsx` | Dark/light mode toggle button |

## `content/`

| File | Purpose |
|------|---------|
| `content.ts` | TypeScript types and default content. `getContent()` accessor. |

## `lib/`

| File | Purpose |
|------|---------|
| `utils.ts` | `cn()` — merges class names |

## `scripts/`

| File | Purpose |
|------|---------|
| `generate-section.mjs` | Scaffolds a new section component |
| `setup-env.mjs` | Creates `.env.local` if missing |
