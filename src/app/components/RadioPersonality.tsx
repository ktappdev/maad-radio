import React, { Suspense } from 'react';
import Image from 'next/image';

const RadioPersonality = ({ title, host, time, imageSrc, image2Src, bio, days }:
  { title: string, host: string, time: string, imageSrc: string, image2Src?: string, bio: string, days: string[] }) => {
  let paragraphs = bio.split("\n");
  return (
    <div className="flex justify-center items-center mb-2 text-white">
      <div>
        <div className="text-gray-500 sm:text-base font-bold text-center">
          <div className="text-sm sm:text-base">{title}</div>
          <div className="text-sm sm:text-base">{time} hrs</div>
        </div>
        <div className="flex flex-row mt-2 tracking-widest items-center justify-center">
          {days.map((day: string, index: number) => (
            <div
              key={index}
              className="flex flex-row justify-center text-gray-500 px-1 text-center w-full text-[8px] sm:text-base"
            >
              {day.slice(0, 3).toUpperCase()}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center mt-6">
          <div className="text-justify">
            <Image
              src={imageSrc}
              alt={title}
              width={200}
              height={200}
              className="object-cover float-left mr-2"
            />
            <Suspense fallback={<div>Loading...</div>}>
              <div className="space-y-4">
                {paragraphs?.map((paragraph, index) => {
                  if (index === Math.floor(paragraphs.length / 2)) {
                    return (
                      <div key={index}>
                        <Image
                          src={image2Src || imageSrc}
                          alt={title}
                          width={300}
                          height={300}
                          className="object-cover float-right ml-2 mb-2"
                        />
                        <div className="mb-4">{paragraph}</div>
                      </div>
                    );
                  }
                  return <div key={index} className="mb-4">{paragraph}</div>;
                })}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioPersonality;
