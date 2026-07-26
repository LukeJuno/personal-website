import Image from "next/image";
import Link from "next/link";
import SiteShell from "./site-shell";
import { ContactPanel, HomeLinks } from "./site-sections";
import { openTabs } from "./site-data";

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
            <div className="home-portrait-accent" aria-hidden="true" />
            <div className="home-portrait-frame">
              <Image
                src="/profile-headshot.png"
                alt="Alexandra Colgan seated on a sofa."
                fill
                priority
                sizes="(max-width: 820px) 100vw, 48vw"
                className="home-portrait-image"
              />
            </div>
          </div>
        </section>

        <section className="home-section home-statement">
          <p className="section-kicker">What I bring</p>
          <h2>
            Clear thinking, thoughtful language, and a human point of view.
          </h2>
          <div className="home-statement-copy">
            <p>
              I’ve worked across luxury, lifestyle, healthcare, technology,
              and consumer brands, helping organisations communicate clearly
              and creatively across campaigns, content, websites, and brand
              voice.
            </p>
            <p>
              Thoughtful stories and modern family life, with room for side
              projects and the occasional digital experiment.
            </p>
          </div>
        </section>

        <section className="home-section home-browse">
          <div className="home-browse-copy">
            <p className="section-kicker">Browse</p>
            <h2>A lighter, page-by-page way through the site.</h2>
            <p>
              Background, work, services, and the interests that keep
              influencing how I think.
            </p>
          </div>
          <HomeLinks />
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

        <div className="home-contact">
          <ContactPanel />
        </div>
      </div>
    </SiteShell>
  );
}
