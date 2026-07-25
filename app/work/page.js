import SiteShell from "../site-shell";
import { ContactPanel, PageIntro, WorkGrid } from "../site-sections";

export const metadata = {
  title: "Work",
  description:
    "Selected work and placeholder case studies for Alexandra Colgan.",
};

export default function WorkPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="Work"
        title="Selected work, with room for the full stories to follow."
        intro="A selection of placeholder projects designed to hold future case studies with the right amount of structure and polish."
        aside="For now, think of these as elegant markers for campaigns, launches, editorial ideas, and brand stories that will be added in full later."
      />

      <section className="section-frame feature-slab">
        <div className="feature-slab-copy">
          <p className="section-kicker">Selected Work</p>
          <h2>Campaigns, launches, and ideas made more coherent.</h2>
          <p>
            The case studies are still to come, but the visual system is ready
            for them: warm image blocks, editorial spacing, and clean typography.
          </p>
        </div>
        <WorkGrid />
      </section>

      <ContactPanel />
    </SiteShell>
  );
}
