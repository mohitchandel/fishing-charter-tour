import Image from "next/image";
import Link from "next/link";
import { criteria, partnersImage, trips } from "@/lib/site";
import { FadeIn, RevealImage, SplitText } from "./motion";
import { SectionLabel } from "./section-label";

export function HowSection() {
  return (
    <section id="how" className="py-28 md:py-40">
      <div className="container-luxe">
        <SectionLabel index="04">How we choose</SectionLabel>

        <div className="mt-10 grid gap-12 md:mt-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <SplitText
              as="h2"
              text="We ride first. You book second."
              className="text-[clamp(2.4rem,5vw,5rem)] leading-[0.98] font-light"
            />
            <FadeIn>
              <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
                Key West has more than a hundred fishing charters. We fished on forty of them and kept four.
                We don&rsquo;t own boats or employ captains, so the only thing we have to sell is our judgement.
              </p>
            </FadeIn>
            <RevealImage className="mt-12 aspect-[4/3] md:mt-16">
              <Image src={partnersImage} alt="Offshore reel rigged and ready on a charter boat" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </RevealImage>
          </div>

          <ol className="md:col-span-5 md:col-start-8 md:pt-6">
            {criteria.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.06}>
                <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-8 last:border-b">
                  <span className="font-serif text-xl text-brass italic">0{i + 1}</span>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-light tracking-tight">{c.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{c.body}</p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>

        {/* Partner captains */}
        <div className="mt-32 border-t border-line pt-16 md:mt-40 md:pt-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionLabel index="05">The captains who made the cut</SectionLabel>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Independent, local and licensed. Each one runs their own boat and their own trip.
            </p>
          </div>
          <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {trips.map((t, i) => (
              <FadeIn key={t.slug} delay={i * 0.08}>
                <li>
                  <Link href={`/trips/${t.slug}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden bg-ink">
                      <Image
                        src={t.operator.image}
                        alt={`${t.operator.name}'s boat`}
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover transition-transform duration-1000 ease-luxe group-hover:scale-105"
                      />
                    </div>
                    <p className="label mt-5 text-muted-foreground">{t.operator.marina}</p>
                    <p className="mt-2 text-xl font-light tracking-tight">{t.operator.captain}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t.operator.name} · {t.operator.boat}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-3 border-b border-line pb-1 text-sm transition-colors group-hover:border-ink">
                      {t.name} <span className="transition-transform duration-500 ease-luxe group-hover:translate-x-1">→</span>
                    </p>
                  </Link>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
