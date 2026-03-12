import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectBlockRenderer } from "@/components/project-block-renderer";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.intro,
    openGraph: {
      title: project.title,
      description: project.intro,
      images: [{ url: project.cover.src, alt: project.cover.alt }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <header className="max-w-4xl space-y-4 pb-6">
        <p className="text-xs tracking-[0.08em] text-stone-500 uppercase">Project</p>
        <h1 className="font-serif text-5xl leading-tight text-ink md:text-6xl">{project.title}</h1>
        <p className="text-sm tracking-[0.08em] text-stone-500 uppercase">
          {project.year} · {project.location} · {project.medium} · {project.duration}
        </p>
        <p className="max-w-3xl text-base leading-8 text-stone-700">{project.intro}</p>
      </header>

      <section className="border-y border-stone-200 py-4">
        <ul className="flex flex-wrap gap-3 text-xs tracking-[0.08em] text-stone-500 uppercase">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </section>

      <div>
        {project.blocks.map((block, index) => (
          <ProjectBlockRenderer block={block} key={`${project.slug}-${index}`} />
        ))}
      </div>
    </article>
  );
}