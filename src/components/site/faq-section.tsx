import { faqs } from "@/lib/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeIn, SplitText } from "./motion";
import { SectionLabel } from "./section-label";

export function FaqSection() {
  return (
    <section id="faq" className="py-28 md:py-40">
      <div className="container-luxe grid gap-14 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-4">
          <SectionLabel index="08">Questions</SectionLabel>
          <SplitText as="h2" text="Before you board." className="mt-8 text-[clamp(2.4rem,4.6vw,4.5rem)] leading-[0.98] font-light" />
        </div>
        <FadeIn className="md:col-span-7 md:col-start-6">
          <Accordion className="border-t border-line">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={f.q} className="border-b border-line">
                <AccordionTrigger className="items-baseline gap-6 rounded-none py-7 text-left text-xl font-normal tracking-tight hover:no-underline md:text-2xl">
                  <span className="flex items-baseline gap-6">
                    <span className="font-serif text-base text-brass italic">0{i + 1}</span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-8 pl-11 text-base leading-relaxed text-muted-foreground md:max-w-2xl">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
