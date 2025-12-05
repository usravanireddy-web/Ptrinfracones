import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, Building2, Heart } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2009", event: "Company Founded" },
    { year: "2014", event: "First Luxury Project Launched" },
    { year: "2018", event: "5000 Happy Families" },
    { year: "2020", event: "Expansion to Multiple Cities" },
    { year: "2022", event: "50+ Projects Delivered" },
    { year: "2025", event: "16 Years of Excellence" },
  ];

  const values = [
    {
      icon: Building2,
      title: "Quality Construction",
      description:
        "We never compromise on quality. Every project is built with the finest materials and craftsmanship.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.",
    },
    {
      icon: Award,
      title: "Excellence & Innovation",
      description:
        "We constantly innovate to bring you the best in modern residential living.",
    },
    {
      icon: Heart,
      title: "Trust & Transparency",
      description:
        "We build relationships based on trust, honesty, and complete transparency.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* ===== Hero Section ===== */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-[#E3F2FD] to-[#FFF9C4]">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-[#0F1A2C]">
              Building Landmarks of Trust
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              For over 16 years, PTRinfraCons has been synonymous with quality, trust, and excellence in
              real estate development.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Our Story ===== */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#0F1A2C]">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2009, PTRinfraCons began with a simple vision: to create homes that families
                  would cherish for generations. What started as a small venture has grown into one of the
                  most trusted names in real estate.
                </p>
                <p>
                  Over the years, we've delivered 50+ residential projects, housing over 5000 happy
                  families. Our commitment to quality, transparency, and customer satisfaction has earned us
                  numerous awards and, more importantly, the trust of our customers.
                </p>
                <p>
                  Today, PTRinfraCons stands as a symbol of luxury, innovation, and reliability. We continue
                  to push boundaries, embracing new technologies and sustainable practices to create homes
                  that are not just places to live, but spaces to thrive.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                alt="Modern Architecture"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Timeline ===== */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-[#0F1A2C]">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-center transition-all hover:translate-x-2 duration-300"
              >
                <div className="w-24 font-heading text-2xl font-bold text-[#1E88E5] flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="flex-1 h-px bg-gray-300" />
                <div className="flex-1 pl-8">
                  <p className="font-semibold text-lg text-gray-800">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Our Values ===== */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 text-[#0F1A2C]">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-[#FFD700]/40 bg-white hover:shadow-lg hover:shadow-[#FFD700]/30 transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-[#B3E5FC]/40 flex items-center justify-center mx-auto mb-4 border border-[#81D4FA]/50">
                  <value.icon className="h-8 w-8 text-[#0F1A2C]" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-[#0F1A2C]">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Recognition & Awards ===== */}
      <section className="py-20 bg-gradient-to-r from-[#B3E5FC] via-[#81D4FA] to-[#FFD700] text-[#0F1A2C]">
        <div className="container px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Recognition & Awards
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed opacity-90">
            Celebrating excellence, innovation, and trust — our journey of achievements reflects the
            confidence our customers and the industry place in us.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              "Best Residential Developer 2023",
              "Customer Satisfaction Award",
              "Innovation in Design Award",
              "Sustainable Building Excellence",
            ].map((award, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/60 backdrop-blur-md shadow-md hover:shadow-xl hover:shadow-[#FFD700]/40 transition-all duration-500 border border-[#81D4FA]/40"
              >
                <Award className="h-12 w-12 mx-auto mb-3 text-[#0F1A2C]" />
                <p className="font-semibold text-[#0F1A2C]">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
