import RadioPersonality from "@/app/components/RadioPersonality";
import { programs } from "@/app/lib/programs";
import { domain, jsonLd, pageMetadata } from "@/app/lib/seo";
import { stationId } from "@/app/lib/structuredData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

const WEEKDAYS = "monday,tuesday,wednesday,thursday,friday";

const formatDays = (days: string[]) => {
  if (days.join(",") === WEEKDAYS) return "Monday to Friday";
  const names = days.map((day) => day.charAt(0).toUpperCase() + day.slice(1));
  if (names.length < 2) return names[0] ?? "";
  return `${names.slice(0, -1).join(", ")} & ${names[names.length - 1]}`;
};

export function generateStaticParams() {
  return programs.map((program) => ({ id: program.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const program = programs.find((program) => program.id === params.id);

  if (!program) {
    return {
      title: "Show Not Found - Maad 97.5 FM",
      description: "The requested show could not be found.",
      robots: { index: false },
    };
  }

  return pageMetadata({
    title: `${program.title} with ${program.host} - Maad 97.5 FM`,
    description: `Listen to ${program.title} with ${program.host} on Maad 97.5 FM, Georgetown, Guyana - ${formatDays(
      program.days
    )} at ${program.time} hrs (Guyana time). Tune in on 97.5 FM or stream live online.`,
    path: `/bio/${program.id}`,
    images: [
      {
        url: program.image,
        width: 800,
        height: 600,
        alt: `${program.title} with ${program.host}`,
      },
    ],
  });
}

export default function Page({ params }: Props) {
  const program = programs.find((program) => program.id === params.id);

  if (!program) {
    notFound();
  }

  const url = `${domain}/bio/${program.id}`;
  const showStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RadioSeries",
        "@id": `${url}#show`,
        "name": program.title,
        "description": `${program.title} with ${program.host} on Maad 97.5 FM, Georgetown, Guyana - ${formatDays(
          program.days
        )} at ${program.time} hrs.`,
        url,
        "image": `${domain}${program.image}`,
        "inLanguage": "en-GY",
        "publisher": { "@id": stationId },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Maad 97.5 FM", "item": domain },
          { "@type": "ListItem", "position": 2, "name": program.title, "item": url },
        ],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto px-4 pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(showStructuredData) }}
      />
      <h1 className="text-5xl tracking-tight sm:text-6xl text-center font-bold text-gray-200">
        {" "}
        {program.host}
      </h1>
      <RadioPersonality
        title={program.title}
        host={program.host}
        time={program.time}
        imageSrc={program.image}
        image2Src={program.image2}
        image3Src={program.image3}
        bio={program.bio}
        days={program.days}
      />
    </div>
  );
}
