import Image from "next/image";
import Link from "next/link";
import {
  brands,
  caseStudies,
  contactLinks,
  openTabs,
  portfolioWork,
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

export function PortfolioWork() {
  return (
    <div className="pf-work-list">
      {portfolioWork.map((item, index) => (
        <article className="pf-work-row" key={item.slug}>
          <p className="pf-work-number">{String(index + 1).padStart(2, "0")}</p>
          <div
            className={`pf-work-grid${index % 2 === 1 ? " pf-work-grid-reverse" : ""}`}
          >
            <div className="pf-work-media">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 820px) 100vw, 45vw"
              />
            </div>
            <div className="pf-work-copy">
              <p className="pf-work-brand">{item.brand}</p>
              <h3 className="pf-work-title">{item.title}</h3>
              <p className="pf-work-type">{item.type}</p>
              <div className="pf-work-blocks">
                <div>
                  <p className="pf-work-label">Background</p>
                  <p className="pf-work-text">{item.background}</p>
                </div>
                <div>
                  <p className="pf-work-label">Insight</p>
                  <p className="pf-work-text">{item.insight}</p>
                </div>
                <div>
                  <p className="pf-work-label">Idea</p>
                  <p className="pf-work-text">{item.idea}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function OpenTabsGrid() {
  return (
    <div className="open-tabs-stack">
      {openTabs.map((item) => (
        <article className="open-tab-row" id={item.slug} key={item.slug}>
          <Link className="open-tab-media" href={item.href}>
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 960px) 100vw, 38vw"
            />
          </Link>
          <div className="open-tab-copy">
            <p className="card-label">{item.label}</p>
            <h3>
              <Link href={item.href}>{item.title}</Link>
            </h3>
            <p>{item.description}</p>
            {item.credentials ? (
              <p className="credential">
                <strong>Credentials:</strong> {item.credentials}
              </p>
            ) : null}
            <Link className="inline-link" href={item.href}>
              Read more
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export function ContactPanel() {
  return (
    <section className="section-frame contact-panel">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Have a brief, a blank page, or an idea that’s almost there?</h2>
        </div>
      </div>
      <div className="contact-layout">
        <div className="prose">
          <p className="contact-copy">
            Let’s breathe some life into it and get it off the ground.
          </p>
          <p className="contact-copy">
            Whether you need a campaign concept, a new voice, a website rewrite
            or simply another brain to bounce thoughts with, tell me what
            you’re working on. Freelance projects, creative collaborations and
            interesting side quests welcome.
          </p>
        </div>
        <div className="contact-actions">
          <a
            className="button button-primary"
            href="mailto:alexandracolgan@gmail.com"
          >
            Get in touch
          </a>
          <div className="contact-links" aria-label="Social links">
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
      </div>
    </section>
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
