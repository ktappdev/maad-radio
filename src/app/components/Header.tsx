import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center w-full text-white gap-8 pt-8">
      <a href="#home" className="hover:text-green-600">
        Home
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
