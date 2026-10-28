import Image from "next/image";
import Link from "next/link";
import SiteShell from "../site-shell";
import { apps } from "./apps-data";

const pageDescription =
  "Small, simple apps by Alexandra Colgan, starting with Loubibi, a calm baby tracker.";

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
          <p className="apps-intro-copy">Small, simple apps I've made.</p>
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
