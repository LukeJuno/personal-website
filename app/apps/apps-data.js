// To add an app: add an entry here and create app/apps/<slug>/page.js.
export const apps = [
  {
    slug: "loubibi",
    href: "/apps/loubibi",
    name: "Loubibi",
    icon: "/apps/loubibi/icon.webp",
    caption: "This is Loubibi, my first app “baby” made for my own baby.",
    summary:
      "A free baby tracker for sleep, feeds, pumps, diapers and growth.",
  },
];

export const loubibi = {
  contactEmail: "loubibiapp@gmail.com",
  supportUrl: "https://ko-fi.com/loubibi",
  privacyUrl: "https://lukejuno.github.io/loubibi-legal/privacy-policy.html",
  termsUrl: "https://lukejuno.github.io/loubibi-legal/terms-of-service.html",

  // When each store approves the app, paste its URL here and the matching
  // "Coming soon" badge becomes a real link automatically.
  stores: {
    appStore: null,
    googlePlay: null,
  },

  // When the account deletion page is published, paste its URL here and a
  // "How to delete your account" link appears in the Privacy section.
  deleteAccountUrl: null,

  screenshots: [
    {
      src: "/apps/loubibi/screens/loubibi-01.webp",
      alt: "Loubibi home screen with today's summary of feeds, sleep, diapers and pumping, and a suggested next sleep window of 8:18 to 8:33 PM. Caption: Know when the next nap is due.",
    },
    {
      src: "/apps/loubibi/screens/loubibi-02.webp",
      alt: "Loubibi wake windows card showing typical wake windows for the baby's age and a bar chart of recent wake windows. Caption: Wake windows from your baby's own naps.",
    },
    {
      src: "/apps/loubibi/screens/loubibi-03.webp",
      alt: "Loubibi breastfeeding timer with separate Start Left and Stop Right buttons and a notes field. Caption: Time each side with one tap.",
    },
    {
      src: "/apps/loubibi/screens/loubibi-04.webp",
      alt: "Loubibi history list showing diaper changes, breastfeeding, a bottle and night sleep grouped by day. Caption: Every feed, nap and diaper in one list.",
    },
    {
      src: "/apps/loubibi/screens/loubibi-05.webp",
      alt: "Loubibi week timeline with colored bars for sleep, feeds, diapers and pumping across seven days. Caption: The whole week on a timeline.",
    },
    {
      src: "/apps/loubibi/screens/loubibi-06.webp",
      alt: "Loubibi insights screen with weekly average sleep and feeding totals. Caption: Spot sleep and feeding patterns.",
    },
    {
      src: "/apps/loubibi/screens/loubibi-07.webp",
      alt: "Loubibi weight growth chart plotted against approximate WHO percentile bands, with a list of recorded weights. Caption: Growth charts against WHO curves.",
    },
    {
      src: "/apps/loubibi/screens/loubibi-08.webp",
      alt: "Loubibi in night mode on a dark background, with a day summary over the week timeline. Caption: Easy on the eyes at 3 a.m.",
    },
    {
      src: "/apps/loubibi/screens/loubibi-09.webp",
      alt: "iPhone Home Screen with four Loubibi widgets showing time since the last feed, sleep, diaper and pump, plus a daily summary widget. Caption: Your day on the Home Screen.",
    },
    {
      src: "/apps/loubibi/screens/loubibi-10.webp",
      alt: "iPhone Lock Screen with a running Loubibi nap timer and Pause and Stop Timer buttons. Caption: Timers on your Lock Screen.",
    },
  ],

  features: [
    {
      icon: "star-sleep",
      title: "Know when the next nap is due",
      body: "A suggested next nap time and estimated wake windows, based on your baby's age and recent naps.",
    },
    {
      icon: "breastfeed-drop",
      title: "Log what matters",
      body: "Sleep timers, breastfeeding with left and right timers, bottles and solids, diapers, pumping, growth with approximate WHO reference charts, and milestones.",
    },
    {
      icon: "trophy-summary",
      title: "See the pattern",
      body: "Today's summary, weekly averages, a timeline of every day, and insights.",
    },
    {
      icon: "baby-summary",
      title: "Share with your family",
      body: "Invite a partner, grandparent or nanny with a private invite code or link. Everyone sees the same log.",
    },
    {
      icon: "bottle",
      title: "Switching from another app",
      body: "Import supported CSV exports, including Huckleberry and Nara, and review everything before it's added.",
    },
    {
      icon: "strawberry-solids",
      title: "Simple by design",
      body: "No ads, no chat, and it works offline. Night mode, four languages (English, Bahasa Indonesia, Simplified Chinese and Traditional Chinese for Hong Kong), and metric or imperial.",
    },
  ],
};
