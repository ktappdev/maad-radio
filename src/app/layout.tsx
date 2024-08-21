import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import Player from "./components/Player";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import AdvertBanner from "./components/AdvertBanner";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maad 97.5 FM - Is We Own GUYANA!",
  description: "Maad 97.5FM - Guyana's top radio station, is your go-to destination for a diverse auditory experience. Explore the best in music, news, talk shows, and cultural programming that reflects the essence of Guyanese life. Stay updated with the latest news, engage in thought-provoking discussions, and celebrate our nation's heritage with Maad 97.5FM. Tune in now to connect with our vibrant Guyanese community.",

  // image: "/logo.png",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-4xl flex flex-col mx-auto gap-2`}
      >
        <AdvertBanner />
        <Header />
        <div className="px-4">
          <Player audioUrl="https://streaming.broadcastradio.com:8872/maad975fm" />
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
