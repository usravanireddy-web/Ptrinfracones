import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import bangalore from "@/assets/bangalore.png"; // Hero Image (replace with your Bangalore banner)
import Home1 from "@/assets/Home1.jpg";
import banner from "@/assets/banner.png";
import customer1 from "@/assets/customer1.png";
import customer2 from "@/assets/customer2.png";
import customer3 from "@/assets/customer3.png";
import building1 from "@/assets/building1.webp";
import building2 from "@/assets/building2.webp";
import building3 from "@/assets/building3.webp";
import how1 from "@/assets/how1.webp";
import how2 from "@/assets/how2.webp";
import how3 from "@/assets/how3.png";
import how4 from "@/assets/how4.png";
import how5 from "@/assets/how4.png";
import how6 from "@/assets/how6.webp";

const BangaloreConstruction: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

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
      title: "Residential Construction",
      desc: "We build modern apartments, villas, and independent houses that perfectly match Bangalore’s urban lifestyle.",
      img: Home1,
    },
    {
      title: "Commercial & IT Spaces",
      desc: "We design and construct tech-friendly workspaces, retail stores, and commercial complexes in Bangalore’s prime locations.",
      img: banner,
    },
  ];

  const features = [
    { icon: "🏗️", title: "End-to-End Solutions", desc: "From design to delivery, we handle every step with precision." },
    { icon: "🏘️", title: "Eco-Friendly Construction", desc: "Sustainable and energy-efficient designs for modern living." },
    { icon: "📋", title: "Transparent Budgeting", desc: "Clear, detailed quotes with no hidden charges." },
    { icon: "🕒", title: "On-Time Project Delivery", desc: "Our process ensures timely completion with no compromise on quality." },
  ];

  const customers = [
    { name: "Arun Kumar", img: customer1, year: "2024", code: "BNG10234" },
    { name: "Divya Shankar", img: customer2, year: "2023", code: "BNG45621" },
    { name: "Ravi Teja", img: customer3, year: "2022", code: "BNG78903" },
  ];

  const projects = [
    { title: "Skyline Serenity", img: building1, code: "BNG-21876" },
    { title: "Urban Greens", img: building2, code: "BNG-33289" },
    { title: "Metro View Homes", img: building3, code: "BNG-47812" },
  ];

  const steps = [
    { title: "Share Your Requirement", desc: "Tell us your construction needs, location, and budget to start the process.", img: how1 },
    { title: "Expert Consultation", desc: "Our team connects with you to plan your dream project effectively.", img: how2 },
    { title: "Site Inspection", desc: "We visit your site in Bangalore and take accurate measurements.", img: how3 },
    { title: "Design Finalization", desc: "Get your 2D/3D designs and project cost estimation finalized.", img: how4 },
    { title: "Construction Phase", desc: "Our professionals start building your project with precision and care.", img: how5 },
    { title: "Handover & Support", desc: "Move into your new space — with full documentation and post-delivery support.", img: how6 },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* NAVBAR */}
      <Navbar />

      {/* ---------- HERO SECTION ---------- */}
      <section
        className="relative h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${bangalore})`,
          backgroundPosition: "center 40%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide drop-shadow-lg mb-6">
            Build Your Dream Space in Bangalore
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
            Partner with <span className="font-semibold text-yellow-400">PTR Infracons</span> —
            your trusted construction partner in Bangalore.  
            From smart homes to modern office spaces, we bring your ideas to life with excellence.
          </p>
        </div>
      </section>

      {/* ---------- SERVICES SECTION ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-12 fade-section">
        <h2 className="text-2xl font-semibold text-center mb-3">
          Construction Services in Bangalore
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          End-to-end residential and commercial construction — combining technology, design, and quality craftsmanship.
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
          Why Choose PTR Infracons — The Trusted Builders in Bangalore
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

      {/* ---------- HAPPY CUSTOMERS ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 fade-section">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Happy Customers in Bangalore</h2>
        <p className="text-center text-gray-500 mb-8">Trusted by 8,000+ satisfied homeowners and businesses</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {customers.map((cust, i) => (
            <div
              key={i}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={cust.img}
                alt={cust.name}
                className="w-full h-[350px] object-contain bg-gray-100"
              />
              <div className="p-4 text-center">
                <h4 className="font-semibold text-lg">{cust.name}</h4>
                <p className="text-gray-500 text-sm">{cust.code}</p>
                <p className="text-gray-400 text-xs mt-1">{cust.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- PROJECTS SECTION ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-16 fade-section">
        <h2 className="text-2xl font-semibold text-center mb-3">
          Our Construction Projects in Bangalore
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          From premium residential towers to commercial hubs — see how we’re shaping Bangalore’s skyline.
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
          <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-full shadow-md transition">
            View More Projects
          </button>
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="bg-gray-50 py-20 fade-section relative">
        <h2 className="text-2xl font-semibold text-center mb-4">How We Work</h2>
        <p className="text-center text-gray-600 mb-10">
          Our construction process in Bangalore is clear and reliable:
          <br />
          <span className="font-semibold text-gray-800">
            Plan → Design → Build → Deliver
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

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default BangaloreConstruction;
