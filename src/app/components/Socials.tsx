import React from "react";
import Link from "next/link";
import Image from "next/image";
const ContactSection = () => {
  const socialHandles = [
    {
      name: "Facebook",
      handle: "myfacebookhandle",
      logo: "/facebook-logo.png",
      slug: "facebook",
    },
    {
      name: "Whatsapp",
      handle: "mywhatsapphandle",
      logo: "/whatsapp-logo.png",
      slug: "whatsapp",
    },
    {
      name: "Twitter",
      handle: "mytwitterhandle",
      logo: "/twitter-logo.png",
      slug: "twitter",
    },
    {
      name: "Instagram",
      handle: "myinstagramhandle",
      logo: "/instagram-logo.png",
      slug: "instagram",
    },
    {
      name: "Youtube",
      handle: "mylinkedinhandle",
      logo: "/youtube-logo.png",
      slug: "youtube",
    },
    {
      name: "Tik Tok",
      handle: "mylinkedinhandle",
      logo: "/tiktok-logo.png",
      slug: "tiktok",
    },
  ];

  return (
    <div id="contact" className="grid grid-cols-3 ">
      {socialHandles.map((social) => (
        <Link
          key={social.name}
          href={`https://www.${social.slug}.com/${social.handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center  text-white"
        >
          <Image
            src={social.logo}
            alt={social.name}
            width={48}
            height={48}
            className="w-12 h-12"
          />
          {/* {social.name} */}
        </Link>
      ))}
    </div>
  );
};

export default ContactSection;
