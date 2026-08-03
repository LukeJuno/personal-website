import OpenTabPage, { tabBySlug } from "../open-tab-page";

const tab = tabBySlug("currently");

export const metadata = {
  title: tab.metaTitle,
  description: tab.metaDescription,
  alternates: { canonical: "currently" },
  openGraph: {
    title: `${tab.metaTitle} | Alexandra Colgan`,
    description: tab.metaDescription,
    url: "currently",
  },
};

export default function Page() {
  return (
    <OpenTabPage slug="currently">
      <dl className="now-list">
        {tab.nowList.map((row) => (
          <div key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value || "—"}</dd>
            {row.note ? <dd className="now-note">{row.note}</dd> : null}
          </div>
        ))}
      </dl>
    </OpenTabPage>
  );
}
