import type { Metadata } from "next";
import { pageMetadata } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Download the App - Maad 97.5 FM Guyana",
  description:
    "Download the Maad 97.5 FM app on Google Play, App Store, or listen on TuneIn. Stream live Guyanese radio from Georgetown anywhere, anytime.",
  path: "/promo",
});

export default function PromoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
