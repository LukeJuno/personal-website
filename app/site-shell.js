import Link from "next/link";
import Wordmark from "./wordmark";
import SiteNav from "./site-nav";
import { socialIcons } from "./social-icons";
import { contactLinks, footerNav } from "./site-data";

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
        </div>
      </header>

      <div id="content">{children}</div>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-profile">
            <Wordmark compact />
            <p>Hong Kong-based creative and copywriter.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <p className="footer-heading">Explore</p>
            {footerNav.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="footer-social">
            <p className="footer-heading">Find Me</p>
            {contactLinks.map((link) => {
              const Icon = socialIcons[link.label];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {Icon ? <Icon /> : null}
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer-base">
          <p>© 2026 Alexandra Colgan</p>
        </div>
      </footer>
    </main>
  );
}
