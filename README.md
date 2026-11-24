# Hooked on Tours (fishing charters guide website)

An independent guide to booking a fishing charter in Key West, Florida. It doesn't sell trips or take bookings yet.
Stack: Next.js 16 (App Router, TypeScript), Tailwind CSS 4, shadcn/ui (Base UI), Motion.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

| What | Where |
| --- | --- |
| Site name, contact email, trip types, FAQ, photos | `src/lib/site.ts` |
| Guides and their sources | `src/lib/guides.ts` |
| Season chart | `src/lib/seasons.ts` |
| Policy pages | `src/app/{about,privacy,terms,disclosure,copyright}` |
| Theme colours and fonts | `src/app/globals.css`, `src/app/layout.tsx` |
| Home page sections | `src/components/site/*` |
| Trip detail pages | `src/app/trips/[slug]/page.tsx` |
| Viator booking widget | `src/components/site/viator-widget.tsx` |

## Content rules

- Nothing invented: no reviews, ratings, captains, boats or prices we can't prove. Every fact in a guide has a source.
- Photos are stock images from Unsplash and must not be presented as a particular boat or trip.
- Don't name the booking partner in public text until the partner account is approved.

## Contact email

Set `site.email` in `src/lib/site.ts` to an address that can receive mail. Until then no address is shown.
The privacy and copyright pages need it.

## Turning on booking

Only after the partner account is approved:

1. Create a booking widget in the Viator Partner dashboard and copy the **partner ID** and **widget ref**.
2. Set `NEXT_PUBLIC_VIATOR_PARTNER_ID` and `NEXT_PUBLIC_VIATOR_WIDGET_REF` (see `.env.example`). For a different
   widget per trip, set `viatorWidgetRef` on that trip in `src/lib/site.ts`.
3. Read the privacy page and affiliate disclosure again, and update them for the partner.

Viator's agreements say product information must not be indexable by search engines.

Until both values are set, the booking areas say that online booking is coming soon.
