import type { Metadata } from "next";
import Link from "next/link";
import { ContactLine } from "@/components/site/contact-line";
import { PageHero } from "@/components/site/page-hero";
import { Prose, ProseSection } from "@/components/site/prose";

export const metadata: Metadata = {
  title: "About",
  description: "What Hooked on Tours is, how the guides are written and how the site plans to make money.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero label="About" title="A guide, not a charter company." intro="Hooked on Tours helps visitors choose a fishing trip in Key West." />
      <div className="container-luxe py-20 md:py-32">
        <Prose>
          <ProseSection heading="What we do">
            <p>
              We explain the types of trip, the seasons, the costs and the rules, so you can pick a boat with your eyes
              open. We don&rsquo;t own boats, employ captains or take bookings.
            </p>
          </ProseSection>
          <ProseSection heading="How we write">
            <p>
              The guides are put together from published sources, which are listed at the end of each one. We
              haven&rsquo;t tested individual charters, so we don&rsquo;t rank them or publish our own ratings.
            </p>
            <p>The photos are stock images and don&rsquo;t show a particular boat, captain or trip.</p>
          </ProseSection>
          <ProseSection heading="How we plan to make money">
            <p>
              When online booking opens, we may earn a commission from the booking platform. Read the{" "}
              <Link href="/disclosure">affiliate disclosure</Link>.
            </p>
          </ProseSection>
          <ProseSection heading="Contact">
            <ContactLine purpose="Spotted a mistake or have a question?" />
          </ProseSection>
        </Prose>
      </div>
    </>
  );
}
