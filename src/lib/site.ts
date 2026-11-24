/**
 * Site-wide details and the home page content.
 *
 * Rules for anything added here:
 * - Nothing invented: no reviews, ratings, captains, boats or prices we can't prove.
 * - Trip pages describe a TYPE of trip, not one operator's product.
 * - Facts that can change (rules, prices) belong in a guide, with a source link.
 */

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const site = {
  name: "Hooked on Tours",
  url: "https://hookedontours.com",
  tagline: "An independent guide to Key West fishing",
  description:
    "An independent guide to Key West fishing charters: trip types, the best months, what it costs, what to bring and how to choose a boat.",
  /** Must be a mailbox that really receives mail. While empty, the site shows no email address. */
  email: "",
  location: "Key West, Florida",
  updated: "November 2026",
  /** Free Mixkit clip (mixkit.co licence). Swap for your own footage any time. */
  heroVideo: "https://assets.mixkit.co/videos/8680/8680-720.mp4",
  heroImage: unsplash("1545647274-96644da34363", 2400),
  disclosure:
    "Hooked on Tours is an independent guide. We don't own boats, run trips or take bookings. Photos are stock images and don’t show a particular charter.",
};

/**
 * Viator booking widget. Leave empty until the partner account is approved.
 * Values come from the Viator Partner dashboard (Tools → Widgets), set as env vars.
 * While they're empty, the site says that online booking is coming soon.
 */
export const viator = {
  partnerId: process.env.NEXT_PUBLIC_VIATOR_PARTNER_ID ?? "",
  widgetRef: process.env.NEXT_PUBLIC_VIATOR_WIDGET_REF ?? "",
  scriptSrc: "https://www.viator.com/orion/partner/widget.js",
};

export const bookingOpen = Boolean(viator.partnerId && viator.widgetRef);

/** Umami analytics (self-hosted). */
export const analytics = {
  umamiSrc: "https://tour-hub-analytics.vercel.app/script.js",
  umamiWebsiteId: "915caedb-8ac4-4cdc-9745-aacf946df99b",
};

export type Trip = {
  slug: string;
  name: string;
  short: string;
  description: string;
  /** How long this type of trip usually runs. */
  duration: string;
  water: string;
  suits: string;
  fishing: string;
  targets: string[];
  ask: string[];
  image: string;
  /** Per-trip Viator widget ref. Falls back to viator.widgetRef. */
  viatorWidgetRef?: string;
};

export const trips: Trip[] = [
  {
    slug: "half-day-reef",
    name: "Half-Day Reef Trip",
    short: "Bottom fishing on the reef and patch reefs south of the island. The usual first trip.",
    description:
      "A half day is the easiest way to find out whether you like fishing from a boat. Most reef trips anchor up and use chum to bring snapper and other reef fish to the stern, so there is less running, more bites and plenty for a beginner to do.",
    duration: "About 4 hours",
    water: "Reef and patch reefs",
    suits: "First-timers, families, short stays",
    fishing: "At anchor, with bait near the bottom or drifting back in the chum",
    targets: ["Yellowtail snapper", "Mutton snapper", "Mangrove snapper", "Grouper, in season"],
    ask: [
      "How long is the run to the first spot?",
      "Is the boat shaded, and does it have a toilet?",
      "Is fish cleaning included?",
      "Can we keep what we catch, and how much?",
    ],
    image: unsplash("1546575972-48ec68459849", 1400),
  },
  {
    slug: "full-day-offshore",
    name: "Full-Day Offshore",
    short: "Trolling and live-baiting in deep blue water for mahi-mahi, tuna and billfish.",
    description:
      "Offshore boats head for deep water to troll or run live baits. One well-known drop-off, nicknamed the Wall, is about 20 miles south of Key West. It is a longer day with more running and more open sea, and the fish are the biggest you are likely to meet.",
    duration: "About 8 hours",
    water: "Deep blue water beyond the reef",
    suits: "Keen anglers, steady stomachs, groups who want a big fish",
    fishing: "Trolling, live bait and fishing around floating weed",
    targets: ["Mahi-mahi", "Sailfish", "Blackfin tuna", "Wahoo"],
    ask: [
      "Is fuel included in the price?",
      "How far do you expect to run at this time of year?",
      "What happens if the forecast is rough?",
      "How is the catch shared between the group and the crew?",
    ],
    image: unsplash("1768463852068-ffe4ba657840", 1400),
  },
  {
    slug: "sunset-fishing",
    name: "Sunset Fishing",
    short: "A short evening trip close to shore, with light tackle and cooler air.",
    description:
      "Evening trips stay closer to the island and swap distance for cooler air and the sunset. They work well for couples and for anyone who would rather not give up a whole day. Expect smaller fish on lighter rods, and let the captain choose the spot for the wind and tide.",
    duration: "About 3 to 4 hours",
    water: "Channels, harbour edges and patch reefs",
    suits: "Couples, casual anglers, hot months",
    fishing: "Light spinning rods with bait or small lures",
    targets: ["Mangrove snapper", "Jack crevalle", "Barracuda", "Tarpon, in season"],
    ask: [
      "What time do we leave and get back?",
      "How much of the trip is fishing and how much is cruising?",
      "Can we bring our own drinks?",
      "Are lights and life jackets in the right sizes on board?",
    ],
    image: unsplash("1771809499055-281b7dc02c30", 1400),
  },
  {
    slug: "private-family-charter",
    name: "Private Family Charter",
    short: "One boat for your group, with the fishing paced around the youngest person aboard.",
    description:
      "A private boat lets you choose the pace. Families often mix an hour or two of easy fishing with a swim or snorkel stop. Agree the plan before you book, because not every charter carries snorkel gear or is set up for swimming.",
    duration: "4 to 8 hours",
    water: "Reef, sheltered shallows and sandbars",
    suits: "Families, mixed groups, people who don't all fish",
    fishing: "Easy bait fishing, then whatever your group enjoys",
    targets: ["Snapper", "Grunts and other small reef fish", "A snorkel or sandbar stop, if offered"],
    ask: [
      "How many people can the boat legally carry?",
      "Do you have child-size life jackets?",
      "Is snorkel gear on board, and is it included?",
      "Can we come back early if the kids have had enough?",
    ],
    image: unsplash("1622567817558-3eac5d13fa86", 1400),
  },
];

/** Facts about the guide itself, all checkable on this site. */
export const stats = [
  { value: "4", label: "Types of trip explained" },
  { value: "6", label: "Planning guides" },
  { value: "12", label: "Species in the season chart" },
  { value: "0", label: "Paid listings" },
];

/** The checklist we suggest readers use before booking any boat. */
export const criteria = [
  { title: "Ask for the licence", body: "Anyone carrying paying passengers needs a Coast Guard credential. Ask to see it, along with proof of insurance." },
  { title: "Match boat to trip", body: "Small flats boats often have no shade or toilet. Larger reef and offshore boats usually do. Ask before you pay." },
  { title: "Get the price in full", body: "Ask about fuel, bait, ice, fish cleaning and tax. Private boats are priced per boat, shared boats per person." },
  { title: "Read the cancellation terms", body: "Free-cancellation windows vary from boat to boat. Find out what happens when the weather turns, too." },
];

export const partnersImage = unsplash("1537872384762-e785271d14f8", 1400);

export const gallery = [
  { src: unsplash("1761197379839-b5759e0146a0", 1400), alt: "Rods bent over the rail at sunset" },
  { src: unsplash("1601136939973-5b5dc52a16cb", 1400), alt: "Aerial view of a long bridge over shallow blue water" },
  { src: unsplash("1515631604561-23e0be68ee06", 1400), alt: "Angler holding up a catch" },
  { src: unsplash("1617202830798-cf48261fb70d", 1400), alt: "Palm silhouette at dusk" },
  { src: unsplash("1551131618-3f0a5cf594b4", 1400), alt: "Trolling rods lined up in the stern" },
  { src: unsplash("1782498270946-61527bc4c026", 1400), alt: "Waterfront homes reflected in calm water" },
];

/** Floating images used in the intro statement. */
export const introImages = [
  { src: unsplash("1622713486130-aa0177e64542", 900), alt: "Boat at anchor under a clear sky" },
  { src: unsplash("1541742425281-c1d3fc8aff96", 900), alt: "Fishing rod silhouetted at golden hour" },
  { src: unsplash("1583249598754-b7a2f59651fb", 900), alt: "Angler checking the drag on a spinning reel" },
];

/** "A typical day" timeline: the horizontal scroll section. Times are only an example. */
export const dayAboard = [
  {
    time: "First",
    title: "Meet at the dock",
    body: "Arrive early, go through the safety talk and tell the crew what you'd like to catch. Say so now if anyone gets seasick.",
    image: unsplash("1761197379839-b5759e0146a0", 1400),
  },
  {
    time: "Next",
    title: "The run out",
    body: "A short hop to the reef, or a longer run to deep water. Hold on, keep your eyes on the horizon and put on sunscreen.",
    image: unsplash("1524692485577-d7b157b263d5", 1400),
  },
  {
    time: "Then",
    title: "Lines in",
    body: "The crew baits up and shows you what to do. Slow spells are normal, and a good captain moves if nothing is happening.",
    image: unsplash("1708748978230-510e06b24530", 1400),
  },
  {
    time: "Last",
    title: "Back to the dock",
    body: "On many boats the crew cleans what you're allowed to keep. Ask whether a local restaurant will cook it for you.",
    image: unsplash("1515631604561-23e0be68ee06", 1400),
  },
];

export const faqs = [
  {
    q: "Do you run the trips?",
    a: "No. Hooked on Tours is a guide. We don't own boats or employ captains, and no charter has paid to appear here.",
  },
  {
    q: "Can I book through this site?",
    a: bookingOpen
      ? "Yes. You book and pay on the booking platform, and its cancellation terms apply. We may earn a commission at no extra cost to you."
      : "Not yet. We plan to add online booking through a booking platform. Until then, use the guides to choose a trip and book directly with the operator you prefer.",
  },
  {
    q: "Do I need a fishing licence?",
    a: "Usually not on a charter. Florida exempts people fishing from a for-hire boat that holds a valid charter licence. Ask the operator to confirm theirs, and ask separately if you want to keep snook or lobster.",
  },
  {
    q: "When is the best time to go?",
    a: "There is something to catch all year. Sailfish are mainly a winter fish, tarpon peak in late spring and mahi-mahi from spring into summer. See the season chart above.",
  },
  {
    q: "Is it suitable for kids or beginners?",
    a: "Yes. A half-day reef trip is the usual choice. Ask about shade, a toilet and child-size life jackets before you book.",
  },
  {
    q: "How much should I tip?",
    a: "Published advice mostly falls between 15 and 20 percent of the charter price. If there's a mate on board, the tip usually goes to them.",
  },
];

export const nav = [
  { href: "/#trips", label: "Trip types" },
  { href: "/#seasons", label: "Seasons" },
  { href: "/guides", label: "Guides" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export const legalNav = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclosure", label: "Affiliate disclosure" },
  { href: "/copyright", label: "Copyright notices" },
];
