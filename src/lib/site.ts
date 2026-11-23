/**
 * All business content lives here. Everything below is MOCK DATA —
 * replace it with the real business details when they're ready.
 */

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const site = {
  name: "Hooked on Tours",
  tagline: "Key West fishing charters, handpicked",
  description:
    "An independent guide to the best fishing charters in Key West. We ride along, vet the captains and list only the trips we'd book ourselves. Book securely on Viator at the same price.",
  phone: "+1 (305) 555-0142",
  phoneHref: "tel:+13055550142",
  email: "hello@hookedontours.com",
  address: "Key West, Florida",
  hours: "Questions answered daily, 8:00 am – 8:00 pm",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  rating: { score: 4.9, count: 1240, source: "Viator" },
  /** Free Mixkit clip (mixkit.co licence). Swap for your own footage any time. */
  heroVideo: "https://assets.mixkit.co/videos/8680/8680-720.mp4",
  heroImage: unsplash("1545647274-96644da34363", 2400),
  disclosure:
    "Hooked on Tours is an independent guide, not a charter operator. Trips are run by the licensed captains listed on each page and booked through Viator. We earn a commission from Viator when you book, at no extra cost to you.",
};

/**
 * Viator booking widget.
 * Get these values from the Viator Partner Program dashboard
 * (Tools → Widgets). They can also be set via env vars, which win over
 * the values here:
 *   NEXT_PUBLIC_VIATOR_PARTNER_ID
 *   NEXT_PUBLIC_VIATOR_WIDGET_REF
 * While they're empty, the site shows a placeholder booking card.
 */
export const viator = {
  partnerId: process.env.NEXT_PUBLIC_VIATOR_PARTNER_ID ?? "",
  widgetRef: process.env.NEXT_PUBLIC_VIATOR_WIDGET_REF ?? "",
  scriptSrc: "https://www.viator.com/orion/partner/widget.js",
};

export type Operator = {
  name: string;
  captain: string;
  boat: string;
  marina: string;
  since: number;
  image: string;
};

export const operators: Record<string, Operator> = {
  blueline: {
    name: "Blue Line Sportfishing",
    captain: "Capt. Ana Ruiz",
    boat: "38\u2032 Contender center console",
    marina: "Key West Bight Marina",
    since: 2011,
    image: unsplash("1546575972-48ec68459849", 1000),
  },
  reeleasy: {
    name: "Reel Easy Charters",
    captain: "Capt. Jake Moreno",
    boat: "42\u2032 Hatteras sportfisher",
    marina: "Garrison Bight",
    since: 2007,
    image: unsplash("1788316695980-78ad6663a32e", 1000),
  },
  sunsetflats: {
    name: "Sunset Flats Co.",
    captain: "Capt. Wes Hollins",
    boat: "26\u2032 bay boat",
    marina: "Stock Island Marina Village",
    since: 2015,
    image: unsplash("1771809499055-281b7dc02c30", 1000),
  },
  conch: {
    name: "Conch Republic Family Charters",
    captain: "Capt. Lisa Tran",
    boat: "34\u2032 power catamaran",
    marina: "Key West Bight Marina",
    since: 2013,
    image: unsplash("1622567817558-3eac5d13fa86", 1000),
  },
};

export type Trip = {
  slug: string;
  name: string;
  short: string;
  description: string;
  duration: string;
  priceFrom: number;
  priceNote: string;
  maxGuests: number;
  departs: string;
  targets: string[];
  includes: string[];
  image: string;
  badge?: string;
  /** The independent company that actually runs the trip. */
  operator: Operator;
  rating: number;
  reviewCount: number;
  /** Per-trip Viator widget ref. Falls back to viator.widgetRef. */
  viatorWidgetRef?: string;
};

export const trips: Trip[] = [
  {
    slug: "half-day-reef",
    operator: operators.blueline,
    rating: 4.9,
    reviewCount: 412,
    name: "Half-Day Reef Trip",
    short: "Snapper, grouper and mackerel on the living reef, 4 hours.",
    description:
      "The trip we recommend most. Capt. Ana runs 6–9 miles out to the reef line, anchors up and chums in snapper, grouper, kingfish and Spanish mackerel. It suits families, first-timers and anyone who wants plenty of bites without a long run.",
    duration: "4 hours",
    priceFrom: 750,
    priceNote: "per boat, up to 6 guests",
    maxGuests: 6,
    departs: "7:30 am & 1:00 pm",
    targets: ["Yellowtail snapper", "Mutton snapper", "Grouper", "King mackerel"],
    includes: ["Rods, reels & tackle", "Bait & ice", "Florida fishing licenses", "Fish cleaning"],
    image: unsplash("1546575972-48ec68459849", 1400),
    badge: "Most popular",
  },
  {
    slug: "full-day-offshore",
    operator: operators.reeleasy,
    rating: 4.9,
    reviewCount: 356,
    name: "Full-Day Offshore",
    short: "Run the Gulf Stream for mahi, tuna, wahoo and sailfish, 8 hours.",
    description:
      "The big-game trip. Capt. Jake takes his Hatteras 20+ miles into the Gulf Stream to troll weed lines and rips for mahi-mahi, blackfin tuna, wahoo and sailfish, with a stop at the wrecks on the way home if the cooler needs filling.",
    duration: "8 hours",
    priceFrom: 1450,
    priceNote: "per boat, up to 6 guests",
    maxGuests: 6,
    departs: "7:00 am",
    targets: ["Mahi-mahi", "Blackfin tuna", "Wahoo", "Sailfish"],
    includes: ["Offshore trolling gear", "Bait, ice & water", "Florida fishing licenses", "Fish cleaning & bagging"],
    image: unsplash("1768463852068-ffe4ba657840", 1400),
    badge: "Big game",
  },
  {
    slug: "sunset-fishing",
    operator: operators.sunsetflats,
    rating: 4.8,
    reviewCount: 231,
    name: "Sunset Fishing Cruise",
    short: "Light-tackle fishing and the famous Key West sunset, 3 hours.",
    description:
      "An easy evening trip close to shore. Capt. Wes fishes the flats and channels for whatever's biting, then sets up to watch the sun go down over the Gulf. Bring your own drinks; the cooler is on board.",
    duration: "3 hours",
    priceFrom: 600,
    priceNote: "per boat, up to 6 guests",
    maxGuests: 6,
    departs: "2.5 hrs before sunset",
    targets: ["Snapper", "Jack crevalle", "Barracuda", "Tarpon (seasonal)"],
    includes: ["Light-tackle gear", "Bait & ice", "Florida fishing licenses", "Cooler for your drinks"],
    image: unsplash("1771809499055-281b7dc02c30", 1400),
  },
  {
    slug: "private-family-charter",
    operator: operators.conch,
    rating: 5.0,
    reviewCount: 241,
    name: "Private Family Charter",
    short: "A custom day built around your crew, with fishing, sandbars and snorkeling. 6 hours.",
    description:
      "Capt. Lisa plans the day around your crew: some fishing, a stop at a sandbar, snorkeling on a shallow patch reef. Her catamaran is stable and shaded, the pace is yours, and kids are very welcome.",
    duration: "6 hours",
    priceFrom: 1100,
    priceNote: "per boat, up to 6 guests",
    maxGuests: 6,
    departs: "Flexible",
    targets: ["Mixed reef species", "Sandbar stop", "Snorkeling"],
    includes: ["All fishing gear", "Snorkel sets", "Bait, ice & water", "Florida fishing licenses"],
    image: unsplash("1622567817558-3eac5d13fa86", 1400),
    badge: "Family favourite",
  },
];

export const stats = [
  { value: "40+", label: "Charters we rode on" },
  { value: "4", label: "Made the cut" },
  { value: "4.9", label: "Average guest rating" },
  { value: "$0", label: "Added to your price" },
];

/** What a charter has to clear before we list it. */
export const criteria = [
  { title: "We've been aboard", body: "Someone from Hooked on Tours has fished every trip we list, as a paying guest, without telling the crew." },
  { title: "Licensed & insured", body: "USCG-licensed captain, current insurance and safety gear for every age, checked every season." },
  { title: "Proven by guests", body: "A rating of 4.8 or better across at least 200 verified reviews, and we read the bad ones too." },
  { title: "Fair, clear pricing", body: "Tackle, bait, ice and licences included. No surprise fuel charges at the dock." },
];

export const partnersImage = unsplash("1537872384762-e785271d14f8", 1400);

export const reviews = [
  {
    name: "Megan R.",
    from: "Atlanta, GA",
    trip: "Half-Day Reef Trip",
    body: "Captain Ana had both kids reeling in snapper within 20 minutes. She was patient, funny and knew every spot. Best part of our Keys vacation.",
    rating: 5,
  },
  {
    name: "Tom & Dave",
    from: "Columbus, OH",
    trip: "Full-Day Offshore",
    body: "Four mahi and a blackfin tuna before lunch. The boat was spotless and the gear was top notch. We've already booked for next spring.",
    rating: 5,
  },
  {
    name: "Priya S.",
    from: "Toronto, ON",
    trip: "Sunset Fishing Cruise",
    body: "I'd never fished before and caught a barracuda! Then we watched the sunset with the sky going pink. Couldn't recommend it more.",
    rating: 5,
  },
  {
    name: "The Alvarez family",
    from: "Austin, TX",
    trip: "Private Family Charter",
    body: "Fishing in the morning and snorkeling with turtles in the afternoon. Capt. Lisa planned the whole day around our kids. Truly a perfect day.",
    rating: 5,
  },
];

export const gallery = [
  { src: unsplash("1761197379839-b5759e0146a0", 1400), alt: "Rods bent over the rail at sunset" },
  { src: unsplash("1601136939973-5b5dc52a16cb", 1400), alt: "Aerial view of the Overseas Highway crossing the Keys" },
  { src: unsplash("1515631604561-23e0be68ee06", 1400), alt: "Angler holding up the morning's catch" },
  { src: unsplash("1617202830798-cf48261fb70d", 1400), alt: "Palm silhouette over the Gulf at dusk" },
  { src: unsplash("1551131618-3f0a5cf594b4", 1400), alt: "Trolling rods lined up in the stern" },
  { src: unsplash("1782498270946-61527bc4c026", 1400), alt: "Coastal homes reflected in calm Keys water" },
];

/** Floating images used in the intro statement. */
export const introImages = [
  { src: unsplash("1622713486130-aa0177e64542", 900), alt: "Boat at anchor under a clear sky" },
  { src: unsplash("1541742425281-c1d3fc8aff96", 900), alt: "Fishing rod silhouetted at golden hour" },
  { src: unsplash("1583249598754-b7a2f59651fb", 900), alt: "Angler checking the drag on a spinning reel" },
];

/** "A typical day" timeline: the horizontal scroll section. */
export const dayAboard = [
  {
    time: "06:30",
    title: "Coffee at the dock",
    body: "Meet your captain at the dock. Rods are rigged, bait is fresh and the cooler is iced.",
    image: unsplash("1761197379839-b5759e0146a0", 1400),
  },
  {
    time: "07:15",
    title: "The run offshore",
    body: "Twenty minutes across glassy water while the sun comes up over the reef line.",
    image: unsplash("1524692485577-d7b157b263d5", 1400),
  },
  {
    time: "09:00",
    title: "First strike",
    body: "Lines in the weed line, and the reel starts screaming. Mahi light up blue and gold boatside.",
    image: unsplash("1708748978230-510e06b24530", 1400),
  },
  {
    time: "13:00",
    title: "Back to the Bight",
    body: "Your catch is filleted dockside, ready for a Duval Street kitchen to cook it tonight.",
    image: unsplash("1515631604561-23e0be68ee06", 1400),
  },
];

export const faqs = [
  {
    q: "Who actually runs the trip?",
    a: "An independent, USCG-licensed charter company. Each trip page names the operator, captain, boat and marina. Hooked on Tours is a guide: we choose the charters and help you pick, but we don't own boats or employ captains.",
  },
  {
    q: "Who do I pay, and does it cost more through you?",
    a: "You pay Viator, the booking platform the operators use. The price is the same as booking with them directly. Viator pays us a small commission, never added to your total.",
  },
  {
    q: "What if I need to cancel, or the weather turns?",
    a: "Viator's policy applies: free cancellation up to 24 hours before departure. If the captain cancels for weather, you're offered a new date or a full refund.",
  },
  {
    q: "Do I need a fishing license?",
    a: "No. Every charter we list holds a vessel licence that covers all guests on board.",
  },
  {
    q: "Is it suitable for kids or beginners?",
    a: "Yes. The half-day reef trip and the private family charter work especially well for kids, and both operators carry child-size life jackets.",
  },
  {
    q: "Can you help me choose?",
    a: "Gladly. Email or call us with your dates, group and what you'd like to catch, and we'll tell you honestly which charter fits, even if it's not one we earn on.",
  },
];

export const nav = [
  { href: "/#trips", label: "Charters" },
  { href: "/#how", label: "How we choose" },
  { href: "/#reviews", label: "Guest notes" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
