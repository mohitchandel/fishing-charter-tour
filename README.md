# Hooked on Tours (fishing charters guide website)

Marketing site for a Key West fishing charter business.
Stack: Next.js 16 (App Router, TypeScript), Tailwind CSS 4, shadcn/ui (Base UI), Motion.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

| What | Where |
| --- | --- |
| **All business content (mock data)**: name, phone, trips, prices, reviews, FAQ, photos | `src/lib/site.ts` |
| Theme colours and fonts | `src/app/globals.css`, `src/app/layout.tsx` |
| Home page sections | `src/components/site/*` |
| Trip detail pages | `src/app/trips/[slug]/page.tsx` |
| Viator booking widget | `src/components/site/viator-widget.tsx` |

## Hooking up Viator

1. In the Viator Partner dashboard, create a booking widget and copy your **partner ID** and **widget ref**.
2. Copy `.env.example` to `.env.local` and fill in both values, or put them straight into `viator` in `src/lib/site.ts`.
3. For a different widget per trip, set `viatorWidgetRef` on that trip in `src/lib/site.ts`.

Until those values are set, every booking area shows a placeholder card with the phone number.

## Swapping in real content

Everything in `src/lib/site.ts` is placeholder content. Photos are Unsplash URLs. To use your own,
drop files in `public/` and point the `image` fields at `/your-photo.jpg`.
