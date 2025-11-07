import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Clock, Users, CheckCircle2 } from "lucide-react";
import { motion, useInView } from "framer-motion";

// Images
import bangalore from "@/assets/bangalore.png";
import villa2 from "@/assets/villa2.jpg";
import villa1 from "@/assets/villa1.jpg";
import interior from "@/assets/interior.jpg";

import buildings1 from "@/assets/buildings1.png";
import buildings2 from "@/assets/buildings2.png";
import building3 from "@/assets/building3.png";
import building4 from "@/assets/building4.jpg";
import building5 from "@/assets/building5.jpg";
import building6 from "@/assets/building6.jpg";

import customer1 from "@/assets/customer1.png";
import customer2 from "@/assets/customer2.png";
import customer3 from "@/assets/customer3.png";

const BangaloreConstruction: React.FC = () => {
  const navigate = useNavigate();
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Building2, number: 450, title: "Projects Completed" },
    { icon: Clock, number: 15, title: "Years of Excellence" },
    { icon: Users, number: 98, title: "Client Satisfaction %" },
    { icon: CheckCircle2, number: 120, title: "Ongoing Projects" },
  ];

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCounters((prev) =>
          prev.map((count, i) =>
            count < highlights[i].number
              ? Math.min(count + Math.ceil(highlights[i].number / 45), highlights[i].number)
              : highlights[i].number
          )
        );
      }, 45);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const services = [
    {
      title: "Residential Construction",
      desc: "Elegant villas and apartments designed to match your lifestyle, blending comfort with architectural beauty.",
      img: villa2,
    },
    {
      title: "Commercial Projects",
      desc: "From high-end offices to retail spaces, we create inspiring and productive commercial environments.",
      img: villa1,
    },
    {
      title: "Interiors & Renovation",
      desc: "Bring your space to life with our modern interior designs and transformation services.",
      img: interior,
    },
  ];

  const projectsFeatured = [
    { title: "Skyline Serenity", desc: "Luxury high-rise with panoramic city views and sustainable design.", img: buildings1 },
    { title: "Elite Residency", desc: "A modern residential enclave designed for elegant urban living.", img: buildings2 },
    { title: "Palm Heights", desc: "Tropical-inspired homes surrounded by greenery and fresh air.", img: building3 },
    { title: "Green Heaven", desc: "Environmentally conscious homes with top-notch amenities.", img: building4 },
    { title: "Eco Residency", desc: "A sustainable living community designed for the modern generation.", img: building5 },
    { title: "Platinum Towers", desc: "Iconic architecture blending luxury with smart design.", img: building6 },
  ];

  const customers = [
    {
      name: "Divya Shankar",
      img: customer1,
      quote:
        "PTR Infracons made my dream villa a reality — professional and on-time delivery. The best team I’ve worked with!",
    },
    {
      name: "Arun Kumar",
      img: customer2,
      quote:
        "Transparent pricing, great communication, and top-notch quality. They truly care about the client’s vision.",
    },
    {
      name: "Riya Sharma",
      img: customer3,
      quote:
        "The design quality and attention to detail exceeded my expectations. Absolutely recommend PTR Infracons.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* HERO SECTION */}
      <motion.section
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bangalore})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <motion.div
          className="relative z-10 text-center text-white px-6 max-w-3xl"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight text-white drop-shadow-md">
            Build Your Dream Home in Bangalore
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8">
            From blueprint to reality — we create homes and commercial spaces that reflect your aspirations,
            built with precision and trust.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold transition shadow-lg hover:shadow-xl"
          >
            Get a Free Consultation
          </button>
        </motion.div>
      </motion.section>

      {/* OUR ACHIEVEMENTS */}
      <section className="py-20 bg-[#FFFCF2]">
        <motion.h2
          className="text-3xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Our Achievements
        </motion.h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Each milestone we achieve represents years of dedication, innovation, and trust from our valued
          clients across Bangalore and beyond.
        </p>

        <div
          ref={statsRef}
          className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center px-6"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              className="group bg-[#FFFCF2] border border-[#FFD54F] rounded-lg shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-10 flex flex-col items-center justify-center">
                <item.icon className="w-10 h-10 mb-3 text-[#A6B35B]" />
                <h3 className="text-5xl font-extrabold mb-1 bg-gradient-to-r from-[#A6B35B] to-[#69A68B] bg-clip-text text-transparent">
                  {counters[i]}+
                </h3>
                <p className="text-gray-700 text-sm font-medium mt-1">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-6 text-gray-800"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          From concept to creation — we deliver spaces that reflect your vision, combining architecture,
          innovation, and craftsmanship to create homes and commercial masterpieces.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="relative bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all group"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="p-6 text-center relative z-10">
                <h3 className="font-semibold text-xl text-yellow-600 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 bg-gray-50">
        <motion.h2
          className="text-3xl font-bold text-center mb-6 text-gray-800"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          Featured Projects
        </motion.h2>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Explore our signature developments — where luxury, sustainability, and technology meet to
          redefine modern living.
        </p>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {projectsFeatured.map((p, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-lg group bg-white hover:-translate-y-2 transition-all duration-500"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-5 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 px-4">
                <h4 className="text-lg font-semibold text-yellow-400">{p.title}</h4>
                <p className="text-sm text-gray-100 mb-3">{p.desc}</p>
                <button
                  onClick={() => navigate("/projects")}
                  className="mt-2 px-5 py-2 bg-yellow-500 text-white text-sm rounded-full hover:bg-yellow-600 transition"
                >
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Our Clients Say</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {customers.map((cust, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 border rounded-2xl shadow-lg p-6 text-center transition"
            >
              <img
                src={cust.img}
                alt={cust.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-500"
              />
              <p className="text-gray-600 text-sm italic mb-4">“{cust.quote}”</p>
              <h4 className="font-semibold text-yellow-600">{cust.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ CTA with Light Blue + Gold Theme */}
      <motion.section
        className="relative py-20 bg-gradient-to-r from-[#B3E5FC] via-[#81D4FA] to-[#FFD700] text-center text-[#0F1A2C]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-base md:text-lg mb-8 leading-relaxed opacity-90">
            Let’s build something extraordinary together with{" "}
            <span className="font-bold text-blue-900">PTRinfraCons</span>. Reach out to our team of
            experts today to bring your vision to life.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#FFD700] text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-[#FFEB3B] hover:scale-105 transition-transform shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </motion.section>


    </div>
  );
};

export default BangaloreConstruction;
