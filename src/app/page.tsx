"use client";
import React, { useState, useEffect } from "react";
import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import ContactSection from "./components/Socials";
import Schedule from "./components/Schedule";
import Youtube from "./components/Youtube";
import GetLiveVideo from "./components/GetLiveVideo";
import ListenInGuyana from "./components/ListenInGuyana";
import { ContactUs } from "./components/ContactUs";
import Image from "next/image";

const texts = ["IS WE OWN", "GUYANESE"];

export default function Home() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setTextIndex((i) => (i + 1) % texts.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

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
    <main className="flex w-full min-h-screen flex-col items-center pt-24 px-4 sm:px-6 lg:px-8 bg-[#0b0b0b] relative overflow-hidden">
      <style>{`@keyframes fadeSlide { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } } .fade-slide { animation: fadeSlide 0.5s ease both; }`}</style>
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

        {/* Enhanced Banner with Fade Transition */}
        <div className="text-center space-y-4">
          <h1 className="sr-only">MAAD 97.5 FM - Guyana&apos;s Radio Station, Live from Georgetown</h1>
          <div className="transition-transform duration-300 hover:scale-[1.01]">
            <Banner text="MAAD 97.5 FM" text2="" />
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#FD7B2B] min-h-[1.2em] flex items-center justify-center">
            <span key={textIndex} className="fade-slide">
              {texts[textIndex]}
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

      <div className="w-full max-w-6xl my-12 shadow-2xl shadow-black/40 transition-shadow duration-300 rounded-2xl overflow-hidden border border-white/5">
        <BannerImage />
      </div>

      {/* About Section */}
      <section id="about" className="w-full">
        <div className="glass-dark rounded-3xl px-8 md:px-12 py-16 border border-white/5">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] bg-clip-text tracking-tight">
              About Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl leading-relaxed">
              Brutal Group Incorporated is renowned for producing and promoting
              Guyanese music and culture. To further achieve the company&rsquo;s vision,
              MAAD 97.5 FM was created. As Guyana&rsquo;s premier multimedia radio
              station, the capabilities of MAAD 97.5 FM are unmatched!
            </p>
            <p className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl leading-relaxed">
              Our station facilitates live video and audio broadcasts across
              multiple platforms to give our listeners and viewers the best
              experience.
            </p>
            <p className="text-lg sm:text-xl text-white font-medium max-w-3xl leading-relaxed">
              MAAD 97.5 FM aims to build a thriving community of loyal and
              educated Guyanese by providing music, events, conversations, ideas
              and information of the highest standard. Our goal is to enrich our
              listeners&rsquo; lives, strengthen communities, and showcase Guyana to the
              world.
            </p>
          </div>
        </div>
      </section>

      <ListenInGuyana />

      <section id="schedule" className="w-full">
        <h2 className="sr-only">Program Schedule</h2>
        <Schedule />
      </section>
      <div className="my-12 transition-transform duration-300 hover:scale-[1.01]">
        <Banner text="STAY TUNED" text2="" />
      </div>
      <div
        className="w-full max-w-4xl mx-auto px-4 my-12"
        style={{ aspectRatio: "16 / 9" }}
      >
        <Youtube videoId={"SjQh0x5AYCw"} />
      </div>

      {/* Enhanced Contact Section */}
      <section className="w-full max-w-6xl glass-dark rounded-3xl px-8 md:px-12 py-16 text-center relative overflow-hidden border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-white/2 via-transparent to-[#FD7B2B]/5"></div>

        <div className="relative z-10">
          <div className="flex flex-col w-full justify-center items-center text-white mb-12 space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] bg-clip-text tracking-tight">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl leading-relaxed">
              Send us a detailed message and we will get back to you as soon as
              possible.
            </p>
          </div>

          <ContactUs />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="w-full max-w-6xl glass-dark rounded-3xl px-8 md:px-12 py-12 text-center relative overflow-hidden border border-white/5 mt-12">
        <div className="relative z-10 w-full overflow-visible">
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
      </section>

      {/* Enhanced Promo Image */}
      <section className="w-full max-w-6xl mx-auto py-12">
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
      </section>
      <div className="w-full py-16 px-4">
        <ContactSection />
      </div>
    </main>
  );
}
