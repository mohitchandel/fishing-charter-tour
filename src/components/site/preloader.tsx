"use client";

import { useEffect, useState } from "react";
import { animate, AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";

const ease = [0.76, 0, 0.24, 1] as const;
const word = "HOOKED".split("");

/**
 * Full-screen intro shown on the first page load: a counter runs 0→100 while
 * the wordmark rises, then the curtain lifts to reveal the page.
 */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const reduce = useReducedMotion();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.stop();
    window.scrollTo(0, 0);
  }, [lenis]);

  useEffect(() => {
    // With reduced motion the counter completes instantly and the curtain just disappears.
    const controls = animate(0, 100, {
      duration: reduce ? 0.01 : 1.9,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setTimeout(() => setVisible(false), reduce ? 0 : 250),
    });
    return () => controls.stop();
  }, [reduce]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        lenis?.start();
        onDone();
      }}
    >
      {visible && (
        <motion.div
          key="preloader"
          aria-hidden
          className="grain fixed inset-0 z-[100] flex flex-col justify-between bg-ink px-5 py-6 text-bone md:px-10 md:py-8"
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 1.05, ease } }}
        >
          <div className="label flex justify-between text-bone/60">
            <span>Key West, Florida</span>
            <span>Charter guide</span>
          </div>

          <div className="flex items-end justify-between gap-6">
            <p className="flex overflow-hidden pb-[1vw] text-[16vw] leading-[0.9] font-light tracking-[-0.06em] md:text-[11vw]">
              {word.map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-105%", transition: { duration: 0.6, ease, delay: i * 0.02 } }}
                  transition={{ duration: 1.1, ease, delay: 0.15 + i * 0.05 }}
                >
                  {ch}
                </motion.span>
              ))}
              <motion.span
                className="ml-[0.18em] inline-block self-end pb-[0.12em] font-serif text-[0.38em] tracking-normal text-brass-soft italic"
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-105%", opacity: 0, transition: { duration: 0.6, ease } }}
                transition={{ duration: 1.1, ease, delay: 0.5 }}
              >
                on tours
              </motion.span>
            </p>
            <p className="pb-2 font-serif text-5xl text-brass-soft tabular-nums italic md:text-7xl">
              {String(count).padStart(3, "0")}
            </p>
          </div>

          <div className="h-px w-full bg-bone/15">
            <div className="h-px bg-brass-soft" style={{ width: `${count}%` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
