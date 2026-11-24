import Link from "next/link";
import { legalNav, nav, site, trips } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="grain relative overflow-hidden bg-ink text-bone">
      <div className="container-luxe pt-28 md:pt-40">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label text-bone/60">Plan your day</p>
            <Link
              href="/guides"
              className="group mt-6 block text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] font-light tracking-[-0.045em]"
            >
              Read the guides{" "}
              <span className="inline-block font-serif text-brass-soft italic transition-transform duration-700 ease-luxe group-hover:translate-x-4">
                →
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm md:col-span-5 md:grid-cols-3">
            <div>
              <p className="label text-bone/50">Trip types</p>
              <ul className="mt-5 space-y-3">
                {trips.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/trips/${t.slug}`} className="text-bone/80 transition-colors hover:text-bone">
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-bone/50">Explore</p>
              <ul className="mt-5 space-y-3">
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="text-bone/80 transition-colors hover:text-bone">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="label text-bone/50">The small print</p>
              <ul className="mt-5 space-y-3">
                {legalNav.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="text-bone/80 transition-colors hover:text-bone">
                      {n.label}
                    </Link>
                  </li>
                ))}
                {site.email && (
                  <li>
                    <a href={`mailto:${site.email}`} className="break-all text-bone/80 transition-colors hover:text-bone">
                      {site.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <p className="mt-20 max-w-2xl text-sm leading-relaxed text-bone/50">{site.disclosure}</p>
        <div className="label mt-8 flex flex-wrap justify-between gap-4 border-t border-bone/15 py-6 text-bone/50">
          <span>© 2026 {site.name}</span>
          <span>A guide to Key West, Florida</span>
        </div>
      </div>
      <p
        aria-hidden
        className="-mb-[2vw] text-center text-[10.5vw] leading-[0.8] font-light tracking-[-0.05em] whitespace-nowrap text-bone/[0.07] select-none"
      >
        HOOKED ON TOURS
      </p>
    </footer>
  );
}
