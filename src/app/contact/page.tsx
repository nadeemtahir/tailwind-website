import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <section className="contact py-16 bg-gray-900 text-white">
      <div className="max-w-screen-lg mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-8 text-center">Contact Us</h1>
        
        <form className="contact-form bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="contact-input-group space-y-4 mb-6">
            <input
              type="text"
              placeholder="Name"
              className="contact-input text-black w-full p-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="contact-input text-black w-full p-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="contact-input text-black w-full p-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            required
          />

          <textarea
            rows={6}
            placeholder="Message"
            className="contact-textarea text-black w-full p-4 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
            required
          ></textarea>

          <div className="contact-button-container text-center">
            <button
              type="submit"
              className="contact-button bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
