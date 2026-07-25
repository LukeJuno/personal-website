import Link from "next/link";
import SiteShell from "./site-shell";
import { ContactPanel, HeroPortrait, HomeLinks, OpenTabsGrid, WorkGrid } from "./site-sections";

export default function Home() {
  return (
    <SiteShell>
      <section className="hero section-frame">
        <div className="hero-copy">
          <p className="section-kicker">Creative, writer, thinker, yogi, and mom</p>
          <h1 className="hero-title">
            <span className="hero-title-line">Alexandra</span>
            <span className="hero-title-line hero-title-line-last">Colgan</span>
          </h1>
          <p className="hero-intro">
            A Hong Kong-based creative and copywriter shaping stories, language,
            and ideas with clarity and feeling.
          </p>
          <p className="hero-supporting">
            I’ve worked across luxury, lifestyle, healthcare, technology, and
            consumer brands, helping organisations communicate clearly and
            creatively across campaigns, content, websites, and brand voice.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/work">
              View work
            </Link>
            <a className="button button-secondary" href="mailto:hello@alexandracolgan.com">
              Get in touch
            </a>
          </div>
          <p className="hero-footnote">
            Thoughtful stories and modern family life, with room for side
            projects and the occasional digital experiment.
          </p>
        </div>
        <div className="hero-visual">
          <HeroPortrait />
        </div>
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Browse</p>
            <h2>A lighter, page-by-page way through the site.</h2>
          </div>
          <p className="section-intro">
            Inspired by editorial portfolios that feel spacious, calm, and easy
            to move through.
          </p>
        </div>
        <HomeLinks />
      </section>

      <section className="section-frame feature-slab">
        <div className="feature-slab-copy">
          <p className="section-kicker">Selected Work</p>
          <h2>Work that starts with a strong point of view and ends up feeling simple.</h2>
          <p>
            Placeholder projects for now, shaped as polished case-study cards so
            the structure is ready when the details are.
          </p>
        </div>
        <WorkGrid />
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Open Tabs</p>
            <h2>The interests that continue to influence how I work.</h2>
          </div>
          <p className="section-intro">
            Yoga, babywearing, coding, and the kinds of disciplines that keep
            teaching me attention, structure, and care.
          </p>
        </div>
        <OpenTabsGrid />
      </section>

      <ContactPanel />
    </SiteShell>
  );
}
