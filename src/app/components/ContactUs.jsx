"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_PUBLIC_KEY)

    emailjs.sendForm(process.env.NEXT_PUBLIC_TEST_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="w-full mx-auto text-start p-4 border-2 border-sky-50 bg-[#333336] shadow-md rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
          type="text"
          name="from_name"
          id="name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
          type="email"
          name="user_email"
          id="email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="number">
          Contact Number
        </label>
        <input
          className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
          type="number"
          name="user_number"
          id="number"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full px-3 py-2 text-gray-700 border rounded focus:outline-none focus:border-blue-500"
          name="message"
          id="message"
          rows="4"
          required
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-4 w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Send
        </button>
      </div>
    </form>
  );
};

