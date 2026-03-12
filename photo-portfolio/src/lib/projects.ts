import { projects } from "@/content/projects";

export function getAllProjects() {
  return [...projects].sort((a, b) => b.year.localeCompare(a.year));
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
