import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maad 97.5 FM - Guyana Live Radio",
    short_name: "Maad 97.5 FM",
    description:
      "Listen to Maad 97.5 FM live from Georgetown, Guyana. Is We Own!",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0b0b",
    theme_color: "#0b0b0b",
    lang: "en-GY",
    icons: [{ src: "/logo.png", sizes: "800x800", type: "image/png" }],
  };
}
