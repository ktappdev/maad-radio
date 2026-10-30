import Link from "next/link";

const faqs = [
  {
    question: "What frequency is Maad 97.5 FM?",
    answer:
      "Maad 97.5 FM broadcasts on 97.5 FM from Georgetown, Guyana, and streams live online 24/7.",
  },
  {
    question: "How can I listen to Maad 97.5 FM online?",
    answer:
      "Press Listen Live at the top of this page, tune in on TuneIn, or get our app. It works anywhere in the world, whether you're at home in Guyana or part of the Guyanese diaspora.",
  },
  {
    question: "Where is Maad 97.5 FM located?",
    answer:
      "Our studio is at 166 Waterloo Street, North Cummingsburg, Georgetown, Guyana.",
  },
  {
    question: "Can I watch Maad 97.5 FM live?",
    answer:
      "Yes. When we go live on video, it shows up at the top of this page and on our Facebook page.",
  },
];

const ListenInGuyana = () => (
  <section id="listen" className="w-full">
    <div className="glass-dark rounded-3xl px-8 md:px-12 py-16 border border-white/5">
      <div className="flex flex-col items-center text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] bg-clip-text tracking-tight">
          Listen to Maad 97.5 FM in Guyana and Worldwide
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#FD7B2B] to-[#FF8C42] rounded-full"></div>
        <p className="text-lg text-gray-300 font-light max-w-3xl leading-relaxed">
          Tune your radio to 97.5 FM in Georgetown, or stream Maad 97.5 FM
          online from anywhere. Guyanese music, news, talk shows, gospel, sports
          and culture, every day on Guyana time.
        </p>
        <p className="text-lg text-gray-300 font-light max-w-3xl leading-relaxed">
          <Link
            href="/play"
            className="text-[#FD7B2B] hover:text-[#FF8C42] transition-colors"
          >
            Listen live
          </Link>
          , check the{" "}
          <a
            href="#schedule"
            className="text-[#FD7B2B] hover:text-[#FF8C42] transition-colors"
          >
            program schedule
          </a>{" "}
          or{" "}
          <Link
            href="/promo"
            className="text-[#FD7B2B] hover:text-[#FF8C42] transition-colors"
          >
            download the Maad 97.5 FM app
          </Link>
          .
        </p>
        <dl className="w-full max-w-3xl text-left space-y-5 pt-4">
          {faqs.map(({ question, answer }) => (
            <div key={question}>
              <dt className="text-white font-semibold">{question}</dt>
              <dd className="text-gray-300 font-light leading-relaxed mt-1">
                {answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default ListenInGuyana;
