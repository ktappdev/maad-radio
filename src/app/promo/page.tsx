'use client';

import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  display: 'swap',
});

export default function PromoPage() {
  return (
    <main className={`min-h-screen bg-[#F8F9FA] ${montserrat.className}`}>
      {/* Header */}
      <header className="overflow-hidden">
        <div className="bg-[#111111] py-5 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-white text-3xl font-extrabold tracking-[0.15em]">MAAD 97.5 FM</h1>
          </div>
        </div>
        <div className="h-16 bg-[#FFD700] relative">
          <div className="absolute inset-0 bg-[#FFD700] skew-y-[1.5deg] origin-top-left shadow-inner"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[#111111] text-4xl md:text-5xl font-extrabold mb-10 leading-tight">Listen Now On Your Device</h2>

          {/* Play Now Button */}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('triggerPlay'))}
            className="mb-12 bg-[#FFD700] border-4 border-[#186A3B] text-[#111111] font-extrabold text-2xl px-12 py-5 rounded-2xl transition-all duration-200 hover:-translate-y-2 hover:shadow-[8px_8px_0px_rgba(24,106,59,0.2)] shadow-[4px_4px_0px_rgba(0,0,0,0.1)] flex items-center gap-3"
          >
            <span className="text-3xl">▶</span>
            Play Now
          </button>

          {/* App Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            {/* Card 1 - Google Play */}
            <a 
              href="https://play.google.com/store/apps/details?id=radio.broadcast.maad975fm.player"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border-4 border-[#186A3B] rounded-2xl p-6 relative transition-all duration-200 hover:-translate-y-2 hover:shadow-[8px_8px_0px_rgba(24,106,59,0.2)] shadow-[4px_4px_0px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute -top-3 -left-3 bg-[#186A3B] text-white w-8 h-8 rounded-full flex items-center justify-center font-extrabold shadow-md">1</div>
              <div className="flex flex-col items-center justify-center gap-3 pt-2">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  width={160} 
                  height={60}
                  className="h-[60px] w-auto"
                />
              </div>
            </a>

            {/* Card 2 - App Store */}
            <a 
              href="https://apps.apple.com/us/app/maad-97-5-fm/id6761002546"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border-4 border-[#186A3B] rounded-2xl p-6 relative transition-all duration-200 hover:-translate-y-2 hover:shadow-[8px_8px_0px_rgba(24,106,59,0.2)] shadow-[4px_4px_0px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute -top-3 -left-3 bg-[#186A3B] text-white w-8 h-8 rounded-full flex items-center justify-center font-extrabold shadow-md">2</div>
              <div className="flex flex-col items-center justify-center gap-3 pt-2">
                <Image 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  width={160} 
                  height={60}
                  className="h-[60px] w-auto"
                />
              </div>
            </a>

            {/* Card 3 - TuneIn */}
            <a 
              href="http://tun.in/sfL9k"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border-4 border-[#186A3B] rounded-2xl p-6 relative transition-all duration-200 hover:-translate-y-2 hover:shadow-[8px_8px_0px_rgba(24,106,59,0.2)] shadow-[4px_4px_0px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute -top-3 -left-3 bg-[#186A3B] text-white w-8 h-8 rounded-full flex items-center justify-center font-extrabold shadow-md">3</div>
              <div className="flex flex-col items-center justify-center gap-2 pt-2">
                <Image 
                  src="/tunein.webp" 
                  alt="TuneIn" 
                  width={80} 
                  height={40}
                  className="h-12 w-auto"
                />
                <p className="font-extrabold text-xl text-[#111111]">TuneIn</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#111111] py-10 px-6 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-8 text-white text-3xl">
            <a href="#" className="hover:text-[#FFD700] transition-colors duration-200">📘</a>
            <a href="#" className="hover:text-[#FFD700] transition-colors duration-200">📷</a>
          </div>
          <p className="text-white text-base font-semibold">© {new Date().getFullYear()} MAAD 97.5 FM. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
