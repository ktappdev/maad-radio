import React from "react";
import Image from "next/image";

const BannerImage = () => {
  return (
    <div className="w-full h-[280px] md:h-[500px] relative">
      <Image src="/mixer.jpg" alt="banner" fill />
    </div>
  );
};

export default BannerImage;
