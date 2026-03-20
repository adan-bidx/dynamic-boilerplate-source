# Project Rules

## General

- **TypeScript** for all source files.
- **shadcn/ui** is the default and only component library.
- React Server Components by default. Add `"use client"` only when needed.
- All user-facing text belongs in `content/content.ts`, not in components.

## Naming

- **Components:** PascalCase (`HeroSection.tsx`)
- **Content files:** camelCase (`content.ts`)
- **Scripts:** kebab-case + `.mjs` (`setup-env.mjs`)

## Components

- Section components are named exports in `components/`.
- shadcn primitives live in `components/ui/` — do not edit.
- Use content types from `content/content.ts` for props.

## Content

- Types and defaults live together in `content/content.ts`.
- `getContent()` is the accessor function.
- Every section gets a matching type in the root `SiteContent`.

## Adding Sections

1. Add content type + defaults to `content/content.ts`.
2. Create `components/<Name>Section.tsx`.
3. Import and render in `app/page.tsx`.
4. Need a new shadcn component? `npx shadcn@latest add <name>`.

## Git

- Imperative mood, lowercase (e.g. `add hero section`).
- One logical change per commit.
