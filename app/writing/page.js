import SiteShell from "../site-shell";
import { ContactPanel } from "../site-sections";
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
      <div className="writing-page">
        <header className="writing-intro">
          <p className="section-kicker">Writing</p>
          <h1 className="writing-title">Not Too Sweet</h1>
          <p className="writing-intro-copy">
            My Substack where I share honest thoughts on work, motherhood, and
            figuring things out. Check out my most recent articles below.
          </p>
        </header>

        {posts.length ? (
          <div className="writing-grid">
            {posts.map((post) => (
              <a
                className="writing-card"
                href={post.link}
                target="_blank"
                rel="noreferrer"
                key={post.link}
              >
                <span className="writing-card-media">
                  {post.image ? (
                    <img src={post.image} alt="" loading="lazy" />
                  ) : null}
                </span>
                <p className="writing-card-date">
                  {formatPostDate(post.pubDate)}
                </p>
                <h2 className="writing-card-title">{post.title}</h2>
                {post.excerpt ? (
                  <p className="writing-card-excerpt">{post.excerpt}</p>
                ) : null}
              </a>
            ))}
          </div>
        ) : (
          <p className="writing-intro-copy">
            Couldn't load the latest posts right now. Read them directly on{" "}
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
      </div>

      <ContactPanel />
    </SiteShell>
  );
}
