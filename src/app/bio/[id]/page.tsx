
import RadioPersonality from "@/app/components/RadioPersonality";
import { programs } from "@/app/lib/programs";
const page = ({ params }: { params: { id: string } }) => {
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

export default page; 
