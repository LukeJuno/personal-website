import SiteShell from "../site-shell";
import ContactForm from "../contact-form";
import { services } from "../site-data";

const pageTitle = "Contact Alexandra Colgan | Freelance Creative Copywriter";
const pageDescription =
  "Get in touch with Alexandra Colgan for freelance copywriting, creative concepts, brand voice, website copy and creative collaborations.";

export const metadata = {
  // The doc's title is already a complete SEO title (name included), so it
  // uses `absolute` to skip layout.js's "%s | Alexandra Colgan" template.
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: "contact" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "contact",
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="contact-section">
        <div className="contact-inner">
          <p className="hp-kicker">Let&rsquo;s work together</p>

          <div className="contact-grid">
            <div className="contact-info">
              <h1 className="contact-title">
                Have a brief, a blank page or an idea that&rsquo;s almost there?
              </h1>
              <p className="contact-intro">
                Freelance projects, creative collaborations and interesting
                side quests are all welcome.
              </p>

              <div className="contact-info-blocks">
                <div>
                  <p className="contact-info-label">Availability</p>
                  <p className="contact-info-text">
                    Open to new freelance projects.
                  </p>
                </div>

                <div>
                  <p className="contact-info-label">Location</p>
                  <p className="contact-info-text">
                    Based in Hong Kong, working with clients everywhere.
                  </p>
                </div>

                <div>
                  <p className="contact-info-label">What I can help with</p>
                  <ul className="contact-info-list">
                    {services.map((service) => (
                      <li key={service.title}>{service.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="contact-form-col">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
