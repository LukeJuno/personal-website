import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import Wordmark from "./wordmark";
import SiteNav from "./site-nav";
import { contactLinks } from "./site-data";

export default function SiteShell({ children }) {
  return (
    <main className="page-shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <Link className="brand" href="/" aria-label="Go to home">
          <Wordmark />
        </Link>

        <div className="header-actions">
          <SiteNav />
          <ThemeToggle />
        </div>
      </header>

      <div id="content">{children}</div>

      <footer className="site-footer">
        <p>© 2026 Alexandra Colgan</p>
        <div className="footer-links" aria-label="Footer links">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
