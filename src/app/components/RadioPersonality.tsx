import React, { Suspense } from 'react';
import Image from 'next/image';

const RadioPersonality = ({ title, host, time, imageSrc, bio }:
  { title: string, host: string, time: string, imageSrc: string, bio: string }) => {
  let paragraphs = bio.split("\n");
  return (
    <div className="flex items-center mb-4 text-white">

      <div>
        {/* <h2 className="text-2xl font-bold">{title}</h2> */}
        <div className="flex flex-col mt-4 tracking-widest items-center justify-center">
          <p className="text-gray-400 text-2xl font-bold">{`${time} hrs`}</p>
          {/* <p className="text-lg font-medium">{host}</p> */}
        </div>
        <div className="flex flex-col items-center justify-center mt-6">
          <p className="text-justify">
            <Image
              src={imageSrc}
              alt={title}
              width={200}
              height={200}
              className=" rounded-full object-cover float-left mr-4"
            />
            <Suspense fallback={<div>Loading...</div>}>
              {paragraphs?.map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))
              }
            </Suspense>
          </p>
        </div>

      </div>
    </div>
  );
};

export default RadioPersonality;

