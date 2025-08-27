"use client";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Finance Consulting Website",
    tech: "Next Js, Tailwind CSS, JavaScript",
    desc: "A modern and responsive consulting website designed with clean UI/UX, showcasing services and projects.",
    img: "/images/project1.png",
    link: "https://finance-consulting-website.vercel.app/",
  },
  {
    id: 2,
    title: "HA Invoice Project",
    tech: "Next Js, Tailwind CSS, JavaScript",
    desc: "Simplifies billing and inventory management with GST invoices, product, and customer tracking.",
    img: "/images/invoice.jpeg",
    link: "https://www.invoice.hammim.in/en",
  },
  {
    id: 3,
    title: "Lunar Detection System",
    tech: "AI/ML, Python, YOLOv4, Google Colab",
    desc: "Detects and analyzes lunar surface features using AI and computer vision for research.",
    img: "/images/lunar.jpeg",
    link: "https://colab.research.google.com/drive/1yf54wo9hsGl9-QGb_DnLNCzVoYSbFeMh"
  },
  {
    id: 4,
    title: "Trekker- Booking Platform",
    tech: "React, Tailwind CSS, JavaScript",
    desc: "Trekker is an online platform that makes trekking trip planning easy and hassle-free. Users can explore destinations, compare packages, and securely book their trekking adventures in just a few clicks.",
    img: "/images/trek.webp",
    link: "https://trekker-booking-platform.vercel.app/",
  },
  {
    id: 5,
    title: "Smart Street Light System",
    tech: "IOT Based, Arduino (C++), Sensors, Hardware Components.",
    desc: "Built an automated street lighting system using Arduino and sensors to optimize energy usage based on environmental data.",
    img: "/images/street.jpg",
    link: "https://e-commerce-development-inky.vercel.app/",
  },
  {
    id: 6,
    title: "Digital-Clock",
    tech: "Html, CSS, JavaScript",
    desc: "A simple and responsive digital clock built using HTML, CSS, and JavaScript, displaying real-time hours, minutes, and seconds with a clean UI",
    img: "/images/clock.PNG",
    link: "https://mobile-app-development-inky.vercel.app/",
  },
];

export default function ProjectCards() {
  return (
    <section className="w-full bg-black py-16" id="projects">
      <div className="max-w-7xl mx-auto px-4" data-aos="fade-up">
    {/* Heading */}   
  <div className="relative text-center mb-12">
    {/* Background big text */}
    <h1 className="absolute inset-0 text-7xl font-extrabold text-white/10 tracking-widest flex items-center justify-center">
      Projects
    </h1>

    {/* Foreground normal heading */}
    <h2 className="relative text-3xl md:text-4xl font-bold text-white ">My Projects</h2>

    {/* Subtitle */}
    <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto">
     A showcase of innovative projects reflecting my skills in frontend development, problem-solving, and creative implementation.
    </p>
  </div>

       {/* Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-0" data-aos="fade-up">
  {projects.map((project) => (
    <div
      key={project.id}
      className="flex flex-col bg-[#1a1a1a] rounded-lg shadow-md"
    >
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">
          {project.title}
        </h3>
        <p className="text-yellow-200 flex-grow">{project.tech}</p>
        <p className="text-gray-300 flex-grow">{project.desc}</p>

        {/* Unique Button with Link */}
        <Link href={project.link} target="_blank">
          <button className="mt-4 w-fit px-6 py-2 bg-yellow-300 text-black rounded-full font-semibold hover:bg-yellow-500 transition">
            View project →
          </button>
        </Link>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
