import SiteShell from "../site-shell";
import { LogoMarquee } from "../site-sections";
import { PortfolioWork } from "../portfolio-work";
import { homeContact, portfolioIntro, portfolioSelectedWork } from "../site-data";

export const metadata = {
  title: "Portfolio",
  description:
    "Brands Alexandra Colgan has worked with across beauty, finance, hospitality, technology, automotive, food, healthcare, and luxury.",
};

export default function PortfolioPage() {
  return (
    <SiteShell>
      <div className="hp pf">
        <section className="pf-intro-band">
          <div className="pf-intro">
            <p className="hp-kicker">{portfolioIntro.kicker}</p>
            <h1 className="pf-title">{portfolioIntro.title}</h1>
            <p className="pf-intro-copy">{portfolioIntro.intro}</p>
          </div>
        </section>

        <LogoMarquee />

        <section className="pf-work-section" id="work">
          <div className="hp-inner">
            <div className="pf-work-heading">
              <p className="hp-kicker">{portfolioSelectedWork.kicker}</p>
              <div>
                <h2 className="pf-work-heading-title">
                  {portfolioSelectedWork.title}
                </h2>
                <p className="pf-work-heading-copy">
                  {portfolioSelectedWork.intro}
                </p>
              </div>
            </div>
            <PortfolioWork />
          </div>
        </section>

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
