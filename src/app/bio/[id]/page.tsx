
import RadioPersonality from "@/app/components/RadioPersonality";
import { programs } from "@/app/lib/programs";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const program = programs.find((program) => program.id === params.id);

  if (!program) {
    return {
      title: "Show Not Found - Maad 97.5 FM",
      description: "The requested show could not be found.",
    };
  }

  return {
    title: `${program.title} with ${program.host} - Maad 97.5 FM`,
    description: `Join ${program.host} on ${program.days.join(", ")} at ${program.time} hrs for ${program.title} on Maad 97.5 FM`,
    openGraph: {
      title: `${program.title} with ${program.host} - Maad 97.5 FM`,
      description: `Join ${program.host} on ${program.days.join(", ")} at ${program.time} hrs for ${program.title} on Maad 97.5 FM`,
      images: [{
        url: program.image,
        width: 800,
        height: 600,
        alt: `${program.title} with ${program.host}`,
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${program.title} with ${program.host} - Maad 97.5 FM`,
      description: `Join ${program.host} on ${program.days.join(", ")} at ${program.time} hrs for ${program.title} on Maad 97.5 FM`,
      images: [program.image],
    },
  };
}

export default function Page({ params }: Props) {
  const program = programs.find((program) => program.id === params.id);
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto px-4">
      <h1 className="text-5xl tracking-tight sm:text-6xl text-center font-bold text-gray-200"> {program?.host}</h1>
      <RadioPersonality
        title={program?.title!}
        host={program?.host!}
        time={program?.time!}
        imageSrc={program?.image!}
        days={program?.days!}
        bio={program?.bio!}
      />
    </div>
  )
};

