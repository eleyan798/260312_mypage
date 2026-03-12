import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

function yearLabel(year: string) {
  const match = year.match(/\d{4}/);
  return match ? match[0] : year;
}

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <section className="px-7 py-7 md:px-8 md:py-8">
      <div className="space-y-14">
        {projects.map((project) => (
          <section key={project.slug} className="space-y-4 border-t border-stone-200 pt-4">
            <p className="text-[26px] text-stone-500">{yearLabel(project.year)}</p>
            <Link
              href={`/projects/${project.slug}`}
              className="block max-w-[640px] overflow-hidden rounded-2xl border border-stone-200 bg-[#f7f7f7]"
            >
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                width={project.cover.width}
                height={project.cover.height}
                className="h-auto w-full object-cover"
                sizes="(max-width: 900px) 100vw, 640px"
              />
              <div className="space-y-1 px-4 py-3">
                <p className="text-[24px] font-medium text-[#19223a]">{project.title}</p>
                <p className="text-[20px] text-[#22304f]">{project.medium}</p>
              </div>
            </Link>
          </section>
        ))}
      </div>
    </section>
  );
}