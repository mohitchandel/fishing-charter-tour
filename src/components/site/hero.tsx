"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { site } from "@/lib/site";
import { useIntroDone } from "./providers";
import { ease, FadeIn, SplitText } from "./motion";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const introDone = useIntroDone();
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative isolate h-[100svh] min-h-[640px] overflow-hidden bg-ink text-bone">
      <motion.div style={{ y: imageY }} className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.3 }}
          animate={introDone ? { scale: 1 } : undefined}
          transition={{ duration: 2.4, ease }}
        >
          <Image
            src={site.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {!reduceMotion && (
            <video
              className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-[1600ms] ease-luxe data-[ready]:opacity-100"
              src={site.heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden
              // The clip may finish buffering before hydration, so check on mount too.
              ref={(el) => {
                if (el && el.readyState >= 3) el.dataset.ready = "";
              }}
              onCanPlay={(e) => {
                e.currentTarget.dataset.ready = "";
              }}
            />
          )}
        </motion.div>
      </motion.div>
      {/* Overlays: a light tint keeps the footage vivid; the deep bottom fade carries the type. */}
      <div className="absolute inset-0 -z-10 bg-ink/25" />
      <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-ink/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[75%] bg-gradient-to-t from-ink/90 via-ink/50 to-transparent" />

      <motion.div style={{ opacity: fade, y: contentY }} className="container-luxe flex h-full flex-col justify-end pt-28 pb-8 md:pb-10">
        <FadeIn afterIntro delay={0.2} y={12}>
          <p className="label flex items-center gap-4 text-bone/85">
            <span className="h-px w-10 bg-brass-soft" />
            Independent charter guide · Key West, FL
          </p>
        </FadeIn>

        <div className="mt-6 grid items-end gap-8 lg:grid-cols-12">
          <SplitText
            as="h1"
            afterIntro
            delay={0.3}
            text="Key West’s finest fishing charters, handpicked."
            className="max-w-[16ch] text-[clamp(2.6rem,min(6vw,10svh),6.5rem)] leading-[0.95] font-light lg:col-span-8 [text-shadow:0_2px_30px_rgb(13_26_32/0.3)]"
          />
          <FadeIn afterIntro delay={0.9} className="lg:col-span-4 lg:pb-3">
            <p className="max-w-sm text-base leading-relaxed text-bone/90">
              We ride along, vet the captains and list only the private trips we&rsquo;d book ourselves.
              Reserve on Viator at the same price, with free cancellation.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href="/#trips"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-bone px-6 text-sm text-ink transition-colors hover:bg-brass-soft"
              >
                Browse the charters
                <span className="transition-transform duration-500 ease-luxe group-hover:translate-x-1">→</span>
              </Link>
              <Link href="/#how" className="border-b border-bone/40 pb-1 text-sm text-bone/90 transition-colors hover:border-bone">
                How we choose
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn afterIntro delay={1.1} y={0}>
          <div className="label mt-10 flex items-center justify-between gap-6 border-t border-bone/20 pt-5 text-bone/75 md:mt-14">
            <span>4 captains · 40+ vetted</span>
            <span className="hidden sm:inline">
              {site.rating.score} ★ · {site.rating.count.toLocaleString("en-US")} guest reviews
            </span>
            <span className="flex items-center gap-3">
              Scroll
              <span className="relative block h-6 w-px overflow-hidden bg-bone/25">
                <motion.span
                  className="absolute inset-x-0 top-0 h-1/2 bg-bone"
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
            </span>
          </div>
        </FadeIn>
      </motion.div>
    </section>
  );
}
