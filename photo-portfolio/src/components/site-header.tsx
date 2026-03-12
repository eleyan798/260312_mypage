import Link from "next/link";

const links = [
  { href: "/", label: "Work Index" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between md:py-10">
      <Link href="/" className="text-sm tracking-[0.08em] text-stone-700 uppercase">
        Ele Yan 杨彦
      </Link>
      <nav aria-label="Main navigation">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs tracking-[0.1em] text-stone-500 uppercase">
          {links.map((link) => (
            <li key={link.href}>
              <Link className="transition-colors hover:text-ink" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}