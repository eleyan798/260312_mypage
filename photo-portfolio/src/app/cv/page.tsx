import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description: "Exhibitions, publications, and education.",
};

const cvSections = [
  {
    title: "Education",
    items: ["2021-2025  BEng, Southeast University", "2025  Exchange Study, Visual Communication Workshop"],
  },
  {
    title: "Selected Projects",
    items: ["2025  冬夜小聚 / Winter Gathering", "2024  Quiet Tide", "2023  Subway Nocturne"],
  },
  {
    title: "Exhibitions",
    items: ["2025  Group Presentation, Nanjing", "2024  Student Image Week, Shanghai"],
  },
];

export default function CvPage() {
  return (
    <section className="max-w-5xl px-7 py-8 md:px-8">
      <h1 className="mb-5 text-5xl font-semibold text-[#0f1b33]">CV</h1>
      <div className="space-y-10 border-t border-stone-200 pt-6">
        {cvSections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="text-sm font-semibold tracking-[0.08em] text-stone-500 uppercase">{section.title}</h2>
            <ul className="space-y-2 text-lg leading-8 text-stone-700">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
