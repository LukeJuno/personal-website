import SiteShell from "../site-shell";
import { BrandLogoGrid, CaseStudyGrid, ContactPanel } from "../site-sections";
import { caseStudies } from "../site-data";

export const metadata = {
  title: "Portfolio",
  description:
    "Brands Alexandra Colgan has worked with across beauty, finance, hospitality, technology, automotive, food, healthcare, and luxury.",
};

export default function PortfolioPage() {
  return (
    <SiteShell>
      <section
        className="section-frame portfolio-showcase"
        aria-label="Selected brands"
      >
        <div className="portfolio-copy">
          <p className="section-kicker">Portfolio</p>
          <h1 className="portfolio-title">Brands I’ve worked with</h1>
          <p className="portfolio-intro">
            A selection of global and regional names across luxury, lifestyle,
            healthcare, technology, finance, hospitality, and consumer culture.
          </p>
        </div>
        <div className="portfolio-logos">
          <BrandLogoGrid />
        </div>
      </section>

      <section className="section-frame portfolio-case-studies">
        <div className="portfolio-case-studies-heading">
          <p className="section-kicker">Selected Work</p>
          <h2>Work that made it out of the Google Doc.</h2>
          <p>
            A selection of campaigns, launches and ideas I’ve helped think up,
            write for and send out into the world.
          </p>
        </div>
        <CaseStudyGrid items={caseStudies} />
      </section>

      <ContactPanel />
    </SiteShell>
  );
}
