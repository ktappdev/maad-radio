import Banner from "./components/Banner";
import BannerImage from "./components/BannerImage";
import MailingList from "./components/Socials";
import Player from "./components/Player";
import Schedule from "./components/Schedule";
import Shows from "./components/Shows";
import Youtube from "./components/Youtube";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center  py-8 px-4 gap-4">
      <Banner text="MAAD 97.5 FM" text2="IS WE OWN" />
      <BannerImage />
      
      <Schedule />
      <Banner text="STAY TUNED" text2="" />
      <div className="flex w-full flex-col sm:flex-row justify-between gap-4 items-center">
        <Youtube videoId={"SjQh0x5AYCw"} />
        <MailingList />
      </div>
    </main>
  );
}
