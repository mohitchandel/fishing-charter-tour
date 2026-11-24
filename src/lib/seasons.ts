/**
 * Season chart. Built by comparing two published calendars:
 *   F = FishingBooker (months it rates "Great"), S = Southernmost Beach Resort (peak months).
 * A month both agree on is "peak"; a month only one lists is "good".
 */
export const seasonSources = [
  { label: "FishingBooker, fishing seasons in Key West", href: "https://fishingbooker.com/blog/?p=34344" },
  {
    label: "Southernmost Beach Resort, Key West fishing guide",
    href: "https://www.southernmostbeachresort.com/blog/key-west-fishing-guide-top-catches-best-times-to-reel-them-in/",
  },
];

export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const ALL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const listed: { name: string; f: number[]; s: number[] }[] = [
  { name: "Sailfish", f: [1, 2, 3, 4, 12], s: [12, 1, 2, 3] },
  { name: "Mahi-mahi", f: [4, 5, 6], s: [4, 5, 6, 7, 8, 9] },
  { name: "Blackfin tuna", f: [3, 4, 5, 10, 11], s: [4, 5] },
  { name: "Wahoo", f: [6, 7, 8], s: [12, 1, 2] },
  { name: "Kingfish", f: [], s: [11, 12, 1, 2, 3] },
  { name: "Cobia", f: [1, 2, 3, 4], s: [] },
  { name: "Tarpon", f: [4, 5, 6, 7], s: [4, 5, 6] },
  { name: "Permit", f: [4, 5, 6, 7, 8, 9, 10], s: [3, 4, 5, 6, 7] },
  { name: "Bonefish", f: [5, 6, 7, 8, 9, 10], s: [3, 4, 5, 6, 7, 8, 9, 10] },
  { name: "Barracuda", f: [3, 4, 5, 6, 7, 8, 9, 10], s: [] },
  { name: "Snapper", f: [4, 5, 6, 7, 11], s: ALL },
  { name: "Grouper", f: [5, 6, 7, 11, 12], s: [5, 6, 7, 8, 9] },
];

export type Rating = "peak" | "good" | null;

export const seasons = listed.map(({ name, f, s }) => ({
  name,
  months: ALL.map((m): Rating => (f.includes(m) && s.includes(m) ? "peak" : f.includes(m) || s.includes(m) ? "good" : null)),
}));
