import React from "react";

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <div className="youtube-embed-container w-1/2">
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
