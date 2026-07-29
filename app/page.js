import Image from "next/image";
import Link from "next/link";
import SiteShell from "./site-shell";
import {
  homeAbout,
  homeApproach,
  homeContact,
  homeHero,
  homeServices,
  homeTabs,
  homeWork,
} from "./site-data";

export default function Home() {
  return (
    <SiteShell>
      <div className="hp">
        {/* ---------------------------------------------------------- HERO */}
        <section className="hp-hero">
          <div className="hp-hero-copy">
            <p className="hp-kicker">{homeHero.kicker}</p>
            <h1 className="hp-hero-title">
              {homeHero.title}{" "}
              <span className="hp-underline">{homeHero.titleAccent}</span>
            </h1>
            {homeHero.intro.map((line) => (
              <p className="hp-hero-intro" key={line}>
                {line}
              </p>
            ))}
            <div className="hp-actions">
              <Link className="hp-button" href="/portfolio">
                See my work
              </Link>
              <a className="hp-button hp-button-ghost" href={homeContact.ctaHref}>
                Get in touch
              </a>
            </div>
          </div>

          <div className="hp-portrait">
            <span className="hp-portrait-shadow" aria-hidden="true" />
            <Image
              className="hp-portrait-image"
              src={homeHero.image}
              alt={homeHero.imageAlt}
              width={758}
              height={764}
              priority
              sizes="(max-width: 860px) 92vw, 44vw"
            />
          </div>
        </section>

        {/* --------------------------------------------------------- ABOUT */}
        <section className="hp-about" id="about">
          <Image
            className="hp-about-image"
            src={homeAbout.image}
            alt={homeAbout.imageAlt}
            width={996}
            height={664}
            sizes="(max-width: 860px) 92vw, 44vw"
          />
          <div>
            <p className="hp-kicker">{homeAbout.kicker}</p>
            <h2 className="hp-heading">{homeAbout.title}</h2>
            {homeAbout.paragraphs.map((line) => (
              <p className="hp-body" key={line}>
                {line}
              </p>
            ))}
            <Link className="hp-inline-link" href="/about">
              More about me
            </Link>
          </div>
        </section>

        {/* ------------------------------------------------------ SERVICES */}
        <section className="hp-band hp-band-cream" id="services">
          <div className="hp-inner">
            <p className="hp-kicker hp-center">{homeServices.kicker}</p>
            <h2 className="hp-heading hp-center hp-heading-wide">
              {homeServices.title}
            </h2>
            <div className="hp-cards">
              {homeServices.items.map((item) => (
                <article className="hp-card" key={item.title}>
                  <span
                    className={`hp-dot hp-dot-${item.tone}`}
                    aria-hidden="true"
                  />
                  <h3 className="hp-card-title">
                    <em>{item.lead}</em>
                    <br />
                    {item.title}
                  </h3>
                  <p className="hp-body hp-body-tight">{item.description}</p>
                </article>
              ))}
            </div>
            <p className="hp-note">{homeServices.note}</p>
            <div className="hp-center">
              <Link className="hp-button" href="/services">
                See all services
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ APPROACH */}
        <section className="hp-band hp-band-forest">
          <div className="hp-inner">
            <p className="hp-kicker hp-center hp-kicker-light">
              {homeApproach.kicker}
            </p>
            <h2 className="hp-heading hp-center hp-heading-light">
              {homeApproach.title}
            </h2>
            <div className="hp-approach">
              {homeApproach.items.map((item, index) => (
                <div key={item.title}>
                  <p className="hp-approach-number">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="hp-approach-title">{item.title}</h3>
                  <p className="hp-approach-copy">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- WORK */}
        <section className="hp-band" id="work">
          <div className="hp-inner">
            <p className="hp-kicker">{homeWork.kicker}</p>
            <h2 className="hp-heading hp-heading-narrow">{homeWork.title}</h2>
            <p className="hp-body hp-lead">{homeWork.intro}</p>
            <div className="hp-work">
              {homeWork.items.map((item) => (
                <Link className="hp-work-card" href={item.href} key={item.title}>
                  <Image
                    className="hp-work-image"
                    src={item.image}
                    alt={item.imageAlt}
                    width={840}
                    height={520}
                    sizes="(max-width: 860px) 92vw, 30vw"
                  />
                  <h3 className="hp-work-title">{item.title}</h3>
                  <p className="hp-work-meta">
                    {item.sector}
                    <br />
                    {item.discipline}
                  </p>
                </Link>
              ))}
            </div>
            <div className="hp-work-more">
              <Link className="hp-inline-link" href="/portfolio">
                See my portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------- OPEN TABS */}
        <section className="hp-band hp-band-cream" id="tabs">
          <div className="hp-inner hp-inner-narrow hp-center">
            <p className="hp-kicker">{homeTabs.kicker}</p>
            <h2 className="hp-heading">{homeTabs.title}</h2>
            <p className="hp-body hp-lead hp-lead-center">{homeTabs.intro}</p>
            <ul className="hp-tags">
              {homeTabs.tags.map((tag) => (
                <li key={tag.label}>
                  <Link className="hp-tag" href={tag.href}>
                    {tag.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link className="hp-button" href={homeTabs.ctaHref}>
              {homeTabs.ctaLabel}
            </Link>
          </div>
        </section>

        {/* ------------------------------------------------------- CONTACT */}
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
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
