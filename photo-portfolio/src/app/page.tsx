import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/projects";

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <section className="space-y-8">
      <div className="max-w-3xl space-y-4 pb-6">
        <p className="text-xs tracking-[0.08em] text-stone-500 uppercase">Selected Works</p>
        <p className="text-base leading-8 text-stone-700 md:text-lg">
          This index presents photographic projects in chronological fragments. Each project page keeps a slow rhythm,
          balancing image sequence, silence, and context.
        </p>
      </div>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}