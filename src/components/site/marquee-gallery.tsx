"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { gallery } from "@/lib/site";

/** Two rows of imagery drifting in opposite directions as you scroll. */
export function MarqueeGallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-22%", "0%"]);
  const rowA = [...gallery, ...gallery.slice(0, 2)];
  const rowB = [...gallery.slice(3), ...gallery, ...gallery.slice(0, 1)];

  return (
    <section ref={ref} aria-label="Gallery" className="overflow-hidden py-24 md:py-32">
      <motion.div style={{ x: x1 }} className="flex w-max gap-4 md:gap-6">
        {rowA.map((g, i) => (
          <div key={i} className="relative h-[34vw] w-[48vw] shrink-0 overflow-hidden md:h-[24vw] md:w-[34vw]">
            <Image src={g.src} alt={g.alt} fill sizes="34vw" className="object-cover" />
          </div>
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className="mt-4 flex w-max gap-4 md:mt-6 md:gap-6">
        {rowB.map((g, i) => (
          <div key={i} className="relative h-[28vw] w-[38vw] shrink-0 overflow-hidden md:h-[18vw] md:w-[26vw]">
            <Image src={g.src} alt="" fill sizes="26vw" className="object-cover" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
