import Image from "next/image";
import Link from "next/link";
import SiteShell from "./site-shell";
import { CaseStudyGrid } from "./site-sections";
import { caseStudies, openTabs, services, values } from "./site-data";

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
              FREELANCE CREATIVE + COPYWRITER
            </p>
            <h1 className="home-hero-title">Where ideas find their words</h1>
            <p className="home-hero-intro">
              I’m Alexandra, a Hong Kong-based creative and copywriter. I give
              ideas legs and words a point of view. If you want memorable
              campaigns and copy people will actually pay attention to, you’ve
              found the right place.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/portfolio">
                See my work
              </Link>
              <a
                className="button button-secondary"
                href="mailto:alexandracolgan@gmail.com"
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
                src="/about-alexandra.png"
                alt="Alexandra Colgan standing against a neutral studio background."
                fill
                sizes="(max-width: 820px) 92vw, 36vw"
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
              <span>Hi, I’m Alexandra.</span>
            </div>
          </div>

          <div className="home-intro-content">
            <div className="home-intro-heading">
              <h3>I find the idea. Then the words that make it land.</h3>
            </div>
            <div className="home-intro-copy">
              <p className="home-intro-lead">
                I’m a Hong Kong-based copywriter and creative who has spent
                nearly a decade thinking, writing and creating within the
                advertising world.
              </p>
              <p>
                I’ve worked across big ad agencies on everything from
                international campaigns and brand platforms to websites,
                scripts, naming, and social content.
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
          <p className="section-kicker">My Process</p>
          <div className="home-process-grid">
            {values.map((value) => (
              <article key={value.title}>
                <h2>{value.title}</h2>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="home-section home-services">
          <div className="home-services-copy">
            <p className="section-kicker">Services</p>
            <h2>Concepts, copy, and the bits in between.</h2>
            <p>
              Looking for something that isn’t on the list? Ask away. I like a
              new challenge.
            </p>
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
              <h2>Work that made it out of the Google Doc.</h2>
            </div>
            <div>
              <p>
                A selection of campaigns, launches and ideas I’ve helped think
                up, write for and send out into the world.
              </p>
              <Link className="inline-link" href="/portfolio">
                See my work
              </Link>
            </div>
          </div>
          <CaseStudyGrid items={caseStudies.slice(0, 2)} featured />
        </section>

        <section className="home-section home-tabs">
          <div className="home-tabs-copy">
            <p className="section-kicker">Open Tabs</p>
            <h2>A few things I’m learning, making and thinking about beyond the brief.</h2>
            <p>
              From yoga to coding experiments to babywearing ideas to yoga,
              parenting and whatever else is currently taken over my mind’s
              browser history.
            </p>
            <Link className="inline-link" href="/open-tabs">
              See what I’m exploring
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
              Let’s breathe some life into it and get it off the ground.
            </p>
            <p>
              Whether you need a campaign concept, a new voice, a website
              rewrite or simply another brain to bounce thoughts with, tell me
              what you’re working on. Freelance projects, creative
              collaborations and interesting side quests welcome.
            </p>
            <a
              className="button button-primary"
              href="mailto:alexandracolgan@gmail.com"
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
