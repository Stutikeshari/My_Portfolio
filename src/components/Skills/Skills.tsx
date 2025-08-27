"use client";
import Image from "next/image";

const logos = [
  { name: "HTML", src: "/tech/html.png" },
  { name: "CSS", src: "/tech/css.png" },
  { name: "JavaScript", src: "/tech/js.png" },
  { name: "Bootstrap", src: "/tech/bootstrap.png" },
  { name: "Tailwind", src: "/tech/tailwind.png" },
  { name: "Word", src: "/tech/word.png" },
  { name: "PowerPoint", src: "/tech/powerpoint.png" },
  { name: "AI/ML", src: "/tech/ai.png" },
  { name: "Next.js", src: "/tech/nextjs.png" },
  { name: "React", src: "/tech/react.png" },
];

export default function TechMarquee() {
  return (
    <section className="w-full bg-black py-12">
      {/* Heading */}
      <div className="relative text-center mb-12">
        <h1 className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl font-extrabold text-white/10 tracking-widest flex items-center justify-center">
          Skills
        </h1>
        <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          My Skills
        </h2>
        <p className="mt-5 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          A journey of growth as a motivated IT student and frontend developer, showcasing experiences, skills, and projects that define my path.
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        {/* Edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 bg-gradient-to-l from-black to-transparent z-10" />

        <div className="group">
          {/* Row 1 */}
          <MarqueeRow items={logos} direction="ltr" />
          {/* Row 2 */}
          <MarqueeRow items={logos} direction="rtl" className="mt-4 sm:mt-6" />
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

function MarqueeRow({
  items,
  direction,
  className = "",
}: {
  items: { name: string; src: string }[];
  direction: "ltr" | "rtl";
  className?: string;
}) {
  const doubled = [...items, ...items];

  return (
    <div className={`relative w-full ${className}`}>
      <div
        className={[
          "flex w-[250%] gap-4 sm:gap-6 md:gap-8 will-change-transform",
          direction === "ltr"
            ? "animate-[marquee-ltr_22s_linear_infinite]"
            : "animate-[marquee-rtl_22s_linear_infinite]",
          "group-hover:[animation-play-state:paused]",
        ].join(" ")}
      >
        {doubled.map((logo, i) => (
          <Card key={`${logo.name}-${i}`} name={logo.name} src={logo.src} />
        ))}
      </div>
    </div>
  );
}

function Card({ name, src }: { name: string; src: string }) {
  return (
    <div
      className="
        flex flex-col sm:flex-row items-center min-w-[100px] sm:min-w-[140px] md:min-w-[180px]
        rounded-xl border border-white/10 bg-white/5 px-2 sm:px-4 py-2 sm:py-3
        hover:bg-yellow-300 group-hover:text-black transition
      "
    >
      <div className="flex h-10 w-10 sm:h-15 sm:w-15 md:h-15 md:w-15 items-center justify-center rounded-lg bg-white">
        <Image
          src={src}
          alt={name}
          width={40}
          height={40}
          className="object-contain sm:w-12 sm:h-12 md:w-12 md:h-12"
        />
      </div>
      <span className="mt-2 sm:mt-0 sm:ml-3 text-white/90 text-sm sm:text-base md:text-xl font-medium group-hover:text-black text-center sm:text-left">
        {name}
      </span>
    </div>
  );
}


