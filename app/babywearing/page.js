import OpenTabPage, { tabBySlug } from "../open-tab-page";

const tab = tabBySlug("babywearing");

export const metadata = {
  title: tab.metaTitle,
  description: tab.metaDescription,
  keywords: [
    "babywearing consultant Hong Kong",
    "babywearing Hong Kong",
    "baby carrier fitting",
    "carrier library Hong Kong",
    "babywearing consultation",
  ],
  alternates: { canonical: "babywearing" },
};

// Tells search engines explicitly what this page offers, where, and by whom.
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: tab.serviceName,
  description: tab.serviceDescription,
  serviceType: "Babywearing consultation",
  areaServed: { "@type": "Place", name: "Hong Kong" },
  provider: {
    "@type": "Person",
    name: "Alexandra Colgan",
    url: "https://www.alexandracolgan.com",
    email: "alexandracolgan@gmail.com",
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Babywearing certification",
      credentialCategory: "certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Australian Babywearing Association",
      },
    },
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <OpenTabPage slug="babywearing" />
    </>
  );
}
