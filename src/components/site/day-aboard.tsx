"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { dayAboard } from "@/lib/site";
import { SectionLabel } from "./section-label";

/**
 * Pinned section that scrolls horizontally through a day on the boat.
 * The outer section is tall; the inner panel sticks and slides sideways.
 */
export function DayAboard() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${((dayAboard.length - 1) / (dayAboard.length + 0.6)) * 100}%`]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} aria-labelledby="day-title" className="relative h-[340vh] bg-bone">
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden pt-24 pb-8 md:pt-28">
        <div className="container-luxe flex items-end justify-between gap-6">
          <div>
            <SectionLabel index="03">A typical day</SectionLabel>
            <h2 id="day-title" className="mt-5 text-[clamp(2rem,4vw,3.75rem)] leading-none font-light">
              From first light to <span className="font-serif italic">fillets.</span>
            </h2>
          </div>
          <div className="hidden w-56 md:block">
            <div className="h-px w-full bg-line">
              <motion.div style={{ width: bar }} className="h-px bg-ink" />
            </div>
          </div>
        </div>

        <motion.ol style={{ x }} className="mt-10 flex min-h-0 flex-1 gap-5 pl-5 md:mt-14 md:gap-8 md:pl-10">
          {dayAboard.map((step, i) => (
            <li key={step.time} className="flex h-full w-[82vw] shrink-0 flex-col md:w-[52vw] lg:w-[44vw]">
              <div className="relative min-h-0 flex-1 overflow-hidden">
                <Image src={step.image} alt="" fill sizes="(min-width: 768px) 50vw, 85vw" className="object-cover" />
                <span className="absolute top-5 left-5 font-serif text-2xl text-bone italic drop-shadow">0{i + 1}</span>
              </div>
              <div className="mt-6 grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2">
                <span className="text-3xl font-light tracking-tight md:text-4xl">{step.time}</span>
                <h3 className="text-xl font-normal tracking-tight md:text-2xl">{step.title}</h3>
                <p className="col-start-2 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{step.body}</p>
              </div>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
