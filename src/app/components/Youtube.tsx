import React from "react";

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <div className="youtube-embed-container w-full sm:w-1/2 h-full flex-col justify-center items-center text-center">
      <div>
        <p className="text-sm sm:text-xl font-semibold text-white">
          Click play to learn more!
        </p>
      </div>
      <iframe
        title="YouTube Video"
        width="100%"
        height="auto"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
