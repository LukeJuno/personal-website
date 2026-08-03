import OpenTabPage, { tabBySlug } from "../open-tab-page";

const tab = tabBySlug("yoga");

export const metadata = {
  title: tab.metaTitle,
  description: tab.metaDescription,
  alternates: { canonical: "yoga" },
  openGraph: {
    title: "Yoga | Alexandra Colgan",
    description:
      "200-hour certified yoga teacher trained at Pure Yoga Hong Kong. Dynamic, playful classes with a focus on arm balances and inversions.",
    url: "yoga",
  },
};

export default function Page() {
  return <OpenTabPage slug="yoga" />;
}
