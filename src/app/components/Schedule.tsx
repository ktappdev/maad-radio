"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { programs } from "@/app/lib/programs";
import { iProgram } from "@/app/lib/interfaces";
import { convertDaysToNumbers } from "@/app/lib/convertDaysToNumber";
const Schedule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const sortedPrograms = useMemo(() => {
    const dayOrder = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];

    const getDayRank = (days: string[]) =>
      Math.min(
        ...days.map((day) => {
          const index = dayOrder.indexOf(day.toLowerCase());
          return index === -1 ? Number.MAX_SAFE_INTEGER : index;
        }),
      );

    const getStartMinutes = (time: string) => {
      const [startTimeStr] = time.split(" - ");
      const [startHour, startMinute] = startTimeStr.split(":").map(Number);
      return startHour * 60 + startMinute;
    };

    return [...programs].sort((a, b) => {
      const dayRankDiff = getDayRank(a.days) - getDayRank(b.days);
      if (dayRankDiff !== 0) {
        return dayRankDiff;
      }
      const timeDiff = getStartMinutes(a.time) - getStartMinutes(b.time);
      if (timeDiff !== 0) {
        return timeDiff;
      }
      return a.title.localeCompare(b.title);
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    // Stagger animation for cards
    sortedPrograms.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 150);
    });

    return () => clearInterval(timer);
  }, [sortedPrograms]);

  const isCurrentShow = (program: iProgram): boolean => {
    const daysTheProgramIsOn = convertDaysToNumbers(program.days);
    if (!daysTheProgramIsOn.includes(currentTime.getDay())) {
      return false;
    }

    const [startTimeStr, endTimeStr] = program.time.split(" - ");
    const [startHour, startMinute] = startTimeStr.split(":").map(Number);
    const [endHour, endMinute] = endTimeStr.split(":").map(Number);

    const startTime = new Date(currentTime);
    startTime.setHours(startHour, startMinute, 0, 0);

    const endTime = new Date(currentTime);
    endTime.setHours(endHour, endMinute, 0, 0);

    return currentTime >= startTime && currentTime <= endTime;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Enhanced Header */}
      <div className="text-center mb-12">
        <h1
          id="schedule"
          className="font-bold text-4xl sm:text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] bg-clip-text mb-4 tracking-wide text-shadow"
        >
          FEATURED SHOWS
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] mx-auto rounded-full"></div>
      </div>

      {/* Glassmorphism Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {sortedPrograms.map((program: iProgram, index: number) => {
          const isLive = isCurrentShow(program);
          const isVisible = visibleCards.includes(index);

          return (
            <Link href={`bio/${program.id}`} key={index}>
              <div
                className={`
                  group relative glass-dark rounded-2xl p-6 border border-white/5
                  transition-all duration-300 ease-out
                  hover:border-white/15 hover:shadow-2xl hover:shadow-black/40
                  ${isVisible ? "animate-stagger opacity-100" : "opacity-0"}
                  ${isLive ? "ring-2 ring-[#FD7B2B] ring-opacity-40" : ""}
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Live Indicator */}
                {isLive && (
                  <div className="absolute -top-2 -right-2 flex items-center">
                    <div className="bg-red-500 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                      LIVE
                    </div>
                  </div>
                )}

                {/* Days Row */}
                <div className="flex justify-center mb-4 space-x-1">
                  {program.days.map((day: string, dayIndex: number) => (
                    <div
                      key={dayIndex}
                      className="text-[#FD7B2B] text-xs font-semibold px-2 py-1 bg-[#FD7B2B]/8 rounded-full border border-[#FD7B2B]/20"
                    >
                      {day.slice(0, 3).toUpperCase()}
                    </div>
                  ))}
                </div>

                {/* Time */}
                <div className="text-center mb-4">
                  <div className="text-white font-bold text-lg">
                    {program.time} hrs
                  </div>
                </div>

                {/* Host Image with Hover Effect */}
                <div className="relative mb-4 overflow-hidden rounded-xl border border-white/5">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Show Title */}
                <div className="text-center mb-2">
                  <h3 className="font-semibold text-lg sm:text-xl text-white group-hover:text-[#FD7B2B] transition-colors duration-300">
                    {program.title}
                  </h3>
                </div>

                {/* Host Name */}
                <div className="text-center">
                  <p className="text-gray-300 text-sm font-medium">
                    {program.host}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FD7B2B]/0 to-[#FF8C42]/0 group-hover:from-[#FD7B2B]/6 group-hover:to-[#FF8C42]/6 transition-all duration-300 pointer-events-none"></div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
