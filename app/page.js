import ThemeToggle from "./theme-toggle";

const services = [
  {
    title: "Campaigns: Concepts and copy",
    description:
      "Big ideas, creative platforms, and integrated campaigns that can stretch further than one execution.",
  },
  {
    title: "Branding: Voice, naming, and verbal identity",
    description:
      "Names, taglines and personality. Finding the language and point of view that make a brand sound unmistakably like itself.",
  },
  {
    title: "Content: Scripts, Social, websites and more",
    description:
      "From thoughtful long-form script writing to powerful headlines to quick-turnaround social posts. Clear copy that helps people understand why it matters.",
  },
];

const values = [
  {
    number: "01",
    title: "Curiosity",
    description:
      "Ask questions. Notice the little details. Follow the interesting thought.",
  },
  {
    number: "02",
    title: "Creativity",
    description:
      "Find the new angle nobody expected, but everyone understands once they see it.",
  },
  {
    number: "03",
    title: "Craft",
    description:
      "Words carefully chosen with an unreasonable level of interest in correct punctuation.",
  },
];

const workItems = [
  {
    title: "A big brand idea",
    accent: "champagne",
  },
  {
    title: "A product launch with personality",
    accent: "sage",
  },
  {
    title: "A complicated story, made simple",
    accent: "slate",
  },
];

const openTabs = [
  {
    label: "Practicing",
    title: "Yoga and teaching.",
    credentials:
      "200hr YTT & CET with Samrat Dasgupta at Pure Yoga, 2020",
  },
  {
    label: "Exploring",
    title: "Babywearing and consultancy.",
    credentials:
      "Babywearing certification from the Australian Babywearing Association, 2025",
  },
  {
    label: "Building",
    title: "Apps and AI experiments.",
    credentials:
      "CS50x certification through Harvard University, 2025",
  },
];

function HeroGraphic() {
  return (
    <div className="graphic-shell" aria-hidden="true">
      <div className="graphic-orbit graphic-orbit-one" />
      <div className="graphic-orbit graphic-orbit-two" />
      <div className="graphic-panel">
        <div className="graphic-mark" />
        <div className="graphic-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function ProjectGraphic({ accent }) {
  return (
    <div className={`project-graphic ${accent}`} aria-hidden="true">
      <span className="project-graphic-grid" />
      <span className="project-graphic-card" />
      <span className="project-graphic-dot" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#home" aria-label="Go to home">
          Alexandra Colgan
        </a>

        <div className="header-actions">
          <nav className="site-nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#services">What I Do</a>
            <a href="#values">Values</a>
            <a href="#work">Work</a>
            <a href="#open-tabs">Open Tabs</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <div id="content">
        <section className="hero section-frame" id="home">
          <div className="hero-copy">
            <p className="section-kicker">Freelance creative + copywriter</p>
            <h1>I find the idea. Then the words that make it land.</h1>
            <p className="hero-intro">
              I’m Alexandra, a Hong Kong-based creative and copywriter. I give
              ideas legs and words a point of view. If you want memorable
              campaigns and copy people will actually pay attention to, you’re
              in the right place.
            </p>
            <p className="hero-supporting">
              From international TV commercials to the smallest social caption,
              I can think big, write small and make every word count.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                See my work
              </a>
              <a className="button button-secondary" href="#contact">
                Tell me what you’re making
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <HeroGraphic />
          </div>
        </section>

        <section className="section-frame section-grid" id="about">
          <div className="section-meta">
            <p className="section-kicker">About</p>
          </div>
          <div className="section-content section-content-wide">
            <h2>Hi, I’m Alexandra.</h2>
            <div className="prose">
              <p>
                I’m a Hong Kong-based copywriter and creative who has spent
                nearly a decade turning complicated briefs into ideas people
                can resonate with. I’ve worked at across big ad agencies on
                everything from international campaigns and brand platforms to
                websites, scripts, naming, and social content.
              </p>
              <p>
                Away from client work, I’m a mother to two humans and a cat, a
                trained yoga teacher, and an enthusiastic starter of side
                projects.
              </p>
            </div>
          </div>
        </section>

        <section className="section-frame" id="services">
          <div className="section-heading">
            <div>
              <p className="section-kicker">What I Do</p>
              <h2>Ideas, words, and the bits in between.</h2>
            </div>
          </div>
          <div className="card-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <p className="section-closing">
            Looking for something that isn’t on the list? Ask away. I like a new
            challenge.
          </p>
        </section>

        <section className="section-frame" id="values">
          <div className="section-heading">
            <p className="section-kicker">Values</p>
          </div>
          <div className="values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <p className="value-number">{value.number}</p>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-frame section-grid" id="experience">
          <div className="section-meta">
            <p className="section-kicker">Experience</p>
          </div>
          <div className="section-content section-content-wide">
            <h2>
              Alexandra has spent nearly a decade thinking, writing and
              creating within the advertising world.
            </h2>
            <div className="prose">
              <p>
                She’s created work across luxury, lifestyle, healthcare,
                technology and F&amp;B brands for global and local clients.
              </p>
              <p>
                From campaign platforms and television scripts to websites,
                product names, pitch decks and social posts—the format changes,
                but the job remains the same: find the clearest, most compelling
                way to say it.
              </p>
            </div>
          </div>
        </section>

        <section className="section-frame" id="work">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Selected Work</p>
              <h2>Work that made it out of the Google Doc.</h2>
            </div>
            <p className="section-intro">
              A selection of campaigns, launches and ideas I’ve helped think
              up, write for and send out into the world.
            </p>
          </div>
          <div className="card-grid">
            {workItems.map((item) => (
              <article className="content-card project-card" key={item.title}>
                <ProjectGraphic accent={item.accent} />
                <div className="card-copy">
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
          <p className="section-closing">
            Full case studies are on their way. Good work—like good
            copy—sometimes takes a minute.
          </p>
        </section>

        <section className="section-frame" id="open-tabs">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Open Tabs</p>
              <h2>
                A few things I’m learning, making and thinking about beyond the
                brief.
              </h2>
            </div>
            <p className="section-intro">
              From yoga to coding experiments to babywearing ideas to yoga,
              parenting and whatever else is currently taken over my mind’s
              browser history.
            </p>
          </div>
          <div className="card-grid">
            {openTabs.map((item) => (
              <article className="open-tab-card" key={item.label}>
                <p className="card-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p className="credential">
                  <strong>Credentials:</strong> {item.credentials}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-frame contact-panel" id="contact">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Contact</p>
              <h2>Have a brief, a blank page or an idea that’s almost there?</h2>
            </div>
          </div>
          <div className="contact-layout">
            <div className="prose">
              <p className="contact-copy">
                Let’s breathe some life into it and get it off the ground.
              </p>
              <p className="contact-copy">
                Whether you need a campaign concept, a new voice, a website
                rewrite or simply another brain to bounce thoughts with, tell me
                what you’re working on.
              </p>
            </div>
            <div className="contact-actions">
              <a
                className="button button-primary"
                href="mailto:hello@alexandracolgan.com"
              >
                Tell me about your project
              </a>
              <p>
                Freelance projects, creative collaborations and interesting
                side quests welcome.
              </p>
              <div className="contact-links" aria-label="Social links">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a href="mailto:hello@alexandracolgan.com">Email</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <p>© 2026 Alexandra Colgan</p>
        <a href="#home">Back to top</a>
      </footer>
    </main>
  );
}
