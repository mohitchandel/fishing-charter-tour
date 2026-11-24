"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";
import { nav, site } from "@/lib/site";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useIntroDone } from "./providers";
import { ease } from "./motion";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const introDone = useIntroDone();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    // Every page opens on a dark [data-hero] band; the bar turns solid as it leaves.
    const hero = document.querySelector<HTMLElement>("[data-hero]")?.offsetHeight ?? 0;
    setSolid(y > hero * 0.85);
    setHidden(y > prev && y > 320 && !open);
  });

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: introDone && !hidden ? "0%" : "-100%" }}
      transition={{ duration: 0.8, ease, delay: introDone && !solid && !hidden ? 0.5 : 0 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid ? "border-b border-line bg-bone/90 text-ink backdrop-blur-xl" : "text-bone",
      )}
    >
      <div className="container-luxe flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name}, home`} className="flex items-baseline gap-2">
          <span className="text-lg font-medium tracking-[0.32em]">HOOKED</span>
          <span className={cn("font-serif text-lg italic", solid ? "text-brass" : "text-brass-soft")}>on tours</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="group relative py-2 text-sm">
              {item.label}
              <span className="absolute inset-x-0 bottom-1 h-px origin-right scale-x-0 bg-current transition-transform duration-500 ease-luxe group-hover:origin-left group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#trips"
            className={cn(
              "hidden h-11 items-center rounded-full border px-6 text-sm transition-colors duration-300 sm:inline-flex",
              solid
                ? "border-ink bg-ink text-bone hover:bg-transparent hover:text-ink"
                : "border-bone/50 hover:border-bone hover:bg-bone hover:text-ink",
            )}
          >
            Plan a trip
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger aria-label="Open menu" className="group flex h-11 items-center gap-3 lg:hidden">
              <span className="label">Menu</span>
              <span className="flex w-6 flex-col gap-1.5" aria-hidden>
                <span className="h-px w-full bg-current" />
                <span className="h-px w-2/3 self-end bg-current transition-all group-hover:w-full" />
              </span>
            </SheetTrigger>
            <SheetContent
              side="top"
              showCloseButton={false}
              className="grain h-[100svh] border-0 bg-ink p-0 text-bone data-[side=top]:h-[100svh]"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="container-luxe flex h-[72px] items-center justify-between">
                <span className="flex items-baseline gap-2">
                  <span className="text-lg font-medium tracking-[0.32em]">HOOKED</span>
                  <span className="font-serif text-lg text-brass-soft italic">on tours</span>
                </span>
                <SheetClose className="label h-11">Close</SheetClose>
              </div>
              <nav aria-label="Mobile" className="container-luxe mt-8 flex flex-col">
                {nav.map((item, i) => (
                  <SheetClose
                    key={item.href}
                    render={<Link href={item.href} />}
                    nativeButton={false}
                    className="flex items-baseline justify-between border-b border-bone/10 py-5 text-4xl font-light tracking-tight"
                  >
                    {item.label}
                    <span className="font-serif text-base text-brass-soft italic">0{i + 1}</span>
                  </SheetClose>
                ))}
              </nav>
              <div className="container-luxe mt-auto flex flex-col gap-3 pb-10">
                <SheetClose
                  render={<Link href="/#trips" />}
                  nativeButton={false}
                  className="flex h-14 items-center justify-center rounded-full bg-bone text-ink"
                >
                  Plan a trip
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
