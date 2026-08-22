"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navLinkClass =
    "hover:text-[#FD7B2B] transition-colors duration-200 text-base sm:text-lg font-medium";

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 border-b border-white/5 backdrop-blur-md">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto text-white py-5 px-4 transition-all duration-300">
        <Link
          href="/"
          className="hover:text-[#FD7B2B] transition-colors duration-200"
        >
          <Image
            src="/logo.png"
            alt="Maad 97.5 FM"
            width={40}
            height={40}
            className="drop-shadow-md"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavigation("schedule")}
            className={navLinkClass}
          >
            Schedule
          </button>
          <button
            onClick={() => handleNavigation("about")}
            className={navLinkClass}
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("contact")}
            className={navLinkClass}
          >
            Contact
          </button>
          <Link href="/privacy" className={navLinkClass}>
            Privacy
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden hover:text-[#FD7B2B] transition-colors duration-200"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 100 2h12a1 1 0 100-2H4z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col bg-black/90 backdrop-blur-md border-b border-white/5 text-white px-4 pb-4">
          <button
            onClick={() => {
              setMenuOpen(false);
              handleNavigation("schedule");
            }}
            className={`${navLinkClass} py-3 text-left border-b border-white/5`}
          >
            Schedule
          </button>
          <button
            onClick={() => {
              setMenuOpen(false);
              handleNavigation("about");
            }}
            className={`${navLinkClass} py-3 text-left border-b border-white/5`}
          >
            About
          </button>
          <button
            onClick={() => {
              setMenuOpen(false);
              handleNavigation("contact");
            }}
            className={`${navLinkClass} py-3 text-left border-b border-white/5`}
          >
            Contact
          </button>
          <Link
            href="/privacy"
            onClick={() => setMenuOpen(false)}
            className={`${navLinkClass} py-3 block`}
          >
            Privacy
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Header;
