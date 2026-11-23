"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { introImages, stats } from "@/lib/site";
import { FadeIn, ScrollWords } from "./motion";
import { SectionLabel } from "./section-label";

export function IntroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [120, -160]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -260]);
  const y3 = useTransform(scrollYProgress, [0, 1], [200, -120]);

  return (
    <section ref={ref} id="experience" className="relative overflow-hidden py-28 md:py-44">
      <div className="container-luxe">
        <SectionLabel index="01">Why Hooked on Tours</SectionLabel>

        <div className="relative mt-14 md:mt-20">
          <ScrollWords
            text="Picking a charter in Key West is a gamble: a hundred boats, a thousand five-star photos. We fished on forty of them and kept the four we would book for our own families. Private boats, local captains, and the same price you would pay at the dock."
            className="relative z-10 mx-auto max-w-[56rem] text-center text-[clamp(1.75rem,3.6vw,3.6rem)] leading-[1.12] font-light tracking-[-0.03em]"
          />

          {/* Floating, parallaxed imagery (desktop) */}
          <motion.div style={{ y: y1 }} className="absolute top-[-18%] left-0 hidden w-[11%] lg:block">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src={introImages[0].src} alt={introImages[0].alt} fill sizes="11vw" className="object-cover" />
            </div>
          </motion.div>
          <motion.div style={{ y: y2 }} className="absolute top-[35%] right-0 hidden w-[10%] lg:block">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={introImages[1].src} alt={introImages[1].alt} fill sizes="10vw" className="object-cover" />
            </div>
          </motion.div>
          <motion.div style={{ y: y3 }} className="absolute bottom-[-55%] left-[9%] hidden w-[8%] lg:block">
            <div className="relative aspect-square overflow-hidden">
              <Image src={introImages[2].src} alt={introImages[2].alt} fill sizes="8vw" className="object-cover" />
            </div>
          </motion.div>
        </div>

        <dl className="mt-28 grid grid-cols-2 border-t border-line md:mt-48 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn
              key={s.label}
              delay={i * 0.08}
              className="border-b border-line py-8 pr-4 md:border-b-0 md:border-l md:py-10 md:pl-8 md:first:border-l-0 md:first:pl-0"
            >
              <dt className="label text-muted-foreground">{s.label}</dt>
              <dd className="mt-4 text-5xl font-light tracking-[-0.04em] md:text-6xl">{s.value}</dd>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}
