export const primaryNav = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/open-tabs", label: "Open Tabs" },
  { href: "/contact", label: "Contact" },
];

// Trimmed for the top header — About, Services and Contact stay reachable
// from the footer/header CTA instead, keeping the header focused on the
// pages people look for first.
export const headerNav = primaryNav.filter(
  (item) =>
    item.href !== "/about" &&
    item.href !== "/services" &&
    item.href !== "/contact",
);

export const footerNav = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/yoga", label: "Yoga" },
  { href: "/babywearing", label: "Babywearing" },
];

export const brands = [
  { name: "Dove", logo: "/brands/dove.svg", shape: "standard" },
  { name: "Vaseline", logo: "/brands/vaseline.svg", shape: "wide" },
  { name: "Lululemon", logo: "/brands/lululemon.svg", shape: "wide" },
  { name: "Visa", logo: "/brands/visa.svg", shape: "standard" },
  { name: "AIA", logo: "/brands/aia.svg", shape: "standard" },
  { name: "HSBC", logo: "/brands/hsbc.svg", shape: "wide" },
  { name: "MetLife", logo: "/brands/metlife.svg", shape: "wide" },
  {
    name: "Marriott Bonvoy",
    logo: "/brands/marriott-bonvoy.svg",
    shape: "wide",
  },
  {
    name: "Asia Miles",
    logo: "/brands/asia-miles.png",
    shape: "wide",
    scale: 0.98,
  },
  {
    name: "Mandarin Oriental",
    logo: "/brands/mandarin-oriental.png",
    shape: "wide",
    scale: 0.98,
  },
  {
    name: "Hong Kong Disneyland",
    logo: "/brands/hong-kong-disneyland.svg",
    shape: "wide",
  },
  {
    name: "The Hong Kong Jockey Club",
    logo: "/brands/hong-kong-jockey-club.png",
    shape: "wide",
    scale: 0.94,
  },
  { name: "Hot Wheels", logo: "/brands/hot-wheels.svg", shape: "wide" },
  { name: "vivo", logo: "/brands/vivo.svg", shape: "wide" },
  { name: "XPENG", logo: "/brands/xpeng.svg", shape: "wide" },
  {
    name: "Mercedes-Benz",
    logo: "/brands/mercedes-benz-full.png",
    shape: "tall",
    scale: 1.18,
  },
  {
    name: "Lotus Biscoff",
    logo: "/brands/lotus-biscoff.png",
    shape: "wide",
    scale: 1.3,
  },
  {
    name: "Pizza Hut",
    logo: "/brands/pizza-hut.png",
    shape: "standard",
    scale: 1.35,
  },
  {
    name: "KFC",
    logo: "/brands/kfc-current.png",
    shape: "tall",
    scale: 1.12,
  },
  {
    name: "Tam Jai Mixian",
    logo: "/brands/tam-jai-mixian.png",
    shape: "tall",
    scale: 1.12,
  },
  {
    name: "Sunkist",
    logo: "/brands/sunkist-current.svg",
    shape: "wide",
    scale: 1.05,
  },
  {
    name: "Tropicana",
    logo: "/brands/tropicana-current.png",
    shape: "wide",
    scale: 1.08,
  },
  {
    name: "Roche",
    logo: "/brands/roche.svg",
    shape: "wide",
    scale: 1.15,
  },
  { name: "Novartis", logo: "/brands/novartis.svg", shape: "wide" },
  { name: "Qeelin", logo: "/brands/qeelin.svg", shape: "wide" },
];

export const values = [
  {
    icon: "C",
    title: "Curiosity",
    description:
      "Ask questions. Notice the little details. Follow the interesting thought.",
  },
  {
    icon: "C",
    title: "Creativity",
    description:
      "Find the new angle nobody expected, but everyone understands once they see it.",
  },
  {
    icon: "C",
    title: "Craft",
    description:
      "Words carefully chosen with an unreasonable level of interest in correct punctuation.",
  },
];

export const services = [
  {
    title: "Campaigns: concepts & ideas",
    description:
      "Big ideas, creative platforms, and integrated campaigns that can stretch further than one execution.",
  },
  {
    title: "Branding: verbal identity",
    description:
      "Naming, voice, and personality. Finding the language and point of view that make a brand unmistakable and ownable.",
  },
  {
    title: "Content: scripts, social & more",
    description:
      "Long-form scripts, punchy headlines, webcopy and social posts.",
  },
];

export const caseStudies = [
  {
    slug: "sunkist-citrush-joocies",
    brand: "Sunkist",
    title: "Citrush / JooCies",
    type: "Activation concept",
    background:
      "Activation concept for Sunkist designed to make oranges feel more culturally relevant, desirable and portable in everyday life.",
    insight:
      "Accessory culture has turned cute, useful objects into status markers. People are already styling bags with charms, cases and mini objects.",
    idea:
      "CITRUSH: collectible orange cases that work like bag charms, so carrying a Sunkist orange feels playful, visible and social.",
    images: [
      {
        src: "/case-studies/sunkist-citrush.png",
        alt: "Sunkist Citrush collectible orange case concept and pop-up activation mockup.",
      },
      {
        src: "/case-studies/sunkist-pop-up.png",
        alt: "Sunkist Citrush pop-up activation mockup in a shopping mall.",
      },
    ],
  },
  {
    slug: "aia-rethink-healthy",
    brand: "AIA",
    title: "Rethink Healthy",
    type: "Creative platform exploration",
    background:
      "Creative platform exploration for AIA aimed at challenging narrow stereotypes of what “healthy” looks like.",
    insight:
      "Health advertising often shows a narrow aspirational ideal. Many people do not see themselves in it, so the category can feel distant or judgmental.",
    idea:
      "Use simple expectation-flipping headlines to expose bias about who can be perceived as healthy, and make the platform feel more inclusive and human.",
    images: [
      {
        src: "/case-studies/aia-direction-one.png",
        alt: "AIA Rethink Healthy poster concepts showing different ideas of health.",
      },
      {
        src: "/case-studies/aia-direction-six.png",
        alt: "AIA Rethink Healthy poster series displayed in outdoor settings.",
      },
    ],
  },
  {
    slug: "qeelin-social-content-system",
    brand: "Qeelin",
    title: "Social campaign / content system",
    type: "Social-first retainer proposal",
    background:
      "Social-first retainer proposal for Qeelin focused on strengthening luxury desirability through richer storytelling.",
    insight:
      "Luxury audiences respond more strongly to heritage, symbolism and craft than to static product posts alone.",
    idea:
      "Build an editorial content system around cultural meaning, product symbolism and modern styling so the feed feels more cohesive and like a branded luxury world.",
    images: [
      {
        src: "/case-studies/qeelin-content-system.png",
        alt: "Qeelin audience and content-pillar strategy presentation.",
      },
      {
        src: "/case-studies/qeelin-content-examples.png",
        alt: "Qeelin social campaign content-system examples.",
      },
    ],
  },
  {
    slug: "tropicana-twister-juicester",
    brand: "Tropicana",
    title: "Tropicana Twister launch",
    type: "Campaign platform",
    background:
      "Campaign platform for Tropicana Twister built around interrupting dull everyday moments with a more playful burst of energy.",
    insight:
      "The daily grind flattens mood and energy, so the brand should behave like a playful jolt rather than a passive product ad.",
    idea:
      "Introduce Juicester, a larger-than-life brand character who crashes into boring moments and makes them juicier.",
    images: [
      {
        src: "/case-studies/tropicana-juicester.png",
        alt: "Tropicana Twister Juicester campaign character presentation.",
      },
      {
        src: "/case-studies/tropicana-script.png",
        alt: "Tropicana Twister script example featuring the Juicester character.",
      },
    ],
  },
  {
    slug: "hongkong-bank-foundation-website",
    brand: "Hongkong Bank Foundation",
    title: "Website revamp",
    type: "Website rebrand and copywriting",
    background:
      "Redo the entire HBF website with rebranding and new copywriting.",
    insight:
      "The Foundation needed a digital home that could bring its community work, programmes and stories together in one clearer experience.",
    idea:
      "A full website revamp supported by new copywriting, alongside social content and activation ideas for volunteer appreciation and engagement.",
    images: [
      {
        src: "/case-studies/hbf-website.png",
        alt: "Hongkong Bank Foundation website revamp presentation.",
      },
      {
        src: "/case-studies/hbf-activations.png",
        alt: "Hongkong Bank Foundation social content and activation examples.",
      },
    ],
  },
];

export const workItems = caseStudies;

/* ---------------------------------------------------------------------------
   Portfolio page content (2026 design)
--------------------------------------------------------------------------- */

export const portfolioIntro = {
  kicker: "Portfolio",
  title: "Brands I’ve worked with",
  intro:
    "I've worked with global and regional names across luxury, lifestyle, healthcare, entertainment, technology, finance, hospitality, and F&B.",
};

export const portfolioSelectedWork = {
  kicker: "Selected Work",
  title: "Work that made it out of the Word Doc.",
  intro:
    "A selection of campaigns, ideas and copy I've helped think up, write for and send out into the world.",
};

export const portfolioWork = [
  {
    slug: "joocies",
    brand: "Sunkist",
    title: "Joocies",
    type: "Activation campaign",
    background:
      "An activation for Sunkist designed to make oranges feel more culturally relevant, desirable and portable in everyday life.",
    insight:
      "Accessory culture has turned cute, useful objects into status markers. People are already styling bags with charms, cases and mini objects.",
    idea: "Joocies: collectible orange cases that work like bag charms, so carrying a Sunkist orange feels playful, visible and social.",
    image: "/case-studies/joocies-lifestyle.webp",
    imageAlt: "Sunkist Joocies orange keychain case shown on a desk.",
    gallery: [
      {
        type: "video-file",
        src: "/case-studies/joocies-activation.mp4",
        poster: "/case-studies/joocies-video-poster.webp",
        wide: true,
      },
      {
        type: "image",
        src: "/case-studies/joocies-gallery-5.webp",
        alt: "Sunkist Joocies key visual: all four keychain characters with the line 'Your juicy little sidekicks.'",
        width: 724,
        height: 900,
      },
      {
        type: "image",
        src: "/case-studies/joocies-gallery-6.webp",
        alt: "'Visit the giant Joocy at K11 Art Mall' promotional key visual with an oversized inflatable Joocies character.",
        width: 724,
        height: 900,
      },
      {
        type: "image",
        src: "/case-studies/joocies-gallery-1.webp",
        alt: "A pickleball player kneeling on court with a Joocies keychain clipped to his sports bag.",
        width: 719,
        height: 900,
      },
      {
        type: "image",
        src: "/case-studies/joocies-gallery-2.webp",
        alt: "A Joocies keychain clipped to a red leather handbag layered with charms and pearls.",
        width: 715,
        height: 900,
      },
      {
        type: "image",
        src: "/case-studies/joocies-gallery-3.webp",
        alt: "A schoolboy laughing at his desk with a Joocies keychain clipped to his backpack.",
        width: 722,
        height: 900,
      },
      {
        type: "image",
        src: "/case-studies/joocies-gallery-4.webp",
        alt: "A woman on the phone at her desk with a Joocies keychain sitting beside her laptop.",
        width: 719,
        height: 900,
      },
    ],
  },
  {
    slug: "hbf-website",
    brand: "Hongkong Bank Foundation",
    title: "Hongkong Bank Foundation Website",
    type: "Website rebrand and copywriting",
    background: "Redo the entire HBF website with rebranding and new copywriting.",
    insight:
      "The Foundation needed a digital home that could bring its community work, programmes and stories together in one clearer experience.",
    idea: "A full website revamp supported by new copywriting, alongside social content and activation ideas for volunteer appreciation and engagement.",
    image: "/home/work-hbf.webp",
    imageAlt: "The Hongkong Bank Foundation website homepage.",
    gallery: [
      {
        type: "image",
        src: "/home/work-hbf.webp",
        alt: "The Hongkong Bank Foundation website homepage.",
      },
    ],
    // Live site link — fill in and it renders as a "Visit the website" link in the pop-up.
    websiteUrl: "https://www.hongkongbankfoundation.org.hk/",
    // Other HBF work to show alongside the website — title + short description each.
    relatedWork: [],
  },
  {
    slug: "roche-apac-vision-health-survey",
    brand: "Roche",
    title: "APAC Vision Health Survey",
    type: "Social video",
    background:
      "Develop video assets that bring the APAC Vision Health Survey to life, creating new opportunities to engage key stakeholders across APAC on the need to prioritise vision health.",
    insight:
      "The survey data was comprehensive, but in order to easily reach stakeholders and everyday people the findings needed a format they'd actually watch and pass along.",
    idea: "A social video summarising the survey's key findings through animated graphics, built to travel across APAC markets.",
    video: "Ql30jMMuSs8",
    videoTitle: "Roche APAC Vision Health Survey — social video",
  },
  {
    slug: "tourism-arendelle",
    brand: "Hong Kong Disneyland",
    title: "Tourism Arendelle",
    type: "Launch campaign",
    background:
      "The first ever World of Frozen was coming to HK Disneyland. We needed to create buzz for this grand opening.",
    insight:
      "We made Arendelle feel like a real tourist destination for both Hong Kongers and SEA travellers.",
    idea: "We invited people to travel, explore and experience the culture and offerings of Arendelle through a series of tourism-style OOH, contextual, and banner ads.",
    image: "/case-studies/visit-arendelle.webp",
    imageAlt: "Tourism Arendelle launch campaign key art for Hong Kong Disneyland's World of Frozen.",
    gallery: [
      {
        type: "image",
        src: "/case-studies/arendelle-gallery-1.webp",
        alt: "Tourism Arendelle key art and minisite shown on laptop and phone, with the tagline 'Step into the World of Frozen.'",
        width: 1600,
        height: 859,
        wide: true,
      },
      {
        type: "image",
        src: "/case-studies/arendelle-gallery-2.webp",
        alt: "Tourism Arendelle out-of-home takeover on a Hong Kong bus, tram, and bus shelter.",
        width: 1600,
        height: 899,
        wide: true,
      },
      {
        type: "image",
        src: "/case-studies/arendelle-gallery-3.webp",
        alt: "Tourism Arendelle ads inside the Klook, Expedia, and Kayak travel booking apps.",
        width: 1600,
        height: 900,
        wide: true,
      },
      {
        type: "image",
        src: "/case-studies/arendelle-gallery-4.webp",
        alt: "Tourism Arendelle contextual ads appearing alongside travel searches on Instagram, Hypebeast, and Google.",
        width: 1600,
        height: 903,
        wide: true,
      },
      {
        type: "image",
        src: "/case-studies/arendelle-gallery-5.webp",
        alt: "Digital Arendelle Passport app screens: stamps, profile, passport cover, hotel check-in QR code, and autographs.",
        width: 1600,
        height: 899,
        wide: true,
      },
      {
        type: "image",
        src: "/case-studies/arendelle-gallery-6.webp",
        alt: "Arendelle Passport phone mockup surrounded by icons for sliding sleighs, character meet-and-greets, merchandise, and the Golden Crocus Inn.",
        width: 1600,
        height: 902,
        wide: true,
      },
    ],
  },
];

export const openTabs = [
  {
    slug: "yoga",
    href: "/yoga",
    label: "Yoga",
    title: "Yoga student and teacher",
    description:
      "Almost ten years of practice, a 200-hour teacher training, and a lifelong pursuit of greater flexibility.",
    body: [
      "I've been practicing yoga for nearly a decade now and through yoga, I've discovered what it's like to truly understand your own body and connect the power of breath with movement.",
      "My teaching style is dynamic, playful, and challenging, with creative flows that encourage students to explore their strengths with confidence. I particularly enjoy incorporating arm balances and inversions into my classes and personal practice.",
      "I believe there's always something new to learn every time you step on the mat. I teach occasionally and practice most days. If you're looking for a class or a private session, get in touch.",
    ],
    credentials: "200hr YTT & CET with Samrat Dasgupta at Pure Yoga, 2020",
    image: "/tabs/yoga-lead.webp",
    imageAlt: "Alexandra Colgan in a low lunge with a side bend.",
    imageWidth: 1400,
    imageHeight: 933,
    gallery: [
      {
        src: "/tabs/yoga-camel.webp",
        alt: "Alexandra Colgan in a camel pose backbend.",
        width: 1400,
        height: 933,
        title: "Camel",
        caption: "A deep backbend I love for how open it leaves me feeling.",
      },
      {
        src: "/tabs/yoga-wild-thing.webp",
        alt: "Alexandra Colgan in a wild thing backbend.",
        width: 1400,
        height: 933,
        title: "Wild thing",
        caption: "One of my favorite playful backbends.",
      },
      {
        src: "/tabs/yoga-fallen-angel.webp",
        alt: "Alexandra Colgan in a fallen angel pose.",
        width: 933,
        height: 1400,
        title: "Fallen angel",
        caption: "A twist, forward bend, and inversion all in one.",
      },
      {
        src: "/tabs/yoga-handstand.webp",
        alt: "Alexandra Colgan in a handstand.",
        width: 1400,
        height: 933,
        title: "Handstand",
        caption: "It's been a journey to get here and I'm still working on it.",
      },
    ],
    certificationLabel: "Yoga certification",
    certificationFile: "/cert-yoga.jpg",
    resumeLabel: "Yoga resume",
    resumeFile: "/cert-yoga-resume.webp",
    metaTitle: "Yoga",
    metaDescription:
      "Alexandra Colgan is a 200-hour certified yoga teacher trained at Pure Yoga Hong Kong. Dynamic, playful classes with a focus on arm balances and inversions.",
  },
  {
    slug: "babywearing",
    href: "/babywearing",
    label: "Babywearing",
    title: "Babywearing Consultant",
    description: "A babywearing mom of two.",
    body: [
      "Babywearing has seen me through two babies. And not even as a nice-to-have, but as the thing that made it possible to have hands, leave the house, and keep my toddler close while her baby sister slept.",
      "Babywearing isn't just practical, it's a way to keep your little ones close and comforted. Getting the right carrier, fitted properly, for the right body and the right stage, is the difference between something you abandon to the back of the closet and something you use every day for years. Most people who say babywearing \u201cdidn't work\u201d for them were sold the wrong carrier and never shown how to wear it.",
      "I certified with the Australian Babywearing Association in 2025 so I could help with exactly that. I'm available for consultations — fitting, carrier selection, troubleshooting, and working out what suits your body and your baby rather than what's trending.",
      "I'm also hoping to open a carrier library, carrier workshops and babywearing activities in Hong Kong, so people can try before committing and explore babywearing properly. If that's of interest, let me know and I'll keep you posted.",
    ],
    /* Drafted from how certified consultants elsewhere structure sessions —
       60–90 minutes is the standard, with demo dolls and 2–3 carriers tried. */
    sessions: {
      heading: "What a consultation involves",
      intro:
        "Every session is shaped around you, your baby and how you actually live. Broadly, here's what to expect.",
      items: [
        {
          name: "One to one, in person",
          detail:
            "60 to 90 minutes, at your home or somewhere that suits. We'll talk through what you need, try two or three carriers, and practice until you can do it yourself without me. You'll leave able to put it on, take it off and check the fit on your own.",
        },
        {
          name: "One to one, online",
          detail:
            "45 to 60 minutes over video. Best if you already have a carrier and it isn't sitting right, or you want help choosing before you buy. Bring the carrier and the baby.",
        },
        {
          name: "Small groups",
          detail:
            "For friends, antenatal groups or workplaces. Everyone gets hands-on time and there's usually more carriers to try between you.",
        },
      ],
      note: "Follow-up support is included — babies change shape and what worked at six weeks often doesn't at six months.",
    },
    price: {
      label: "Price",
      value: "Available on request, because every need is different.",
    },
    credentials:
      "Babywearing certification, Australian Babywearing Association, 2025",
    image: "/tabs/babywearing-lead.webp",
    imageAlt:
      "Alexandra Colgan carrying her newborn in a red ring sling, outdoors in Hong Kong.",
    imageWidth: 1100,
    imageHeight: 1375,
    cta: {
      label: "Book a consultation or ask a question",
      href: "mailto:alexandracolgan@gmail.com?subject=Babywearing%20consultation",
    },
    secondaryCta: { label: "Join the WhatsApp group", href: "" },
    certificationLabel: "View babywearing certification",
    certificationFile: "/cert-babywearing.pdf",
    metaTitle: "Babywearing Consultant in Hong Kong",
    metaDescription:
      "Certified babywearing consultant in Hong Kong. Carrier fitting, carrier selection and troubleshooting, in person or online. Carrier library in the works.",
    isService: true,
    serviceName: "Babywearing consultation",
    serviceDescription:
      "One-to-one and small group babywearing consultations in Hong Kong: carrier fitting, carrier selection and troubleshooting for newborns through toddlers, in person or online.",
  },
  {
    slug: "coding",
    href: "/coding",
    label: "Coding",
    title: "Small digital products, side projects, and useful experiments.",
    description: "Mostly I build things I want to exist.",
    body: [
      "I completed Harvard's CS50x in 2025, mostly because my husband wanted to do it together (to be honest) but also because I'd dabbled in it years ago and never got around to exploring it again.",
      "My final project was a Cantonese learning app, built because there are hardly any resources for the language of the city I live in.",
      "This website is another project. I designed and built it, which has been a learning curve in closing the gap between \u201cI know what good looks like\u201d and \u201cI know how to make it.\u201d",
    ],
    projects: [
      {
        name: "Cantonese For Kids",
        description:
          "Simple phrases, words, story time and local slang, with Jyutping and audio so you can hear it out loud and repeat it.",
        href: "",
      },
      {
        name: "This website",
        description:
          "Designed and built from scratch. Next.js, and a lot of learning in public.",
        href: "",
      },
      { name: "In the works", description: "Watch this space.", href: "" },
    ],
    credentials: "CS50x certification through Harvard University, 2025",
    image: "/tabs/coding-cantonese.webp",
    imageAlt:
      "The Cantonese For Kids web app, showing tabs for simple phrases, words, story time and local slang.",
    imageWidth: 1400,
    imageHeight: 388,
    cta: { label: "Get in touch", href: "/contact" },
    certificationLabel: "View CS50x certificate",
    certificationFile: "/cert-coding.png",
    metaTitle: "Coding",
    metaDescription:
      "Harvard CS50x, a Cantonese learning app, and this website. Alexandra Colgan's side projects and digital experiments.",
  },
  {
    slug: "currently",
    href: "/currently",
    label: "Currently",
    title: "Books, podcasts, shows\u2026",
    description:
      "What I'm reading, listening to, watching or writing at the moment. Updated when it changes, which is often.",
    image: "/tabs/currently-lead.webp",
    imageAlt:
      "A book open on a sofa arm with two tabby cats perched behind it, in a reading nook.",
    imageWidth: 768,
    imageHeight: 1024,
    body: [
      "A running list of what's got my attention: books I'm in the middle of, podcasts I've been shouting about, and the writing I do that nobody's commissioned.",
      "Most of my best ideas at work have come from somewhere well outside the brief, so I've stopped treating this as a separate thing from the job.",
    ],
    metaTitle: "Currently",
    metaDescription:
      "What Alexandra Colgan is reading, listening to and watching at the moment.",
    nowList: [
      {
        label: "Reading",
        value: "Dungeon Crawler Carl",
        note: "A man in his boxer shorts and his ex's cat fight through a dungeon on live intergalactic TV. Not at all what I imagined I'd like, but I read all eight books faster than any other series I've picked up.",
      },
      {
        label: "Listening",
        value: "Sleep Token",
        note: "Possibly re-entering my emo rock phase.",
      },
      {
        label: "Watching",
        value: "Frieren: Beyond Journey's End",
        note: "Almost nothing seems to happen sometimes, and yet it's very touching in a nostalgic way.",
      },
    ],
    cta: { label: "Get in touch", href: "/contact" },
  },
];

export const contactLinks = [
  {
    href: "https://hk.linkedin.com/in/alexandracolgan",
    label: "LinkedIn",
  },
  {
    href: "mailto:alexandracolgan@gmail.com",
    label: "Email",
  },
  {
    href: "https://www.instagram.com/alexandracolgan",
    label: "Instagram",
  },
];

/* ---------------------------------------------------------------------------
   Homepage content (2026 design)
   Everything the homepage renders lives here so copy can be edited in one file.
--------------------------------------------------------------------------- */

export const homeHero = {
  kicker: "Freelance Creative + Copywriter",
  title: "Where ideas find their",
  titleAccent: "words",
  intro: [
    "I'm a Hong Kong-based creative and copywriter.",
    "I give ideas legs and words a point of view. If you want memorable campaigns and copy people will actually pay attention to, you've found the right place.",
  ],
  image: "/home/hero-portrait.webp",
  imageAlt: "Alexandra Colgan seated, looking towards the camera.",
};

export const homeAbout = {
  kicker: "About Me",
  title: "Turning briefs into work that resonates",
  paragraphs: [
    "Hi, I'm Alexandra! I've spent nearly a decade thinking, writing and creating within the advertising world.",
    "I've worked across big ad agencies on everything from international campaigns and brand platforms to websites, scripts, naming, and social content.",
    "Away from client work, I'm a mom to two girls and a cat, a trained yoga teacher, and an enthusiastic starter of side projects.",
  ],
  image: "/home/about-portrait.webp",
  imageAlt: "Alexandra Colgan at work.",
};

export const homeServices = {
  kicker: "What I Do",
  title: "Concepts, copy, and the bits in between.",
  note: "Looking for something that isn't on the list? Ask away. I like a new challenge.",
  items: [
    {
      lead: "Campaigns:",
      title: "concepts & ideas",
      description:
        "Big ideas, creative platforms, and integrated campaigns that can stretch further than one execution.",
      tone: "gold",
    },
    {
      lead: "Branding:",
      title: "verbal identity",
      description:
        "Naming, voice, and personality. Finding the language and point of view that make a brand unmistakable and ownable.",
      tone: "sage",
    },
    {
      lead: "Content:",
      title: "scripts, social & more",
      description:
        "Long-form scripts, punchy headlines, webcopy and social posts.",
      tone: "sage-light",
    },
  ],
};

export const homeApproach = {
  kicker: "My approach at a glance",
  title: "Curiosity, creativity, craft.",
  items: [
    {
      title: "Curiosity",
      description:
        "I start with questions, not answers. If the brief isn't fully formed yet, we can shape it together.",
    },
    {
      title: "Creativity",
      description:
        "I bring a fresh perspective backed by experience, with ideas that feel unexpected and right at the same time.",
    },
    {
      title: "Craft",
      description:
        "I sweat the details across every layer — the idea, the brand, the platform it lives on, down to the last word.",
    },
  ],
};

export const homeWork = {
  kicker: "Selected Work",
  title: "Work that made it out of the Word Doc.",
  intro:
    "A selection of campaigns, launches and ideas I've helped think up, write for, and send out into the world.",
  items: [
    {
      title: "Joocies",
      sector: "F&B — Sunkist",
      discipline: "Activation Campaign",
      image: "/home/work-joocies.webp",
      imageAlt: "Sunkist Joocies activation campaign artwork.",
      href: "/portfolio/sunkist-citrush-joocies",
    },
    {
      title: "HBF Website",
      sector: "Non-Profit — Hongkong Bank Foundation",
      discipline: "Website Copy",
      image: "/home/work-hbf.webp",
      imageAlt: "The Hongkong Bank Foundation website homepage.",
      href: "/portfolio/hongkong-bank-foundation-website",
    },
    {
      title: "APAC Vision Health Survey",
      sector: "Health — Roche",
      discipline: "Social Video",
      image: "/home/work-roche.webp",
      imageAlt: "Roche APAC Vision Health Survey social video still.",
      href: "/portfolio",
    },
  ],
};

export const homeTabs = {
  kicker: "Open Tabs",
  title:
    "A few things I'm learning, making and thinking about beyond the brief.",
  intro:
    "Yoga, coding experiments, babywearing, and whatever else is currently taking over my mind's browser history.",
  tags: [
    { label: "Yoga", href: "/yoga" },
    { label: "Babywearing", href: "/babywearing" },
    { label: "Coding", href: "/coding" },
    { label: "Currently", href: "/currently" },
  ],
  ctaLabel: "See what I'm exploring",
  ctaHref: "/open-tabs",
};

export const homeContact = {
  title: "Have a brief, a blank page or an idea that's almost there?",
  lead: "Let's bring it to life and get it off the ground.",
  body: [
    "Whether you need a campaign concept, a new voice, a website rewrite or simply another brain to bounce thoughts with, tell me what you're working on.",
    "Freelance projects, creative collaborations and interesting side quests welcome.",
  ],
  ctaLabel: "Get in touch",
  ctaHref: "/contact",
};
