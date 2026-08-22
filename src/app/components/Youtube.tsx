import React from "react";

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <div id="about" className="youtube-embed-container w-full">
      <div className="w-full" style={{ aspectRatio: "16 / 9" }}>
        <iframe
          title="YouTube Video"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
