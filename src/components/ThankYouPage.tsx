import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ThankYouPage: React.FC = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-8 animate-fade-in"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-slate-950/80" />

      {/* Geometric shapes */}
      <div className="absolute w-[320px] sm:w-[420px] aspect-square">
        <div className="absolute inset-0 rounded-[32px] border-2 border-yellow-300 rotate-12" />
        <div className="absolute inset-0 rounded-[32px] border-2 border-sky-400 -rotate-12" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-xl text-center text-slate-50 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-[0.25em] mb-1">
          THANK YOU
        </h1>

        <p className="text-sm sm:text-base text-slate-200 max-w-md mx-auto">
          Your enquiry has been received by{" "}
          <span className="font-semibold text-yellow-300">PTR Infracons</span>.
          Our team will connect with you shortly to discuss your requirements
          and next steps.
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-3 pt-2">
          <a
            href="https://wa.me/919398038426"
            aria-label="PTR Infracons on WhatsApp"
            className="w-9 h-9 rounded-full border border-slate-100/70 bg-slate-900/60 flex items-center justify-center transition transform hover:bg-yellow-300 hover:text-slate-900 hover:-translate-y-0.5"
          >
            <FaWhatsapp className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/ptrinfracons/"
            aria-label="PTR Infracons on Instagram"
            className="w-9 h-9 rounded-full border border-slate-100/70 bg-slate-900/60 flex items-center justify-center transition transform hover:bg-yellow-300 hover:text-slate-900 hover:-translate-y-0.5"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61582370545912"
            aria-label="PTR Infracons on Facebook"
            className="w-9 h-9 rounded-full border border-slate-100/70 bg-slate-900/60 flex items-center justify-center transition transform hover:bg-yellow-300 hover:text-slate-900 hover:-translate-y-0.5"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://www.youtube.com/@PTRInfracons"
            aria-label="PTR Infracons on YouTube"
            className="w-9 h-9 rounded-full border border-slate-100/70 bg-slate-900/60 flex items-center justify-center transition transform hover:bg-yellow-300 hover:text-slate-900 hover:-translate-y-0.5"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            to="/"
            className="px-5 py-2 rounded-full border border-slate-100 text-slate-50 text-xs sm:text-sm font-semibold hover:bg-slate-900/70 transition"
          >
            Back to Home
          </Link>
          <Link
            to="/projects"
            className="px-5 py-2 rounded-full bg-gradient-to-tr from-sky-500 to-blue-700 text-white text-xs sm:text-sm font-semibold border border-sky-200/70 hover:opacity-90 transition"
          >
            View Our Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
