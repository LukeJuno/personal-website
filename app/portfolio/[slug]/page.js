import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "../../site-shell";
import { ContactPanel } from "../../site-sections";
import { caseStudies } from "../../site-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    return {};
  }

  return {
    title: `${study.brand}: ${study.title}`,
    description: study.background,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <SiteShell>
      <article className="case-study-page">
        <header className="section-frame case-study-hero">
          <Link className="case-study-back" href="/portfolio">
            <span aria-hidden="true">←</span> Back to portfolio
          </Link>
          <p className="section-kicker">{study.brand}</p>
          <h1>{study.title}</h1>
          <p className="case-study-type">{study.type}</p>
          <p className="case-study-background">{study.background}</p>
        </header>

        <section className="section-frame case-study-detail" aria-label="Case study details">
          <div>
            <p className="section-kicker">Insight</p>
            <p>{study.insight}</p>
          </div>
          <div>
            <p className="section-kicker">Idea</p>
            <p>{study.idea}</p>
          </div>
        </section>

        <section className="section-frame case-study-gallery" aria-label={`${study.title} work`}>
          {study.images.map((image) => (
            <figure key={image.src}>
              <div className="case-study-gallery-image">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 820px) 100vw, 54vw"
                />
              </div>
            </figure>
          ))}
        </section>
      </article>
      <ContactPanel />
    </SiteShell>
  );
}
