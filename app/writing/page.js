import SiteShell from "../site-shell";
import { PageIntro, ContactPanel } from "../site-sections";
import {
  getSubstackPosts,
  formatPostDate,
  SUBSTACK_HOME_URL,
} from "../substack-feed";

const pageDescription =
  "Latest essays from Not Too Sweet, Alexandra Colgan's Substack on work, motherhood, and figuring things out.";

export const metadata = {
  title: "Writing",
  description: pageDescription,
  alternates: { canonical: "writing" },
  openGraph: {
    title: "Writing | Alexandra Colgan",
    description: pageDescription,
    url: "writing",
  },
};

export default async function WritingPage() {
  const posts = await getSubstackPosts(8);

  return (
    <SiteShell>
      <PageIntro
        kicker="Writing"
        title="Not Too Sweet"
        intro="My Substack where I share honest thoughts on work, motherhood, and figuring things out. Check out my most recent articles below."
        aside="Prefer it in your inbox? Subscribe on Substack and new posts land there too."
      />

      <section className="section-frame">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Latest Posts</p>
          </div>
          <a
            className="hp-inline-link"
            href={`${SUBSTACK_HOME_URL}/subscribe`}
            target="_blank"
            rel="noreferrer"
          >
            Subscribe on Substack →
          </a>
        </div>

        {posts.length ? (
          <div className="writing-list">
            {posts.map((post) => (
              <a
                className="list-row writing-row"
                href={post.link}
                target="_blank"
                rel="noreferrer"
                key={post.link}
              >
                <div className="writing-row-main">
                  {post.image ? (
                    <span className="writing-row-media">
                      <img src={post.image} alt="" loading="lazy" />
                    </span>
                  ) : null}
                  <div className="writing-row-copy">
                    <h3 className="writing-row-title">{post.title}</h3>
                    {post.excerpt ? (
                      <p className="writing-row-excerpt">{post.excerpt}</p>
                    ) : null}
                  </div>
                </div>
                <span className="pill writing-row-date">
                  {formatPostDate(post.pubDate)}
                </span>
              </a>
            ))}
          </div>
        ) : (
          <p className="page-intro-aside">
            Couldn't load the latest posts right now — read them directly on{" "}
            <a
              className="hp-inline-link"
              href={SUBSTACK_HOME_URL}
              target="_blank"
              rel="noreferrer"
            >
              Not Too Sweet
            </a>
            .
          </p>
        )}
      </section>

      <ContactPanel />
    </SiteShell>
  );
}
