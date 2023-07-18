import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full text-white gap-8 py-4">
      <a href="#home" className="hover:text-green-600">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
      </a>
      <a href="#schedule" className="hover:text-green-600">
        Schedule
      </a>
      <a href="#about" className="hover:text-green-600">
        About
      </a>
      <a href="#contact" className="hover:text-green-600">
        Contact
      </a>
    </div>
  );
};

export default Header;
