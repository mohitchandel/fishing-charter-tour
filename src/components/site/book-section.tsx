import { bookingOpen } from "@/lib/site";
import { FadeIn, SplitText } from "./motion";
import { SectionLabel } from "./section-label";
import { ViatorWidget } from "./viator-widget";

export function BookSection() {
  return (
    <section id="book" className="border-t border-line bg-paper py-28 md:py-40">
      <div className="container-luxe grid gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <SectionLabel index="07">Booking</SectionLabel>
          <SplitText
            as="h2"
            text={bookingOpen ? "Choose your date." : "Choose first. Book when you’re sure."}
            className="mt-8 text-[clamp(2.4rem,4.6vw,4.5rem)] leading-[0.98] font-light"
          />
          <FadeIn>
            <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
              {bookingOpen
                ? "You book and pay on the booking platform, and its cancellation terms apply. We may earn a commission at no extra cost to you."
                : "We're a guide, so we don't take payments or hold dates. When online booking opens, we'll say who takes the payment and whether we earn a commission."}
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.1} className="md:col-span-6 md:col-start-7">
          <ViatorWidget />
        </FadeIn>
      </div>
    </section>
  );
}
