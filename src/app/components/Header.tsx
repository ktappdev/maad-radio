"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleNavigation = (sectionId: string) => {
    // If we're already on the home page, just scroll to the section
    if (window.location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // If we're on a different page, navigate to home and then scroll
      router.push("/");
      // Small delay to ensure the page loads before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); // Increased delay for better reliability
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 border-b border-white/5 backdrop-blur-md">
      <div className="flex justify-center items-center w-full max-w-4xl mx-auto text-white gap-8 py-5 transition-all duration-300">
        <Link
          href="/"
          className="hover:text-[#FD7B2B] transition-colors duration-200"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="drop-shadow-md"
          />
        </Link>
        <button
          onClick={() => handleNavigation("schedule")}
          className="hover:text-[#FD7B2B] transition-colors duration-200 text-base sm:text-lg font-medium"
        >
          Schedule
        </button>
        <button
          onClick={() => handleNavigation("about")}
          className="hover:text-[#FD7B2B] transition-colors duration-200 text-base sm:text-lg font-medium"
        >
          About
        </button>
        <button
          onClick={() => handleNavigation("contact")}
          className="hover:text-[#FD7B2B] transition-colors duration-200 text-base sm:text-lg font-medium"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
