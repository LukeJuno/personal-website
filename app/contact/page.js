import SiteShell from "../site-shell";
import ContactForm from "../contact-form";

export const metadata = {
  // The doc's title is already a complete SEO title (name included), so it
  // uses `absolute` to skip layout.js's "%s | Alexandra Colgan" template.
  title: { absolute: "Contact Alexandra Colgan | Freelance Creative Copywriter" },
  description:
    "Get in touch with Alexandra Colgan for freelance copywriting, creative concepts, brand voice, website copy and creative collaborations.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="wide-hero">
        <div className="wide-hero-grid">
          <div>
            <p className="hp-kicker">Let&rsquo;s work together</p>
            <h1 className="wide-hero-title">
              Have a brief, a blank page or an idea that&rsquo;s almost there?
            </h1>
          </div>
          <div>
            <p className="wide-hero-intro">
              Freelance projects, creative collaborations and interesting
              side quests are all welcome.
            </p>
          </div>
        </div>
      </section>

      <section className="hp-band hp-band-mustard contact-section">
        <div className="hp-inner-narrow">
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
