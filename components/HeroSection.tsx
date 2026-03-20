import { getContent } from "@/content/content";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const { hero } = getContent();

  return (
    <section className="flex min-h-[calc(100vh-100px)] flex-col justify-center px-8 sm:px-16 max-w-2xl">
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl leading-tight">
        {hero.heading}
      </h1>
      <p className="mt-5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {hero.description}
      </p>
      <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {hero.hint}
      </p>
      <div className="mt-8 flex items-center gap-3">
        <Button className="rounded-full px-6">{hero.primaryCta}</Button>
        <Button variant="outline" className="rounded-full px-6">
          {hero.secondaryCta}
        </Button>
      </div>
    </section>
  );
};
