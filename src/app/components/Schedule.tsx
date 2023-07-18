import React from "react";
import Image from "next/image";
const Schedule = () => {
  // Dummy data for programs (replace with your actual program data)
  const programs = [
    {
      title: "Morning Showcase",
      time: "7:00 AM - 10:00 AM",
      host: "Veronica Ramsaroop",
      image: "https://i.pravatar.cc/200?img=22",
    },
    {
      title: "Supreme Show",
      time: "10:00 AM - 01:00 PM",
      host: "Fashion Diva Faith and DJ Leroy",
      image: "https://i.pravatar.cc/200?img=32",
    },
    {
      title: "Rush Hour Drive",
      time: "03:00 PM - 06:00 PM",
      host: "N.E.B 592",
      image: "https://i.pravatar.cc/200?img=2",
    },
    {
      title: "The Meltdown",
      time: "6:00 PM - 7:00 PM",
      host: "Annmarie",
      image: "https://i.pravatar.cc/200?img=6",
    },
    {
      title: "Evening Vibe",
      time: "7:00 PM - 8:00 PM",
      host: "Annmarie",
      image: "https://i.pravatar.cc/200?img=14",
    },
    {
      title: "The Late Late Show",
      time: "9:00 PM - 12:00 PM",
      host: "Annmarie",
      image: "https://i.pravatar.cc/200?img=19",
    },
  ];

  const getBgColor = (index: any) => {
    const colors = [
      "bg-blue-200",
      "bg-yellow-200",
      "bg-green-200",
      "bg-pink-200",
      "bg-purple-200",
      "bg-indigo-200",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {programs.map((program: any, index: any) => (
        <div
          key={index}
          className={`shadow-md p-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ${getBgColor(
            index
          )}`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="font-bold">{program.title}</div>
            <div className="text-gray-500">{program.time}</div>
          </div>
          <Image
            src={program.image}
            alt={program.title}
            width={200}
            height={200}
            className="w-full h-32 object-cover mb-2 rounded-md"
          />
          <div className="text-sm text-gray-600">Hosted by: {program.host}</div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
