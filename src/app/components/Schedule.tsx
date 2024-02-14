import React from "react";
import Image from "next/image";
import Link from "next/link";
import { programs } from "@/app/lib/programs";
import { iProgram } from "@/app/lib/interfaces";
const Schedule = () => {
  const getBgColor = (index: any) => {
    const colors = [
      "bg-blue-200",
      "bg-yellow-200",
      "bg-green-200",
      "bg-orange-200",
      "bg-purple-200",
      "bg-indigo-200",
    ];
    return colors[index % colors.length];
  };

  const getShadowColor = (index: any) => {
    const shadows = [
      "shadow-blue-200/70",
      "shadow-yellow-200/70",
      "shadow-green-200/70",
      "shadow-orange-200/70",
      "shadow-purple-200/70",
      "shadow-indigo-200/70",
    ];
    return shadows[index % shadows.length];
  };

  return (
    <div className="w-full border-2 border-red-[#EDE0D4]">
      <h1
        id="schedule"
        className="font-extrabold text-3xl  text-[#EDE0D4] text-center tracking-widest"
      >
        FEATURED SHOWS
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        {programs.map((program: iProgram, index: number) => (
          <Link href={`bio/${program.id}`} key={index} >
            <div
              key={index}
              className={` p-2 rounded-md transition duration-300 ease-in-out transform shadow-lg ${getShadowColor(index)} hover:-translate-y-1 ${getBgColor(
                index
              )}`}
            >
              <div className="flex items-center justify-between mb-2">
                {program.days.map((day: string, index: number) => {
                  return (
                    <div
                      key={index}
                      className="text-gray-500 px-1 text-center w-full text-[8px] sm:text-base font-bold"
                    >
                      {day.slice(0, 3).toUpperCase()}
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between mb-1">
                {/* <div className="font-bold p-1">{program.title}</div> */}
                <div className="text-gray-500 text-center w-full font-bold text-xs sm:text-base">
                  {`${program.time} hrs`}
                </div>
              </div>
              <Image
                src={program.image}
                alt={program.title}
                width={150}
                height={150}
                className="w-full h-auto object-fit mb-2 rounded-md"
              />
              <div className="font-bold text-sm sm:text-base">{program.title}</div>

              <div className="text-xs sm:text-sm text-gray-600">{program.host}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
