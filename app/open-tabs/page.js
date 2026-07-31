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
      <section className="ot-hero">
        <p className="ot-hero-eyebrow">Open Tabs</p>
        <h1 className="ot-hero-title">
          Things I&rsquo;m exploring
          <br />
          outside the brief.
        </h1>
        <p className="ot-hero-subline">
          Tabs that keep staying open in my mind.
        </p>
      </section>

      <OpenTabsGrid />

      <ContactPanel />
    </SiteShell>
  );
}
