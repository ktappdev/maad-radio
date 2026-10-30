import type { Metadata } from "next";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Listen Live - Maad 97.5 FM Guyana",
  description:
    "Stream Maad 97.5 FM live from Georgetown, Guyana. Guyanese music, news, talk shows and cultural programming 24/7 - at home or anywhere in the world.",
  path: "/play",
});

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
