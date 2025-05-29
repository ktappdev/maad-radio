"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const BannerImage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to trigger bottom player
  const triggerPlay = () => {
    // Find the bottom player's play button and click it
    const playButton = document.querySelector(
      "[data-bottom-player-play]"
    ) as HTMLButtonElement;
    if (playButton) {
      playButton.click();
    } else {
      // Fallback: dispatch a custom event that the bottom player can listen to
      window.dispatchEvent(new CustomEvent("triggerPlay"));
    }
  };

  return (
    <div className="w-full h-[400px] md:h-[600px] relative overflow-hidden group rounded-2xl">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image
          src="/studio.jpg"
          alt="MAAD 97.5 FM Studio"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6 px-6 max-w-4xl">
          {/* Animated Text */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white text-shadow leading-tight">
            <span
              className="block opacity-0 animate-stagger"
              style={{ animationDelay: "0.2s" }}
            >
              Welcome to
            </span>
            <span
              className="block text-transparent bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] bg-clip-text opacity-0 animate-stagger"
              style={{ animationDelay: "0.4s" }}
            >
              MAAD 97.5 FM
            </span>
          </h2>

          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium opacity-0 animate-stagger max-w-2xl mx-auto"
            style={{ animationDelay: "0.6s" }}
          >
            The <span className="text-[#FD7B2B] font-bold">Maddest</span> online
            radio station on the internet!
          </p>

          {/* Animated CTA Button */}
          <div
            className="opacity-0 animate-stagger"
            style={{ animationDelay: "0.8s" }}
          >
            <button
              onClick={triggerPlay}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] text-white font-bold text-lg rounded-full hover:scale-110 transition-all duration-300 glow-orange animate-pulse-glow shadow-2xl"
            >
              🎧 Start Listening
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#FD7B2B]/30 rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-16 h-16 border-2 border-[#FF8C42]/30 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-5 w-12 h-12 border-2 border-[#FD7B2B]/20 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  );
};

export default BannerImage;
