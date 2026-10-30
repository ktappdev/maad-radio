import type { Metadata } from "next";

export const domain =
  process.env.NEXT_PUBLIC_DOMAIN || "https://www.maad97.com";

export const siteName = "Maad 97.5 FM";

export const ogImage = {
  url: `${domain}/logo.png`,
  width: 800,
  height: 800,
  alt: "Maad 97.5 FM Logo",
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  images?: NonNullable<Metadata["openGraph"]>["images"];
};

// Child `openGraph`/`twitter` replace the root ones wholesale in Next, so every
// page needs the full set (url, siteName, image) to keep shared links rich.
export function pageMetadata({
  title,
  description,
  path,
  images = [ogImage],
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${domain}${path}`,
      siteName,
      images,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

// Escape `<` so JSON can never close the surrounding <script> tag.
export const jsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
