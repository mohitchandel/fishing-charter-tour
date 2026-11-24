import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, trips } from "@/lib/site";
import { FadeIn, RevealImage, SplitText } from "@/components/site/motion";
import { SectionLabel } from "@/components/site/section-label";
import { TripHero } from "@/components/site/trip-hero";
import { ViatorWidget } from "@/components/site/viator-widget";

// Every trip comes from local data, so the whole route is prerendered.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return trips.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/trips/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const trip = trips.find((t) => t.slug === slug);
  if (!trip) return {};
  return { title: `${trip.name} in Key West`, description: trip.short, alternates: { canonical: `/trips/${slug}` }, openGraph: { images: [trip.image] } };
}

export default function TripPage({ params }: PageProps<"/trips/[slug]">) {
  return (
    <Suspense fallback={<div className="h-[100svh] bg-ink" />}>
      <TripContent params={params} />
    </Suspense>
  );
}

async function TripContent({ params }: { params: PageProps<"/trips/[slug]">["params"] }) {
  const { slug } = await params;
  const index = trips.findIndex((t) => t.slug === slug);
  const trip = trips[index];
  if (!trip) notFound();
  const next = trips[(index + 1) % trips.length];

  const facts = [
    ["Usual length", trip.duration],
    ["Water", trip.water],
    ["Suits", trip.suits],
    ["How you fish", trip.fishing],
  ];

  return (
    <>
      <TripHero trip={trip} index={index} />

      <section className="py-24 md:py-36">
        <div className="container-luxe grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <SectionLabel index="01">The trip</SectionLabel>
            <FadeIn>
              <p className="mt-10 text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.25] font-light tracking-[-0.02em]">
                {trip.description}
              </p>
            </FadeIn>

            <dl className="mt-16 border-t border-line">
              {facts.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                  <dt className="label text-muted-foreground">{k}</dt>
                  <dd className="max-w-[60%] text-right">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-20 grid gap-12 sm:grid-cols-2">
              <FadeIn>
                <SectionLabel index="02">What you may catch</SectionLabel>
                <ul className="mt-8 space-y-4 text-xl font-light">
                  {trip.targets.map((t) => (
                    <li key={t} className="border-b border-line pb-4">
                      {t}
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.1}>
                <SectionLabel index="03">What to ask</SectionLabel>
                <ul className="mt-8 space-y-4 text-xl font-light">
                  {trip.ask.map((t) => (
                    <li key={t} className="border-b border-line pb-4">
                      {t}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>

          <aside id="book" className="scroll-mt-24 md:sticky md:top-24 md:col-span-5 md:col-start-8 md:self-start">
            <ViatorWidget widgetRef={trip.viatorWidgetRef} />
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              {site.disclosure} See our{" "}
              <Link href="/disclosure" className="underline underline-offset-4">
                affiliate disclosure
              </Link>
              .
            </p>
          </aside>
        </div>
      </section>

      {/* Next trip type */}
      <Link href={`/trips/${next.slug}`} className="group block bg-ink text-bone">
        <div className="container-luxe grid items-end gap-10 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <p className="label text-bone/60">Next trip type</p>
            <SplitText
              text={next.name}
              className="mt-6 block text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] font-light"
            />
            <p className="mt-6 inline-flex items-center gap-4 border-b border-bone/40 pb-2 text-sm transition-colors group-hover:border-bone">
              Read about it <span className="transition-transform duration-500 ease-luxe group-hover:translate-x-1.5">→</span>
            </p>
          </div>
          <RevealImage className="aspect-[4/3] md:col-span-4 md:col-start-9">
            <Image src={next.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-1000 ease-luxe group-hover:scale-105" />
          </RevealImage>
        </div>
      </Link>
    </>
  );
}
