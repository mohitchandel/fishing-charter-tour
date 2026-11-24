"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { reviews, site } from "@/lib/site";
import { ease } from "./motion";
import { SectionLabel } from "./section-label";

export function ReviewsSection() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  const go = (d: number) => setI((v) => (v + d + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="grain relative bg-ink-soft py-28 text-bone md:py-40">
      <div className="container-luxe">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <SectionLabel index="06" className="text-bone/70">
            Guest notes
          </SectionLabel>
          <p className="label text-bone/60">
            {site.rating.score} / 5 · {site.rating.count} reviews on {site.rating.source}
          </p>
        </div>

        <div className="mt-16 min-h-[22rem] md:mt-24 md:min-h-[24rem]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
              transition={{ duration: 0.7, ease }}
            >
              <blockquote className="max-w-5xl font-serif text-[clamp(1.9rem,3.8vw,3.75rem)] leading-[1.12] tracking-[-0.01em]">
                &ldquo;{r.body}&rdquo;
              </blockquote>
              <figcaption className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="text-lg">{r.name}</span>
                <span className="label text-bone/50">
                  {r.from} · {r.trip}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-bone/15 pt-6">
          <p className="font-serif text-xl italic tabular-nums">
            0{i + 1} <span className="text-bone/40">/ 0{reviews.length}</span>
          </p>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="grid size-12 place-items-center rounded-full border border-bone/30 transition-colors hover:bg-bone hover:text-ink"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="grid size-12 place-items-center rounded-full border border-bone/30 transition-colors hover:bg-bone hover:text-ink"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
