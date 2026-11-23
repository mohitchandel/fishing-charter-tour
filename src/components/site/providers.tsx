"use client";

import { createContext, useContext } from "react";
import { MotionConfig } from "motion/react";
import { ReactLenis } from "lenis/react";

/**
 * Entrance animations wait on this flag. There's no intro loader at the
 * moment, so it's always true and they play as soon as the page hydrates.
 * Bring back a loader by toggling it from a provider again.
 */
const IntroContext = createContext(true);

export const useIntroDone = () => useContext(IntroContext);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        wheelMultiplier: 0.9,
        anchors: { offset: -72 },
        stopInertiaOnNavigate: true,
      }}
    >
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </ReactLenis>
  );
}
