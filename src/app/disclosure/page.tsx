import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Prose, ProseSection } from "@/components/site/prose";
import { bookingOpen, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate disclosure",
  description: "Whether Hooked on Tours earns money from bookings, and how that is shown.",
  alternates: { canonical: "/disclosure" },
};

export default function DisclosurePage() {
  return (
    <>
      <PageHero label={`Updated ${site.updated}`} title="Affiliate disclosure" intro="Who pays us, and what that means for you." />
      <div className="container-luxe py-20 md:py-32">
        <Prose>
          <ProseSection heading="Today">
            <p>
              {bookingOpen
                ? "Some links and booking widgets on this site are affiliate links. If you book after using one, the booking platform may pay us a commission. It doesn't change the price you pay."
                : "We don't earn anything from bookings. There are no affiliate links or paid listings on this site."}
            </p>
          </ProseSection>
          {!bookingOpen && (
            <ProseSection heading="What we plan">
              <p>
                We plan to add booking links from a booking platform. If you book through one, the platform may pay us a commission.
                We&rsquo;ll say so next to those links and update this page first.
              </p>
            </ProseSection>
          )}
          <ProseSection heading="What money doesn't buy">
            <p>Operators can&rsquo;t pay to be mentioned in a guide, and commission doesn&rsquo;t decide what the guides say.</p>
          </ProseSection>
        </Prose>
      </div>
    </>
  );
}
