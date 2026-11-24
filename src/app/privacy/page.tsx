import type { Metadata } from "next";
import { ContactLine } from "@/components/site/contact-line";
import { PageHero } from "@/components/site/page-hero";
import { Prose, ProseSection } from "@/components/site/prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "What this website records about visitors, and what it doesn't.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero label={`Updated ${site.updated}`} title="Privacy policy" intro="We keep this short because we collect very little." />
      <div className="container-luxe py-20 md:py-32">
        <Prose>
          <ProseSection heading="What we record">
            <p>
              We use Umami, an analytics tool we host ourselves, to count visits. It records the page you open, the site
              you came from, your browser, device type, screen size and language, and your approximate location. It
              groups the pages of one visit together without using cookies.
            </p>
            <p>There are no accounts, forms or payments on this site, so we don&rsquo;t ask for your name, email or card.</p>
          </ProseSection>
          <ProseSection heading="Why">
            <p>To see which pages are useful and to keep the site working. We don&rsquo;t sell this information or use it for advertising.</p>
          </ProseSection>
          <ProseSection heading="Companies involved">
            <p>
              Vercel hosts the site and our analytics, and the analytics records are stored in a hosted database. The video on the
              home page loads from Mixkit. These providers receive technical details such as your IP address when your
              browser connects to them.
            </p>
            <p>Links to other websites lead to their own privacy policies.</p>
          </ProseSection>
          <ProseSection heading="Your choices">
            <p>
              You can block analytics with a browser content blocker and the site will still work. Depending on where you live, you may have the right to ask what
              data we hold about you, or to have it corrected or deleted. Because the records don&rsquo;t name you, we may not
              be able to find yours.
            </p>
          </ProseSection>
          <ProseSection heading="If this changes">
            <p>When we add online booking, we&rsquo;ll update this page to say who receives your booking details.</p>
          </ProseSection>
          <ProseSection heading="Contact">
            <ContactLine purpose="Questions about privacy?" />
          </ProseSection>
        </Prose>
      </div>
    </>
  );
}
