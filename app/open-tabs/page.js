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
        <h1 className="ot-hero-title">Beyond the brief.</h1>
        <p className="ot-hero-subline">
          Yoga, babywearing and coding are the open tabs I keep returning
          to. This is a space where I share what I&rsquo;m learning, making
          and still figuring out.
        </p>
      </section>

      <OpenTabsGrid />

      <ContactPanel />
    </SiteShell>
  );
}
