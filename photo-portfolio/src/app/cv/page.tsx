import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description: "Exhibitions, publications, and education.",
};

const exhibitions = [
  "2025 — Group Exhibition, Slow Looking, Hangzhou",
  "2024 — Solo Presentation, Quiet Tide, Shanghai",
  "2023 — Group Exhibition, Night Transit, Seoul",
];

const publications = [
  "2024 — Winter Orchard (Dummy), self-published",
  "2023 — New East Photo Annual, contributor",
];

const education = ["MFA Photography, 2020, China Academy of Art", "BFA Visual Communication, 2017, Tongji University"];

export default function CvPage() {
  return (
    <section className="space-y-12">
      <h1 className="font-serif text-5xl text-ink md:text-6xl">CV</h1>

      <section className="space-y-4 border-t border-stone-200 pt-6">
        <h2 className="text-xs tracking-[0.08em] text-stone-500 uppercase">Exhibitions</h2>
        <ul className="space-y-3 text-base text-stone-700">
          {exhibitions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-stone-200 pt-6">
        <h2 className="text-xs tracking-[0.08em] text-stone-500 uppercase">Publications</h2>
        <ul className="space-y-3 text-base text-stone-700">
          {publications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-4 border-t border-stone-200 pt-6">
        <h2 className="text-xs tracking-[0.08em] text-stone-500 uppercase">Education</h2>
        <ul className="space-y-3 text-base text-stone-700">
          {education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}