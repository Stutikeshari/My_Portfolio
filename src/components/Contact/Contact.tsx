"use client";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-12">
      {/* Container */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center bg-[#111] rounded-2xl shadow-lg overflow-hidden">
        
        {/* Left Image */}
<div className="hidden md:flex items-center justify-center p-6">
  <Image
    src="/images/img1.png" // image of contact
    alt="Contact"
    width={400}
    height={400}
    className="rounded-xl object-cover"
  />
</div>

        {/* Right Form */}
        <div className="bg-white text-gray-800 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
