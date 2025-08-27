"use client";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-black  text-white " id="home">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-yellow-400 text-lg md:text-xl font-semibold mb-3 tracking-wide">
            HELLO!
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            I&apos;m{" "}
            <span className="text-yellow-400 block" data-aos="fade-right">STUTI KESHARI</span>
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-300">
            A Frontend Web Designer
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="mailto:stutikeshari2@gmail.com"
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
        <div className="flex-1 flex justify-center" data-aos="fade-left">
          <Image
            src="/images/img1.png"
            alt="Stuti Image"
            width={400}
            height={400}
            priority
            className="rounded-lg object-contain w-64 h-64 sm:w-80 sm:h-80 md:w-[480px] md:h-[420px] 
               lg:w-[550px] lg:h-[500px] 
               xl:w-[600px] xl:h-[550px]"
          />
        </div>
      </section>
    </div>
  );
}
