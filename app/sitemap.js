import { caseStudies } from "./site-data";

const BASE_URL = "https://alexandracolgan.com";

// /services stays out of the sitemap deliberately — it's unpublished and
// unlinked for now. /work is just a redirect to /portfolio, so it's skipped
// too.
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
  const staticEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  const caseStudyEntries = caseStudies.map((study) => ({
    url: `${BASE_URL}/portfolio/${study.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...caseStudyEntries];
}
