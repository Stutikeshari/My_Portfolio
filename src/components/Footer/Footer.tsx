"use client";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* About - always visible */}
        <div>
          <h2 className="text-white font-bold mb-4">About</h2>
          <p className="text-sm leading-6">
            Passionate Frontend Developer dedicated to crafting modern, responsive, and user-friendly web experiences with clean code and creative design.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-yellow-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-yellow-400"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-yellow-400"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Links - hide on mobile */}
        <div className="hidden md:block">
          <h2 className="text-white font-bold mb-4">Links</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">→ Home</Link></li>
            <li><Link href="/about">→ About</Link></li>
            <li><Link href="/services">→ Services</Link></li>
            <li><Link href="/projects">→ Projects</Link></li>
            <li><Link href="/contact">→ Contact</Link></li>
          </ul>
        </div>

        {/* Services - hide on mobile */}
        <div className="hidden md:block">
          <h2 className="text-white font-bold mb-4">Services</h2>
          <ul className="space-y-2 text-sm">
            <li>→ Web Design</li>
            <li>→ Web Development</li>
            <li>→ Business Strategy</li>
            <li>→ Data Analysis</li>
            <li>→ Graphic Design</li>
          </ul>
        </div>

        {/* Contact Info - hide on mobile */}
        <div className="hidden md:block">
          <h2 className="text-white font-bold mb-4">Have a Questions?</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-yellow-400" />
              <span>Mirzapur, UttarPradesh India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-yellow-400" />
              <span>+91 9336779819</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-yellow-400" />
              <span>stutikeshari2@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright - always visible */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-800 pt-6">
        © 2025 All rights reserved | This template is made with ❤ by Stuti Keshari
      </div>
      {/* Back to Top Button */}
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 bg-yellow-400 text-black text-bold p-1  shadow-lg hover:bg-yellow-500 transition"
  >
    ↑
  </button>
    </footer>
  );
}
