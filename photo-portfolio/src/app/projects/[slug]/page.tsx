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
    <article className="px-7 py-8 md:px-7">
      <header className="mb-8 space-y-2 border-b border-stone-200 pb-7">
        <p className="text-[26px] text-stone-500">{project.year}</p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-tight text-[#18233d] md:text-6xl">{project.title}</h1>
        <p className="text-[28px] text-[#28324c]">{project.medium}</p>
      </header>

      <div className="space-y-8">
        {project.blocks.map((block, index) => (
          <ProjectBlockRenderer key={`${project.slug}-${index}`} block={block} />
        ))}
      </div>
    </article>
  );
}