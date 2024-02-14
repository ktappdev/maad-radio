import Image from "next/image";
import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex justify-center items-center w-full text-white gap-8 py-4">
      <Link href="/" className="hover:text-green-600">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
      </Link>
      <a href="/#schedule" className="hover:text-green-600">
        Schedule
      </a>
      <a href="/#about" className="hover:text-green-600">
        About
      </a>
      <a href="/#contact" className="hover:text-green-600">
        Contact
      </a>
    </div>
  );
};

export default Header;
