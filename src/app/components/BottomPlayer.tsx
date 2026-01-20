"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
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

const BottomPlayer: React.FC = () => {
  const [currentShow, setCurrentShow] = useState<Program | null>(null);
  const [volume, setVolume] = useState<number>(() => {
    if (typeof window !== "undefined") {
      return Number(localStorage.getItem("bottomPlayerVolume")) || 0.5;
    }
    return 0.5;
  });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const parseTime = useCallback((timeStr: string): ParsedTime => {
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
        startMinute
      ),
      endTime: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        endHour,
        endMinute
      ),
    };
  }, []);

  const getCurrentShow = useCallback((): Program | null => {
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
  }, [parseTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedShow = getCurrentShow();
      setCurrentShow(updatedShow);
    }, 10000);

    return () => clearInterval(interval);
  }, [getCurrentShow]);

  useEffect(() => {
    const updateShow = () => {
      const updatedShow = getCurrentShow();
      setCurrentShow(updatedShow);
    };
    updateShow();

    // Listen for custom play event from hero buttons
    const handleTriggerPlay = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch((e) => {
          console.error("Audio playback error:", e);
          setError("Unable to play audio stream. Please try again later.");
        });
      }
    };

    window.addEventListener("triggerPlay", handleTriggerPlay);
    return () => window.removeEventListener("triggerPlay", handleTriggerPlay);
  }, [getCurrentShow, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((e) => {
          console.error("Audio playback error:", e);
          setError("Unable to play audio stream. Please try again later.");
        });
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("bottomPlayerVolume", String(newVolume));
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] border-t border-[#FD7B2B]/30 shadow-2xl transition-all duration-300 ${
        isMinimized ? "h-16" : "h-32 md:h-20"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo and Show Info */}
        <div className="flex items-center space-x-3 flex-1 min-w-0">
          <div className="flex-shrink-0">
            <Image
              src="/logo.png"
              width={isMinimized ? 32 : 40}
              height={isMinimized ? 32 : 40}
              alt="MAAD 97.5 FM"
              className="rounded-lg shadow-md"
            />
          </div>

          {!isMinimized && (
            <div className="flex-1 min-w-0">
              {currentShow ? (
                <div className="flex items-center space-x-2">
                  <Image
                    src={currentShow.image}
                    width={32}
                    height={32}
                    alt={currentShow.title}
                    className="rounded-md shadow-sm flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-white text-sm font-semibold truncate">
                      {currentShow.title}
                    </h4>
                    <p className="text-gray-300 text-xs truncate">
                      {currentShow.host}
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="text-white text-sm font-semibold">
                    MAAD 97.5 FM
                  </h4>
                  <p className="text-gray-300 text-xs">Is We Own!</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-3">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            data-bottom-player-play
            className="bg-[#FD7B2B] hover:bg-[#FD7B2B]/80 text-white p-2 rounded-full transition-colors duration-200 shadow-lg"
          >
            {isPlaying ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          {/* Volume Control (hidden on mobile when minimized) */}
          {!isMinimized && (
            <div className="hidden md:flex items-center space-x-2">
              <svg
                className="w-4 h-4 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.824L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l3.883-3.824a1 1 0 011.617.824zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.984 3.984 0 00-1.172-2.828 1 1 0 010-1.415z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          )}

          {/* Minimize/Maximize Button */}
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-gray-300 hover:text-white p-1 transition-colors duration-200"
          >
            {isMinimized ? (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Volume Control - appears when not minimized */}
      {!isMinimized && (
        <div className="md:hidden px-4 pb-2">
          <div className="flex items-center space-x-3">
            <svg
              className="w-4 h-4 text-gray-300 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.824L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l3.883-3.824a1 1 0 011.617.824zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.984 3.984 0 00-1.172-2.828 1 1 0 010-1.415z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
            />
            <span className="text-xs text-gray-300 w-8 text-right">
              {Math.round(volume * 100)}%
            </span>
          </div>
        </div>
      )}

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="https://streaming.broadcastradio.com/brutal"
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => {
          console.error("Audio playback error:", e);
          setError("Unable to play audio stream. Please try again later.");
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            audioRef.current.volume = volume;
          }
        }}
      />

      {/* Error Message */}
      {error && (
        <div className="absolute top-0 left-0 right-0 bg-red-500 text-white text-xs text-center py-1">
          {error}
        </div>
      )}

      {/* Custom CSS for volume slider */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #fd7b2b;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #fd7b2b;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default BottomPlayer;
