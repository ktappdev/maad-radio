import React from "react";
import Link from "next/link";
import Image from "next/image";
const ContactSection = () => {
  const socialHandles = [
    {
      name: "Facebook",
      handle: "maad975",
      logo: "/facebook-logo.png",
      slug: "facebook",
    },
    {
      name: "Whatsapp",
      handle: "maad97fm",
      logo: "/whatsapp-logo.png",
      slug: "whatsapp",
    },
    {
      name: "Twitter",
      handle: "maad975fm",
      logo: "/twitter-logo.png",
      slug: "twitter",
    },
    {
      name: "Instagram",
      handle: "maad975fm",
      logo: "/instagram-logo.png",
      slug: "instagram",
    },
    {
      name: "Youtube",
      handle: "maad97fm",
      logo: "/youtube-logo.png",
      slug: "youtube",
    },
    {
      name: "Tik Tok",
      handle: "maad97fm",
      logo: "/tiktok-logo.png",
      slug: "tiktok",
    },
    {
      name: "TuneIn",
      logo: "/tunein.webp",
      url: "https://tunein.com/radio/Maad-975-FM-s350006/",
    },
  ];

  return (
    <div id="contact" className="grid grid-cols-3 gap-8 p-6 bg-[#333336] rounded-lg shadow-lg">
      {socialHandles.map((social) => (
        <Link
          key={social.name}
          href={social.url || `https://www.${social.slug}.com/${social.handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center text-white space-y-2 transform hover:scale-110 transition-all duration-300 hover:text-[#FD7B2B]"
        >
          <Image
            src={social.logo}
            alt={social.name}
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <span className="text-sm font-medium">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default ContactSection;
