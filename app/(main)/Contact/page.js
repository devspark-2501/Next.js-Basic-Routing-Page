'use client'

import { useState } from "react";

export default function Contact() {
  const [crash, setCrash] = useState(false);

  if (crash) {
    // will get error from custom error.js!!
    throw new Error('');
  }

  return (
    <section className="bg-gray-950 text-white min-h-[85vh] flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Let's <span className="text-blue-500">Work Together</span>
          </h1>

          <p className="text-gray-400 text-lg">
            Have a project idea, collaboration, or just want to say hello?
            Fill out the form and I’ll get back to you soon.
          </p>

          <div className="space-y-4 pt-6">

            <div className="flex items-center gap-4">
              <div className="bg-gray-900 p-3 rounded-lg">
                📧
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-medium">devspark@email.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-gray-900 p-3 rounded-lg">
                🌍
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="font-medium">India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-gray-900 p-3 rounded-lg">
                💻
              </div>
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <p className="font-medium">github.com/devspark</p>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-10 shadow-xl">
          <form className="space-y-6">

            <div>
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                required
                type="text"
                placeholder="Your name"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                required
                type="email"
                placeholder="Your email"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition resize-none hover:opacity-40"
              />
            </div>

            <button
              onClick={() => { setCrash(true) }}
              type="button"
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}