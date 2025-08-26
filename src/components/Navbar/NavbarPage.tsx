"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/services", label: "Services" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "My Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">STUTI</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                    : "hover:text-yellow-400"
                } transition`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden bg-black flex flex-col items-center gap-6 py-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`${
                  pathname === link.href
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                } transition text-lg`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
