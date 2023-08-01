import React from "react";
import Image from "next/image";
import Link from "next/link";
import { programs } from "@/app/lib/programs";
const Schedule = () => {
  const getBgColor = (index: any) => {
    const colors = [
      "bg-blue-200",
      "bg-yellow-200",
      "bg-green-200",
      "bg-pink-200",
      "bg-purple-200",
      "bg-indigo-200",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="w-full border-2 border-red-[#EDE0D4]">
      <h1
        id="schedule"
        className="font-extrabold text-3xl  text-[#EDE0D4] text-center tracking-widest"
      >
        FEATURED SHOWS
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {programs.map((program: any, index: any) => (
          <Link href={`bio/${index}`} key={index} >
            <div
              key={index}
              className={`shadow-md p-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${getBgColor(
                index
              )}`}
            >
              <div className="flex items-center justify-between mb-2">
                {/* <div className="font-bold p-1">{program.title}</div> */}
                <div className="text-gray-500 p-1 text-center w-full font-bold text-xs sm:text-base">
                  {program.time}
                </div>
              </div>
              <Image
                src={program.image}
                alt={program.title}
                width={150}
                height={150}
                className="w-full h-auto object-cover mb-2 rounded-md"
              />
              <div className="font-bold text-sm sm:text-base">{program.title}</div>

              <div className="text-sm text-gray-600">{program.host}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
