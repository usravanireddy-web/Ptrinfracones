import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from "@/assets/logoimg.png";

const Footer = () => {
  return (
    <footer className="bg-[#0F1A2C] text-gray-300 pt-14 pb-6 w-full overflow-x-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* ===== Company Info ===== */}
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <img
              src={logo}
              alt="PTRinfraCons Logo"
              className="w-20 h-auto hover:scale-105 transition-transform"
            />
            <span
              className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent tracking-tight"
              style={{ letterSpacing: "0.4px" }}
            >
              PTR infraCons
            </span>
          </Link>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Building Landmarks of Trust. Luxury Meets Lifestyle.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61582370545912"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1C273C] p-3 rounded-full hover:bg-yellow-500 transition-colors"
            >
              <Facebook size={18} className="text-yellow-400" />
            </a>
            <a
              href="https://www.youtube.com/@PTRInfracons"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1C273C] p-3 rounded-full hover:bg-yellow-500 transition-colors"
            >
              <Youtube size={18} className="text-yellow-400" />
            </a>
            <a
              href="https://www.instagram.com/ptrinfracons/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1C273C] p-3 rounded-full hover:bg-yellow-500 transition-colors"
            >
              <Instagram size={18} className="text-yellow-400" />
            </a>
            <a
              href="https://wa.me/919398038426"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1C273C] p-3 rounded-full hover:bg-yellow-500 transition-colors"
            >
              <FaWhatsapp size={18} className="text-yellow-400" />
            </a>
          </div>
        </div>

        {/* ===== Quick Links ===== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-yellow-400 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works"
                className="hover:text-yellow-400 transition-colors"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                to="/CommercialPage"
                className="hover:text-yellow-400 transition-colors"
              >
                CommercialPage
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* ===== Contact Us ===== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.google.com/maps?q=JaiHind+Enclave,+Madhapur,+Hyderabad,+500081"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-yellow-400 transition-colors"
              >
                <MapPin size={22} className="text-yellow-400 mt-1" />
                <span className="text-sm">
                  JaiHind Enclave, Madhapur,
                  <br /> Hyderabad - 500081
                </span>
              </a>
            </li>
            <li>
              <a
                href="tel:+919398038426"
                className="flex items-center space-x-3 hover:text-yellow-400 transition-colors"
              >
                <Phone size={22} className="text-yellow-400" />
                <span>+91 93980 38426</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:ptrinfracons@gmail.com"
                className="flex items-center space-x-3 hover:text-yellow-400 transition-colors"
              >
                <Mail size={22} className="text-yellow-400" />
                <span>ptrinfracons@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* ===== Newsletter (merged like your screenshot) ===== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-3">
            Subscribe to get updates on new projects
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-sm"
          >
            {/* Outer pill wrapper controls radius + border */}
            <div className="flex w-full rounded-2xl overflow-hidden border border-[#334155] bg-[#111827]">
              {/* Left: input area */}
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-transparent text-sm text-gray-200 placeholder:text-gray-400 focus:outline-none border-none"
              />
              {/* Right: yellow block button */}
              <button
                type="submit"
                className="px-6 py-3 bg-[#FACC15] text-black text-sm font-semibold border-none"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ===== Bottom Line ===== */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
        © 2024 PTRinfraCons. All rights reserved. |
        <Link to="/privacy" className="hover:text-yellow-400 mx-1">
          Privacy Policy
        </Link>
        |
        <Link to="/terms" className="hover:text-yellow-400 mx-1">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
