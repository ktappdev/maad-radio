"use client";
import React, { useMemo, useState, useEffect } from "react";
import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import ContactSection from "./components/Socials";
import Schedule from "./components/Schedule";
import Youtube from "./components/Youtube";
import GetLiveVideo from "./components/GetLiveVideo";
import { ContactUs } from "./components/ContactUs";
import Image from "next/image";

export default function Home() {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const texts = useMemo(() => ["IS WE OWN", "GUYANESE"], []);

  useEffect(() => {
    const currentFullText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (currentIndex < currentFullText.length) {
            setCurrentText(currentFullText.substring(0, currentIndex + 1));
            setCurrentIndex(currentIndex + 1);
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (currentIndex > 0) {
            setCurrentText(currentFullText.substring(0, currentIndex - 1));
            setCurrentIndex(currentIndex - 1);
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 150
    ); // Faster deleting, slower typing

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, textIndex, texts]);

  // Function to scroll to schedule section
  const scrollToSchedule = () => {
    const scheduleElement = document.getElementById("schedule");
    if (scheduleElement) {
      scheduleElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
    <main className="flex w-full min-h-screen flex-col items-center pt-24 px-4 sm:px-6 lg:px-8 gap-12 bg-[#0b0b0b] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-8 w-28 h-28 bg-[#FD7B2B]/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-8 w-40 h-40 bg-[#FD7B2B]/6 rounded-full blur-3xl"></div>
      </div>

      <GetLiveVideo />

      {/* Enhanced Hero Section */}
      <header className="relative z-10 flex flex-col items-center space-y-8">
        <div className="rounded-2xl bg-white/5 border border-white/10 p-4 shadow-xl">
          <Image
            src="/logo.png"
            width={110}
            height={110}
            alt="MAAD 97.5 FM Logo"
            className="rounded-xl"
            priority
          />
        </div>

        {/* Enhanced Banner with Typewriter Effect */}
        <div className="text-center space-y-4">
          <div className="transition-transform duration-300 hover:scale-[1.01]">
            <Banner text="MAAD 97.5 FM" text2="" />
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#FD7B2B] min-h-[1.2em] flex items-center justify-center">
            <span className="border-r-2 border-[#FD7B2B] pr-1">
              {currentText}
            </span>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button
            onClick={triggerPlay}
            className="px-8 py-3 bg-[#FD7B2B] text-white font-semibold rounded-full hover:bg-[#FF8C42] transition-colors duration-200 shadow-md shadow-[#FD7B2B]/20"
          >
            Listen Live
          </button>
          <button
            onClick={scrollToSchedule}
            className="px-8 py-3 glass-dark text-white font-semibold rounded-full hover:border-white/20 transition-colors duration-200 border border-white/10"
          >
            View Schedule
          </button>
          <a
            href="https://tunein.com/radio/Maad-975-FM-s350006/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 glass-dark text-white font-semibold rounded-full hover:border-white/20 transition-colors duration-200 border border-white/10 flex items-center gap-2"
          >
            <Image
              src="/tunein.webp"
              alt="TuneIn"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            TuneIn
          </a>
        </div>
      </header>

      <div className="w-full max-w-6xl shadow-2xl shadow-black/40 transition-shadow duration-300 rounded-2xl overflow-hidden border border-white/5">
        <BannerImage />
      </div>
      <section id="schedule">
        <h2 className="sr-only">Program Schedule</h2>
        <Schedule />
      </section>
      <div className="transition-transform duration-300 hover:scale-[1.01]">
        <Banner text="STAY TUNED" text2="" />
      </div>
      <div className="flex h-60 w-full flex-col justify-between gap-6 items-center px-8 md:px-12">
        <Youtube videoId={"SjQh0x5AYCw"} />
      </div>
      {/* Enhanced Contact Section */}
      <div className="w-full max-w-6xl glass-dark rounded-3xl px-8 md:px-12 py-16 text-center relative overflow-hidden border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/2 via-transparent to-[#FD7B2B]/5"></div>

        <div className="relative z-10">
          <div className="flex flex-col w-full justify-center items-center text-white mb-12 space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] bg-clip-text tracking-wide">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl leading-relaxed">
              Send us a detailed message and we will get back to you as soon as
              possible.
            </p>
          </div>

          <div className="mb-12">
            <ContactUs />
          </div>

          {/* ReviewIt Widget */}
          <div className="w-full overflow-visible">
            <div id="reviewit-widget-cb91048e-5af3-438b-afa4-705cb41699cb" className="w-full overflow-visible"></div>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    var script = document.createElement('script');
                    script.src = 'https://reviewit.gy/widgets/embed.js';
                    script.async = true;
                    script.onload = function() {
                      new ReviewItWidget({
                        widgetId: 'cb91048e-5af3-438b-afa4-705cb41699cb',
                        container: 'reviewit-widget-cb91048e-5af3-438b-afa4-705cb41699cb'
                      });
                    };
                    document.head.appendChild(script);
                  })();
                `,
              }}
            />
          </div>

          {/* Enhanced Promo Image */}
          <div className="w-full h-auto group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40 border border-white/5">
              <Image
                alt="MAAD 97.5 FM Promo"
                src="/maad-promo.jpg"
                width={900}
                height={500}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="text-white text-center space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    MAAD 97.5 FM
                  </h3>
                  <p className="text-lg">Is We Own!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-8 px-4">
        <ContactSection />
      </div>
    </main>
  );
}
