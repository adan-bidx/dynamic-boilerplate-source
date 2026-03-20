// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  heading: string;
  description: string;
  hint: string;
  primaryCta: string;
  secondaryCta: string;
};

// ─── Navbar ─────────────────────────────────────────────────────────────────
export type NavbarContent = {
  brandName: string;
};

// ─── Root ───────────────────────────────────────────────────────────────────
export type SiteContent = {
  hero: HeroContent;
  navbar: NavbarContent;
};

// ─── Defaults ───────────────────────────────────────────────────────────────

export const defaultContent: SiteContent = {
  hero: {
    heading: "To get started, edit the page.tsx file.",
    description: "Looking for a starting point or more instructions?",
    hint: "Head over to Templates or the Learning center.",
    primaryCta: "Deploy Now",
    secondaryCta: "Documentation",
  },
  navbar: {
    brandName: "NEXT.JS",
  },
};

export const siteContent: SiteContent = defaultContent;

export function getContent(): SiteContent {
  return siteContent;
}
