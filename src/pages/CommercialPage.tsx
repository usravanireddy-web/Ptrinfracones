import React from "react";
import {
  Building2,
  Ruler,
  Wrench,
  Users,
  DollarSign,
  Award,
  ShieldCheck,
  Clock,
  Settings,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import herobanner from "@/assets/herobanner.png";
import office from "@/assets/office.png";
import hotel from "@/assets/hotel.png";
import apartment from "@/assets/apartment.png";
import school from "@/assets/school.png";
import hospital from "@/assets/hospital.png";
import building from "@/assets/building.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CommercialPage: React.FC = () => {
  const services = [
    { title: "Corporate Office", img: office },
    { title: "Hotel Building", img: hotel },
    { title: "Luxury Apartments", img: apartment },
    { title: "School Building", img: school },
    { title: "Hospital Project", img: hospital },
    { title: "Commercial Complex", img: building },
  ];

  const features = [
    {
      title: "Financial Safety",
      text: "We ensure complete financial transparency — contractors are paid only after verified milestone completion.",
      icon: <DollarSign className="w-10 h-10 text-blue-900" />,
    },
    {
      title: "Strong Expertise",
      text: "Our engineers, designers, and planners bring years of domain expertise for commercial excellence.",
      icon: <Award className="w-10 h-10 text-blue-900" />,
    },
    {
      title: "Tech Enabled",
      text: "Real-time dashboards and digital tracking give you total control and peace of mind.",
      icon: <Settings className="w-10 h-10 text-blue-900" />,
    },
    {
      title: "Zero Delays",
      text: "Efficient planning, dedicated teams, and milestone monitoring ensure timely project delivery.",
      icon: <Clock className="w-10 h-10 text-blue-900" />,
    },
    {
      title: "Assured Quality",
      text: "Every phase undergoes a rigorous multi-step quality inspection process for top-tier standards.",
      icon: <ShieldCheck className="w-10 h-10 text-blue-900" />,
    },
    {
      title: "Transparency",
      text: "We maintain 100% clarity across pricing, timelines, and execution — no surprises.",
      icon: <Search className="w-10 h-10 text-blue-900" />,
    },
  ];

  const highlights = [
    { title: "Total Sq.Ft. Built", icon: <Ruler className="w-8 h-8" /> },
    { title: "Projects Completed", icon: <Building2 className="w-8 h-8" /> },
    { title: "Quality Checks", icon: <Wrench className="w-8 h-8" /> },
    { title: "Expert Contractors", icon: <Users className="w-8 h-8" /> },
  ];

  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />

      {/* ============= HERO SECTION ============= */}
      <section
        className="relative w-full h-[95vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${herobanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/40 to-yellow-500/30"></div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            Build Your Commercial Future with{" "}
            <span className="text-yellow-400">Ptr Infracons</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            We specialize in creating commercial spaces that embody precision,
            innovation, and architectural brilliance — your vision, our
            expertise.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-900 hover:text-yellow-400 transition duration-300"
          >
            Start Your Project
          </motion.button>
        </div>
      </section>

      {/* ============= OUR COMMERCIAL SERVICES ============= */}
      <motion.section className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-900">
          Our{" "}
          <span className="text-black-500">Commercial Construction</span>{" "}
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative overflow-hidden rounded-2xl shadow-md group"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-transparent group-hover:bg-yellow-100/50 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-white py-4 text-lg font-semibold text-blue-900 transition-all duration-500 group-hover:bg-yellow-400 group-hover:text-blue-900">
                {service.title}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ============= WHY PTR INFRACONS ============= */}
      <motion.section
        className="py-24 text-blue-900 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-14">
          Why{" "}
          <span className="black-500">Ptr Infracons</span> as Your
          Commercial Builder?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl shadow-lg p-10 flex flex-col items-center text-center border border-blue-100 hover:shadow-yellow-400/50 hover:border-yellow-300 transition-all duration-500 bg-white"
            >
              <div className="p-5 bg-yellow-100 rounded-full mb-5 border border-yellow-400 flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-xl text-blue-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ============= BUILDING WITH EXCELLENCE (Light Blue + Gold Theme) ============= */}
      <motion.section
        className="py-20 bg-gradient-to-r from-[#B3E5FC] via-[#81D4FA] to-[#FFD700] text-center text-[#0F1A2C] shadow-inner"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
          Building <span className="text-blue-900">Commercial Spaces</span> with
          Excellence
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#0F1A2C]/90 mb-14 px-4 leading-relaxed">
          With over 16 years of experience, <span className="font-bold text-blue-900">PTRinfraCons</span> is known
          for building iconic commercial projects with unmatched commitment,
          design precision, and architectural excellence.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-16 px-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center text-blue-900 hover:text-yellow-600 transition duration-300"
            >
              <div className="p-6 bg-white/50 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center mb-3 border border-yellow-300 hover:bg-yellow-100 transition duration-300">
                {item.icon}
              </div>
              <p className="font-semibold text-base">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default CommercialPage;
