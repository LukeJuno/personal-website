import OpenTabPage, { tabBySlug } from "../open-tab-page";

const tab = tabBySlug("coding");

export const metadata = {
  title: tab.metaTitle,
  description: tab.metaDescription,
  alternates: { canonical: "coding" },
  openGraph: {
    title: `${tab.metaTitle} | Alexandra Colgan`,
    description: tab.metaDescription,
    url: "coding",
  },
};

export default function Page() {
  return <OpenTabPage slug="coding" />;
}
