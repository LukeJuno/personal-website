import SiteShell from "../site-shell";
import { ContactPanel, OpenTabsGrid, PageIntro } from "../site-sections";

export const metadata = {
  title: "Open Tabs",
  description:
    "Yoga, babywearing, coding, and the interests Alexandra Colgan keeps returning to.",
};

export default function OpenTabsPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Open Tabs"
        title="The things I keep learning from outside the brief."
        intro="A few quieter threads that still shape how I think: yoga, babywearing, coding, digital products, and small experiments."
        aside="Each one brings its own kind of discipline, patience, and perspective, which usually finds its way back into the work somehow."
      />

      <section className="section-frame">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Currently Open</p>
            <h2>Three tabs that keep staying open in my mind.</h2>
          </div>
        </div>
        <OpenTabsGrid />
      </section>

      <ContactPanel />
    </SiteShell>
  );
}
