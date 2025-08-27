"use client";
import Link from "next/link";
import Image from "next/image";

export default function SocialSection() {
  const socials = [
    {
      id: 1,
      name: "Instagram",
      icon: (
        <Image
          src="/icons/instagram.png"
          alt="Instagram"
          width={40}
          height={40}
          className="object-contain"
        />
      ),
      link: "https://www.instagram.com/yourusername",
      borderColor: "border-pink-500",
      hoverBg: "hover:bg-pink-500/20",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: (
        <Image
          src="/icons/linkedin.png"
          alt="LinkedIn"
          width={40}
          height={40}
          className="object-contain"
        />
      ),
      link: "https://www.linkedin.com/in/yourusername",
      borderColor: "border-blue-500",
      hoverBg: "hover:bg-blue-500/20",
    },
    {
      id: 3,
      name: "Email",
      icon: (
        <Image
          src="/icons/gmail.png"
          alt="Email"
          width={40}
          height={40}
          className="object-contain"
        />
      ),
      link: "mailto:yourmail@example.com",
      borderColor: "border-red-500",
      hoverBg: "hover:bg-red-500/20",
    },
    {
      id: 4,
      name: "WhatsApp",
      icon: (
        <Image
          src="/icons/whatsapp.png"
          alt="WhatsApp"
          width={40}
          height={40}
          className="object-contain"
        />
      ),
      link: "https://wa.me/91XXXXXXXXXX",
      borderColor: "border-green-500",
      hoverBg: "hover:bg-green-500/20",
    },
  ];

  return (
    <section className="bg-black">
      {/* Social Icons Row */}
     <div className="relative z-20 -mb-20">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
    {socials.map((item) => (
      <Link
        key={item.id}
        href={item.link}
        target="_blank"
        className={`group bg-[#111] ${item.borderColor} border-2 rounded-xl p-6 flex flex-col items-center justify-center shadow-md transition transform hover:-translate-y-1 hover:shadow-xl ${item.hoverBg}`}
      >
        <div className="group-hover:scale-110 transition">{item.icon}</div>
        <h3 className="mt-4 text-white font-semibold text-lg">
          {item.name}
        </h3>
      </Link>
    ))}
  </div>
</div>


      {/* Background Section with Hire Me */}
      <div className="relative h-[350px] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="/images/mountain.jpg"
          alt="Hire Me Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-30">
            I’m <span className="text-yellow-400">Available</span> for hiring
          </h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Let’s collaborate and build something amazing together.
          </p>
          <button className="mt-6 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}
