import Image from "next/image";
import SiteShell from "../../site-shell";
import { loubibi } from "../apps-data";

const pageDescription =
  "A free baby tracker for sleep, feeds, pumps, diapers and growth. Simple logging in a couple of taps.";

export const metadata = {
  title: "Loubibi",
  description: pageDescription,
  alternates: { canonical: "apps/loubibi" },
  openGraph: {
    title: "Loubibi | Alexandra Colgan",
    description: pageDescription,
    url: "apps/loubibi",
    images: [
      {
        url: "/apps/loubibi/icon.webp",
        width: 512,
        height: 512,
        alt: "Loubibi app icon",
      },
    ],
  },
};

function StoreBadge({ label, name, href }) {
  if (href) {
    return (
      <a
        className="lb-badge"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <span className="lb-badge-label">{label}</span>
        <span className="lb-badge-name">{name}</span>
      </a>
    );
  }
  return (
    <span className="lb-badge is-soon" role="img" aria-label={`${name}: coming soon`}>
      <span className="lb-badge-label">Coming soon</span>
      <span className="lb-badge-name">{name}</span>
    </span>
  );
}

export default function LoubibiPage() {
  const { stores } = loubibi;

  return (
    <SiteShell>
      <div className="lb">
        <section className="lb-hero">
          <h1 className="lb-title">Loubibi</h1>
          <Image
            className="lb-banner"
            src="/apps/loubibi/banner.webp"
            alt="Loubibi. Logging the little moments. The baby-face icon forms the O in the logo, surrounded by sleep, diaper, feeding, pumping and growth icons."
            width={2000}
            height={857}
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
          <p className="lb-sub">
            A free baby tracker for sleep, feeds, pumps, diapers and growth.
            Simple logging in a couple of taps: one-handed, in the dark, and
            when half-asleep.
          </p>
          <div className="lb-badges">
            <StoreBadge
              label="Download on the"
              name="App Store"
              href={stores.appStore}
            />
            <StoreBadge
              label="Get it on"
              name="Google Play"
              href={stores.googlePlay}
            />
          </div>
        </section>

        <section className="lb-section" aria-labelledby="lb-screens-title">
          <h2 className="lb-heading" id="lb-screens-title">
            A look inside
          </h2>
          <div
            className="lb-screens"
            tabIndex={0}
            role="region"
            aria-label="Loubibi screenshots, scroll sideways to see more"
          >
            {loubibi.screenshots.map((shot) => (
              <Image
                key={shot.src}
                className="lb-screen"
                src={shot.src}
                alt={shot.alt}
                width={720}
                height={1565}
                sizes="(max-width: 640px) 70vw, 280px"
              />
            ))}
          </div>
        </section>

        <section className="lb-section" aria-labelledby="lb-does-title">
          <h2 className="lb-heading" id="lb-does-title">
            What it does
          </h2>
          <ul className="lb-features">
            {loubibi.features.map((feature) => (
              <li className="lb-feature" key={feature.title}>
                <span className="lb-feature-icon" aria-hidden="true">
                  <Image
                    src={`/apps/loubibi/icons/${feature.icon}.webp`}
                    alt=""
                    width={44}
                    height={44}
                  />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="lb-section lb-privacy" aria-labelledby="lb-privacy-title">
          <h2 className="lb-heading" id="lb-privacy-title">
            Privacy
          </h2>
          <p className="lb-privacy-line">
            No ads, and we don't sell your data.
          </p>
          <p className="lb-links">
            <a href={loubibi.privacyUrl} target="_blank" rel="noreferrer">
              Privacy policy
            </a>
            <a href={loubibi.termsUrl} target="_blank" rel="noreferrer">
              Terms
            </a>
            {loubibi.deleteAccountUrl ? (
              <a
                href={loubibi.deleteAccountUrl}
                target="_blank"
                rel="noreferrer"
              >
                How to delete your account
              </a>
            ) : null}
          </p>
        </section>

        <section className="lb-section lb-contact" aria-labelledby="lb-contact-title">
          <h2 className="lb-heading" id="lb-contact-title">
            Contact
          </h2>
          <p>
            <a className="lb-email" href={`mailto:${loubibi.contactEmail}`}>
              {loubibi.contactEmail}
            </a>
          </p>
        </section>

        <footer className="lb-fine">
          <p>
            Loubibi is a free personal project, made by parents for parents. It
            is not a medical device and doesn't give medical advice. Growth
            charts are an approximate guide based on selected WHO Child Growth
            Standards points, not a clinical assessment, and wake window
            suggestions are estimates. Always talk to your doctor or health
            visitor about your baby's health.
          </p>
          <p>
            <a href={loubibi.supportUrl} target="_blank" rel="noreferrer">
              Support Loubibi
            </a>
          </p>
        </footer>
      </div>
    </SiteShell>
  );
}
