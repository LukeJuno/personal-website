import SiteShell from "../site-shell";
import { BrandLogoGrid, ContactPanel, PageIntro } from "../site-sections";

export const metadata = {
  title: "Portfolio",
  description:
    "Brands Alexandra Colgan has worked with across beauty, finance, hospitality, technology, automotive, food, healthcare, and luxury.",
};

export default function PortfolioPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Portfolio"
        title="Brands I’ve worked with"
        intro="A selection of global and regional names across luxury, lifestyle, healthcare, technology, finance, hospitality, and consumer culture."
      />

      <section
        className="section-frame brand-field"
        aria-label="Selected brands"
      >
        <BrandLogoGrid />
      </section>

      <ContactPanel />
    </SiteShell>
  );
}
