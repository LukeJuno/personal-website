const projects = [
  {
    number: '01',
    category: 'Brand Strategy',
    title: 'A clearer story for a growing business',
    description:
      'A concise case-study placeholder describing the challenge, your role, and the outcome of the work.',
    image: '/project-one.svg',
  },
  {
    number: '02',
    category: 'Digital Experience',
    title: 'A thoughtful product experience',
    description:
      'Use this space to explain how you approached the problem and what made the final result effective.',
    image: '/project-two.svg',
  },
  {
    number: '03',
    category: 'Creative Direction',
    title: 'A campaign designed to connect',
    description:
      'Replace this placeholder with a short, confident summary of a project you are proud to share.',
    image: '/project-three.svg',
  },
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Go to home section">
          AM
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section" id="home">
        <p className="eyebrow">Independent creative · Hong Kong</p>
        <h1>
          I create thoughtful work for brands, products and people.
        </h1>
        <p className="hero-copy">
          I’m Alex Morgan, a multidisciplinary creative focused on clear ideas,
          considered design and meaningful communication.
        </p>
        <a className="text-link" href="#portfolio">
          View selected work <span aria-hidden="true">↘</span>
        </a>
      </section>

      <section className="about section" id="about">
        <div>
          <p className="section-label">About</p>
        </div>
        <div className="about-content">
          <h2>Simple ideas, carefully made.</h2>
          <p>
            I help ambitious teams turn complex challenges into clear, engaging
            experiences. My work combines strategy, storytelling and visual
            thinking to create results that feel useful, human and distinctive.
          </p>
          <p>
            This is placeholder copy. Replace it with your background, your point
            of view, the kinds of clients you work with and what makes your
            approach different.
          </p>
          <div className="services" aria-label="Services">
            <span>Strategy</span>
            <span>Copywriting</span>
            <span>Creative Direction</span>
            <span>Digital</span>
          </div>
        </div>
      </section>

      <section className="portfolio section" id="portfolio">
        <div className="section-heading">
          <p className="section-label">Selected work</p>
          <h2>A few projects I’ve helped bring to life.</h2>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-image-wrap">
                <img
                  className="project-image"
                  src={project.image}
                  alt="Abstract placeholder artwork"
                />
              </div>
              <div className="project-details">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="section-label">Contact</p>
        <h2>Have a project in mind? Let’s talk.</h2>
        <p>
          I’m available for selected freelance projects, collaborations and
          interesting conversations.
        </p>
        <a className="email-link" href="mailto:hello@example.com">
          hello@example.com
        </a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Alex Morgan</p>
        <div>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </footer>
    </main>
  )
}
