"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <section className="bg-black text-white px-6 py-5" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="flex justify-center"  data-aos="fade-right">
          <Image
            src="/images/img2.png" 
            alt="About Me"
            width={400}
            height={500}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* Right: About Content */}
        <div>
  {/* Heading with shadow effect */}
  <div className="relative text-left py-10">
    {/* Background big text */}
    <h1 className="absolute inset-0 text-8xl font-extrabold text-white/10 tracking-widest flex items-left justify-left">
      About
    </h1>

    {/* Foreground heading */}
    <h2 className="relative text-3xl md:text-4xl font-bold text-white">About Me</h2>

    {/* Subtitle */}
    <p className="mt-5 text-lg  text-gray-400 max-w-2xl mx-auto">
      Motivated IT student with experience in web development, cloud computing, 
      and database administration. Worked as Frontend Developer at Mabsol Infotech, 
      building responsive web applications.
    </p>
  </div>

  {/* Details */}
  <ul className="space-y-3 text-lg">
    <li>
      <span className="font-semibold">Name: </span> Stuti Keshari
    </li>
    <li>
      <span className="font-semibold">Date of birth: </span> 25 September
    </li>
    <li>
      <span className="font-semibold">Address: </span> Mirzapur, Uttar Pradesh, India
    </li>
    <li>
      <span className="font-semibold">Zip code: </span> 231001
    </li>
    <li>
      <span className="font-semibold">Email: </span>{" "}
      <Link
        href="mailto:stutikeshari2@gmail.com"
        className="text-yellow-400 hover:underline"
      >
        stutikeshari2@gmail.com
      </Link>
    </li>
    <li>
      <span className="font-semibold">Phone: </span> +91 9336779819
    </li>
  </ul>

  {/* Button */}
  <Link
    href="https://drive.google.com/file/d/1sFfa29bVYWwevsi1LE5HT7oTnGoI8KNu/view?usp=drivesdk"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
  >
    DOWNLOAD CV
  </Link>
</div>

      </div>
    </section>
  );
};

export default AboutPage;
