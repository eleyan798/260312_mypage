import Image from "next/image";
import { ProjectBlock } from "@/types/project";

export function ProjectBlockRenderer({ block }: { block: ProjectBlock }) {
  if (block.type === "text") {
    return (
      <section className="max-w-4xl border-t border-stone-200 pt-6">
        {block.title ? <h3 className="mb-3 text-xl font-semibold text-stone-700">{block.title}</h3> : null}
        <p className="text-lg leading-9 text-stone-700">{block.content}</p>
      </section>
    );
  }

  if (block.type === "pair") {
    return (
      <section className="space-y-3">
        <div className="grid gap-4 md:grid-cols-2">
          <Image
            src={block.left.src}
            alt={block.left.alt}
            width={block.left.width}
            height={block.left.height}
            className="h-auto w-full object-cover"
            sizes="(max-width: 900px) 100vw, 38vw"
          />
          <Image
            src={block.right.src}
            alt={block.right.alt}
            width={block.right.width}
            height={block.right.height}
            className="h-auto w-full object-cover"
            sizes="(max-width: 900px) 100vw, 38vw"
          />
        </div>
        {block.caption ? <p className="text-sm text-stone-500">{block.caption}</p> : null}
      </section>
    );
  }

  return (
    <section className="space-y-3">
      <Image
        src={block.image.src}
        alt={block.image.alt}
        width={block.image.width}
        height={block.image.height}
        className="h-auto w-full max-w-[1100px] object-cover"
        sizes="(max-width: 1200px) 100vw, 70vw"
      />
      {block.caption ? <p className="text-sm text-stone-500">{block.caption}</p> : null}
    </section>
  );
}
