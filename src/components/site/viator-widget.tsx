"use client";

import Link from "next/link";
import Script from "next/script";
import { viator } from "@/lib/site";

/**
 * Embeds the Viator partner booking widget.
 * Until a partner ID + widget ref are configured (see src/lib/site.ts),
 * it says that online booking is coming soon.
 */
export function ViatorWidget({ widgetRef }: { widgetRef?: string }) {
  const ref = widgetRef || viator.widgetRef;

  if (viator.partnerId && ref) {
    return (
      <div className="min-h-[460px] w-full" data-lenis-prevent>
        <div data-vi-partner-id={viator.partnerId} data-vi-widget-ref={ref} />
        <Script src={viator.scriptSrc} strategy="afterInteractive" />
      </div>
    );
  }

  return (
    <div className="border border-line bg-bone p-6 md:p-10">
      <p className="label text-muted-foreground">Online booking</p>
      <p className="mt-4 text-3xl font-light tracking-tight">
        Coming <span className="font-serif italic">soon</span>
      </p>
      <p className="mt-6 leading-relaxed text-muted-foreground">
        You can&rsquo;t book here yet. For now, use the guides to choose a trip, then book with the operator you prefer.
      </p>
      <ul className="mt-8 border-t border-line">
        {[
          { href: "/guides/how-to-choose-a-charter", label: "How to choose a charter" },
          { href: "/guides/what-a-charter-costs", label: "What a charter costs" },
          { href: "/guides/what-to-bring", label: "What to bring" },
        ].map((l) => (
          <li key={l.href} className="border-b border-line">
            <Link href={l.href} className="group flex items-center justify-between gap-6 py-4">
              {l.label}
              <span className="transition-transform duration-500 ease-luxe group-hover:translate-x-1">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
