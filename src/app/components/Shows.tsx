import Image from "next/image";

const Shows = () => {
  const imageUrls = [
    "https://source.unsplash.com/random/1",
    "https://source.unsplash.com/random/2",
    "https://source.unsplash.com/random/3",
    "https://source.unsplash.com/random/4",
  ];

  return (
    <div className="flex flex-wrap w-full">
      {imageUrls.map((url, index) => (
        <div key={index} className="w-1/2 md:w-1/4 p-2">
          <div className="aspect-w-1 aspect-h-1 ">
            <Image
              src={url}
              alt={`Random Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shows;
