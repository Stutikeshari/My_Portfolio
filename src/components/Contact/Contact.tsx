"use client";
import Image from "next/image";

export default function ContactPage() {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center px-6 py-12" id="contact">
      {/* Container */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center bg-[#111] rounded-2xl shadow-lg overflow-hidden">
        
        {/* Left Image */}
<div className="hidden md:flex items-center justify-center p-6" data-aos="fade-right">
  <Image
    src="/images/img1.png" // image of contact
    alt="Contact"
    width={400}
    height={400}
    className="rounded-xl object-cover"
  />
</div>

        {/* Right Form */}
        <div className="bg-white text-gray-800 p-8 rounded-2xl" data-aos="fade-left">
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
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=stutikeshari2@gmail.com&su=Contact%20Form&body=Hello%20Stuti%2C%20I%20would%20like%20to%20connect!"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition block text-center"
>
  Send Message
</a>
          </form>
        </div>
      </div>
    </section>
  );
}
