import OpenTabPage, { tabBySlug } from "../open-tab-page";

const tab = tabBySlug("coding");

export const metadata = {
  title: tab.metaTitle,
  description: tab.metaDescription,
  alternates: { canonical: "coding" },
};

export default function Page() {
  return <OpenTabPage slug="coding" />;
}
