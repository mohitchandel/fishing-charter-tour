import Image from "next/image";
import { criteria, partnersImage } from "@/lib/site";
import { FadeIn, RevealImage, SplitText } from "./motion";
import { SectionLabel } from "./section-label";

export function HowSection() {
  return (
    <section id="how" className="py-28 md:py-40">
      <div className="container-luxe">
        <SectionLabel index="04">Before you book</SectionLabel>

        <div className="mt-10 grid gap-12 md:mt-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <SplitText
              as="h2"
              text="Four checks before you pay."
              className="text-[clamp(2.4rem,5vw,5rem)] leading-[0.98] font-light"
            />
            <FadeIn>
              <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
                A good operator will answer all four of these without fuss. If you get a vague reply, try
                the next boat.
              </p>
            </FadeIn>
            <RevealImage className="mt-12 aspect-[4/3] md:mt-16">
              <Image src={partnersImage} alt="Offshore fishing reel rigged on a boat" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </RevealImage>
          </div>

          <ol className="md:col-span-5 md:col-start-8 md:pt-6">
            {criteria.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.06}>
                <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-8 last:border-b">
                  <span className="font-serif text-xl text-brass italic">0{i + 1}</span>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-light tracking-tight">{c.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{c.body}</p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
