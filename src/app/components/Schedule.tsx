"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { programs } from "@/app/lib/programs";
import { iProgram } from "@/app/lib/interfaces";
import { convertDaysToNumbers } from "@/app/lib/convertDaysToNumber";
const Schedule = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    // Stagger animation for cards
    programs.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 150);
    });

    return () => clearInterval(timer);
  }, []);

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
          className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] bg-clip-text mb-4 tracking-wider text-shadow"
        >
          FEATURED SHOWS
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] mx-auto rounded-full"></div>
      </div>

      {/* Glassmorphism Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {programs.map((program: iProgram, index: number) => {
          const isLive = isCurrentShow(program);
          const isVisible = visibleCards.includes(index);

          return (
            <Link href={`bio/${program.id}`} key={index}>
              <div
                className={`
                  group relative glass-dark rounded-2xl p-6
                  transition-all duration-500 ease-out
                  hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-[#FD7B2B]/20
                  transform-gpu perspective-1000
                  ${isVisible ? "animate-stagger opacity-100" : "opacity-0"}
                  ${
                    isLive
                      ? "ring-2 ring-[#FD7B2B] ring-opacity-60 animate-pulse-glow"
                      : ""
                  }
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Live Indicator */}
                {isLive && (
                  <div className="absolute -top-2 -right-2 flex items-center space-x-2">
                    <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                      🔴 LIVE
                    </div>
                  </div>
                )}

                {/* Days Row */}
                <div className="flex justify-center mb-4 space-x-1">
                  {program.days.map((day: string, dayIndex: number) => (
                    <div
                      key={dayIndex}
                      className="text-[#FD7B2B] text-xs font-bold px-2 py-1 bg-[#FD7B2B]/10 rounded-full border border-[#FD7B2B]/20"
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
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Show Title */}
                <div className="text-center mb-2">
                  <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-[#FD7B2B] transition-colors duration-300">
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
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FD7B2B]/0 to-[#FF8C42]/0 group-hover:from-[#FD7B2B]/10 group-hover:to-[#FF8C42]/10 transition-all duration-300 pointer-events-none"></div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
