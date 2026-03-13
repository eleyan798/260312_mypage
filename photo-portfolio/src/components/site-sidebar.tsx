import Link from "next/link";
import { Project } from "@/types/project";

type SiteSidebarProps = {
  projects: Project[];
};

export function SiteSidebar({ projects }: SiteSidebarProps) {
  return (
    <aside className="border-b border-stone-300 bg-[#ececec] px-5 py-7 md:sticky md:top-0 md:h-screen md:w-[314px] md:overflow-y-auto md:border-b-0 md:border-r md:px-5 md:py-8">
      <div className="space-y-9 text-[#7f8591]">
        <div className="space-y-1">
          <Link href="/" className="block text-sm font-semibold tracking-[0.08em] uppercase text-[#7e8490]">
            ELE YAN 798
          </Link>
          <p className="text-[28px] leading-none text-[#757b87] md:text-[26px]">林培燊</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7c828e]">Project Index</h2>
          <ul className="space-y-2 text-[13px] leading-5">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/projects/${project.slug}`} className="hover:text-[#313642]">
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-[11px] font-semibold tracking-[0.08em] uppercase text-[#7c828e]">Site Links</h2>
          <ul className="space-y-1 text-[13px] leading-6">
            <li><Link href="/work" className="hover:text-[#313642]">Work Index</Link></li>
            <li><Link href="/about" className="hover:text-[#313642]">About</Link></li>
            <li><Link href="/cv" className="hover:text-[#313642]">CV</Link></li>
            <li><Link href="/blog" className="hover:text-[#313642]">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-[#313642]">Contact</Link></li>
          </ul>
        </section>
      </div>
    </aside>
  );
}