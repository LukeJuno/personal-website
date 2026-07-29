import OpenTabPage, { tabBySlug } from "../open-tab-page";

const tab = tabBySlug("yoga");

export const metadata = {
  title: tab.metaTitle,
  description: tab.metaDescription,
  alternates: { canonical: "yoga" },
};

export default function Page() {
  return <OpenTabPage slug="yoga" />;
}
