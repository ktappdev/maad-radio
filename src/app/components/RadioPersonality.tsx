import React from 'react';

const RadioPersonality = ({ title, host, time, imageSrc, bio }:
  { title: string, host: string, time: string, imageSrc: string, bio: string }) => {
  return (
    <div className="flex items-center mb-4 text-white">

      <div>
        {/* <h2 className="text-2xl font-bold">{title}</h2> */}
        <p className="text-gray-500">{time}</p>
        <p className="text-lg font-medium">{host}</p>
        <br />
        <p className="text-justify">
          <img
            src={imageSrc}
            alt={title}
            className="w-100 h-100 rounded-full object-cover float-left mr-4"
          />
          {bio}
        </p>
      </div>
    </div>
  );
};

export default RadioPersonality;

