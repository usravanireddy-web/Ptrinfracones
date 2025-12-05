import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  MapPin,
  Building,
  Users,
  Star,
  CheckCircle,
  Home,
  Sparkles,
  Layers,
  ClipboardList,
  Trophy,
  HeartHandshake,
  Target,
  Clock,
  Shield,
  HelpCircle,
} from "lucide-react";

import proddaturHero from "@/assets/poddhero.png";
import modernHome from "@/assets/modernhome.png";
import classicHome from "@/assets/Home1.jpg";
import commercial from "@/assets/commercial.png";
import customer1 from "@/assets/customer1.png";
import customer2 from "@/assets/customer2.png";
import customer3 from "@/assets/customer3.png";

const ProddaturConstruction: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => window.scrollTo(0, 0), []);

  const highlights = [
    {
      icon: Trophy,
      title: "Award-Winning Projects",
      desc: "Recognized across Andhra Pradesh for quality craftsmanship and architectural innovation.",
    },
    {
      icon: Users,
      title: "5000+ Happy Clients",
      desc: "From cozy homes to modern offices, we’ve earned the trust of countless families and businesses.",
    },
    {
      icon: Layers,
      title: "End-to-End Expertise",
      desc: "We manage your construction journey — from design and planning to execution and handover.",
    },
  ];

  const works = [
    {
      title: "Contemporary Villas",
      desc: "Sleek, spacious, and smart — designed to match modern lifestyle needs.",
      img: modernHome,
    },
    {
      title: "Classic Homes",
      desc: "Traditional beauty meets modern architecture to create timeless homes.",
      img: classicHome,
    },
    {
      title: "Commercial Spaces",
      desc: "Innovative, functional, and impactful — ideal for growing businesses.",
      img: commercial,
    },
  ];

  const values = [
    {
      icon: HeartHandshake,
      title: "Integrity",
      desc: "We value honesty and transparency — keeping clients informed at every step.",
    },
    {
      icon: Target,
      title: "Commitment",
      desc: "Our team is dedicated to delivering excellence with every project we undertake.",
    },
    {
      icon: Clock,
      title: "Timeliness",
      desc: "We understand deadlines and ensure your dream project is completed right on time.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      desc: "We maintain the highest quality standards with reliable materials and skilled engineers.",
    },
  ];

  const timeline = [
    {
      step: "Consultation",
      text: "We begin by understanding your needs, vision, and budget — ensuring your project starts with clarity.",
    },
    {
      step: "Concept Design",
      text: "Our design experts craft 2D layouts and 3D renders that bring your vision to life with precision.",
    },
    {
      step: "Execution",
      text: "Our team ensures every detail — materials, structure, and finish — meets our high-quality standards.",
    },
    {
      step: "Handover",
      text: "On-time delivery of your dream space — ready for living, working, and creating memories.",
    },
  ];

  const testimonials = [
    {
      name: "K. Rani",
      quote:
        "PTRinfraCons made my villa dream come true — from idea to perfection! Their design quality is outstanding.",
      img: customer1,
    },
    {
      name: "V.Gopi ",
      quote:
        "Exceptional design, transparent process, and friendly team. I’m proud to recommend PTRinfraCons to anyone in Proddatur.",
      img: customer2,
    },
    {
      name: "S. Latha",
      quote:
        "Professionalism and dedication at every stage — from planning to handover. Truly the best construction team in town.",
      img: customer3,
    },
  ];

  const faqs = [
    {
      q: "Do you handle both residential and commercial construction?",
      a: "Yes! PTRinfraCons offers complete construction solutions for homes, villas, offices, and commercial projects across Proddatur and nearby regions.",
    },
    {
      q: "Can you help with architectural design and interior planning?",
      a: "Absolutely. Our in-house design team provides detailed architectural drawings, 3D visualizations, and interior concepts that match your lifestyle.",
    },
    {
      q: "How do you ensure project quality and timelines?",
      a: "We use certified materials, regular inspections, and a skilled workforce — combined with transparent timelines and constant client updates.",
    },
    {
      q: "Do you offer turnkey construction services?",
      a: "Yes, we manage everything — from design approval to final handover, so you can relax while we bring your dream to life.",
    },
  ];

  return (
    <div className="bg-[#F8FAFC] text-gray-900">
      <Navbar />

      {/* 🏗️ HERO SECTION */}
      <section
        className="relative w-full min-h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)), url(${proddaturHero})`,
        }}
      >
        <div className="text-center text-white px-6 max-w-3xl">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          >
            Crafting the Future of <span className="text-yellow-400">Proddatur</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl mb-6 text-gray-100"
          >
            From visionary architecture to flawless execution, PTRinfraCons transforms dreams into
            concrete reality — redefining construction standards across Proddatur.
          </motion.p>
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition"
          >
            Start Your Project
          </motion.button>
        </div>
      </section>

      {/* 🏙️ ABOUT PTRinfraCons IN PRODDATUR */}
      <section className="py-20 bg-gradient-to-b from-white to-[#E0F2FE]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#0369A1] mb-6"
          >
            Your Trusted Construction Partner in Proddatur
          </motion.h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
            With a deep understanding of Proddatur’s urban and residential landscape, PTRinfraCons
            has been delivering architectural marvels that reflect style, safety, and sustainability.
            Our focus on client satisfaction and transparent communication has helped us stand as
            a symbol of reliability and quality across Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* 🧱 WHY PRODDATUR TRUSTS PTRinfraCons */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0369A1] mb-6 flex justify-center gap-2 items-center">
            <Star className="text-yellow-500 w-8 h-8" /> Why Proddatur Trusts PTRinfraCons
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            We bring innovation, integrity, and expertise to every project. Our reputation is built
            on trust and long-lasting relationships with our clients.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.03 }}
                className="p-8 bg-[#F9FAFB] rounded-2xl shadow-lg hover:shadow-2xl border-t-4 border-yellow-400 transition"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-[#0369A1]" />
                <h3 className="font-semibold text-xl text-[#0369A1] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌍 OUR CORE VALUES */}
      <section className="py-20 bg-gradient-to-r from-[#E0F7FA] via-[#FFF8E1] to-[#FFFDE7]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0369A1] mb-10 flex justify-center items-center gap-2">
            <CheckCircle className="text-yellow-500 w-8 h-8" />
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <v.icon className="w-10 h-10 text-[#0369A1] mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-[#0369A1] mb-2">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏠 OUR SIGNATURE WORKS */}
      <section className="bg-gradient-to-r from-[#E0F2FE] via-[#FDFCDC] to-[#FEF9C3] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0369A1] mb-6 flex justify-center items-center gap-2">
            <Building className="text-yellow-500 w-8 h-8" />
            Our Signature Works
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            Discover our proud portfolio of premium villas, family homes, and commercial spaces
            that showcase architectural brilliance and unmatched quality.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {works.map((work, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <h3 className="text-yellow-400 text-xl font-semibold mb-2">
                    {work.title}
                  </h3>
                  <p className="text-white text-sm max-w-xs text-center">
                    {work.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧭 HOW WE WORK */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0369A1] mb-6 flex justify-center items-center gap-2">
            <ClipboardList className="w-8 h-8 text-yellow-500" />
            How We Work
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            Our structured process ensures precision, efficiency, and client satisfaction from
            concept to completion.
          </p>
          <div className="relative border-l-4 border-yellow-400 pl-8 space-y-10 text-left">
            {timeline.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative bg-[#F8FAFC] rounded-xl p-6 shadow-md hover:shadow-lg"
              >
                <div className="absolute -left-5 top-6 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
                <h4 className="font-semibold text-[#0369A1] text-lg mb-2">{t.step}</h4>
                <p className="text-gray-700 text-sm md:text-base">{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ❤️ VOICES OF OUR CLIENTS */}
      <section className="bg-gradient-to-b from-[#FEF9C3] to-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0369A1] mb-6 flex justify-center items-center gap-2">
            <Users className="text-yellow-500 w-8 h-8" />
            Voices of Our Clients
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-12">
            Our clients are the foundation of our success. Here’s what they have to say about
            their journey with PTRinfraCons.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-yellow-400 transition-all duration-300"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-yellow-400 object-cover"
                />
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  “{t.quote}”
                </p>
                <h4 className="font-semibold text-[#0369A1]">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ❓ FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0369A1] mb-10 text-center flex justify-center items-center gap-2">
            <HelpCircle className="text-yellow-500 w-8 h-8" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 bg-[#F9FAFB] rounded-xl shadow-md hover:shadow-lg border-l-4 border-yellow-400 transition"
              >
                <h4 className="font-semibold text-lg text-[#0369A1] mb-2">
                  {faq.q}
                </h4>
                <p className="text-gray-700 text-sm md:text-base">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🌟 CTA SECTION */}
      <motion.section
        className="py-20 bg-gradient-to-r from-[#B3E5FC] via-[#81D4FA] to-[#FFD700] text-center text-[#0F172A]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 flex items-center justify-center gap-3 leading-snug">
            <Home className="w-8 h-8 text-yellow-500" />
            Let’s Shape Proddatur’s Tomorrow Together
          </h2>
          <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed">
            Build your dream home or next business space with{" "}
            <span className="font-bold text-blue-900">PTRinfraCons</span> — where innovation meets
            trust.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-yellow-400 text-[#0F172A] font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 hover:scale-105 transition-transform shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </motion.section>

    </div>
  );
};

export default ProddaturConstruction;
