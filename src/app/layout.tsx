import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import BottomPlayer from "./components/BottomPlayer";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
const inter = Inter({ subsets: ["latin"] });

const domain = process.env.NEXT_PUBLIC_DOMAIN || "https://www.maad97.com";

export const metadata: Metadata = {
  title: "Maad 97.5 FM - Is We Own GUYANA!",
  metadataBase: new URL(domain),
  alternates: {
    canonical: "/",
  },
  description:
    "Maad 97.5FM - Guyana's top radio station, is your go-to destination for a diverse auditory experience. Explore the best in music, news, talk shows, and cultural programming that reflects the essence of Guyanese life.",
  keywords: [
    "Maad 97.5 FM",
    "Guyana radio",
    "Guyanese radio station",
    "Caribbean music",
    "Georgetown radio",
    "live radio Guyana",
    "Maad FM",
    "97.5 FM",
    "Guyanese music",
    "Caribbean radio online",
  ],
  openGraph: {
    title: "Maad 97.5 FM - Is We Own GUYANA!",
    description:
      "Guyana's top radio station for music, news, and cultural programming",
    url: domain,
    siteName: "Maad 97.5 FM",
    images: [
      {
        url: `${domain}/logo.png`,
        width: 800,
        height: 800,
        alt: "Maad 97.5 FM Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maad 97.5 FM - Is We Own GUYANA!",
    description:
      "Guyana's top radio station for music, news, and cultural programming",
    images: [`${domain}/logo.png`],
    site: "@maad975fm",
    creator: "@maad975fm",
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

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "RadioStation",
  "@id": `${domain}#radio-station`,
  "name": "MAAD 97.5 FM",
  "alternateName": "Maad FM",
  "description":
    "Guyana's top radio station for music, news and cultural programming. Broadcasting live from Georgetown, Guyana.",
  "url": domain,
  "logo": `${domain}/logo.png`,
  "image": `${domain}/logo.png`,
  "broadcastFrequency": "97.5 MHz",
  "broadcastChannelTier": "FM",
  "broadcastTimezone": "America/Guyana",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "166 Waterloo Street",
    "addressLocality": "North Cummingsburg",
    "addressRegion": "Georgetown",
    "addressCountry": "GY",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+592-501-2487",
    "email": "maad975fm@gmail.com",
    "contactType": "customer service",
    "availableLanguage": "English",
  },
  "sameAs": [
    "https://www.facebook.com/maad975",
    "https://www.twitter.com/maad975fm",
    "https://www.instagram.com/maad975fm",
    "https://www.youtube.com/maad97fm",
    "https://www.tiktok.com/maad97fm",
    "https://tunein.com/radio/Maad-975-FM-s350006/",
  ],
  "genre": ["Pop", "Hits", "Caribbean", "Guyanese", "News"],
  "inLanguage": "en",
  "areaServed": {
    "@type": "Country",
    "name": "Guyana",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="preconnect" href="https://www.youtube.com" />
      </head>
      <body
        className={`${inter.className} max-w-4xl flex flex-col mx-auto gap-2 pb-32 md:pb-24`}
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
