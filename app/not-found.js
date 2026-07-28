import Link from "next/link";
import SiteShell from "./site-shell";
import { PageIntro } from "./site-sections";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <SiteShell>
      <PageIntro
        kicker="404"
        title="This page has wandered off."
        intro="The page you're looking for doesn't exist, or may have moved."
      />
      <section className="section-frame">
        <div className="section-meta" />
        <div className="section-content section-content-wide">
          <Link className="hp-inline-link" href="/">
            Back to home
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
