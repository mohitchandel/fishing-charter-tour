import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/lib/guides";
import { cn } from "@/lib/utils";

export function GuideList({ guides, className, as: Heading = "h3" }: { guides: Guide[]; className?: string; as?: "h2" | "h3" }) {
  return (
    <ul className={cn("grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {guides.map((g) => (
        <li key={g.slug}>
          <Link href={`/guides/${g.slug}`} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden bg-ink">
              <Image
                src={g.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition-transform duration-1000 ease-luxe group-hover:scale-105"
              />
            </div>
            <Heading className="mt-6 text-2xl font-light tracking-tight">{g.title}</Heading>
            <p className="mt-2 leading-relaxed text-muted-foreground">{g.summary}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
