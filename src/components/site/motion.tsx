"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, type MotionValue } from "motion/react";
import { cn } from "@/lib/utils";
import { useIntroDone } from "./providers";

export const ease = [0.22, 1, 0.36, 1] as const;

const tags = { span: motion.span, h1: motion.h1, h2: motion.h2, h3: motion.h3, p: motion.p };
export const easeInOut = [0.76, 0, 0.24, 1] as const;

/**
 * Masked word-by-word rise. Waits for the intro loader when `afterIntro` is set,
 * otherwise plays when scrolled into view.
 */
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  afterIntro = false,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  afterIntro?: boolean;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const introDone = useIntroDone();
  const show = afterIntro ? introDone : inView && introDone;
  const MotionTag = tags[Tag];

  return (
    <MotionTag ref={ref} className={className} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "110%" }}
            animate={show ? { y: "0%" } : undefined}
            transition={{ duration: 1.1, ease, delay: delay + i * stagger }}
          >
            {w}
            {i < text.split(" ").length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/** Simple fade-up for supporting copy and UI. */
export function FadeIn({
  children,
  className,
  delay = 0,
  y = 28,
  afterIntro = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  afterIntro?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const introDone = useIntroDone();
  const show = afterIntro ? introDone : inView && introDone;
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={show ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 1.1, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Image that unveils with a clip-path wipe, then drifts with a gentle parallax. */
export function RevealImage({
  children,
  className,
  parallax = 8,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  parallax?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const introDone = useIntroDone();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      animate={inView && introDone ? { clipPath: "inset(0% 0% 0% 0%)" } : undefined}
      transition={{ duration: 1.4, ease: easeInOut, delay }}
    >
      <motion.div
        style={{ y }}
        className="absolute -inset-y-[12%] inset-x-0"
        initial={{ scale: 1.25 }}
        animate={inView && introDone ? { scale: 1 } : undefined}
        transition={{ duration: 1.8, ease, delay }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Paragraph whose words brighten one by one as it scrolls through the viewport. */
export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{children}</motion.span>{" "}
    </>
  );
}
