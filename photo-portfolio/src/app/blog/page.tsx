import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on process, exhibitions, and photobooks.",
};

export default function BlogPage() {
  return (
    <section className="max-w-4xl px-7 py-8 md:px-8">
      <h1 className="mb-5 text-5xl font-semibold text-[#0f1b33]">Blog</h1>
      <div className="border-t border-stone-200 pt-6 text-xl text-stone-600">Coming soon.</div>
    </section>
  );
}
