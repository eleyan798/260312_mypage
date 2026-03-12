import Link from "next/link";

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between md:py-12">
      <div className="space-y-2">
        <Link href="/" className="font-serif text-4xl tracking-wide text-ink md:text-5xl">
          Ele Yan 798
        </Link>
        <p className="max-w-xl text-sm tracking-[0.12em] text-stone-500 uppercase">
          Photography Archive and Ongoing Projects
        </p>
      </div>
      <nav aria-label="Main navigation">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm tracking-[0.08em] text-stone-600 uppercase">
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
