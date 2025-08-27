"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#resume", label: "Education" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificate", label: "Certificates" },
    { href: "#contact", label: "Contact Me" },
  ];

  // Add shadow + hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setHidden(true);
      } else {
        // scrolling up → show
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500
        ${scrolled ? "bg-black/95 shadow-md backdrop-blur-md" : "bg-black/80"}
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-yellow-400">
          STUTI
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 lg:gap-10 text-base lg:text-lg font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative transition duration-300 pb-1 
                  ${
                    pathname === link.href
                      ? "text-yellow-400 border-b-2 border-yellow-400"
                      : "hover:text-yellow-400"
                  } 
                  after:content-[''] after:absolute after:left-0 after:bottom-0 
                  after:w-0 after:h-[2px] after:bg-yellow-400 
                  hover:after:w-full after:transition-all after:duration-300
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden bg-black/95 flex flex-col items-center gap-4 py-6 text-base sm:text-lg font-medium">
          {links.map((link) => (
            <li key={link.href} className="w-full text-center">
             <a
  href={link.href}
  className="
    relative pb-1 transition duration-300
    hover:text-yellow-400
    after:content-[''] after:absolute after:left-0 after:bottom-0
    after:w-0 after:h-[2px] after:bg-yellow-400
    after:transition-all after:duration-300
    hover:after:w-full
  "
>
  {link.label}
</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
