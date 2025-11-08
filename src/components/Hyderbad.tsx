import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import hyd from "@/assets/hyd.jpeg";
import Home1 from "@/assets/Home1.jpg";
import banner from "@/assets/banner.png";
import customer1 from "@/assets/customer1.png";
import customer2 from "@/assets/customer2.png";
import customer3 from "@/assets/customer3.png";
import building1 from "@/assets/building1.png";
import buildings2 from "@/assets/buildings2.png";
import building3 from "@/assets/building3.png";
import how1 from "@/assets/how1.png";
import how2 from "@/assets/how2.png";
import how3 from "@/assets/how3.png";
import how4 from "@/assets/how4.png";
import how5 from "@/assets/how5.png";
import how6 from "@/assets/how6.png";

const HyderabadConstruction: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("animate-fadeInUp");
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".fade-section");
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const services = [
    {
      title: "Home Construction",
      desc: "We specialize in duplex homes, luxury villas, and custom-designed houses that fit your lifestyle — built with quality and transparency.",
      img: Home1,
    },
    {
      title: "Commercial Construction",
      desc: "We handle commercial projects including PGs, schools, hotels, offices, and warehouses — delivered with durability and precision.",
      img: banner,
    },
  ];

  const features = [
    { icon: "💰", title: "Safe Money Transaction", desc: "Pay only after each stage is completed successfully." },
    { icon: "📄", title: "Absolute Transparency", desc: "Get detailed progress reports and quotations." },
    { icon: "🧰", title: "Assured Quality Control", desc: "Supervised by experienced architects and engineers." },
    { icon: "⏰", title: "Zero Delays", desc: "Guaranteed on-time delivery commitment." },
  ];

  const customers = [
    {
      name: "Naroju Niharika",
      img: customer1,
      year: "2024",
      code: "CRN272560",
      feedback:
        "The PTR Infracons team turned our dream home into reality with amazing quality and on-time completion!",
    },
    {
      name: "M Venkat Reddy",
      img: customer2,
      year: "2023",
      code: "CRN157615",
      feedback:
        "Professional, transparent, and trustworthy — they made our construction experience completely stress-free.",
    },
    {
      name: "Akhila Kumaran",
      img: customer3,
      year: "2021",
      code: "CRN670856",
      feedback:
        "Their design-to-delivery process is smooth and efficient. I’d highly recommend PTR Infracons to anyone!",
    },
  ];

  const projects = [
    { title: "Comfort Meets Class", img: building1, code: "CRN-43891" },
    { title: "Modern Design, Homely Feel", img: buildings2, code: "CRN-58026" },
    { title: "Elegant Outside, Warm Inside", img: building3, code: "CRN-38245" },
  ];

  const steps = [
    { title: "Raise Requirement", desc: "Submit your construction requirement and let our experts understand your project vision.", img: how1 },
    { title: "Measure & Prepare", desc: "We visit your site, take precise measurements, and prepare customized plans.", img: how2 },
    { title: "Book with Us", desc: "Once satisfied with the quotation, confirm your booking with minimal documentation.", img: how3 },
    { title: "Personalized Design", desc: "Our architects craft detailed 2D and 3D designs for your approval.", img: how4 },
    { title: "Track & Transact", desc: "Use our mobile app to track progress, make payments, and monitor construction.", img: how5 },
    { title: "Settle In", desc: "After final inspections, move into your dream home built with care.", img: how6 },
  ];

  return (
    <div className="bg-white text-gray-900">
      <Navbar />

      {/* ---------- HERO SECTION ---------- */}
      <section
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${hyd})`,
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-wide drop-shadow-lg mb-6">
            Build Your Dream Home in Hyderabad
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Partner with <span className="font-semibold text-yellow-400">PTR Infracons</span> —
            India’s most trusted tech-enabled construction company. From modern villas to commercial
            projects, we turn your vision into reality.
          </p>
        </div>
      </section>

      {/* ---------- HOME CONSTRUCTION SERVICES ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-12 fade-section">
        <h2 className="text-2xl font-semibold text-center mb-3">
          Home Construction Services in Hyderabad
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          We deliver top-notch home and commercial construction solutions with precision, quality,
          and transparency.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-md border hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img src={service.img} alt={service.title} className="w-full h-64 object-cover" />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="bg-gray-50 py-16 fade-section">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Why Choose PTR Infracons — The Best Construction Company in Hyderabad
        </h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-6 text-center shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- HAPPY CUSTOMERS (Redesigned) ---------- */}
      <section className="relative bg-gradient-to-b from-[#FFF9C4] via-[#FFFDE7] to-white py-20 fade-section">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0369A1] mb-3">
            Our Happy Customers
          </h2>
          <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
            Over <span className="text-yellow-600 font-semibold">10,000+</span> homeowners have built
            their dream homes with us. Here’s what they have to say about their journey with{" "}
            <span className="font-semibold text-[#0369A1]">PTR Infracons</span>.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {customers.map((cust, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 border border-gray-100 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-400 shadow-md mb-4">
                    <img
                      src={cust.img}
                      alt={cust.name}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-semibold text-lg text-[#0369A1]">{cust.name}</h4>
                  <p className="text-sm text-gray-500">{cust.code}</p>
                  <p className="text-xs text-gray-400 mb-4">{cust.year}</p>
                  <p className="text-gray-700 text-sm italic leading-relaxed">
                    “{cust.feedback}”
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- OUR PROJECTS ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 fade-section">
        <h2 className="text-2xl font-semibold text-center mb-3">
          Our Construction Projects in Hyderabad
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Built with precision, quality, and trust — ensuring your dream home is crafted to perfection.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden border shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300"
            >
              <img src={project.img} alt={project.title} className="w-full h-72 object-cover" />
              <div className="p-4 text-center">
                <h4 className="font-semibold text-lg mb-1">{project.title}</h4>
                <p className="text-gray-500 text-sm">{project.code}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/projects")}
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-full shadow-md transition transform hover:scale-105"
          >
            View 10+ More Projects →
          </button>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="bg-gray-50 py-20 fade-section relative">
        <h2 className="text-2xl font-semibold text-center mb-4">How it works</h2>
        <p className="text-center text-gray-600 mb-10">
          Our construction process is simple and transparent:
          <br />
          <span className="font-semibold text-gray-800">
            Plan → Build → Track → Settle in
          </span>
        </p>

        <div className="flex flex-wrap justify-center items-center relative mb-12">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <button
                onClick={() => setActiveStep(i)}
                className={`flex flex-col items-center transition-all duration-300 ${
                  activeStep === i ? "scale-110" : "opacity-80 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-bold mb-2 ${
                    activeStep === i
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  {i + 1}
                </div>
                <p className="text-sm text-gray-700 text-center max-w-[120px]">
                  {step.title}
                </p>
              </button>

              {i < steps.length - 1 && (
                <div className="hidden sm:block w-8 border-t-2 border-dotted border-yellow-400 mx-1"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col items-center fade-section">
          <img
            src={steps[activeStep].img}
            alt={steps[activeStep].title}
            className="w-[400px] h-[300px] object-cover rounded-lg shadow-lg mb-6 transition-all duration-500"
          />
          <div className="bg-white border-l-4 border-yellow-500 p-6 max-w-xl mx-auto rounded-md shadow-sm text-center">
            <h4 className="font-semibold mb-2 text-gray-800">{steps[activeStep].title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {steps[activeStep].desc}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HyderabadConstruction;
