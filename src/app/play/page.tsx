'use client';

import Player from '../components/Player';
import GetLiveVideo from '../components/GetLiveVideo';

export default function PlayPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] flex flex-col items-center justify-center px-4 pt-24 pb-8 gap-6">
      <Player audioUrl="https://streaming.broadcastradio.com/brutal" />
      <GetLiveVideo />
    </main>
  );
}
