import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on process, exhibitions, and photobooks.",
};

const posts = [
  {
    date: "2026-01-12",
    title: "On sequencing Quiet Tide",
    excerpt: "How spacing, repetition, and blank intervals shaped the final order.",
  },
  {
    date: "2025-10-02",
    title: "Photobook fair notes",
    excerpt: "A short list of books that influenced my editing this year.",
  },
];

export default function BlogPage() {
  return (
    <section className="space-y-8">
      <h1 className="font-serif text-5xl text-ink md:text-6xl">Blog</h1>
      <div className="space-y-6 border-t border-stone-200 pt-6">
        {posts.map((post) => (
          <article key={post.title} className="space-y-2">
            <p className="text-xs tracking-[0.08em] text-stone-500 uppercase">{post.date}</p>
            <h2 className="font-serif text-3xl text-ink">{post.title}</h2>
            <p className="text-base leading-8 text-stone-700">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}