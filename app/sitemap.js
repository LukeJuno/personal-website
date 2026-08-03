const BASE_URL = "https://alexandracolgan.com";

// /services stays out of the sitemap deliberately — it's unpublished and
// unlinked for now. /work is just a redirect to /portfolio, so it's skipped
// too. The old /portfolio/<slug> case-study pages were removed and now
// redirect to /portfolio (see next.config.mjs), so they don't get their own
// entries either.
const staticRoutes = [
  "",
  "/about",
  "/portfolio",
  "/open-tabs",
  "/yoga",
  "/babywearing",
  "/coding",
  "/currently",
  "/contact",
];

export default function sitemap() {
  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
