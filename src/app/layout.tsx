import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import BottomPlayer from "./components/BottomPlayer";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maad 97.5 FM - Is We Own GUYANA!",
  description:
    "Maad 97.5FM - Guyana's top radio station, is your go-to destination for a diverse auditory experience. Explore the best in music, news, talk shows, and cultural programming that reflects the essence of Guyanese life.",
  openGraph: {
    title: "Maad 97.5 FM - Is We Own GUYANA!",
    description:
      "Guyana's top radio station for music, news, and cultural programming",
    url: "https://maad975fm.com",
    siteName: "Maad 97.5 FM",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
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
    images: ["/logo.png"],
    creator: "@maad975fm",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-4xl flex flex-col mx-auto gap-2 pb-32 md:pb-24`}
      >
        <Header />
        {/* Disabled current player - keeping for reference */}
        {/* <div className="px-4 mt-24">
          <Player audioUrl="https://streaming.broadcastradio.com:8872/maad975fm" />
        </div> */}
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
        {/* <BottomPlayer /> */}
      </body>
    </html>
  );
}
