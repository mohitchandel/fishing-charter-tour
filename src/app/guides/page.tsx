import type { Metadata } from "next";
import { GuideList } from "@/components/site/guide-list";
import { PageHero } from "@/components/site/page-hero";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Key West fishing guides",
  description: "When to go, what it costs, what to bring, the rules, and how to choose a Key West fishing charter.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <>
      <PageHero label="Guides" title="Read before you book." intro="Short, practical guides with the sources listed at the end of each one." />
      <div className="container-luxe py-20 md:py-32">
        <GuideList guides={guides} as="h2" />
      </div>
    </>
  );
}
