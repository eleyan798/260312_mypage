import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function HomePage() {
  const projects = getAllProjects();
  const latestProject = projects[0];

  return (
    <section className="relative min-h-[58vh] md:min-h-screen">
      {latestProject ? (
        <Image
          src={latestProject.cover.src}
          alt={latestProject.cover.alt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, calc(100vw - 314px)"
        />
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-black/12 to-transparent" />

      <div className="absolute bottom-8 left-8 z-10 text-white md:bottom-10 md:left-8">
        <p className="text-[22px] font-medium tracking-[0.02em]">祝我梦到那种有你的梦.</p>
        <div className="mt-2 flex gap-5 text-[25px] font-medium tracking-[0.03em]">
          <Link href="/work" className="border-b border-white/80 pb-0.5 leading-none">ENTER WORK</Link>
          {latestProject ? (
            <Link href={`/projects/${latestProject.slug}`} className="border-b border-white/80 pb-0.5 leading-none">
              LATEST PROJECT
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}