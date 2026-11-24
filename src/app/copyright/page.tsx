import type { Metadata } from "next";
import { ContactLine } from "@/components/site/contact-line";
import { PageHero } from "@/components/site/page-hero";
import { Prose, ProseSection } from "@/components/site/prose";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Copyright notices",
  description: "How to report content on this site that you believe infringes your copyright.",
  alternates: { canonical: "/copyright" },
};

export default function CopyrightPage() {
  return (
    <>
      <PageHero label={`Updated ${site.updated}`} title="Copyright notices" intro="How to ask us to take something down." />
      <div className="container-luxe py-20 md:py-32">
        <Prose>
          <ProseSection heading="Send a written notice">
            <p>If you believe something here infringes your copyright, send a written notice that includes:</p>
            <ul>
              <li>Your physical or electronic signature, or that of someone authorised to act for the owner.</li>
              <li>The work you say has been copied.</li>
              <li>The material to remove, with the address of the page it&rsquo;s on.</li>
              <li>Your name, address, phone number and email.</li>
              <li>
                A statement that you believe in good faith that the use isn&rsquo;t authorised by the owner, its agent or
                the law.
              </li>
              <li>
                A statement that the notice is accurate and, under penalty of perjury, that you are the owner or authorised
                to act for them.
              </li>
            </ul>
          </ProseSection>
          <ProseSection heading="Where to send it">
            <ContactLine purpose="Use the subject line “Copyright notice”." />
          </ProseSection>
          <ProseSection heading="What happens next">
            <p>
              We review complete notices promptly and remove or disable access to infringing material. If you think we removed
              your material by mistake, you can send a counter-notice explaining why.
            </p>
          </ProseSection>
          <ProseSection heading="Repeat infringers">
            <p>
              This site doesn&rsquo;t accept uploads or have user accounts. If that changes, we&rsquo;ll end access for
              anyone who repeatedly infringes copyright, where appropriate. We also stop using any supplier whose material repeatedly does so.
            </p>
          </ProseSection>
        </Prose>
      </div>
    </>
  );
}
