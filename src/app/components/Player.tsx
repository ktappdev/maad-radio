"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { programs } from "@/app/lib/programs";
import { convertDaysToNumbers } from "@/app/lib/convertDaysToNumber";

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
  const [volume, setVolume] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('playerVolume')) || 0.5;
    }
    return 0.5;
  });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const getCurrentShow = (): Program | null => {
    const currentTime = new Date();
    const currentProgram = programs.find((program) => {
      let daysTheProgramIsOn = convertDaysToNumbers(program?.days);
      if (!daysTheProgramIsOn.includes(currentTime.getDay())) {
        return null;
      }
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
      startTime: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        startHour,
        startMinute,
      ),
      endTime: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        endHour,
        endMinute,
      ),
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedShow = getCurrentShow();
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
      className="audio-player-container bg-gradient-to-r from-[#EDE0D4] via-[#F9BF8F] to-[#FD7B2B] rounded-xl shadow-2xl p-4 w-full md:w-1/2 mx-auto transition-all duration-300 hover:shadow-xl"
    >
      <div className="current-show flex flex-col items-center justify-center p-4 space-y-6">
        <div className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-lg w-full transition-transform duration-300 hover:scale-[1.02]">
          {currentShow ? (
            <>
              <Image
                src={currentShow.image}
                width={64}
                height={64}
                alt={currentShow.title}
                className="rounded-lg shadow-md"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-xl font-bold text-gray-800">{currentShow.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{currentShow.host}</p>
              </div>
            </>
          ) : (
            <p className="text-lg font-medium text-gray-700 w-full text-center">Maad 97.5FM is we own!</p>
          )}
        </div>
        <div className="w-full space-y-4">
          <ReactAudioPlayer
            src={"https://streaming.broadcastradio.com/brutal"}
            autoPlay={false}
            controls
            volume={volume}
            listenInterval={10000}
            preload="metadata"
            className="w-full rounded-lg shadow-md focus:outline-none"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onError={(e) => {
              console.error('Audio playback error:', e);
              setError('Unable to play audio stream. Please try again later.');
            }}
            onVolumeChanged={(e) => {
              const newVolume = (e.target as HTMLAudioElement).volume;
              setVolume(newVolume);
              if (typeof window !== 'undefined') {
                localStorage.setItem('playerVolume', String(newVolume));
              }
            }}
          />
          {error && (
            <div className="text-red-500 text-sm text-center bg-red-100 p-2 rounded-lg">{error}</div>
          )}
          <div className="flex items-center justify-center space-x-2">
            <div className="text-sm font-medium text-gray-600 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full transition-colors duration-300">
              {isPlaying ? 'Now Playing' : 'Paused'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  return <Schedule />;
};

export default AudioPlayer;
