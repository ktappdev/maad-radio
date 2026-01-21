"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const BannerImage = () => {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) {
        return;
      }
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 0;
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const clamped = Math.min(1, Math.max(0, progress));
      const maxShift = rect.height * 0.2;
      const nextOffset = (clamped - 0.5) * 2 * maxShift;
      setParallaxOffset(nextOffset);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
    <div
      ref={containerRef}
      className="w-full h-[400px] md:h-[600px] relative overflow-hidden group rounded-2xl border border-white/5"
    >
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
        }}
      >
        <Image
          src="/studio.jpg"
          alt="MAAD 97.5 FM Studio"
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-6 px-6 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white text-shadow leading-tight">
            <span className="block">Welcome to</span>
            <span className="block text-transparent bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] bg-clip-text">
              MAAD 97.5 FM
            </span>
          </h2>

          <p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto"
          >
            The <span className="text-[#FD7B2B] font-bold">Maddest</span> online
            radio station on the internet!
          </p>

          <div>
            <button
              onClick={triggerPlay}
              className="mt-8 px-8 py-4 bg-[#FD7B2B] text-white font-semibold text-lg rounded-full hover:bg-[#FF8C42] transition-colors duration-200 shadow-lg shadow-[#FD7B2B]/20"
            >
              Start Listening
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerImage;
