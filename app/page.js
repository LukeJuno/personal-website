import Image from "next/image";
import Link from "next/link";
import SiteShell from "./site-shell";
import { BrandLogoGrid } from "./site-sections";
import { openTabs, services, workItems } from "./site-data";

function ServiceIcon({ index }) {
  const icons = [
    <path key="campaign" d="M5 18h4l8-6V6L9 12H5v6Zm12-8 2 2-2 2" />,
    <path key="voice" d="M6 7h12M6 12h9M6 17h6" />,
    <path key="editorial" d="M5 5h14v14H5zM9 5v14M9 10h10" />,
  ];

  return (
    <svg
      aria-hidden="true"
      className="home-service-icon"
      viewBox="0 0 24 24"
    >
      {icons[index]}
    </svg>
  );
}

export default function Home() {
  return (
    <SiteShell>
      <div className="home-page">
        <section className="home-section home-hero">
          <div className="home-hero-copy">
            <p className="section-kicker">
              Creative, writer, thinker, yogi, and mom
            </p>
            <h1 className="home-hero-title">
              <span>Alexandra</span>
              {" "}
              <span>Colgan</span>
            </h1>
            <p className="home-hero-intro">
              A Hong Kong-based creative and copywriter shaping stories,
              language, and ideas with clarity and feeling.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/portfolio">
                View portfolio
              </Link>
              <a
                className="button button-secondary"
                href="mailto:hello@alexandracolgan.com"
              >
                Get in touch
              </a>
            </div>
          </div>

          <div className="home-portrait">
            <div className="home-portrait-frame">
              <Image
                src="/profile-headshot.png"
                alt="Alexandra Colgan seated on a sofa."
                fill
                priority
                sizes="(max-width: 820px) 100vw, 34vw"
                className="home-portrait-image"
              />
            </div>
          </div>
        </section>

        <section className="home-section home-intro">
          <div className="home-intro-visual">
            <h2 className="home-intro-title">About Me</h2>
            <div className="home-intro-portrait">
              <Image
                src="/about-portrait-placeholder.svg"
                alt="Placeholder for Alexandra’s future About portrait."
                fill
                sizes="(max-width: 820px) 100vw, 42vw"
              />
            </div>
            <div className="home-intro-sticker">
              <svg aria-hidden="true" viewBox="0 0 140 110">
                <path
                  className="home-intro-sticker-ring"
                  d="M14 53C9 34 24 15 51 10c30-6 62-1 75 17 14 20 8 46-14 62-20 15-56 17-79 5C15 85 7 69 14 53Z"
                />
                <path
                  className="home-intro-sticker-mark"
                  d="M27 19C45 7 79 4 105 14M128 46c3 15-4 30-18 42"
                />
              </svg>
              <span>Hi, I’m Alexandra!</span>
            </div>
          </div>

          <div className="home-intro-content">
            <div className="home-intro-heading">
              <h3>I find the idea, then the words that make it land</h3>
            </div>
            <div className="home-intro-copy">
              <p>
                I’m a Hong Kong-based copywriter and creative who has spent
                nearly a decade turning complicated briefs into ideas people
                can resonate with. I’ve worked across big ad agencies on
                everything from international campaigns and brand platforms to
                websites, scripts, naming, and social content.
              </p>
              <p>
                Away from client work, I’m a mom to two girls and a cat, a
                trained yoga teacher, and an enthusiastic starter of side
                projects.
              </p>
            </div>
          </div>
        </section>

        <section className="home-section home-highlight">
          <p className="section-kicker">What I bring</p>
          <h2>
            “Clear thinking, thoughtful language, and a human point of view.”
          </h2>
          <p>
            The aim is simple: make the idea easier to understand without
            sanding away everything that makes it interesting.
          </p>
        </section>

        <section className="home-section home-services">
          <div className="home-services-copy">
            <p className="section-kicker">Services</p>
            <h2>Words with structure, personality, and somewhere to go.</h2>
            <p>
              From the first strategic question to the final line, I help give
              ideas a clearer shape and a more recognisable voice.
            </p>
            <Link className="button button-mustard" href="/services">
              Explore services
            </Link>
          </div>
          <div className="home-services-list">
            {services.map((service, index) => (
              <article className="home-service-card" key={service.title}>
                <ServiceIcon index={index} />
                <p className="card-label">0{index + 1}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section home-portfolio">
          <div className="home-portfolio-heading">
            <div>
              <p className="section-kicker">Portfolio</p>
              <h2>Brands I’ve worked with</h2>
            </div>
            <div>
              <p>
                A selection of global and regional names across luxury,
                lifestyle, healthcare, technology, finance, hospitality, and
                consumer culture.
              </p>
              <Link className="inline-link" href="/portfolio">
                Explore the portfolio
              </Link>
            </div>
          </div>
          <div className="home-brand-field">
            <BrandLogoGrid />
          </div>
          <div className="home-projects">
            <article className="home-project home-project-wide">
              <div className="home-project-image">
                <Image
                  src="/editorial-project-placeholder.jpg"
                  alt="Editorial placeholder showing a fictional brand campaign in progress."
                  fill
                  sizes="(max-width: 820px) 100vw, 62vw"
                />
              </div>
              <div className="home-project-copy">
                <p className="card-label">Selected work / placeholder</p>
                <h3>{workItems[0].title}</h3>
                <p>{workItems[0].summary}</p>
              </div>
            </article>
            <article className="home-project">
              <div
                className="home-project-art home-project-art-sage"
                aria-hidden="true"
              >
                <span />
                <span />
                <span />
              </div>
              <div className="home-project-copy">
                <p className="card-label">Selected work / placeholder</p>
                <h3>{workItems[1].title}</h3>
                <p>{workItems[1].summary}</p>
              </div>
            </article>
          </div>
        </section>

        <section className="home-section home-tabs">
          <div className="home-tabs-copy">
            <p className="section-kicker">Open Tabs</p>
            <h2>The interests that continue to influence how I work.</h2>
            <p>
              Yoga, babywearing, coding, and the kinds of disciplines that keep
              teaching me attention, structure, and care.
            </p>
            <Link className="inline-link" href="/open-tabs">
              Explore all open tabs
            </Link>
          </div>
          <div className="home-tabs-list">
            {openTabs.map((tab, index) => (
              <Link
                className="home-tab-link"
                href={`/open-tabs#${tab.slug}`}
                key={tab.slug}
              >
                <span className="home-tab-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <span>
                  <strong>{tab.label}</strong>
                  <small>{tab.title}</small>
                </span>
                <span className="home-tab-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-section home-cta">
          <div className="home-cta-copy">
            <p className="section-kicker">Contact</p>
            <h2>Have a brief, a blank page, or an idea that’s almost there?</h2>
            <p>
              Let’s bring shape, language, and momentum to it. Freelance
              projects, collaborations, and interesting side paths are all
              welcome.
            </p>
            <a
              className="button button-primary"
              href="mailto:hello@alexandracolgan.com"
            >
              Get in touch
            </a>
          </div>
          <div className="home-cta-visual">
            <div className="home-cta-accent" aria-hidden="true" />
            <div className="home-cta-image">
              <Image
                src="/editorial-cta-placeholder.jpg"
                alt="Open notebook, pencil, ceramic cup, and pale green textile in soft window light."
                fill
                sizes="(max-width: 820px) 100vw, 48vw"
              />
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
