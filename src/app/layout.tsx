import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Header from "./components/Header";
import BottomPlayer from "./components/BottomPlayer";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import { domain, jsonLd, ogImage, siteName } from "./lib/seo";
import { structuredData } from "./lib/structuredData";
const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const title = "Maad 97.5 FM | Live Guyana Radio - Is We Own Guyana!";
const description =
  "Listen to Maad 97.5 FM live from Georgetown, Guyana. Guyanese music, news, talk shows, gospel and culture on 97.5 FM and online - Is We Own!";

export const metadata: Metadata = {
  title,
  metadataBase: new URL(domain),
  alternates: {
    canonical: "/",
  },
  description,
  keywords: [
    "Maad 97.5 FM",
    "Maad 97.5",
    "97.5 FM Guyana",
    "Guyana radio",
    "Guyana radio station",
    "Guyanese radio station",
    "listen to Guyana radio online",
    "live radio Guyana",
    "Georgetown radio",
    "Georgetown FM radio",
    "Guyanese music",
    "Guyana news",
    "Guyanese gospel radio",
    "chutney soca calypso reggae",
    "Caribbean radio online",
    "Guyanese diaspora radio",
    "Maad FM",
  ],
  openGraph: {
    title,
    description,
    url: domain,
    siteName,
    images: [ogImage],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
    site: "@maad975fm",
    creator: "@maad975fm",
  },
  other: {
    "geo.region": "GY-DE",
    "geo.placename": "Georgetown, Guyana",
    "geo.position": "6.8013;-58.1551",
    ICBM: "6.8013, -58.1551",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GY">
      <head>
        <meta name="theme-color" content="#0b0b0b" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
        />
        <link rel="preconnect" href="https://www.youtube.com" />
      </head>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} max-w-7xl flex flex-col mx-auto gap-2 pb-32 md:pb-24`}
      >
        <Header />
        {/* Disabled current player - keeping for reference */}
        {/* <div className="px-4 mt-24">
          <Player audioUrl="https://streaming.broadcastradio.com:8872/maad975fm" />
        </div> */}
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
        <BottomPlayer />
      </body>
    </html>
  );
}
