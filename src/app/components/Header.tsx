import Image from "next/image";
import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm">
      <div className="flex justify-center items-center w-full max-w-4xl mx-auto text-white gap-8 py-6 transition-all duration-300">
        <Link href="/" className="hover:text-[#FD7B2B] transition-colors duration-300 transform hover:scale-110">
          <Image src="/logo.png" alt="logo" width={40} height={40} className="drop-shadow-lg" />
        </Link>
        <a href="/#schedule" className="hover:text-[#FD7B2B] transition-colors duration-300 text-lg font-medium">
          Schedule
        </a>
        <a href="/#about" className="hover:text-[#FD7B2B] transition-colors duration-300 text-lg font-medium">
          About
        </a>
        <a href="/#contact" className="hover:text-[#FD7B2B] transition-colors duration-300 text-lg font-medium">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
