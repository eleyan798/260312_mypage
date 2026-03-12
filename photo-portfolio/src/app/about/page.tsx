import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Artist statement and biography.",
};

export default function AboutPage() {
  return (
    <section className="px-7 py-8 md:px-8">
      <h1 className="mb-4 text-5xl font-semibold text-[#18233d]">About</h1>
      <div className="grid gap-6 border-t border-stone-200 pt-4 lg:grid-cols-[320px_1fr]">
        <div>
          <Image
            src="/images/projects/winter-gathering/01.jpg"
            alt="Artist portrait"
            width={2268}
            height={4032}
            className="h-auto w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 320px"
          />
          <p className="mt-2 text-sm text-stone-500">杨彦 / Ele Yan</p>
        </div>
        <div className="space-y-6 text-[15px] leading-[1.85] text-[#2e3444]">
          <p>
            杨彦（Ele Yan）以影像为基础进行项目化创作，关注同代人之间的日常关系、聚会现场与城市内部空间。
            通过摄影与文本并置，他尝试把短暂的社交时刻转化为可被再次阅读的视觉档案。
          </p>
          <p className="border-t border-stone-200 pt-6">
            Ele Yan is an image-based artist whose practice is rooted in photography. His work focuses on shared
            gatherings, youth friendships, and domestic interiors, building visual records from moments that are
            ordinary yet emotionally dense.
          </p>
        </div>
      </div>
    </section>
  );
}