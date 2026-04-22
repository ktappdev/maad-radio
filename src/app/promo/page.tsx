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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
          
          {/* Left Cards Column */}
          <div>
            <h2 className="text-[#111111] text-4xl font-extrabold mb-10 leading-tight">Listen Now On Your Device</h2>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-xl">
              {/* Card 1 - Google Play */}
              <a 
                href="https://play.google.com/store/apps/details?id=radio.broadcast.maad975fm.player"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border-4 border-[#186A3B] rounded-2xl p-6 relative transition-all duration-200 hover:-translate-y-2 hover:shadow-[8px_8px_0px_rgba(24,106,59,0.2)] shadow-[4px_4px_0px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute -top-4 -left-4 bg-[#186A3B] text-white w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-lg shadow-md">1</div>
                <div className="flex items-center gap-5 pl-6">
                  <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    width={180} 
                    height={68}
                    className="h-[68px] w-auto"
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
                <div className="absolute -top-4 -left-4 bg-[#186A3B] text-white w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-lg shadow-md">2</div>
                <div className="flex items-center gap-5 pl-6">
                  <Image 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="Download on the App Store" 
                    width={180} 
                    height={68}
                    className="h-[68px] w-auto"
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
                <div className="absolute -top-4 -left-4 bg-[#186A3B] text-white w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-lg shadow-md">3</div>
                <div className="flex items-center gap-5 pl-6">
                  <div className="w-16 h-16 bg-[#1C9A8B] rounded-xl flex items-center justify-center text-white text-3xl shadow-sm">📻</div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600">Listen on</p>
                    <p className="font-extrabold text-2xl text-[#111111]">TuneIn</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right QR Column */}
          <div className="flex flex-col items-center justify-center lg:sticky lg:top-12">
            <div className="bg-white border-4 border-[#186A3B] rounded-2xl p-8 shadow-[8px_8px_0px_rgba(24,106,59,0.15)]">
              <h3 className="text-[#186A3B] text-2xl font-extrabold mb-6 text-center">Scan to Listen Instantly</h3>
              <Image 
                src="/maad97.5-qr.png" 
                alt="MAAD 97.5 QR Code" 
                width={300} 
                height={300}
                className="rounded-xl"
                priority
              />
            </div>
            <p className="mt-8 text-center font-semibold text-gray-600 max-w-sm text-lg">
              Point your phone camera at this QR code to open MAAD 97.5 FM immediately.
            </p>
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
