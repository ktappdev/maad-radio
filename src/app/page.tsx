import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import MailingList from "./components/MailingList";
import Player from "./components/Player";
import Shows from "./components/Shows";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center  py-12 px-4 gap-4">
      <Player audioUrl="https://streaming.broadcastradio.com:8872/maad975fm" />
      <Banner text="MAAD 97.5 FM" text2="IS WE OWN" />
      <BannerImage />
      <div>
        <p className=" text-xl md:text-4xl text-white font-semibold tracking-wider text-center">
          Welcome to MAAD 97.5 FM, the Maddest online radio station on the
          internet! We are the home of the freshest tunes, the craziest DJs, and
          the most unforgettable memories you will ever make.
        </p>
      </div>
      <Banner text="STAY TUNED" text2="" />
      <MailingList />
      {/* <Shows /> */}
    </main>
  );
}
