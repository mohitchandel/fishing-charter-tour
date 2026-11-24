import type { Metadata } from "next";
import { Hero } from "@/components/site/hero";
import { IntroSection } from "@/components/site/intro-section";
import { ChartersSection } from "@/components/site/charters-section";
import { DayAboard } from "@/components/site/day-aboard";
import { HowSection } from "@/components/site/how-section";
import { SeasonsSection } from "@/components/site/seasons-section";
import { GuidesSection } from "@/components/site/guides-section";
import { MarqueeGallery } from "@/components/site/marquee-gallery";
import { BookSection } from "@/components/site/book-section";
import { FaqSection } from "@/components/site/faq-section";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ChartersSection />
      <DayAboard />
      <HowSection />
      <SeasonsSection />
      <GuidesSection />
      <MarqueeGallery />
      <BookSection />
      <FaqSection />
    </>
  );
}
