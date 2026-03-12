import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact information for commissions, editorial, and exhibitions.",
};

export default function ContactPage() {
  return (
    <section className="space-y-8">
      <h1 className="font-serif text-5xl text-ink md:text-6xl">Contact</h1>
      <p className="max-w-2xl text-base leading-8 text-stone-700">
        For commissions, print inquiries, editorial requests, and exhibition opportunities, please get in touch by
        email. Replies are usually sent within 2-3 business days.
      </p>
      <div className="space-y-2 border-t border-stone-200 pt-6 text-base text-stone-700">
        <p>
          Email: <a className="underline underline-offset-4" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
        <p>
          Instagram: <a className="underline underline-offset-4" href={siteConfig.instagram} target="_blank" rel="noreferrer">@linyao.photo</a>
        </p>
      </div>
    </section>
  );
}