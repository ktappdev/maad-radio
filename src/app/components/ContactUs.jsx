"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_SERVICE_ID)

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
  };

  return (
    <form id="contact" ref={form} onSubmit={sendEmail} className="w-full mx-auto text-start p-6 border-2 border-[#FD7B2B]/20 bg-[#333336] shadow-xl rounded-lg transition-all duration-300 hover:shadow-[#FD7B2B]/10">
      <div className="mb-6">
        <label className="block text-gray-200 text-sm font-bold mb-3" htmlFor="name">
          Name
        </label>
        <input
          className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7B2B] focus:border-transparent transition-all duration-300"
          type="text"
          name="from_name"
          id="name"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-200 text-sm font-bold mb-3" htmlFor="email">
          Email
        </label>
        <input
          className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7B2B] focus:border-transparent transition-all duration-300"
          type="email"
          name="user_email"
          id="email"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-200 text-sm font-bold mb-3" htmlFor="number">
          Contact Number
        </label>
        <input
          className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7B2B] focus:border-transparent transition-all duration-300"
          type="number"
          name="user_number"
          id="number"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-200 text-sm font-bold mb-3" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FD7B2B] focus:border-transparent transition-all duration-300 min-h-[120px]"
          name="message"
          id="message"
          rows="4"
          required
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="px-6 w-full py-3 bg-[#FD7B2B] text-white font-semibold rounded-lg hover:bg-[#FD7B2B]/90 focus:outline-none focus:ring-2 focus:ring-[#FD7B2B] focus:ring-offset-2 focus:ring-offset-[#333336] transform hover:scale-[1.02] transition-all duration-300"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

