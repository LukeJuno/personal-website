import Image from "next/image";
import Link from "next/link";
import {
  brands,
  caseStudies,
  contactLinks,
  homeContact,
  openTabs,
  services,
  values,
  workItems,
} from "./site-data";

export function HeroPortrait() {
  return (
    <div className="portrait-shell">
      <div className="portrait-stage">
        <div className="portrait-stage-bar" aria-hidden="true" />
        <div className="portrait-backdrop" aria-hidden="true" />
        <div className="portrait-frame">
          <Image
            src="/profile-portrait.png"
            alt="Portrait of Alexandra Colgan seated on a sofa in a mustard dress."
            fill
            priority
            sizes="(max-width: 960px) 100vw, 42vw"
            className="portrait-image"
          />
        </div>
      </div>
      <div className="portrait-note">
        <span className="portrait-note-label">Based in Hong Kong</span>
        <span className="portrait-note-copy">
          Creative, writer, thinker, yogi, and mom.
        </span>
      </div>
    </div>
  );
}

export function PageIntro({ kicker, title, intro, aside }) {
  return (
    <section className="page-intro section-frame">
      <div className="section-meta">
        <p className="section-kicker">{kicker}</p>
      </div>
      <div className="section-content section-content-wide">
        <h1 className="page-title">{title}</h1>
        <p className="page-intro-copy">{intro}</p>
        {aside ? <p className="page-intro-aside">{aside}</p> : null}
      </div>
    </section>
  );
}

export function ValueGrid() {
  return (
    <div className="values-grid">
      {values.map((value) => (
        <article className="value-card" key={value.title}>
          <div className="value-icon" aria-hidden="true">
            {value.icon}
          </div>
          <h3>{value.title}</h3>
          <p>{value.description}</p>
        </article>
      ))}
    </div>
  );
}

export function ServicesGrid() {
  return (
    <div className="card-grid card-grid-three">
      {services.map((service) => (
        <article className="service-card" key={service.title}>
          <p className="card-label">Service</p>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </article>
      ))}
    </div>
  );
}

function ProjectGraphic({ accent }) {
  return (
    <div className={`project-graphic ${accent}`} aria-hidden="true">
      <span className="project-graphic-panel project-graphic-panel-a" />
      <span className="project-graphic-panel project-graphic-panel-b" />
      <span className="project-graphic-line" />
    </div>
  );
}

export function WorkGrid() {
  return (
    <div className="card-grid card-grid-three">
      {workItems.map((item) => (
        <article className="content-card project-card" key={item.title}>
          <ProjectGraphic accent={item.accent} />
          <div className="card-copy">
            <p className="card-label">Selected work</p>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function CaseStudyGrid({ items = caseStudies, featured = false }) {
  return (
    <div className={`case-study-grid${featured ? " case-study-grid-featured" : ""}`}>
      {items.map((study) => (
        <Link
          className="case-study-card"
          href={`/portfolio/${study.slug}`}
          key={study.slug}
        >
          <div className="case-study-media">
            <Image
              src={study.images[0].src}
              alt={study.images[0].alt}
              fill
              sizes={featured ? "(max-width: 820px) 100vw, 48vw" : "(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"}
            />
          </div>
          <div className="case-study-copy">
            <p className="card-label">{study.brand}</p>
            <h3>{study.title}</h3>
            <p>{study.background}</p>
            <span className="case-study-link">View case study <span aria-hidden="true">↗</span></span>
          </div>
        </Link>
      ))}
    </div>
  );
}

function MarqueeRow({ logos, direction }) {
  const looped = logos.concat(logos);
  return (
    <div className="pf-marquee-row">
      <div className={`pf-marquee-track pf-marquee-${direction}`}>
        {looped.map((brand, index) => (
          <img
            key={`${brand.name}-${index}`}
            src={brand.logo}
            alt={brand.name}
            className="pf-marquee-logo"
          />
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  const half = Math.ceil(brands.length / 2);
  const rowA = brands.slice(0, half);
  const rowB = brands.slice(half);
  return (
    <div className="pf-marquee" aria-label="Brands Alexandra has worked with">
      <MarqueeRow logos={rowA} direction="left" />
      <MarqueeRow logos={rowB} direction="right" />
    </div>
  );
}

// Understated two-tone alternating bands (not a per-row color cycle) —
// flat color fields confined to the narrow column, not full-bleed cards.
const OT_SECTION_TONES = ["cream", "parchment"];

export function OpenTabsGrid() {
  return (
    <>
      {openTabs.map((item, index) => (
        <section className="ot-section" id={item.slug} key={item.slug}>
          <div
            className={`ot-section-inner ot-section-inner-${OT_SECTION_TONES[index % OT_SECTION_TONES.length]}`}
          >
            <article className="ot-row">
              <Link className="ot-row-media" href={item.href}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 560px) 100vw, 18rem"
                />
              </Link>
              <div className="ot-row-copy">
                <p className="ot-row-label">{item.label}</p>
                <h3 className="ot-row-title">
                  <Link href={item.href}>{item.title}</Link>
                </h3>
                <p className="ot-row-desc">{item.description}</p>
                {item.credentials ? (
                  <p className="ot-row-credential">
                    Credentials: {item.credentials}
                  </p>
                ) : null}
                <Link className="hp-inline-link ot-row-more" href={item.href}>
                  Read more
                </Link>
              </div>
            </article>
          </div>
        </section>
      ))}
    </>
  );
}

export function ContactPanel() {
  return (
    <div className="hp">
      <section className="hp-band hp-band-forest hp-contact" id="contact">
        <div className="hp-inner hp-inner-narrow hp-center">
          <h2 className="hp-heading hp-heading-light hp-contact-title">
            {homeContact.title}
          </h2>
          <p className="hp-contact-lead">{homeContact.lead}</p>
          {homeContact.body.map((line) => (
            <p className="hp-contact-body" key={line}>
              {line}
            </p>
          ))}
          <a className="hp-button hp-button-invert" href={homeContact.ctaHref}>
            {homeContact.ctaLabel}
          </a>
          <div className="hp-contact-links" aria-label="Social links">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function HomeLinks() {
  const cards = [
    {
      href: "/about",
      kicker: "About",
      title: "Background, approach, and the way I like to work.",
    },
    {
      href: "/portfolio",
      kicker: "Portfolio",
      title: "Brands and sectors I’ve had the pleasure of working across.",
    },
    {
      href: "/services",
      kicker: "Services",
      title: "Campaigns, brand voice, websites, and editorial copy.",
    },
    {
      href: "/open-tabs",
      kicker: "Open Tabs",
      title: "Yoga, babywearing, coding, and the things I keep learning from.",
    },
  ];

  return (
    <div className="card-grid card-grid-three">
      {cards.map((card) => (
        <Link className="nav-card" href={card.href} key={card.href}>
          <p className="card-label">{card.kicker}</p>
          <h3>{card.title}</h3>
          <span className="nav-card-link">Open page</span>
        </Link>
      ))}
    </div>
  );
}
