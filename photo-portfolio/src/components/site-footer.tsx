import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 py-8 text-xs tracking-[0.08em] text-stone-500 uppercase">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.artistName}</p>
        <p>Built with Next.js + TypeScript + Tailwind</p>
      </div>
    </footer>
  );
}
