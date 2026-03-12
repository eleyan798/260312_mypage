import Link from "next/link";

export default function NotFound() {
  return (
    <section className="space-y-6 py-16">
      <h1 className="font-serif text-5xl text-ink">Page Not Found</h1>
      <p className="text-base text-stone-700">The page you requested does not exist or has moved.</p>
      <Link href="/" className="text-sm tracking-[0.08em] text-stone-500 uppercase hover:text-ink">
        Back to Work Index
      </Link>
    </section>
  );
}