"use client";
import Image from "next/image";
import React from "react";
import ReactAudioPlayer from "react-audio-player";

interface AudioPlayerProps {
  audioUrl: string;
  //
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  return (
    <div className="audio-player-container bg-gradient-to-r from-[#EDE0D4] to-[#FD7B2B] rounded-lg p-2 w-full ">
      {/* <div className="player-controls flex items-center justify-center mb-4">
        <Image src="/logo.png" width={44} height={44} alt="Play" />
      </div> */}
      <ReactAudioPlayer
        src={audioUrl}
        autoPlay={true}
        controls
        listenInterval={10000}
        preload="metadata"
        onCanPlay={() => console.log("Can play")}
        onEnded={() => console.log("Playback ended")}
        onError={(e: Event) => console.log("Error:", e)}
        className="w-full rounded-lg p-4"
      />
    </div>
  );
};

export default AudioPlayer;
