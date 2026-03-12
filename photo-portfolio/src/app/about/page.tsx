import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Artist statement and biography.",
};

export default function AboutPage() {
  return (
    <section className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
      <h1 className="font-serif text-5xl text-ink md:text-6xl">About</h1>
      <div className="space-y-6 text-base leading-8 text-stone-700">
        <p>
          Lin Yao is a photographer based in Shanghai. Her practice focuses on subtle transitions in urban edge zones,
          coastlines, and family landscapes.
        </p>
        <p>
          Working primarily with medium-format digital systems, she builds long-term projects where images are arranged
          as quiet sequences rather than isolated highlights.
        </p>
        <p>
          Her work has been exhibited in independent spaces and photobook fairs across East Asia, with current research
          centered on memory and infrastructure.
        </p>
      </div>
    </section>
  );
}