import SiteShell from "../site-shell";
import { ContactPanel, OpenTabsGrid } from "../site-sections";

export const metadata = {
  title: "Open Tabs",
  description:
    "Yoga, babywearing, coding, and what Alexandra Colgan is currently reading, listening to and writing.",
};

export default function OpenTabsPage() {
  return (
    <SiteShell>
      <section className="wide-hero">
        <div className="wide-hero-grid">
          <div>
            <p className="hp-kicker">Open Tabs</p>
            <h1 className="wide-hero-title">
              The things I keep learning from outside the brief.
            </h1>
          </div>
          <div>
            <p className="wide-hero-intro">
              A few quieter threads that still shape how I think: yoga,
              babywearing, coding, and whatever currently has my attention.
            </p>
            <p className="wide-hero-aside">
              Each one brings its own kind of discipline, patience, and
              perspective, which usually finds its way back into the work
              somehow.
            </p>
          </div>
        </div>
      </section>

      <section className="hp-band hp-band-clay ot-tabs-section">
        <div className="hp-inner">
          <OpenTabsGrid />
        </div>
      </section>

      <ContactPanel />
    </SiteShell>
  );
}
