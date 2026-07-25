import Image from "next/image";
import Link from "next/link";
import { contactLinks, openTabs, services, values, workItems } from "./site-data";

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

export function OpenTabsGrid() {
  return (
    <div className="open-tabs-stack">
      {openTabs.map((item) => (
        <article className="open-tab-row" key={item.slug}>
          <div className="open-tab-media">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              sizes="(max-width: 960px) 100vw, 38vw"
            />
          </div>
          <div className="open-tab-copy">
            <p className="card-label">{item.label}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="credential">
              <strong>Credentials:</strong> {item.credentials}
            </p>
            <a
              className="inline-link certification-link"
              href={item.certificationFile}
              target="_blank"
              rel="noreferrer"
            >
              {item.certificationLabel}
            </a>
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
            Let’s bring shape, language, and momentum to it.
          </p>
          <p className="contact-copy">
            Freelance projects, collaborations, and interesting side paths are
            all welcome.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:hello@alexandracolgan.com">
            Get in touch
          </a>
          <div className="contact-links" aria-label="Social links">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
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
