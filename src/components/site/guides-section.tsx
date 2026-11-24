import { guides } from "@/lib/guides";
import { FadeIn, SplitText } from "./motion";
import { GuideList } from "./guide-list";
import { SectionLabel } from "./section-label";

export function GuidesSection() {
  return (
    <section className="py-28 md:py-40">
      <div className="container-luxe">
        <SectionLabel index="06">Guides</SectionLabel>
        <SplitText
          as="h2"
          text="Read before you book."
          className="mt-8 text-[clamp(2.4rem,5vw,5rem)] leading-[0.98] font-light"
        />
        <FadeIn>
          <GuideList guides={guides} className="mt-14 md:mt-20" />
        </FadeIn>
      </div>
    </section>
  );
}
