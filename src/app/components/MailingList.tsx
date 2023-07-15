import React from "react";

const MailingList = () => {
  return (
    <form className="flex flex-col w-full  gap-4">
      <input
        className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="First Name"
      />
      <input
        className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Last Name"
      />
      <input
        className="bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="email"
        placeholder="Email"
      />
      <button
        className="bg-[#FD7B2B] hover:bg-[#ef6f1f] text-white font-bold py-2 px-4 rounded-md"
        type="submit"
      >
        Subscribe
      </button>
    </form>
  );
};

export default MailingList;
