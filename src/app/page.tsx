import { Hero } from "@/components/site/hero";
import { IntroSection } from "@/components/site/intro-section";
import { ChartersSection } from "@/components/site/charters-section";
import { DayAboard } from "@/components/site/day-aboard";
import { HowSection } from "@/components/site/how-section";
import { ReviewsSection } from "@/components/site/reviews-section";
import { MarqueeGallery } from "@/components/site/marquee-gallery";
import { BookSection } from "@/components/site/book-section";
import { FaqSection } from "@/components/site/faq-section";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ChartersSection />
      <DayAboard />
      <HowSection />
      <ReviewsSection />
      <MarqueeGallery />
      <BookSection />
      <FaqSection />
    </>
  );
}
