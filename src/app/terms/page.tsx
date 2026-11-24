import type { Metadata } from "next";
import { ContactLine } from "@/components/site/contact-line";
import { PageHero } from "@/components/site/page-hero";
import { Prose, ProseSection } from "@/components/site/prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "The terms for using the Hooked on Tours website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero label={`Updated ${site.updated}`} title="Terms of use" intro="By using this site you agree to these terms." />
      <div className="container-luxe py-20 md:py-32">
        <Prose>
          <ProseSection heading="General information only">
            <p>
              The guides are general information. Seasons, rules and prices change and may be out of date. Check with the operator
              and the official authority before you rely on them. Nothing here is medical, legal or safety advice.
            </p>
          </ProseSection>
          <ProseSection heading="We don't run trips">
            <p>
              Hooked on Tours doesn&rsquo;t operate boats or sell trips. Any booking is between you and the operator or
              booking platform, under their terms. We aren&rsquo;t responsible for their services.
            </p>
          </ProseSection>
          <ProseSection heading="Our content">
            <p>You may link to and quote from the guides with credit. Please don&rsquo;t copy whole pages.</p>
          </ProseSection>
          <ProseSection heading="Other websites">
            <p>We link to other sites as sources. We don&rsquo;t control them or vouch for everything on them.</p>
          </ProseSection>
          <ProseSection heading="Liability">
            <p>
              The site is provided as it is. As far as the law allows, we aren&rsquo;t liable for losses that come from using
              it. Nothing here limits rights that can&rsquo;t be limited by law.
            </p>
          </ProseSection>
          <ProseSection heading="Contact">
            <ContactLine purpose="Questions about these terms?" />
          </ProseSection>
        </Prose>
      </div>
    </>
  );
}
