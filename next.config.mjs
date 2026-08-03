/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // The old standalone case-study pages were removed in favor of the
    // /portfolio modals — send anyone with an old link (or Google) there
    // instead of a 404.
    const oldCaseStudySlugs = [
      "sunkist-citrush-joocies",
      "aia-rethink-healthy",
      "qeelin-social-content-system",
      "tropicana-twister-juicester",
      "hongkong-bank-foundation-website",
    ];

    return oldCaseStudySlugs.map((slug) => ({
      source: `/portfolio/${slug}`,
      destination: "/portfolio",
      permanent: true,
    }));
  },
};

export default nextConfig;
