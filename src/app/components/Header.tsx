import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center w-full text-white gap-8 pt-8">
      <Link href="/" className="hover:text-green-600">
        Home
      </Link>
      <Link href="/schedule" className="hover:text-green-600">
        Schedule
      </Link>
      <Link href="/about" className="hover:text-green-600">
        About
      </Link>
      <Link href="/" className="hover:text-green-600">
        Contact
      </Link>
    </div>
  );
};

export default Header;
