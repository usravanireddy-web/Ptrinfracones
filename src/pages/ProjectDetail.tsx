import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { projects } from "@/data/projects";
import { MapPin, Home, Calendar, Download, Check } from "lucide-react";
import { useState } from "react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button variant="default" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  // Mock multiple images (in real app, would come from data)
  const images = [project.image, project.image, project.image];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Image Gallery */}
      <section className="pt-24">
        <div className="container px-4">
          <div className="mb-8">
            <img
              src={images[activeImage]}
              alt={project.title}
              className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} ${index + 1}`}
                className={`h-32 w-full object-cover rounded-lg cursor-pointer transition-all ${
                  activeImage === index
                    ? "ring-4 ring-primary"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setActiveImage(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="font-heading text-4xl font-bold mb-2">
                      {project.title}
                    </h1>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                    New Launch
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Price Range</p>
                    <p className="font-heading text-2xl font-bold text-secondary">
                      {project.priceRange}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Configuration</p>
                    <p className="font-semibold flex items-center">
                      <Home className="h-4 w-4 mr-1" />
                      {project.units}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Size</p>
                    <p className="font-semibold">{project.size}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Possession</p>
                    <p className="font-semibold flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.possession}
                    </p>
                  </div>
                </div>

                <Button variant="secondary" size="lg" className="mb-8">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
              </div>

              <div className="mb-8">
                <h2 className="font-heading text-2xl font-bold mb-4">
                  About This Project
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-bold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-accent/50"
                    >
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Map */}
              <div className="mb-8">
                <h2 className="font-heading text-2xl font-bold mb-4">Location</h2>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src={project.mapUrl}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Project Location"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="card-gradient rounded-xl p-6 shadow-lg sticky top-24">
                <h3 className="font-heading text-xl font-bold mb-4">
                  Get in Touch
                </h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email Address" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone Number" />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button variant="secondary" className="w-full" size="lg">
                    Submit Enquiry
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Our team will contact you within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
