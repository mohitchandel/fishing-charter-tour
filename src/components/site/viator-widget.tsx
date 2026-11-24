"use client";

import Script from "next/script";
import { site, viator } from "@/lib/site";

const days = ["S", "M", "T", "W", "T", "F", "S"];
const booked = [3, 4, 10, 11, 17, 25];

/**
 * Embeds the Viator partner booking widget.
 * Until a partner ID + widget ref are configured (see src/lib/site.ts),
 * it renders a placeholder with the widget's footprint.
 */
export function ViatorWidget({ widgetRef, tripName }: { widgetRef?: string; tripName?: string }) {
  const ref = widgetRef || viator.widgetRef;
  const configured = Boolean(viator.partnerId && ref);

  if (configured) {
    return (
      <div className="min-h-[460px] w-full" data-lenis-prevent>
        <div data-vi-partner-id={viator.partnerId} data-vi-widget-ref={ref} />
        <Script src={viator.scriptSrc} strategy="afterInteractive" />
      </div>
    );
  }

  return (
    <div role="region" aria-label="Booking calendar (placeholder)" className="border border-line bg-bone p-6 md:p-10">
      <div className="flex items-baseline justify-between gap-4 border-b border-line pb-6">
        <div>
          <p className="label text-muted-foreground">{tripName ?? "Live availability"}</p>
          <p className="mt-2 text-3xl font-light tracking-tight">
            December <span className="font-serif italic">2026</span>
          </p>
        </div>
        <p className="label text-muted-foreground">via Viator</p>
      </div>

      <div className="mt-6 grid grid-cols-7 text-center" aria-hidden>
        {days.map((d, i) => (
          <span key={i} className="label py-3 text-muted-foreground">
            {d}
          </span>
        ))}
        {Array.from({ length: 31 }).map((_, i) => {
          const selected = i === 13;
          const isBooked = booked.includes(i);
          return (
            <span key={i} className="grid place-items-center py-1">
              <span
                className={
                  selected
                    ? "grid size-10 place-items-center rounded-full bg-ink text-bone"
                    : isBooked
                      ? "grid size-10 place-items-center text-muted-foreground/40 line-through"
                      : "grid size-10 place-items-center rounded-full transition-colors hover:bg-ink/5"
                }
              >
                {i + 1}
              </span>
            </span>
          );
        })}
      </div>

      <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-muted-foreground">
        Live booking opens here once the Viator calendar is connected. Questions before then? Call us at{" "}
        <a href={site.phoneHref} className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
          {site.phone}
        </a>
        .
      </p>
    </div>
  );
}
