'use client';

import { Montserrat } from 'next/font/google';
import Image from 'next/image';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '800'],
  display: 'swap',
});

export default function PromoPage() {
  return (
    <main className={`min-h-screen bg-[#F8F9FA] ${montserrat.className}`}>
      {/* Header */}
      <header>
        <div className="bg-[#111111] py-4 px-6">
          <h1 className="text-white text-2xl font-extrabold tracking-wider">MAAD 97.5 FM</h1>
        </div>
        <div className="bg-[#FFD700] h-12 relative">
          <div className="absolute inset-0 bg-[#FFD700] skew-y-1 origin-top-left"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          
          {/* Left Cards Column */}
          <div>
            <h2 className="text-[#111111] text-3xl font-extrabold mb-8">Listen Anywhere</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1 - Google Play */}
            <a 
              href="https://play.google.com/store/apps/details?id=radio.broadcast.maad975fm.player"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border-4 border-[#186A3B] rounded-xl p-4 relative transition-transform hover:-translate-y-1 shadow-[4px_4px_0px_rgba(0,0,0,0.1)]"
            >
              <div className="absolute -top-3 -left-3 bg-[#186A3B] text-white w-8 h-8 rounded-full flex items-center justify-center font-extrabold">1</div>
              <div className="flex items-center gap-4 pl-6">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" width={140} height={48} />
                <div>
                  <p className="text-sm font-semibold text-[#111111]">Download on</p>
                  <p className="font-extrabold text-lg">Google Play</p>
                </div>
              </div>
            </a>

            {/* Card 2 - App Store */}
            <a 
              href="https://apps.apple.com/us/app/maad-97-5-fm/id6761002546"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border-4 border-[#186A3B] rounded-xl p-4 relative transition-transform hover:-translate-y-1 shadow-[4px_4px_0px_rgba(0,0,0,0.1)]"
            >
              <div className="absolute -top-3 -left-3 bg-[#186A3B] text-white w-8 h-8 rounded-full flex items-center justify-center font-extrabold">2</div>
              <div className="flex items-center gap-4 pl-6">
                <Image src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" width={140} height={48} />
                <div>
                  <p className="text-sm font-semibold text-[#111111]">Download on</p>
                  <p className="font-extrabold text-lg">App Store</p>
                </div>
              </div>
            </a>

            {/* Card 3 - TuneIn */}
            <a 
              href="http://tun.in/sfL9k"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border-4 border-[#186A3B] rounded-xl p-4 relative transition-transform hover:-translate-y-1 shadow-[4px_4px_0px_rgba(0,0,0,0.1)]"
            >
              <div className="absolute -top-3 -left-3 bg-[#186A3B] text-white w-8 h-8 rounded-full flex items-center justify-center font-extrabold">3</div>
              <div className="flex items-center gap-4 pl-6">
                <div className="w-14 h-14 bg-[#1C9A8B] rounded-lg flex items-center justify-center text-white text-2xl">📻</div>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">Listen on</p>
                  <p className="font-extrabold text-lg">TuneIn</p>
                </div>
              </div>
            </a>

            {/* Card 4 - Website */}
            <a 
              href="https://www.maad97.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white border-4 border-[#186A3B] rounded-xl p-4 relative transition-transform hover:-translate-y-1 shadow-[4px_4px_0px_rgba(0,0,0,0.1)]"
            >
              <div className="absolute -top-3 -left-3 bg-[#186A3B] text-white w-8 h-8 rounded-full flex items-center justify-center font-extrabold">4</div>
              <div className="flex items-center gap-4 pl-6">
                <div className="w-14 h-14 bg-[#1C9A8B] rounded-lg flex items-center justify-center text-white text-2xl">🌐</div>
                <div>
                  <p className="text-sm font-semibold text-[#111111]">Visit Our</p>
                  <p className="font-extrabold text-lg">Website</p>
                </div>
              </div>
            </a>
            </div>
          </div>

          {/* Right QR Column */}
          <div className="flex flex-col items-center justify-start">
            <h3 className="text-[#186A3B] text-2xl font-extrabold mb-6">Scan to Listen</h3>
            <div className="bg-white border-4 border-[#186A3B] rounded-xl p-6 shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
              <Image 
                src="/maad97.5-qr.png" 
                alt="MAAD 97.5 QR Code" 
                width={280} 
                height={280}
                className="rounded-lg"
              />
            </div>
            <p className="mt-6 text-center font-semibold text-[#111111] max-w-xs">
              Scan this QR code with your phone camera to open MAAD 97.5 FM directly.
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#111111] py-8 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-6 text-white text-2xl">
            <a href="#" className="hover:text-[#FFD700] transition-colors">📘</a>
            <a href="#" className="hover:text-[#FFD700] transition-colors">📷</a>
          </div>
          <p className="text-white text-sm font-semibold">© {new Date().getFullYear()} MAAD 97.5 FM. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
