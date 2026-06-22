import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Listen Live - Maad 97.5 FM",
  description:
    "Stream Maad 97.5 FM live from Georgetown, Guyana. Music, news, talk shows and cultural programming 24/7.",
  openGraph: {
    title: "Listen Live - Maad 97.5 FM",
    description:
      "Stream Maad 97.5 FM live from Georgetown, Guyana. Music, news, talk shows and cultural programming 24/7.",
  },
};

export default function PlayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
