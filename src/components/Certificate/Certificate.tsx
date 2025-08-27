"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const certificates = [
  {
    id: 1,
    title: "Infosys Springboard",
    issuer: "Infosys",
    img: "/images/springboard.png",
    link: "https://www.linkedin.com/in/stutikeshari",
  },
  {
    id: 2,
    title: "Infosys Pragati",
    issuer: "Infosys",
    img: "/images/pragati.jpeg",
    link: "https://www.linkedin.com/in/stutikeshari",
  },
  {
    id: 3,
    title: "Google Cloud / Azure",
    issuer: "Google Cloud & Microsoft Azure",
    img: "/images/google.png",
    link: "https://www.linkedin.com/in/stutikeshari",
  },
];

export default function CertificatePage() {
  return (
    <section className="min-h-screen bg-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="relative text-center mb-12">
          <h1 className="absolute inset-0 text-7xl font-extrabold text-white/10 tracking-widest flex items-center justify-center">
            Certificates
          </h1>

          <h2 className="relative text-3xl md:text-4xl font-bold text-white">
            My Certificates
          </h2>

          <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of professional certifications demonstrating my continuous learning,
            technical expertise, and commitment to growing in the IT industry.
          </p>
        </div>

        {/* Responsive grid for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <article
              key={cert.id}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              {/* Image container */}
              <div className="flex justify-center items-center bg-black">
                <div className="w-full max-w-[380px] h-[200px] md:h-[220px] relative rounded-md overflow-hidden bg-gray-800/40 flex items-center justify-center">
                  <Image
                    src={cert.img}
                    alt={cert.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Content - hidden on mobile, visible on md+ */}
              <div className="p-5 hidden md:block">
                <h3 className="text-xl font-semibold text-yellow-400">{cert.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{cert.issuer}</p>

                <div className="mt-6 flex gap-3">
                  <Link href={cert.link} target="_blank" className="inline-block">
                    <button
                      className="px-4 py-2 bg-yellow-400 text-black rounded-full font-medium hover:bg-yellow-500 transition"
                      aria-label={`View ${cert.title}`}
                    >
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
