import "./globals.css";
import "./home.css";
import "./portfolio.css";

export const metadata = {
  metadataBase: new URL("https://www.alexandracolgan.com"),
  title: {
    default: "Alexandra Colgan — Freelance Creative + Copywriter in Hong Kong",
    template: "%s | Alexandra Colgan",
  },
  description:
    "Creative campaigns, branding and copy. Hong Kong-based, available for freelance projects.",
  keywords: [
    "Alexandra Colgan",
    "creative",
    "copywriter",
    "writer",
    "Hong Kong",
    "yoga",
    "digital products",
    "storytelling",
  ],
  openGraph: {
    title: "Alexandra Colgan — Freelance Creative + Copywriter in Hong Kong",
    description:
      "Creative campaigns, branding and copy. Hong Kong-based, available for freelance projects.",
    url: "https://www.alexandracolgan.com",
    siteName: "Alexandra Colgan",
    locale: "en_HK",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Alexandra Colgan — Creative, writer, thinker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandra Colgan — Freelance Creative + Copywriter in Hong Kong",
    description:
      "Creative campaigns, branding and copy. Hong Kong-based, available for freelance projects.",
    images: ["/og.png"],
  },
  alternates: {
    canonical: "https://www.alexandracolgan.com",
  },
  category: "portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fff9ed" },
    { media: "(prefers-color-scheme: dark)", color: "#2a2318" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
