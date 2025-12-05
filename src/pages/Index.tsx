import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import lifestyleImage from "@/assets/lifestyle.jpg";
import {
  FaSwimmingPool,
  FaDumbbell,
  FaTree,
  FaChild,
  FaHome,
} from "react-icons/fa";
import ConstructionPackages from "./ConstructionPackages";
import { Link } from "react-router-dom";

const Index = () => {
  const amenities = [
    { icon: FaSwimmingPool, name: "Swimming Pool" },
    { icon: FaDumbbell, name: "Gymnasium" },
    { icon: FaTree, name: "Landscaped Parks" },
    { icon: FaChild, name: "Play Area" },
    { icon: FaHome, name: "Clubhouse" },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "5K+", label: "Happy Families" },
    { value: "16+", label: "Years of Trust" },
    { value: "15+", label: "Awards Won" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "PTRinfraCons Serene",
      text: "Moving into PTRinfraCons Serene was the best decision we made. The amenities are top-notch and the community is wonderful!",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Rajesh Kumar",
      location: "PTRinfraCons Elite Villas",
      text: "The quality of construction and attention to detail is exceptional. Truly a landmark of trust.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Anitha Reddy",
      location: "PTRinfraCons Skyline",
      text: "Living here feels like a dream. The views are breathtaking and the location couldn't be better!",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully crafted residential projects designed for
              modern living.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities & Lifestyle */}
      <ConstructionPackages />
      <section className="section-padding bg-accent/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Amenities & Lifestyle
              </h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Experience a lifestyle that redefines luxury. Our projects come
                equipped with world-class amenities designed to enhance your
                everyday living.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <amenity.icon className="text-primary text-xl" />
                    </div>
                    <span className="font-medium">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src={lifestyleImage}
                alt="Luxury Clubhouse"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose PTRinfraCons
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Designed for Life. Built for Legacy.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border-2 border-primary/20 hover:border-primary transition-colors animate-fade-in"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-accent/20 to-background">
        <div className="container px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              What Our Residents Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from the families who call PTRinfraCons home
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl p-6 shadow-md hover-lift animate-fade-in"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Updated CTA Section (Light Blue + Gold Full Width, Smaller Text + Better Spacing) */}
      <section className="relative w-full mt-16 bg-gradient-to-r from-[#B3E5FC] via-[#81D4FA] to-[#FFD700] text-[#0F1A2C] text-center py-16 shadow-2xl">
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 animate-fade-in tracking-tight">
            Schedule a Site Visit Today
          </h2>
          <p className="text-base md:text-lg mb-8 opacity-90 leading-relaxed animate-fade-in">
            Discover why{" "}
            <span className="font-bold text-blue-800">PTRinfraCons</span> is
            where luxury meets trust. Our dedicated team is ready to guide you
            through your journey toward your dream home.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-[#FFD700] text-blue-900 font-semibold hover:bg-[#FFEB3B] hover:text-black border-0 shadow-lg px-8 py-3 rounded-full text-base md:text-lg transition-transform hover:scale-105 hover:shadow-yellow-400/50 animate-fade-in"
          >
            <Link to="/enquire">Book a Visit</Link>
          </Button>
        </div>
      </section>

      {/* Floating Enquiry Button */}
      <div className="fixed bottom-6 right-6 z-40 animate-float">
        <Button
          variant="secondary"
          size="lg"
          className="shadow-xl rounded-full h-14 px-8"
        >
          <Link to="/enquire">Enquire Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
