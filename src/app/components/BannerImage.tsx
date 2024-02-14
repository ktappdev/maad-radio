import React from "react";
import Image from "next/image";

const BannerImage = () => {
  return (
    <div className="w-full h-[280px] md:h-[500px] relative">
      <Image src="/studio.jpg" alt="banner" fill />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="bg-black bg-opacity-60 w-full h-full flex justify-center items-center flex-col">
          <p className="text-white text-xl sm:text-2xl md:text-4xl font-semibold tracking-wider text-center">
            Welcome to MAAD 97.5 FM, the Maddest online radio station on the
            internet!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
