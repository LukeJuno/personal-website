import Image from "next/image";
import Link from "next/link";
import SiteShell from "../site-shell";
import { apps } from "./apps-data";

const pageDescription =
  "Apps by Alexandra Colgan, starting with Loubibi, a free baby tracker for sleep, feeds, pumps, diapers and growth.";

export const metadata = {
  title: "Apps",
  description: pageDescription,
  alternates: { canonical: "apps" },
  openGraph: {
    title: "Apps | Alexandra Colgan",
    description: pageDescription,
    url: "apps",
  },
};

export default function AppsPage() {
  return (
    <SiteShell>
      <div className="apps-page">
        <header className="apps-intro">
          <p className="section-kicker">Apps</p>
          <h1 className="apps-title">Apps</h1>
          <p className="apps-intro-copy">Apps I’ve made. This is where I experiment with vibe coding, using AI to
            turn small ideas into real things.</p>
        </header>

        <ul className="apps-grid">
          {apps.map((app) => (
            <li className="app-row" key={app.slug}>
              {app.logo ? (
                <Image
                  className="app-row-logo"
                  src={app.logo}
                  alt=""
                  width={876}
                  height={264}
                  unoptimized
                />
              ) : (
                <Image
                  className="app-row-icon"
                  src={app.icon}
                  alt=""
                  width={88}
                  height={88}
                />
              )}
              <div className="app-row-text">
                <h2 className="app-row-name">{app.name}</h2>
                {app.caption ? (
                  <p className="app-card-caption">{app.caption}</p>
                ) : null}
                <p className="app-card-summary">{app.summary}</p>
                <Link
                  className="app-card-button"
                  href={app.href}
                  aria-label={`View ${app.name}`}
                >
                  View app
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SiteShell>
  );
}
