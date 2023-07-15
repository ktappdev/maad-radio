"use client";
import Image from "next/image";
import React from "react";
import ReactAudioPlayer from "react-audio-player";

interface AudioPlayerProps {
  audioUrl: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  return (
    <div className="audio-player-container bg-gradient-to-r from-[#EDE0D4] to-[#FD7B2B] rounded-lg p-6 shadow-lg">
      <div className="player-controls flex items-center justify-center mb-4">
        <button className="play-button bg-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none">
          <Image src="/logo.png" width={44} height={44} alt="Play" />
        </button>
      </div>
      <ReactAudioPlayer
        src={audioUrl}
        autoPlay
        controls
        listenInterval={10000}
        preload="metadata"
        onCanPlay={() => console.log("Can play")}
        onEnded={() => console.log("Playback ended")}
        onError={(e: Event) => console.log("Error:", e)}
      />
    </div>
  );
};

export default AudioPlayer;
