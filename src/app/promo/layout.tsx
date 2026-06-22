import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download the App - Maad 97.5 FM",
  description:
    "Download the Maad 97.5 FM app on Google Play, App Store, or listen on TuneIn. Stream live radio from Guyana anywhere, anytime.",
  openGraph: {
    title: "Download the Maad 97.5 FM App",
    description:
      "Listen to Maad 97.5 FM anywhere. Download on Google Play, App Store, or TuneIn.",
  },
};

export default function PromoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
