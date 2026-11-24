import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideList } from "@/components/site/guide-list";
import { PageHero } from "@/components/site/page-hero";
import { Prose, ProseSection } from "@/components/site/prose";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

// Every guide comes from local data, so the whole route is prerendered.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.summary,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: { images: [guide.image] },
  };
}

export default function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  return (
    <Suspense fallback={<div className="h-[100svh] bg-ink" />}>
      <GuideContent params={params} />
    </Suspense>
  );
}

async function GuideContent({ params }: { params: PageProps<"/guides/[slug]">["params"] }) {
  const { slug } = await params;
  const index = guides.findIndex((g) => g.slug === slug);
  const guide = guides[index];
  if (!guide) notFound();
  const more = [1, 2, 3].map((n) => guides[(index + n) % guides.length]);

  return (
    <>
      <PageHero
        label={
          <Link href="/guides" className="transition-colors hover:text-bone">
            ← All guides
          </Link>
        }
        title={guide.title}
        intro={guide.summary}
      />
      <article className="container-luxe py-20 md:py-32">
        <Prose>
          {guide.sections.map((s) => (
            <ProseSection key={s.heading} heading={s.heading}>
              {s.body?.map((p) => <p key={p}>{p}</p>)}
              {s.list && (
                <ul>
                  {s.list.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              )}
            </ProseSection>
          ))}
          <ProseSection heading="Sources">
            <ul>
              {guide.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} rel="noopener">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-base">
              Last checked {site.updated}. Rules and prices change, so confirm them with the operator before you book.
            </p>
          </ProseSection>
        </Prose>
      </article>
      <section className="border-t border-line bg-paper py-20 md:py-28">
        <div className="container-luxe">
          <h2 className="text-3xl font-light md:text-4xl">More guides</h2>
          <GuideList guides={more} className="mt-12" />
        </div>
      </section>
    </>
  );
}
