import { FadeIn, SplitText } from "./motion";

/** Dark title band for text pages. The header needs a dark [data-hero] behind it. */
export function PageHero({ label, title, intro }: { label: React.ReactNode; title: string; intro?: string }) {
  return (
    <section data-hero className="grain relative bg-ink text-bone">
      <div className="container-luxe pt-40 pb-16 md:pt-52 md:pb-24">
        <p className="label text-bone/70">{label}</p>
        <SplitText
          as="h1"
          afterIntro
          delay={0.1}
          text={title}
          className="mt-6 max-w-[18ch] text-[clamp(2.75rem,6.5vw,6.5rem)] leading-[0.95] font-light"
        />
        {intro && (
          <FadeIn afterIntro delay={0.4}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/80">{intro}</p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
