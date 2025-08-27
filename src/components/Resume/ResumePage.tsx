import React from 'react'
import Link from 'next/link'

const resumeData = [
  {
    year: "2022-2025",
    title: "Bachlor of Technology in Information Technology",
    place: "Veer Bahadur Singh Purvanchal University, Jaunpur",
    desc: "Developed strong foundations in programming, web technologies, databases, and software development, with hands-on experience in IT systems and modern tools.",
  },
  {
    year: "2019-2022",
    title: "Diploma in Information Technology",
    place: "Government Polytechnic, Mirzapur",
    desc: "Built core knowledge in computer fundamentals, programming, networking, and database management, with practical exposure to IT applications and tools.",
  },
  {
    year: "2018-2019",
    title: "Intermediate (12th) in Science",
    place: "Gurunanak Girls Inter College, Mirzapur",
    desc: "Completed higher secondary education with a strong foundation in Physics, Chemistry, and Mathematics, developing analytical and problem-solving skills.",
  },
  {
    year: "2016-2017",
    title: "High School (10th)",
    place: "Gurunanak Girls Inter College, Mirzapur",
    desc: "Successfully completed high school with focus on core subjects, building a solid academic foundation and disciplined learning approach.",
  },
  {
    year: "2024",
    title: "Internship - Frontend Developer",
    place: "Seek For Solution, Lucknow, Uttar Pradesh",
    desc: "Completed internship focusing on frontend development, gaining hands-on experience in building responsive web interfaces and implementing modern web technologies.",
  },
  {
    year: "2021",
    title: "Summer Training - Web Development with PHP",
    place: "SoftPro India, Lucknow, Uttar Pradesh",
    desc: "Completed training focused on PHP-based web development, gaining practical experience in building dynamic websites and web applications.",
  },
];

const ResumePage = () => {
  return (
   <section className="relative bg-black text-white min-h-screen px-8 py-16">
  {/* Heading */}
  <div className="relative text-center mb-12">
    {/* Background big text */}
    <h1 className="absolute inset-0 text-7xl font-extrabold text-white/10 tracking-widest flex items-center justify-center">
      Education
    </h1>

    {/* Foreground normal heading */}
    <h2 className="relative text-3xl md:text-4xl font-bold">Education</h2>

    {/* Subtitle */}
    <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto">
      A journey of growth as a motivated IT student and frontend developer, showcasing experiences, skills, and projects that define my path.
    </p>
  </div>

  { /* Rest of Resume content goes here */}
   {/* Grid */}
<div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 md:px-10 py-10">
  {resumeData.map((item, index) => (
    <div
      key={index}
      className="bg-[#1a1a1a] rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-yellow-400/50 transition"
    >
      <p className="text-yellow-400 text-base sm:text-lg font-semibold mb-1 sm:mb-2">
        {item.year}
      </p>
      <h3 className="text-lg sm:text-xl font-bold mb-1">{item.title}</h3>
      <p className="uppercase text-gray-400 text-sm sm:text-md mb-2 sm:mb-3">
        {item.place}
      </p>
      <p className="text-gray-300 text-sm sm:text-md leading-relaxed">
        {item.desc}
      </p>
    </div>
  ))}
</div>


        {/* Button */}
<div className="grid place-items-center mt-6">
  <Link
    href="https://drive.google.com/file/d/1sFfa29bVYWwevsi1LE5HT7oTnGoI8KNu/view?usp=drivesdk"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
  >
    DOWNLOAD CV
  </Link>
</div>
</section>


  )
}

export default ResumePage;