import React from 'react';

const RadioPersonality = ({ name, show, time, imageSrc }: { name: string, show: string, time: string, imageSrc: string }) => {
  return (
    <div className="flex items-center mb-4">
      <img
        src={imageSrc}
        alt={name}
        className="w-32 h-32 rounded-full object-cover float-left mr-4"
      />
      <div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-lg font-medium">{show}</p>
        <p className="text-gray-500">{time}</p>
        <p className="text-justify">
          {/* Add your fun and short bio text here */}
        </p>
      </div>
    </div>
  );
};

export default RadioPersonality;

