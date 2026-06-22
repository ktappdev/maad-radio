import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center pt-24 px-4 bg-[#0b0b0b]">
      <div className="text-center space-y-6 max-w-lg glass-dark rounded-3xl p-10">
        <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] bg-clip-text">
          404
        </h1>
        <h2 className="text-2xl text-white font-semibold">Off-Air Signal</h2>
        <p className="text-gray-400 text-lg">
          Looks like this page wandered off frequency. Let&apos;s get you back to
          Maad 97.5 FM.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/"
            className="px-6 py-3 bg-[#FD7B2B] text-white font-semibold rounded-full hover:bg-[#FF8C42] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/play"
            className="px-6 py-3 glass-dark text-white font-semibold rounded-full border border-white/10 hover:border-white/20 transition-colors"
          >
            Listen Live
          </Link>
        </div>
      </div>
    </main>
  );
}
