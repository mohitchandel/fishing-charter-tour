import { site } from "@/lib/site";

/** How to reach the site, or a plain note while there's no working mailbox. */
export function ContactLine({ purpose }: { purpose: string }) {
  return site.email ? (
    <p>
      {purpose} Email <a href={`mailto:${site.email}`}>{site.email}</a>.
    </p>
  ) : (
    <p>Our contact email is being set up and will appear here.</p>
  );
}
