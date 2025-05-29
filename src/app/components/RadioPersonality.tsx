"use client";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";

const RadioPersonality = ({
  title,
  host,
  time,
  imageSrc,
  image2Src,
  image3Src,
  bio,
  days,
}: {
  title: string;
  host: string;
  time: string;
  imageSrc: string;
  image2Src?: string;
  image3Src?: string;
  bio: string;
  days: string[];
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleParagraphs, setVisibleParagraphs] = useState<number[]>([]);

  let paragraphs = bio.split("\n");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Stagger paragraph animations
    paragraphs.forEach((_, index) => {
      setTimeout(() => {
        setVisibleParagraphs((prev) => [...prev, index]);
      }, index * 200);
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [paragraphs.length]);

  return (
    <div className="flex justify-center items-center mb-8 text-white relative">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-10 w-32 h-32 bg-[#FD7B2B]/5 rounded-full"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        ></div>
        <div
          className="absolute bottom-40 left-10 w-24 h-24 bg-[#FF8C42]/5 rounded-full"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        ></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12 space-y-6">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] bg-clip-text mb-4 tracking-wide text-shadow animate-stagger">
            {title}
          </div>
          <div
            className="text-lg sm:text-xl text-gray-300 font-semibold glass-dark px-6 py-3 rounded-full inline-block animate-stagger"
            style={{ animationDelay: "0.2s" }}
          >
            {time} hrs
          </div>
        </div>
        {/* Enhanced Days Display */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {days.map((day: string, index: number) => (
            <div
              key={index}
              className="text-[#FD7B2B] text-sm font-bold px-4 py-2 glass-dark rounded-full border border-[#FD7B2B]/30 hover:scale-105 transition-transform duration-300 animate-stagger"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {day.slice(0, 3).toUpperCase()}
            </div>
          ))}
        </div>

        {/* Enhanced Content Area */}
        <div className="glass-dark rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FD7B2B]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#FF8C42]/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10 text-justify leading-relaxed">
            {/* First Image - Enhanced */}
            <div className="float-left mr-6 mb-6 group">
              <Image
                src={imageSrc}
                alt={title}
                width={250}
                height={250}
                className="object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#FD7B2B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <Suspense
              fallback={
                <div className="animate-pulse">Loading amazing content...</div>
              }
            >
              <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
                {paragraphs?.map((paragraph, index) => {
                  const isVisible = visibleParagraphs.includes(index);

                  // Add second image at 1/3 of the way through
                  if (
                    index === Math.floor(paragraphs.length / 3) &&
                    image2Src
                  ) {
                    return (
                      <div
                        key={index}
                        className={`transition-all duration-700 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                        }`}
                      >
                        <div className="float-right ml-6 mb-6 group">
                          <Image
                            src={image2Src}
                            alt={`${title} - ${host}`}
                            width={320}
                            height={320}
                            className="object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2"
                          />
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#FF8C42]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="mb-6 text-justify">{paragraph}</p>
                      </div>
                    );
                  }
                  // Add third image at 2/3 of the way through
                  if (
                    index === Math.floor((paragraphs.length * 2) / 3) &&
                    image3Src
                  ) {
                    return (
                      <div
                        key={index}
                        className={`transition-all duration-700 ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                        }`}
                      >
                        <div className="float-left mr-6 mb-6 group">
                          <Image
                            src={image3Src}
                            alt={`${title} - ${host}`}
                            width={280}
                            height={280}
                            className="object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                          />
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#FD7B2B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <p className="mb-6 text-justify">{paragraph}</p>
                      </div>
                    );
                  }
                  return (
                    <p
                      key={index}
                      className={`mb-6 text-justify transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioPersonality;
