import React from "react";
import Link from "next/link";
const ContactSection = () => {
  const socialHandles = [
    {
      name: "Facebook",
      handle: "myfacebookhandle",
      logo: "/facebook-logo.png",
    },
    {
      name: "Whatsapp",
      handle: "mywhatsapphandle",
      logo: "/whatsapp-logo.png",
    },
    {
      name: "Twitter",
      handle: "mytwitterhandle",
      logo: "/twitter-logo.png",
    },
    {
      name: "Instagram",
      handle: "myinstagramhandle",
      logo: "/instagram-logo.png",
    },
    {
      name: "Youtube",
      handle: "mylinkedinhandle",
      logo: "/youtube-logo.png",
    },
    {
      name: "Tik Tok",
      handle: "mylinkedinhandle",
      logo: "/tiktok-logo.png",
    },
  ];

  return (
    <div className="grid grid-cols-3  w-1/2 md:1/12">
      {socialHandles.map((social) => (
        <Link
          key={social.name}
          href={`https://www.${social.name.toLowerCase()}.com/${social.handle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center  text-white"
        >
          <img src={social.logo} alt={social.name} className="w-12 h-12" />
          {/* {social.name} */}
        </Link>
      ))}
    </div>
  );
};

export default ContactSection;
