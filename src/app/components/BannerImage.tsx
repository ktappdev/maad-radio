import React from "react";
import Image from "next/image";

const BannerImage = () => {
  return (
    <div className="w-full h-[280px] md:h-[500px] relative">
      <Image src="/studio.jpg" alt="banner" layout="fill" objectFit="cover" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div>
          <p className=" bg-black rounded bg-opacity-60 mx-auto text-xl w-5/6 sm:w-1/2 md:text-4xl text-white font-semibold tracking-wider text-center">
            Welcome to MAAD 97.5 FM, the Maddest online radio station on the
            internet!
          </p>
          <p className=" bg-black rounded bg-opacity-50 mx-auto text-xl w-5/6 sm:w-1/2 md:text-4xl text-white font-semibold tracking-wider text-center">
            Guyana Stand Up!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
