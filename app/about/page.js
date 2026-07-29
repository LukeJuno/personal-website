import SiteShell from "../site-shell";
import { ContactPanel, PageIntro, ValueGrid } from "../site-sections";

export const metadata = {
  title: "About",
  description:
    "About Alexandra Colgan, a Hong Kong-based creative and copywriter working across campaigns, content, and brand voice.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="About"
        title="Clear thinking, warm language, and ideas with a human center."
        intro="I’m Alexandra Colgan, a Hong Kong-based creative and copywriter who enjoys simplifying complex ideas into thoughtful stories and experiences."
        aside="Over the years I’ve worked across luxury, lifestyle, healthcare, technology, and consumer brands, helping organizations find language that feels both sharp and genuinely human."
      />

      <section className="section-frame section-grid">
        <div className="section-meta">
          <p className="section-kicker">Biography</p>
        </div>
        <div className="section-content section-content-wide">
          <div className="prose">
            <p>
              My background is in agency creative work, where I have spent
              nearly a decade thinking through campaigns, writing across
              formats, and finding the idea underneath the brief.
            </p>
            <p>
              I’ve worked on everything from international brand campaigns and
              scripts to websites, naming, social content, decks, and verbal
              systems. The surface changes, but the job is usually the same:
              make it clearer, more resonant, and more memorable.
            </p>
            <p>
              Outside client work, I’m interested in design, digital products,
              parenting, babywearing, yoga, and building small useful things.
              I completed Harvard’s CS50x, built a Cantonese learning app, and
              still like following a curious thread further than necessary.
            </p>
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Values</p>
            <h2>The principles I return to most often.</h2>
          </div>
        </div>
        <ValueGrid />
      </section>

      <section className="section-frame section-grid">
        <div className="section-meta">
          <p className="section-kicker">Experience</p>
        </div>
        <div className="section-content section-content-wide">
          <div className="prose">
            <p>
              I’ve created work across luxury, lifestyle, healthcare,
              technology, and consumer categories for both local and global
              clients.
            </p>
            <p>
              From campaign platforms and launch copy to websites, social, and
              scripts, I like helping teams find the sharpest version of what
              they mean.
            </p>
          </div>
        </div>
      </section>

      <ContactPanel />
    </SiteShell>
  );
}
