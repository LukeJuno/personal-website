import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.alexandracolgan.com"),
  title: {
    default: "Alexandra Colgan | Freelance Creative + Copywriter",
    template: "%s | Alexandra Colgan",
  },
  description:
    "Alexandra Colgan is a Hong Kong-based freelance creative and copywriter creating memorable campaigns, brand voices and content.",
  keywords: [
    "Alexandra Colgan",
    "creative strategist",
    "copywriter",
    "Hong Kong",
    "AI",
    "digital products",
    "storytelling",
  ],
  openGraph: {
    title: "Alexandra Colgan | Freelance Creative + Copywriter",
    description:
      "Big ideas, memorable campaigns and copy with a point of view.",
    url: "https://www.alexandracolgan.com",
    siteName: "Alexandra Colgan",
    locale: "en_HK",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Alexandra Colgan — Freelance creative + copywriter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandra Colgan | Freelance Creative + Copywriter",
    description:
      "Big ideas, memorable campaigns and copy with a point of view.",
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
