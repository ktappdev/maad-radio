"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { programs } from "@/app/lib/programs";
interface Program {
  id: string;
  title: string;
  time: string;
  host: string;
  image: string;
}

interface ParsedTime {
  startTime: Date;
  endTime: Date;
}

interface AudioPlayerProps {
  audioUrl: string;
}

const Schedule: React.FC = () => {
  const [currentShow, setCurrentShow] = useState<Program | null>(null);


  const getCurrentShow = (): Program | null => {
    const currentTime = new Date();
    // if now is weekend then return null
    if (currentTime.getDay() === 0 || currentTime.getDay() === 6) {
      console.log('Weekend, so not returning any show for the player');
      return null;
    }
    const currentProgram = programs.find((program) => {
      const { startTime, endTime } = parseTime(program.time);
      return currentTime >= startTime && currentTime <= endTime;
    });
    return currentProgram || null;
  };



  const parseTime = (timeStr: string): ParsedTime => {
    const [startTimeStr, endTimeStr] = timeStr.split(" - ");
    const [startHour, startMinute] = startTimeStr.split(":").map(Number);
    const [endHour, endMinute] = endTimeStr.split(":").map(Number);
    const currentDate = new Date();
    return {
      startTime: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), startHour, startMinute),
      endTime: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), endHour, endMinute)
    };
  };


  useEffect(() => {
    const interval = setInterval(() => {
      const updatedShow = getCurrentShow(); // Make sure getCurrentShow() returns the updated value
      setCurrentShow(updatedShow);
    }, 10000);

    return () => clearInterval(interval);
  });


  const getBgColor = (index: number): string => {
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
    <div
      id="#home"
      className="audio-player-container bg-gradient-to-r from-[#EDE0D4] to-[#FD7B2B] rounded-lg p-2 w-full md:w-1/2 mx-auto"
    >
      <div className="current-show flex flex-col items-center justify-center p-4">
        <div className="flex">
          {currentShow ? (
            <>
              <Image
                src={currentShow.image}
                width={44}
                height={44}
                alt={currentShow.title}
              />
              <div className="ml-2">
                <h3 className="text-lg font-medium">{currentShow.title}</h3>
                <p className="text-sm">{currentShow.host}</p>
              </div>
            </>
          ) : (
            <p>Maad 97.5FM is we own!</p>
          )}
        </div>
        <ReactAudioPlayer
          src={"https://streaming.broadcastradio.com:8872/maad975fm"}
          autoPlay={false}
          controls
          listenInterval={10000}
          preload="metadata"
          // onCanPlay={() => console.log("Can play")}
          // onEnded={() => console.log("Playback ended")}
          // onError={(e: Event) => console.log("Error:", e)}
          className="w-full rounded-lg p-4"
        />
      </div>
    </div>
  );
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  return <Schedule />;
};

export default AudioPlayer;
