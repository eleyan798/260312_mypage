import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border-t border-stone-200 py-8 first:border-t-0 md:py-10">
      <Link href={`/projects/${project.slug}`} className="grid gap-6 md:grid-cols-[1.2fr_1fr] md:gap-10">
        <div className="space-y-3">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">{project.title}</h2>
          <p className="text-xs tracking-[0.08em] text-stone-500 uppercase">
            {project.year} · {project.location} · {project.medium}
          </p>
          <p className="max-w-xl text-sm leading-7 text-stone-600">{project.intro}</p>
        </div>
        <div className="overflow-hidden bg-stone-100">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            width={project.cover.width}
            height={project.cover.height}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </Link>
    </article>
  );
}
