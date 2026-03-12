import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information for commissions, editorial, and exhibitions.",
};

export default function ContactPage() {
  return (
    <section className="max-w-4xl px-7 py-8 md:px-8">
      <h1 className="mb-5 text-5xl font-semibold text-[#0f1b33]">Contact</h1>
      <div className="space-y-2 border-t border-stone-200 pt-6 text-lg text-stone-700">
        <p>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
        <p>Instagram: <a href={siteConfig.instagram} target="_blank" rel="noreferrer">@eleyan798</a></p>
        <p>GitHub: @eleyan798</p>
        <p>Xiaohongshu: @eleyan798</p>
      </div>
    </section>
  );
}
