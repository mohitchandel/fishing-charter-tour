/** Planning guides. Every rule or price has a source, and prices say when they were checked. */

export type Guide = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  sections: { heading: string; body?: string[]; list?: string[] }[];
  sources: { label: string; href: string }[];
};

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

const eregs = "https://www.eregulations.com/florida/fishing/saltwater";
const rambler = {
  label: "Florida Rambler, tips for hiring a Florida fishing charter",
  href: "https://www.floridarambler.com/florida-keys-getaways/florida-fishing-charters/",
};

export const guides: Guide[] = [
  {
    slug: "best-time-to-fish-key-west",
    title: "The best time to fish Key West",
    summary: "Which fish turn up when, and how to pick your month.",
    image: unsplash("1541742425281-c1d3fc8aff96"),
    sections: [
      {
        heading: "The short answer",
        body: [
          "If you can go at any time, April and May give you the widest choice. One of the two calendars we compared names them as its best months, and both put tarpon, mahi-mahi and blackfin tuna in season then.",
          "If your dates are fixed, choose the trip that suits the month instead of chasing one species.",
        ],
      },
      {
        heading: "December to March",
        body: [
          "Sailfish season, along with kingfish, and cobia from January. Cold fronts can bring wind, so keep a spare day if you want to go offshore. Several groupers are closed to harvest from January to April.",
        ],
      },
      {
        heading: "April to June",
        body: [
          "Tarpon arrive, and mahi-mahi move through offshore. Reef fishing is strong too. It is a busy time, so book early.",
        ],
      },
      {
        heading: "July to September",
        body: [
          "Hot, and good for bonefish, permit and barracuda in the shallows. August and September are the peak of hurricane season, so check the cancellation terms before you pay.",
        ],
      },
      {
        heading: "October and November",
        body: ["Bonefish last into October, and blackfin tuna and snapper get good ratings again in autumn."],
      },
      {
        heading: "Where the calendars disagree",
        body: [
          "One lists wahoo as a summer fish, the other as a winter one. We mark both as good rather than guess. Captains who fish every day will know better than any chart, so ask.",
        ],
      },
    ],
    sources: [
      { label: "FishingBooker, fishing seasons in Key West", href: "https://fishingbooker.com/blog/?p=34344" },
      {
        label: "Southernmost Beach Resort, Key West fishing guide",
        href: "https://www.southernmostbeachresort.com/blog/key-west-fishing-guide-top-catches-best-times-to-reel-them-in/",
      },
      { label: "eRegulations, Florida grouper rules", href: `${eregs}/grouper` },
    ],
  },
  {
    slug: "reef-offshore-or-flats",
    title: "Reef, offshore or flats?",
    summary: "The three kinds of water around Key West, and who each one suits.",
    image: unsplash("1583249598754-b7a2f59651fb"),
    sections: [
      {
        heading: "Reef and wreck",
        body: [
          "The boat usually anchors and puts out chum to draw fish in. You catch snapper and other reef fish on bait. It is the easiest fishing for beginners and works well in half a day.",
        ],
      },
      {
        heading: "Offshore",
        body: [
          "The boat trolls or drifts in deep water for mahi-mahi, tuna, wahoo and sailfish. The Wall, where the bottom falls away to about 2,000 feet, is roughly 20 miles south of Key West. Give it a full day in summer, when mahi-mahi are further out. In winter four hours can be enough.",
        ],
      },
      {
        heading: "Flats and backcountry",
        body: [
          "A guide poles a small boat over water a few feet deep while you look for bonefish, permit and tarpon, then cast to them. These boats usually take one or two anglers. It rewards patience and some casting practice.",
        ],
      },
      {
        heading: "Quick way to choose",
        list: [
          "Never fished before, or bringing children: reef.",
          "Want one big fish and don't mind waves: offshore.",
          "Already fish at home and enjoy the hunt: flats.",
          "Travelling alone or on a budget: a shared party boat on the reef.",
        ],
      },
    ],
    sources: [{ label: "FishingBooker, Key West fishing guide", href: "https://fishingbooker.com/blog/key-west-fishing/" }],
  },
  {
    slug: "how-to-choose-a-charter",
    title: "How to choose a charter",
    summary: "Questions to ask before you hand over a deposit.",
    image: unsplash("1537872384762-e785271d14f8"),
    sections: [
      {
        heading: "Check the paperwork",
        body: [
          "Ask for proof of the captain's licence, insurance and the charter fishing licence that covers guests. A good operator expects the question.",
          "The credential known as the six-pack is the minimum for carrying up to six paying passengers. A boat taking more than six generally needs a Coast Guard inspection and a Certificate of Inspection on display.",
        ],
      },
      {
        heading: "Match the boat to your group",
        body: [
          "Backcountry boats often have no toilet and no shade. Reef boats usually have shade and often a toilet. Ask, especially with children or in summer.",
        ],
      },
      {
        heading: "Private, split or party boat",
        body: [
          "A private charter is priced for the whole boat, often up to six guests. On a split charter or party boat you pay per person and share the deck. Party boats can carry 30 people or more.",
        ],
      },
      {
        heading: "Questions worth asking",
        list: [
          "What exactly is included: rods, bait, ice, water, licence, fish cleaning?",
          "Is there a fuel charge on top?",
          "What is the most people you'll take on my trip?",
          "What happens if you cancel for weather? What if I cancel?",
          "Can we keep our catch?",
        ],
      },
      {
        heading: "Reading reviews",
        body: [
          "Look at recent reviews first, and at the complaints as well as the praise. A long list of reviews for one captain says more than a perfect score from a handful.",
        ],
      },
    ],
    sources: [
      rambler,
      { label: "The Log, passengers for hire explained (2016)", href: "https://www.thelog.com/?p=25509" },
      {
        label: "TripShock, per person or per boat",
        href: "https://www.tripshock.com/questions/7269590/Are-Key-West-fishing-charters-priced-per-person-or-for-the-entire-boat",
      },
      { label: "FishingBooker, Key West fishing guide", href: "https://fishingbooker.com/blog/key-west-fishing/" },
    ],
  },
  {
    slug: "what-a-charter-costs",
    title: "What a charter costs",
    summary: "Real listed prices we checked, what's included, and what to tip.",
    image: unsplash("1551131618-3f0a5cf594b4"),
    sections: [
      {
        heading: "Three listings, checked in November 2026",
        body: ["These are examples to give you a sense of the range, not recommendations. Check the current price before you book."],
        list: [
          "26-foot centre console: $650 for 4 hours, $950 for 8 hours, per group.",
          "33-foot centre console: $1,000 for 4 hours, $1,300 for 6 hours, $1,600 for 8 hours, per group.",
          "Party boat: $78 per person for 6 hours.",
        ],
      },
      {
        heading: "Per boat or per person",
        body: [
          "Private trips are priced for the boat, so six people splitting $1,000 pay about $167 each. Party boats cost less for one or two people.",
        ],
      },
      {
        heading: "What's usually included",
        body: [
          "The two private listings above include rods, reels, tackle, the fishing licence and cleaning your catch. Bait, ice, water and fuel vary. Ask for anything that isn't listed in writing.",
        ],
      },
      {
        heading: "Tipping",
        body: [
          "Published advice runs from 10 to 25 percent, with most of it between 15 and 20. Where there's a mate, tip the mate. Bring cash.",
        ],
      },
      {
        heading: "Cancelling",
        body: ["Free cancellation ended 3 days before on one of those listings and 7 days before on another. Always check."],
      },
    ],
    sources: [
      { label: "FishingBooker listing, 26-foot boat", href: "https://fishingbooker.com/charters/view/50303" },
      { label: "FishingBooker listing, 33-foot boat", href: "https://fishingbooker.com/charters/view/673" },
      { label: "FishingBooker listing, party boat", href: "https://fishingbooker.com/charters/view/1589" },
      { label: "Discover Boating, charter tipping", href: "https://discoverboating.com/resources/charter-boat-tipping-etiquette" },
      { label: "Boatsetter, tipping a fishing guide", href: "https://boatsetter.com/boating-resources/how-much-to-tip-a-fishing-guide" },
      rambler,
    ],
  },
  {
    slug: "what-to-bring",
    title: "What to bring",
    summary: "A short packing list, and how to avoid feeling seasick.",
    image: unsplash("1622713486130-aa0177e64542"),
    sections: [
      {
        heading: "Pack this",
        list: [
          "Sunscreen, a hat and polarised sunglasses.",
          "A long-sleeved cover-up and something for your neck.",
          "Non-slip shoes with pale soles that won't mark the deck.",
          "Food and water, unless the boat says it's provided.",
          "A towel, and a camera if you want one.",
          "Cash for the tip, and a cooler in the car for your fish.",
        ],
      },
      {
        heading: "If you might get seasick",
        body: [
          "Look at the horizon, sip water, go easy on alcohol and caffeine, and eat small amounts often. Ginger helps some people.",
          "Medicines for motion sickness can make you drowsy. Ask a pharmacist or doctor which is right for you, and whether to take it before you leave.",
        ],
      },
      {
        heading: "Leave behind",
        list: ["Your own rods, unless you've agreed it.", "Dark-soled shoes and flip-flops.", "A handheld GPS. Captains guard their spots."],
      },
    ],
    sources: [
      rambler,
      { label: "CDC, motion sickness", href: "https://wwwnc.cdc.gov/travel/page/motion-sickness" },
    ],
  },
  {
    slug: "licences-and-rules",
    title: "Licences and rules",
    summary: "Who needs a licence, what's closed, and how to look after the reef.",
    image: unsplash("1601136939973-5b5dc52a16cb"),
    sections: [
      {
        heading: "Your fishing licence",
        body: [
          "Florida exempts you from holding a licence if you're fishing from a for-hire boat with a valid charter boat or charter captain licence. If you fish from shore or a rented boat, the exemption doesn't apply.",
          "Snook and spiny lobster need extra permits, so ask the operator before planning to keep either.",
        ],
      },
      {
        heading: "Closed seasons to know about",
        body: ["Waters off Monroe County, which includes Key West, follow Florida's Atlantic rules for grouper and hogfish on both sides of the islands."],
        list: [
          "Black, scamp, red and yellowfin grouper: closed January 1 to April 30.",
          "Gag grouper: a short season that has been changing, so check before you go.",
          "Hogfish: open May 1 to October 31.",
          "Permit in the Special Permit Zone: closed April 1 to July 31.",
          "Bonefish: catch and release only, all year.",
        ],
      },
      {
        heading: "Size and bag limits",
        body: [
          "Limits change during the year, and your captain is the person to ask on the day. The full, current list is on the Florida Fish and Wildlife Conservation Commission website, myfwc.com.",
        ],
      },
      {
        heading: "Look after the reef",
        body: [
          "The waters around Key West are part of the Florida Keys National Marine Sanctuary. Anchoring on living coral and damaging coral or seagrass are prohibited. Most fishing is banned in the marked preservation areas, which have large round yellow buoys.",
        ],
      },
    ],
    sources: [
      { label: "eRegulations, Florida saltwater licences", href: `${eregs}/licenses-permits` },
      { label: "eRegulations, grouper", href: `${eregs}/grouper` },
      { label: "eRegulations, other reef fish", href: `${eregs}/other-reef-fish` },
      { label: "eRegulations, coastal species", href: `${eregs}/coastal-species` },
      { label: "Florida Fish and Wildlife Conservation Commission", href: "https://myfwc.com/fishing/saltwater/recreational/" },
      { label: "Florida Keys National Marine Sanctuary rules", href: "https://floridakeys.noaa.gov/regs/" },
    ],
  },
];
