"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "motion/react";
import { trips } from "@/lib/site";
import { ease, FadeIn, SplitText } from "./motion";
import { SectionLabel } from "./section-label";

export function ChartersSection() {
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 24, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 180, damping: 24, mass: 0.6 });

  return (
    <section id="trips" className="bg-ink py-28 text-bone md:py-40">
      <div className="container-luxe">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel index="02" className="text-bone/70">
              Trip types
            </SectionLabel>
            <SplitText
              as="h2"
              text="Four ways to spend a day on the water."
              className="mt-8 text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[0.98] font-light"
            />
          </div>
          <FadeIn className="md:col-span-4 md:col-start-9">
            <p className="max-w-sm leading-relaxed text-bone/70">
              These are types of trip, not adverts for a boat. Each page covers who it suits, what you may
              catch and what to ask.
            </p>
          </FadeIn>
        </div>

        <ul
          className="relative mt-20 border-t border-bone/15 md:mt-28"
          onMouseMove={(e) => {
            x.set(e.clientX);
            y.set(e.clientY);
          }}
          onMouseLeave={() => setActive(null)}
        >
          {trips.map((t, i) => (
            <li key={t.slug} className="border-b border-bone/15">
              <Link
                href={`/trips/${t.slug}`}
                onMouseEnter={() => setActive(i)}
                className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-4 py-8 md:py-11"
              >
                {/* mobile image */}
                <div className="relative col-span-12 aspect-[16/10] overflow-hidden md:hidden">
                  <Image src={t.image} alt="" fill sizes="100vw" className="object-cover" />
                </div>
                <span className="col-span-2 font-serif text-lg text-brass-soft italic md:col-span-1">0{i + 1}</span>
                <span className="col-span-10 text-[clamp(1.9rem,4.4vw,4.25rem)] leading-none font-light tracking-[-0.04em] transition-transform duration-700 ease-luxe md:col-span-6 md:group-hover:translate-x-4">
                  {t.name}
                </span>
                <span className="label col-span-10 col-start-3 text-bone/60 md:col-span-2 md:col-start-auto">
                  {t.duration}
                </span>
                <span className="col-span-10 col-start-3 flex items-baseline justify-between gap-6 text-bone/70 md:col-span-3 md:col-start-auto">
                  <span className="text-sm">{t.water}</span>
                  <span className="hidden size-11 shrink-0 place-items-center rounded-full border border-bone/30 transition-all duration-500 group-hover:border-bone group-hover:bg-bone group-hover:text-ink md:grid">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}

          {/* Cursor-following preview (desktop, pointer devices) */}
          <motion.div
            aria-hidden
            style={{ x: sx, y: sy }}
            className="pointer-events-none fixed top-0 left-0 z-30 hidden [@media(hover:hover)]:md:block"
          >
            <AnimatePresence>
              {active !== null && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.45, ease }}
                  className="relative -mt-40 ml-8 h-[260px] w-[200px] overflow-hidden"
                >
                  {trips.map((t, i) => (
                    <motion.div
                      key={t.slug}
                      className="absolute inset-0"
                      initial={false}
                      animate={{ clipPath: active === i ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)" }}
                      transition={{ duration: 0.6, ease }}
                    >
                      <Image src={t.image} alt="" fill sizes="200px" className="object-cover" />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </ul>
      </div>
    </section>
  );
}
