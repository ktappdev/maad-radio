import { domain } from "./seo";

export const stationId = `${domain}#radio-station`;
const websiteId = `${domain}#website`;

const description =
  "Guyana's top radio station for music, news and cultural programming. Broadcasting live from Georgetown, Guyana.";

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      "url": domain,
      "name": "MAAD 97.5 FM",
      "description": description,
      "inLanguage": "en-GY",
      "publisher": { "@id": stationId },
    },
    {
      "@type": "RadioStation",
      "@id": stationId,
      "name": "MAAD 97.5 FM",
      "alternateName": ["Maad FM", "Maad 97.5", "Maad 97.5 FM Guyana"],
      "slogan": "Is We Own!",
      description,
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
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 6.8013,
        "longitude": -58.1551,
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+592-501-2487",
        "email": "maad975fm@gmail.com",
        "contactType": "customer service",
        "availableLanguage": "English",
      },
      "parentOrganization": {
        "@type": "Organization",
        "name": "Brutal Group Incorporated",
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
      "inLanguage": "en-GY",
      "areaServed": [
        { "@type": "Country", "name": "Guyana" },
        { "@type": "City", "name": "Georgetown" },
      ],
      "potentialAction": {
        "@type": "ListenAction",
        "target": `${domain}/play`,
      },
    },
  ],
};
