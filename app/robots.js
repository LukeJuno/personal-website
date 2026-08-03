export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Kept out of search while unpublished — see sitemap.js.
      disallow: "/services",
    },
    sitemap: "https://alexandracolgan.com/sitemap.xml",
  };
}
