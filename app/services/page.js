import SiteShell from "../site-shell";
import { ContactPanel, PageIntro, ServicesGrid } from "../site-sections";

export const metadata = {
  title: "Services",
  description:
    "Creative and copywriting services by Alexandra Colgan, including campaigns, brand voice, and editorial content.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Services"
        title="Ideas, words, and the structure that helps them travel well."
        intro="I work across concepts, campaigns, brand voice, and editorial copy, usually somewhere between the strategic and the expressive."
        aside="Whether the brief is a launch, a website, a script, or a verbal identity project, the aim is always to make the idea feel sharper and easier to understand."
      />

      <section className="section-frame">
        <div className="section-heading">
          <div>
            <p className="section-kicker">What I Do</p>
            <h2>Creative work with clarity at the center.</h2>
          </div>
        </div>
        <ServicesGrid />
      </section>

      <section className="section-frame section-grid">
        <div className="section-meta">
          <p className="section-kicker">Approach</p>
        </div>
        <div className="section-content section-content-wide">
          <div className="prose">
            <p>
              I like starting with the question behind the question. What are
              we really trying to say, and what is getting in the way?
            </p>
            <p>
              From there, the process becomes part editing, part distilling, and
              part making sure the language still sounds like a human being wrote
              it.
            </p>
          </div>
        </div>
      </section>

      <ContactPanel />
    </SiteShell>
  );
}
