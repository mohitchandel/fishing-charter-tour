import { months, seasons, seasonSources } from "@/lib/seasons";
import { cn } from "@/lib/utils";
import { FadeIn, SplitText } from "./motion";
import { SectionLabel } from "./section-label";

export function SeasonsSection() {
  return (
    <section id="seasons" className="grain relative bg-ink-soft py-28 text-bone md:py-40">
      <div className="container-luxe">
        <SectionLabel index="05" className="text-bone/70">
          Seasons
        </SectionLabel>
        <div className="mt-8 grid gap-8 md:grid-cols-12 md:items-end">
          <SplitText
            as="h2"
            text="What bites, and when."
            className="text-[clamp(2.4rem,5vw,5rem)] leading-[0.98] font-light md:col-span-7"
          />
          <FadeIn className="md:col-span-4 md:col-start-9">
            <p className="leading-relaxed text-bone/70">
              We compared two published calendars. A filled square means both call it a peak month, an outline
              means one does. Fish don&rsquo;t read charts, so treat it as a guide.
            </p>
          </FadeIn>
        </div>

        {/* Wide table: scrolls sideways on phones. "relative" keeps the sr-only text inside the scroll box. */}
        <div className="relative mt-14 overflow-x-auto md:mt-20" tabIndex={0} role="region" aria-label="Season chart">
          <table className="w-full min-w-[46rem] table-fixed border-collapse text-left">
            <thead>
              <tr>
                <th scope="col" className="label sticky left-0 z-10 w-36 bg-ink-soft pb-5 text-bone/60">
                  Fish
                </th>
                {months.map((m) => (
                  <th key={m} scope="col" className="pb-5 text-center text-sm font-normal text-bone/60">
                    {m}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {seasons.map((s) => (
                <tr key={s.name} className="border-t border-bone/15">
                  <th scope="row" className="sticky left-0 z-10 bg-ink-soft py-4 pr-4 text-lg font-light whitespace-nowrap">
                    {s.name}
                  </th>
                  {s.months.map((r, i) => (
                    <td key={i} className="text-center">
                      <span
                        aria-hidden
                        className={cn(
                          "mx-auto block size-4",
                          r === "peak" && "bg-brass-soft",
                          r === "good" && "border border-brass-soft",
                        )}
                      />
                      <span className="sr-only">{r === "peak" ? "Peak" : r === "good" ? "Good" : "Quieter"}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-x-10 gap-y-4 border-t border-bone/15 pt-6 text-sm text-bone/70">
          <div className="flex gap-8">
            <span className="flex items-center gap-3">
              <span aria-hidden className="size-4 bg-brass-soft" /> Peak
            </span>
            <span className="flex items-center gap-3">
              <span aria-hidden className="size-4 border border-brass-soft" /> Good
            </span>
          </div>
          <p>
            Some fish are closed to harvest or must be released. Sources:{" "}
            {seasonSources.map((s, i) => (
              <span key={s.href}>
                {i > 0 && "; "}
                <a href={s.href} rel="noopener" className="underline decoration-bone/30 underline-offset-4 hover:decoration-bone">
                  {s.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
