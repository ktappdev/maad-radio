const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-4xl font-bold"> {params.id}</h1>

    </div>
  )
};

export default page;
