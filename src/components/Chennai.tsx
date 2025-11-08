import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Building2,
  ShieldCheck,
  Sparkles,
  Users,
  Paintbrush,
  CheckCircle2,
  ClipboardCheck,
  Lightbulb,
  Image as ImageIcon,
  Home,
} from "lucide-react";

import chennaiHero from "@/assets/chennaibanner.jpg";
import coastalVilla from "@/assets/coast.png";
import heritageHome from "@/assets/heritage.png";
import skyline from "@/assets/cheskyline.png";
import gallery1 from "@/assets/gal1.png";
import gallery2 from "@/assets/gal2.png";
import gallery3 from "@/assets/gal3.png";
import gallery4 from "@/assets/gal4.png";
import gallery5 from "@/assets/gal5.png";
import gallery6 from "@/assets/gal6.png";
import client1 from "@/assets/customer1.png";
import client2 from "@/assets/customer2.png";
import client3 from "@/assets/customer3.png";

const ChennaiConstruction: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => window.scrollTo(0, 0), []);

  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Quality That Lasts",
      desc: "Every foundation we lay is built with precision, durability, and uncompromising quality standards.",
    },
    {
      icon: Sparkles,
      title: "Innovative Vision",
      desc: "We design spaces that inspire — merging aesthetics, sustainability, and modern functionality.",
    },
    {
      icon: Users,
      title: "Client First Approach",
      desc: "Our process is transparent, collaborative, and deeply rooted in our clients’ aspirations.",
    },
  ];

  const services = [
    {
      title: "Luxury Coastal Villas",
      desc: "Sophisticated seaside residences that celebrate Chennai’s coastal charm with world-class design and comfort.",
      img: coastalVilla,
    },
    {
      title: "Commercial Landmarks",
      desc: "From corporate towers to creative workspaces — we redefine Chennai’s modern business architecture.",
      img: skyline,
    },
    {
      title: "Heritage Restorations",
      desc: "Preserving Chennai’s architectural soul while enhancing it with modern elegance and innovation.",
      img: heritageHome,
    },
  ];

  const projects = [
    {
      img: gallery1,
      title: "Bayline Residences",
      desc: "Elegant high-rise apartments overlooking the Marina skyline with contemporary architecture.",
    },
    {
      img: gallery2,
      title: "Golden Horizon Villas",
      desc: "A beachfront luxury living experience blending serenity, sea breeze, and sophistication.",
    },
    {
      img: gallery3,
      title: "Urban Hub Complex",
      desc: "Modern architecture redefining commercial excellence and business synergy in Chennai.",
    },
    {
      img: gallery4,
      title: "Urban Coastline Villas",
      desc: "Exclusive sea-view villas designed for modern living, combining privacy and luxury by the coast.",
    },
    {
      img: gallery5,
      title: "Golden Sands Tower",
      desc: "An architectural masterpiece standing tall with golden accents, panoramic views, and eco-smart features.",
    },
    {
      img: gallery6,
      title: "Skyline Serenity",
      desc: "Luxury residences crafted for peace and perfection, offering a 360° view of Chennai’s vibrant cityscape.",
    },
  ];

  const process = [
    {
      icon: Lightbulb,
      title: "Concept & Ideation",
      desc: "We listen, sketch, and refine your dream into a clear vision.",
    },
    {
      icon: Paintbrush,
      title: "Design & Detailing",
      desc: "Our experts craft blueprints that marry creativity with practicality.",
    },
    {
      icon: Building2,
      title: "Construction Execution",
      desc: "Precision-led building, with materials and techniques of global standards.",
    },
    {
      icon: ClipboardCheck,
      title: "Handover & Beyond",
      desc: "We deliver perfection and offer ongoing post-construction care.",
    },
  ];

  const testimonials = [
    {
      name: "Ananya Ramesh",
      quote:
        "Our ECR villa turned out stunning — every detail was handled with care and precision.",
      img: client1,
    },
    {
      name: "Suresh Balaji",
      quote:
        "From planning to delivery, PTRinfraCons made the process seamless and stress-free.",
      img: client2,
    },
    {
      name: "Priya Venkatesan",
      quote:
        "Their craftsmanship and professionalism set a new benchmark for Chennai construction.",
      img: client3,
    },
  ];

  return (
    <div className="bg-[#F9FAFB] text-gray-900">
      <Navbar />

      {/* ✅ HERO SECTION (No cutting on mobile) */}
      <section
        className="relative w-full bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${chennaiHero})`,
        }}
      >
        <div className="flex flex-col justify-center items-center text-center px-6 py-24 sm:py-32 md:py-40">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-extrabold tracking-tight leading-tight text-[clamp(1.8rem,6vw,3.5rem)] mb-4 max-w-3xl"
          >
            Redefining Chennai’s Architectural Horizon
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-100 max-w-xl md:max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Experience a new era of design, luxury, and engineering brilliance — we build not just
            structures, but stories that inspire Chennai’s skyline.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="px-6 md:px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition shadow-md hover:scale-105 text-sm md:text-base"
            >
              Get Consultation
            </button>
            <button
              onClick={() => navigate("/projects")}
              className="px-6 md:px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#0F172A] transition text-sm md:text-base"
            >
              Explore Projects
            </button>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0369A1] mb-4 flex items-center justify-center gap-2">
            <ShieldCheck className="w-8 h-8 text-yellow-500" />
            Our Core Values
          </h2>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto text-base md:text-lg">
            Driven by passion, precision, and trust — we craft every project with an unshakable
            commitment to excellence.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {coreValues.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 bg-[#F8FAFC] rounded-2xl shadow-lg hover:shadow-2xl border-t-4 border-yellow-400 transition"
              >
                <v.icon className="w-12 h-12 mx-auto mb-4 text-[#0369A1]" />
                <h3 className="text-xl font-semibold text-[#0369A1] mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE SECTION (Adjusted beside image alignment) */}
      <section className="py-20 bg-gradient-to-r from-[#E0F2FE] via-[#FDFCDC] to-[#FEF9C3]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0369A1] mb-10 flex items-center justify-center gap-2 text-center">
            <Paintbrush className="w-8 h-8 text-yellow-500" />
            Our Expertise
          </h2>
          <div className="space-y-20">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className={`flex flex-col md:flex-row ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                } items-start gap-8`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3 }}
              >
                <div className="md:w-1/2">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col justify-start items-start text-left space-y-4 md:pl-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0369A1] flex items-center gap-2">
                    <CheckCircle2 className="text-yellow-500 w-6 md:w-7 h-6 md:h-7" />
                    {s.title}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0369A1] mb-6 flex items-center justify-center gap-2">
            <ImageIcon className="w-8 h-8 text-yellow-500" />
            Featured Projects
          </h2>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto text-base md:text-lg">
            Explore some of our signature Chennai creations — architectural marvels that redefine
            modern living.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition"
              >
                <img src={p.img} alt={p.title} className="h-64 w-full object-cover" />
                <div className="p-5 bg-[#F8FAFC] text-left">
                  <h3 className="font-semibold text-[#0369A1] text-lg mb-1">{p.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gradient-to-b from-[#E0F2FE] to-[#FEF9C3]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0369A1] mb-6 flex items-center justify-center gap-2">
            <ClipboardCheck className="w-8 h-8 text-yellow-500" />
            Our Process
          </h2>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto text-base md:text-lg">
            From concept to completion — every project we undertake reflects transparency,
            precision, and artistry.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border-t-4 border-yellow-400"
              >
                <p.icon className="w-10 h-10 mx-auto mb-4 text-[#0369A1]" />
                <h4 className="font-semibold text-lg text-[#0369A1] mb-2">{p.title}</h4>
                <p className="text-gray-600 text-sm md:text-base">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0369A1] mb-6 flex items-center justify-center gap-2">
            <Users className="w-8 h-8 text-yellow-500" />
            Client Testimonials
          </h2>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto text-base md:text-lg">
            Hear from our valued clients who trusted PTRinfraCons to bring their vision to life.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-b from-[#FEF9C3] to-[#FFF] rounded-2xl p-8 shadow-md hover:shadow-xl transition"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-yellow-400 object-cover"
                />
                <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
                <h4 className="font-semibold text-[#0369A1]">{t.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        className="py-20 bg-gradient-to-r from-[#B3E5FC] via-[#81D4FA] to-[#FFD700] text-center text-[#0F1A2C]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4 flex items-center justify-center gap-3 leading-snug">
            <Home className="w-8 h-8 text-yellow-500" />
            Let’s Build Chennai’s Legacy Together
          </h2>
          <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed">
            Your dream deserves a structure that lasts generations. Partner with{" "}
            <span className="font-bold text-blue-900">PTRinfraCons</span> and let’s create something
            iconic together.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-yellow-400 text-[#0F172A] font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 hover:scale-105 transition-transform shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </motion.section>

    </div>
  );
};

export default ChennaiConstruction;
