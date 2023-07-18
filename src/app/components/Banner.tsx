import React from "react";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"], weight: ["900"] });
const Banner = ({ text, text2 }: { text: string; text2: string }) => {
  return (
    <div className={unbounded.className}>
      <div className="font-extrabold text-4xl sm:text-7xl text-[#EDE0D4] text-center tracking-widest">
        {text}
      </div>
      <div className="font-extrabold text-4xl sm:text-8xl text-[#FD7B2B] text-center tracking-widest">
        {text2}
      </div>
    </div>
  );
};

export default Banner;
