"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

interface Program {
  title: string;
  time: string;
  host: string;
  image: string;
}

interface AudioPlayerProps {
  audioUrl: string;
}

const Schedule: React.FC = () => {
  const [currentShow, setCurrentShow] = useState<Program | null>(null);

  const programs: Program[] = [
    {
      title: "Morning Showcase",
      time: "7:00 AM - 10:00 AM",
      host: "Veronica Ramsaroop",
      image: "https://i.pravatar.cc/200?img=22",
    },
    {
      title: "Supreme Show",
      time: "10:00 AM - 01:00 PM",
      host: "Fashion Diva Faith and DJ Leroy",
      image: "https://i.pravatar.cc/200?img=32",
    },
    {
      title: "Farrakhan",
      time: "02:00 PM - 03:00 PM",
      host: "Min. Louis Farrakhan",
      image: "/farrakhan.jpeg",
    },
    {
      title: "Rush Hour Drive",
      time: "03:00 PM - 06:00 PM",
      host: "N.E.B 592",
      image: "https://i.pravatar.cc/200?img=2",
    },
    {
      title: "The Meltdown",
      time: "6:00 PM - 7:00 PM",
      host: "Annmarie",
      image: "https://i.pravatar.cc/200?img=6",
    },
    {
      title: "Evening Vibe",
      time: "7:00 PM - 8:00 PM",
      host: "Annmarie",
      image: "https://i.pravatar.cc/200?img=14",
    },
    {
      title: "The Late Late Show",
      time: "9:00 PM - 12:00 PM",
      host: "Annmarie",
      image: "https://i.pravatar.cc/200?img=19",
    },
    // ... rest of the programs
  ];

  const getCurrentShow = (): Program | null => {
    const currentTime = new Date();
    // if now is weekend then return null
    if (currentTime.getDay() === 0 || currentTime.getDay() === 6) {
      console.log('weekend so not returning any show for the player')
      return null;
    }
    const currentProgram = programs.find((program) => {
      const [startTimeStr, endTimeStr] = program.time.split(" - ");
      const startTime = parseTime(startTimeStr);
      const endTime = parseTime(endTimeStr);
      return currentTime >= startTime && currentTime <= endTime;
    });
    return currentProgram || null;
  };

  const parseTime = (timeStr: string): Date => {
    const [time, period] = timeStr.split(" ");
    const [hours, minutes] = time.split(":").map((str) => parseInt(str, 10));
    const adjustedHours = period === "AM" ? hours : hours + 12;
    const currentDate = new Date();
    return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      adjustedHours,
      minutes
    );
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
