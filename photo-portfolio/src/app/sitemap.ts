import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/cv", "/contact", "/blog"];
  const projectPages = getAllProjects().map((project) => `/projects/${project.slug}`);

  return [...staticPages, ...projectPages].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}