"use client";

import { createContext, useContext, useState } from "react";
import { MotionConfig } from "motion/react";
import { ReactLenis } from "lenis/react";
import { Preloader } from "./preloader";

const IntroContext = createContext(false);

/** True once the intro loader has finished and the page is revealed. */
export const useIntroDone = () => useContext(IntroContext);

export function Providers({ children }: { children: React.ReactNode }) {
  const [introDone, setIntroDone] = useState(false);

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
        <IntroContext.Provider value={introDone}>
          <Preloader onDone={() => setIntroDone(true)} />
          {children}
        </IntroContext.Provider>
      </MotionConfig>
    </ReactLenis>
  );
}
