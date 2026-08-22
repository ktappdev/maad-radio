import React from "react";

const Banner = ({ text, text2 }: { text: string; text2: string }) => {
  return (
    <div id="home" className="font-display">
      <div className="font-bold text-3xl sm:text-6xl text-[#EDE0D4] text-center tracking-tight">
        {text}
      </div>
      <div className="font-bold text-4xl sm:text-7xl text-[#FD7B2B] text-center tracking-tight">
        {text2}
      </div>
    </div>
  );
};

export default Banner;
