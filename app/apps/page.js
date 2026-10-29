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
            <li className="app-card" key={app.slug}>
              <Image
                className="app-card-icon"
                src={app.icon}
                alt=""
                width={88}
                height={88}
              />
              <h2 className="app-card-name">{app.name}</h2>
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
            </li>
          ))}
        </ul>
      </div>
    </SiteShell>
  );
}
