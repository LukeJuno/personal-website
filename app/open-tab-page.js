import Image from "next/image";
import Link from "next/link";
import SiteShell from "./site-shell";
import { ContactPanel } from "./site-sections";
import { openTabs } from "./site-data";

export function tabBySlug(slug) {
  const tab = openTabs.find((item) => item.slug === slug);
  if (!tab) throw new Error(`No open tab with slug "${slug}"`);
  return tab;
}

/**
 * Shared layout for the four Open Tabs detail pages (/yoga, /babywearing,
 * /coding, /currently). Content comes from `openTabs` in site-data.js — each
 * optional block below only renders if that tab has the data for it.
 */
export default function OpenTabPage({ slug, children }) {
  const tab = tabBySlug(slug);

  return (
    <SiteShell>
      <article className="tab-page">
        <div className="tab-page-head">
          <Link className="tab-page-back" href="/open-tabs">
            Open Tabs
          </Link>
          <h1 className="tab-page-title">{tab.title}</h1>
        </div>

        {tab.image ? (
          <Image
            className="tab-page-image"
            src={tab.image}
            alt={tab.imageAlt}
            width={1400}
            height={933}
            priority
            sizes="(max-width: 900px) 92vw, 900px"
          />
        ) : null}

        <div className="tab-page-body">
          {tab.body?.map((line) => (
            <p key={line}>{line}</p>
          ))}

          {/* Babywearing: what a session actually involves */}
          {tab.sessions ? (
            <section className="tab-sessions">
              <h2>{tab.sessions.heading}</h2>
              <p>{tab.sessions.intro}</p>
              <dl>
                {tab.sessions.items.map((item) => (
                  <div key={item.name}>
                    <dt>{item.name}</dt>
                    <dd>{item.detail}</dd>
                  </div>
                ))}
              </dl>
              {tab.sessions.note ? (
                <p className="tab-sessions-note">{tab.sessions.note}</p>
              ) : null}
            </section>
          ) : null}

          {tab.price ? (
            <p className="tab-price">
              <strong>{tab.price.label}</strong>
              <span>{tab.price.value}</span>
            </p>
          ) : null}

          {/* Coding: project list */}
          {tab.projects?.length ? (
            <ul className="tab-projects">
              {tab.projects.map((project) => (
                <li key={project.name}>
                  <h2>
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer">
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h2>
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          ) : null}

          {children}

          {/* Yoga: photo gallery */}
          {tab.gallery?.length ? (
            <ul className="tab-gallery">
              {tab.gallery.map((shot) => (
                <li key={shot.src}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1000}
                    height={1000}
                    sizes="(max-width: 700px) 45vw, 220px"
                  />
                </li>
              ))}
            </ul>
          ) : null}

          {tab.cta?.href ? (
            <div className="tab-actions">
              <a className="hp-button" href={tab.cta.href}>
                {tab.cta.label}
              </a>
              {tab.secondaryCta?.href ? (
                <a
                  className="hp-inline-link"
                  href={tab.secondaryCta.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {tab.secondaryCta.label}
                </a>
              ) : null}
            </div>
          ) : null}

          {tab.credentials ? (
            <p className="tab-page-credential">
              <strong>Credentials</strong>
              <span>{tab.credentials}</span>
            </p>
          ) : null}

          {tab.certificationFile ? (
            <a
              className="hp-inline-link"
              href={tab.certificationFile}
              target="_blank"
              rel="noreferrer"
            >
              {tab.certificationLabel}
            </a>
          ) : null}
        </div>

        <nav className="tab-page-more" aria-label="Other open tabs">
          <p className="hp-kicker">Other tabs</p>
          <ul>
            {openTabs
              .filter((item) => item.slug !== slug)
              .map((item) => (
                <li key={item.slug}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
          </ul>
        </nav>
      </article>

      <ContactPanel />
    </SiteShell>
  );
}
