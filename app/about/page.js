import Image from "next/image";
import Link from "next/link";
import SiteShell from "../site-shell";

export const metadata = {
  // The doc's title is already a complete SEO title (name included), so it
  // uses `absolute` to skip layout.js's "%s | Alexandra Colgan" template.
  title: { absolute: "About Alexandra Colgan | Creative Copywriter in Hong Kong" },
  description:
    "Meet Alexandra Colgan, a Hong Kong-based freelance creative and copywriter who helps brands make sense of what they want to say.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="hp">
        <section className="hp-hero">
          <div className="hp-hero-copy">
            <p className="hp-kicker">About</p>
            <h1 className="hp-hero-title">Hi, I&rsquo;m Alexandra.</h1>
            <p className="hp-hero-intro">
              A Hong Kong-based creative and copywriter.
            </p>
          </div>

          <div className="hp-portrait">
            <span className="hp-portrait-shadow" aria-hidden="true" />
            <Image
              className="hp-portrait-image"
              src="/about/portrait.webp"
              alt="Portrait of Alexandra Colgan"
              width={1074}
              height={1464}
              priority
              sizes="(max-width: 860px) 92vw, 44vw"
            />
          </div>
        </section>

        <section className="hp-band hp-band-sage">
          <div className="about-intro">
            <p>
              I work with clients who have something to say but need help
              working out the best way to say it.
            </p>
            <p>
              Sometimes that means brainstorming what a brand is and how
              they want to present themselves. Other times it means
              thinking of an idea for a campaign, getting into the weeds of
              a website, or writing a script, or creating a series of
              social content pieces.
            </p>
            <p>
              I&rsquo;ve been doing this for close to ten years. I&rsquo;m
              interested in good thinking, useful writing and work that
              feels like it came from actual people.
            </p>
          </div>
        </section>

        <section className="about-personal">
          <p className="hp-kicker">Outside work</p>
          <p className="about-personal-copy">
            I&rsquo;m a mom of two, so usually you&rsquo;ll find me
            babywearing one of my kids and hanging out with them.
            I&rsquo;ve also recently started spending a surprising amount
            of time learning to code and trying out new AI tools. I have a
            few projects ongoing; they might take a while to finish but I
            hope to get them off the ground!
          </p>
        </section>

        <section className="hp-band hp-band-cream hp-center">
          <h2 className="hp-heading">Have a project in mind?</h2>
          <p className="about-cta-quote">
            Tell me what you&rsquo;ve been working on.
          </p>
          <p className="hp-body hp-lead-center">I&rsquo;d love to hear about it.</p>
          <Link className="hp-button" href="/contact">
            Get in touch
          </Link>
        </section>
      </div>
    </SiteShell>
  );
}
