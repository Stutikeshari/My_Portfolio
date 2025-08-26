"use client";
import Image from "next/image";
import Link from "next/link";


export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white">
    

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-yellow-400 font-semibold mb-4 tracking-wide">
            HELLO!
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            I&apos;m{" "}
            <span className="text-yellow-400 block">STUTI KESHARI</span>
          </h1>
          <p className="mt-4 text-xl text-gray-300">
            A Frontend Web Designer
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Link
              href="#contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Hire Me
            </Link>
            <Link
              href="#projects"
              className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              My Works
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/image1.png" // 👉 replace with your image in public folder
            alt="stuti"
            width={400}
            height={400}
            className="rounded-lg object-contain"
            priority
          />
        </div>
      </section>
    </div>
  );
}
