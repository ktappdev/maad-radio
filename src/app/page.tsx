import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import MailingList from "./components/MailingList";
import Player from "./components/Player";
import Schedule from "./components/Schedule";
import Shows from "./components/Shows";
import Youtube from "./components/Youtube";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center  py-12 px-4 gap-4">
      <Banner text="MAAD 97.5 FM" text2="IS WE OWN" />
      {/* <BannerImage /> */}
      <div>
        <p className=" text-xl md:text-4xl text-white font-semibold tracking-wider text-center">
          Welcome to MAAD 97.5 FM, the Maddest online radio station on the
          internet! We are the home of the freshest tunes, the craziest DJs, and
          the most unforgettable memories you will ever make.
        </p>
      </div>
      <Schedule />
      <Banner text="STAY TUNED" text2="" />
      <div className="flex w-full flex-col sm:flex-row justify-between gap-4 items-center">
        <Youtube videoId={"SjQh0x5AYCw"} />
        <MailingList />
      </div>
    </main>
  );
}
