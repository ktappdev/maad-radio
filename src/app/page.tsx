import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import ContactSection from "./components/Socials";
import Schedule from "./components/Schedule";
import Youtube from "./components/Youtube";
import GetLiveVideo from "./components/GetLiveVideo";
import { ContactUs } from "./components/ContactUs";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center py-12 px-6 gap-8 bg-gradient-to-b from-black to-[#1a1a1a]">
      <GetLiveVideo />
      <div className="transform hover:scale-105 transition-transform duration-300">
        <Banner text="MAAD 97.5 FM" text2="IS WE OWN" />
      </div>
      <div className="w-full shadow-2xl hover:shadow-[#FD7B2B]/20 transition-shadow duration-300">
        <BannerImage />
      </div>
      <Schedule />
      <div className="transform hover:scale-105 transition-transform duration-300">
        <Banner text="STAY TUNED" text2="" />
      </div>
      <div className="flex h-60 w-full flex-col justify-between gap-6 items-center px-8 md:px-12">
        <Youtube videoId={"SjQh0x5AYCw"} />
      </div>
      <div className="flex w-full bg-[#333333] flex-col px-8 md:px-12 py-10 text-center text-lg font-bold rounded-lg shadow-xl">
        <div className="flex flex-col text-3xl w-full justify-center items-center text-white mb-8 space-y-4">
          <h2 className="font-bold tracking-wide">Contact Us</h2>
          <p className="text-base font-light max-w-2xl">
            Send us a detailed message and we will get back to you as soon as possible.
          </p>
        </div>
        <ContactUs />
        <div className="w-full h-auto mt-8 transform hover:scale-[1.02] transition-transform duration-300">
          <Image 
            alt='promo' 
            src="/maad-promo.jpg" 
            width={900} 
            height={500}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="w-full py-8 px-4">
        <ContactSection />
      </div>
    </main>
  );
}
