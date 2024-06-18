import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#ccfff4",
};
export const metadata = {
  title:
    "Raze- Provides Omni-channel integrations for vendors services and business enterprises",
  description:
    "Wide integration for vendor services portals to enhance its B2B offerings via a well thought customised API integration for efficient settlements, onboarding and other use cases",
  openGraph: {
    images: [
      {
        url: "https://raze-onboard-assets.s3.ap-south-1.amazonaws.com/home/open_graph/RazeMeta.jpeg",
        width: 999,
        height: 1000,
        alt: "Raze-Logo",
        type: "image/jpeg",
      },
    ],
    type: "website",
    siteName: "Raze",
    url: "https://www.raze.co.in",
    title:
      "Raze- Provides Omni-channel integrations for vendors services and business enterprises",
    description:
      "Wide integration for vendor services portals to enhance its B2B offerings via a well thought customised API integration for efficient settlements, onboarding and other use cases",
  },
  verification: {
    google: "4ScCEPGw54411W4KRKoq1A4NdvcEUt8UiH_1c1Vw0Qk",
  },
};
export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    url: "https://www.raze.co.in/",
    name: "Raze",
    alternateName: [
      "Raze Platform",
      "Raze B2B",
      "Raze Web",
      "Raze Vendors",
      "Raze Admins",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"
        />
      </head>
      <body className={roboto.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
