import Image from "next/image";
import { ProjectBlock } from "@/types/project";

export function ProjectBlockRenderer({ block }: { block: ProjectBlock }) {
  if (block.type === "text") {
    return (
      <section className="mx-auto max-w-3xl py-10 md:py-14">
        {block.title ? <h3 className="mb-4 font-serif text-3xl text-ink">{block.title}</h3> : null}
        <p className="text-base leading-8 text-stone-700">{block.content}</p>
      </section>
    );
  }

  if (block.type === "pair") {
    return (
      <section className="space-y-4 py-10 md:py-14">
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          <div className="bg-stone-100">
            <Image
              src={block.left.src}
              alt={block.left.alt}
              width={block.left.width}
              height={block.left.height}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="bg-stone-100">
            <Image
              src={block.right.src}
              alt={block.right.alt}
              width={block.right.width}
              height={block.right.height}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        {block.caption ? (
          <p className="text-center text-xs tracking-[0.08em] text-stone-500 uppercase">{block.caption}</p>
        ) : null}
      </section>
    );
  }

  return (
    <section className="space-y-4 py-10 md:py-14">
      <div className="bg-stone-100">
        <Image
          src={block.image.src}
          alt={block.image.alt}
          width={block.image.width}
          height={block.image.height}
          className="h-auto w-full object-cover"
          sizes="100vw"
        />
      </div>
      {block.caption ? (
        <p className="text-center text-xs tracking-[0.08em] text-stone-500 uppercase">{block.caption}</p>
      ) : null}
    </section>
  );
}