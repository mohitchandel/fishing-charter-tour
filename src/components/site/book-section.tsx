import { site } from "@/lib/site";
import { FadeIn, SplitText } from "./motion";
import { SectionLabel } from "./section-label";
import { ViatorWidget } from "./viator-widget";

export function BookSection() {
  return (
    <section id="book" className="border-t border-line bg-paper py-28 md:py-40">
      <div className="container-luxe grid gap-16 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <SectionLabel index="07">Reservations</SectionLabel>
          <SplitText
            as="h2"
            text="Choose your date. Book in a minute."
            className="mt-8 text-[clamp(2.4rem,4.6vw,4.5rem)] leading-[0.98] font-light"
          />
          <FadeIn>
            <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
              Bookings are taken securely by Viator, the platform our partner captains use, at the
              same price as booking direct. Winter and spring-break dates fill early, so reserve two to
              three weeks ahead.
            </p>
            <dl className="mt-12 max-w-md border-t border-line">
              {[
                ["Payment", "Secure, via Viator"],
                ["Price", "Same as booking direct"],
                ["Cancellation", "Free up to 24 hours before"],
                ["Questions", site.phone],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                  <dt className="label text-muted-foreground">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>
        <FadeIn delay={0.1} className="md:col-span-6 md:col-start-7">
          <ViatorWidget />
        </FadeIn>
      </div>
    </section>
  );
}
