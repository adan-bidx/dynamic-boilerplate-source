import { getContent } from "@/content/content";

export const Navbar = () => {
  const { navbar } = getContent();

  return (
    <header className="px-8 pt-8 sm:px-16 sm:pt-12">
      <span className="text-lg font-bold tracking-tight">{navbar.brandName}</span>
    </header>
  );
};
