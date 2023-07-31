
import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import ContactSection from "./components/Socials";
import Schedule from "./components/Schedule";
import Youtube from "./components/Youtube";
import GetLiveVideo from "./components/GetLiveVideo";
import { ContactUs } from "./components/ContactUs";
import { isMobile } from 'react-device-detect';
export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center  py-8 px-4 gap-4">
      {!isMobile && <GetLiveVideo />}
      <Banner text="MAAD 97.5 FM" text2="IS WE OWN" />
      <BannerImage />

      <Schedule />
      <Banner text="STAY TUNED" text2="" />
      <div className="flex h-96 w-full flex-col  justify-between gap-4 items-center px-12">
        <Youtube videoId={"SjQh0x5AYCw"} />
        <ContactSection />
      </div>
      <div className="flex w-full bg-[#333333] flex-col px-8 text-center text-lg font-bold">
        <div className="flex flex-col text-2xl w-full justify-center items-center text-white">

          Contact Us
          <p className="text-base font-light ">
            <a href="tel:+592-226-9753">+592-225-5555</a>
          </p>
          <p className="text-base font-light">
            Send us a detailed message and we will get back to you as soon as possible.
          </p>
        </div>
        <ContactUs />
      </div>
    </main>
  );
}
