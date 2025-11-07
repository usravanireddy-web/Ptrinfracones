import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import how1 from "@/assets/how1.png";
import how2 from "@/assets/how2.png";
import how3 from "@/assets/how3.png";
import how4 from "@/assets/how4.png";
import how5 from "@/assets/how5.png";
import how6 from "@/assets/how6.png";
import bgImg from "@/assets/bgImg.png";
import trackingapp1 from "@/assets/trackingapp1.png";

const steps = [
  {
    title: "Raise a Request",
    desc: "Submit your site details and requirements. Our experts reach out within 24 hours to discuss your vision and provide a tailored estimate.",
    img: how1,
    btn: "Let's Build →",
  },
  {
    title: "Meet Our Expert",
    desc: "Connect with architects and engineers for personalized advice, design clarity, and transparent cost discussions.",
    img: how2,
  },
  {
    title: "Book With Us",
    desc: "Confirm your booking by paying just 1.5% of your project estimate. Simple and secure.",
    img: how3,
  },
  {
    title: "Receive Detailed Plans",
    desc: "Get your custom designs, floor plans, and 3D renders — reviewed and finalized before construction begins.",
    img: how4,
  },
  {
    title: "Track & Transact",
    desc: "Follow your construction updates in real-time. View reports, track milestones, and make safe payments through our portal.",
    img: how5,
  },
  {
    title: "Move Into Your Dream Home",
    desc: "Experience the joy of moving into your finished home — with full quality checks and warranty assurance.",
    img: how6,
  },
];

const HowItWorks: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.1"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            How It Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            From concept to completion — a transparent journey to your dream home.
            <p>Plan → Build → Track → Settle in</p>
          </motion.p>
        </div>
      </section>

      {/* ===== TIMELINE SECTION ===== */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div ref={ref} className="relative max-w-5xl mx-auto px-6">
          {/* Dotted Line */}
          <div className="absolute left-[2.5rem] top-0 bottom-0 border-l-4 border-dotted border-orange-300"></div>

          {/* Animated Progress Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[2.5rem] top-0 border-l-4 border-orange-500 rounded-full origin-top"
          ></motion.div>

          {/* Steps */}
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex items-start gap-8 mb-20"
            >
              {/* Step Circle */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0px rgba(249,115,22,0)",
                    "0 0 20px rgba(249,115,22,0.9)",
                    "0 0 0px rgba(249,115,22,0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-orange-500 text-orange-500 font-semibold text-sm"
              >
                {(i + 1).toString().padStart(2, "0")}
              </motion.div>

              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 bg-white shadow-lg rounded-xl p-6 border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full md:w-1/3 rounded-lg h-[180px] object-contain"
                  />
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-3">
                      {step.desc}
                    </p>
                    {step.btn && (
                      <Link to="/projects">
                        <button className="px-6 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition">
                          {step.btn}
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Bottom CTA */}
          <Link to="/projects">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-orange-500 text-white text-center py-4 rounded-md font-semibold shadow-lg mt-10 hover:bg-orange-600 transition"
            >
              Building Your Dream Home Starts Here 🚧
            </motion.div>
          </Link>
        </div>
      </section>

      {/* ===== TRACK PROGRESS SECTION ===== */}
      <section className="bg-gray-50 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Content - now aligned with image top */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="self-start"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay in Control, Effortlessly.
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Manage your entire construction journey with clarity and confidence. 
              Our advanced platform keeps you informed, connected, and in control every step of the way.
            </p>

            <ul className="space-y-4">
              {[
                "Access live construction photos, site reports, and timeline updates in real time.",
                "Monitor spending, progress, and material selections through one seamless dashboard.",
                "Communicate instantly with your project team — ensuring decisions are quick and transparent.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 mt-1 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.img
              src={trackingapp1}
              alt="Track Progress App"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-[95%] md:w-[95%] lg:w-[90%] rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      
    </>
  );
};

export default HowItWorks;
