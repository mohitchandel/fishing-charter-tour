"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import type { Trip } from "@/lib/site";
import { useIntroDone } from "./providers";
import { ease, FadeIn, SplitText } from "./motion";

export function TripHero({ trip, index }: { trip: Trip; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const introDone = useIntroDone();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} data-hero className="relative isolate flex h-[88svh] min-h-[560px] items-end overflow-hidden bg-ink text-bone">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.25 }}
          animate={introDone ? { scale: 1 } : undefined}
          transition={{ duration: 2.2, ease }}
        >
          <Image src={trip.image} alt="" fill priority sizes="100vw" className="object-cover" />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-ink/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/60 via-ink/10 to-ink/90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/55 via-transparent to-transparent" />

      <div className="container-luxe pb-12 md:pb-16">
        <FadeIn afterIntro delay={0.2} y={12}>
          <Link href="/#trips" className="label inline-flex items-center gap-3 text-bone/85 transition-colors hover:text-bone">
            ← All trip types
          </Link>
        </FadeIn>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="label text-bone/80"><span className="mr-3 font-serif text-2xl tracking-normal normal-case text-brass-soft italic">0{index + 1}</span>{trip.duration}</p>
            <SplitText
              as="h1"
              afterIntro
              delay={0.3}
              text={trip.name}
              className="mt-2 text-[clamp(3rem,8vw,8.5rem)] leading-[0.9] font-light"
            />
          </div>
          <FadeIn afterIntro delay={0.8} className="max-w-sm">
            <p className="leading-relaxed text-bone/90">{trip.short}</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
