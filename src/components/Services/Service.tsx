"use client";
import Image from "next/image";

type ServiceProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <div
      className={`group relative flex flex-col 
        h-auto sm:h-72 lg:h-80 
        p-5 sm:p-6 md:p-8 
        rounded-xl shadow-xl cursor-pointer 
        bg-[#1a1a1a] text-yellow-400 
        transition-all duration-500 hover:text-black 
        overflow-hidden
        max-w-xs sm:max-w-sm lg:max-w-md mx-auto
      `} >
      {/* Gradient background effect */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-500
        translate-x-[-100%] group-hover:translate-x-0 
        transition-transform duration-500 ease-out"
      ></span>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon + Title (fixed at top) */}
        <div className="flex flex-col items-center text-center">
          <div
            className="
              flex items-center justify-center 
              w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 
              rounded-full mb-3 sm:mb-4 
              bg-[#fafaac] text-black 
              group-hover:text-white group-hover:bg-[#f3f3ee] 
              transition-colors duration-500">
            <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10">
              {icon}
            </div>
          </div>

          <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">
            {title}
          </h3>
          {/* underline  */}
        <div className="flex justify-center mb-4">
            <span className="w-12 h-1 bg-yellow-400 group-hover:bg-black rounded-full"></span>
            </div>
        </div>
    
        {/* Description (takes remaining space, centered) */}
        <div className="flex-1 flex items-top justify-center ">
          <p className="text-xs sm:text-base md:text-sm text-center leading-relaxed text-gray-300 group-hover:text-black transition-colors duration-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  const services: ServiceProps[] = [
    {
      title: "Frontend Web Development",
      description:
        "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
      icon: (
        <Image
          src="/icons/web.png"
          alt="Web Design"
          width={40}
          height={40}
          className="object-contain"
        />
      ),
    },
    {
      title: "Photography",
      description:
        "Capturing moments with creativity and precision, I deliver stunning photographs enhanced through professional editing.",
      icon: (
        <Image
          src="/icons/photography.png"
          alt="Photography"
          width={40}
          height={40}
          className="object-contain"
        />
      ),
    },
    {
      title: "Testing and Quality Assurance",
      description:
        "Ensuring every project meets the highest standards through rigorous testing and quality checks across devices and browsers.",
      icon: (
        <Image
          src="/icons/testing.png"
          alt="Testing"
          width={40}
          height={40}
          className="object-contain"
        />
      ),
    },
    {
      title: "Web Optimization",
      description:
        "Performance matters. I optimize websites and apps for speed, ensuring users enjoy a fast and responsive experience while boosting SEO rankings.",
      icon: (
        <Image
          src="/icons/research.png"
          alt="Web Optimization"
          width={40}
          height={40}
          className="object-contain"
        />
      ),
    },
    {
      title: "User-Centric Design",
      description:
        "My development goes hand-in-hand with design. I create interfaces that are functional, aesthetic, and provide seamless user journeys.",
      icon: (
        <Image
          src="/icons/visitor.png"
          alt="User Design"
          width={40}
          height={40}
          className="object-contain"
        />
      ),
    },
    {
      title: "Technology Stack",
      description:
        "Proficient in HTML5, CSS3, JavaScript, React, and Next.js — delivering modern, scalable, and maintainable web solutions.",
      icon: (
        <Image
          src="/icons/feature.png"
          alt="Tech Stack"
          width={40}
          height={40}
          className="object-contain"
        />
      ),
    },
  ];

  return (
    <section className="py-16 bg-black text-white" id="services">
      {/* Section Header */}
      <div className="relative text-center mb-12">
        {/* Background big text */}
        <h1 className="absolute inset-0 text-7xl font-extrabold text-white/10 tracking-widest flex items-center justify-center">
          Services
        </h1>

        {/* Foreground heading */}
        <h2 className="relative text-3xl md:text-4xl font-bold">Services</h2>

        {/* Subtitle */}
        <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto">
          A journey of growth as a motivated IT student and frontend developer,
          showcasing experiences, skills, and projects that define my path.
        </p>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
