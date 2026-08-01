import SiteShell from "../site-shell";
import ContactForm from "../contact-form";
import { services } from "../site-data";

export const metadata = {
  // The doc's title is already a complete SEO title (name included), so it
  // uses `absolute` to skip layout.js's "%s | Alexandra Colgan" template.
  title: { absolute: "Contact Alexandra Colgan | Freelance Creative Copywriter" },
  description:
    "Get in touch with Alexandra Colgan for freelance copywriting, creative concepts, brand voice, website copy and creative collaborations.",
};

function AccentMark({ className }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 30C4 15 15 4 30 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="30" cy="4" r="2.5" fill="currentColor" />
    </svg>
  );
}

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

      <section className="hp-band hp-band-cream contact-section">
        <AccentMark className="contact-accent contact-accent-top" />
        <AccentMark className="contact-accent contact-accent-bottom" />

        <div className="contact-grid">
          <div className="contact-info">
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

          <div className="contact-form-col">
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
