import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import WalkthroughVideos from "./WalkthroughVideos";
import { Button } from "@/components/ui/button";

// Ongoing project images
import ongoing1 from "@/assets/ongoing1.jpg";
import ongoing2 from "@/assets/ongoing5.jpeg";
import ongoing3 from "@/assets/ongoing4.jpeg";

// Keerthi Residency images (JPEGs from PDFs)
import keerthiBrochure from "@/assets/keerthi_page_1.jpg";
import keerthiFloorPlan from "@/assets/keerthi_page_2.jpg";

const ongoingProjects = [
  {
    id: 101,
    title: "Keerthi Residency – Phase 2",
    location: "Proddatur",
    description:
      "Keerthi Residency Phase 2 is progressing with premium-quality construction and modern lifestyle upgrades.",
    image: ongoing1,
    status: "Under Construction",
  },
  {
    id: 102,
    title: "Keerthi Elite Towers",
    location: "Proddatur",
    description:
      "A premium tower offering spacious layouts, landscaped areas, and advanced safety features.",
    image: ongoing2,
    status: "Work in Progress",
  },
  {
    id: 103,
    title: "Keerthi Luxury Homes",
    location: "Proddatur",
    description:
      "Smart luxury homes with automation, elegant interiors, and high-end finishing work underway.",
    image: ongoing3,
    status: "Finishing Stage",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-sky-100 to-yellow-50 text-center">
        <div className="container px-4 text-center mb-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 animate-fade-in text-sky-800">
            Our Projects
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-fade-in">
            Explore our collection of premium residential developments across prime locations.
          </p>
        </div>

        <WalkthroughVideos />
      </section>

      {/* Completed Projects FIRST */}
      <section className="section-padding">
        <div className="container px-4">
          <h2 className="text-center font-heading text-3xl md:text-4xl font-bold mb-4 text-sky-800">
            Completed Projects
          </h2>

          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Our completed projects stand as a testament to our commitment to superior construction
            quality, timely delivery, and exceptional craftsmanship—providing families with modern,
            comfortable, and long-lasting homes.
          </p>

          {/* Completed Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Projects SECOND */}
      <section className="section-padding bg-sky-50/70">
        <div className="container px-4">
          <h2 className="text-center font-heading text-3xl md:text-4xl font-bold mb-4 text-sky-800">
            Ongoing Projects
          </h2>

          <p className="text-center text-slate-600 max-w-2xl mx-auto">
            Our ongoing developments focus on high-quality construction, sustainability, and timely
            delivery — ensuring long-term value for residents.
          </p>

          {/* Ongoing Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {ongoingProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl bg-white shadow-lg hover:shadow-xl transition overflow-hidden flex flex-col border border-slate-200"
              >
                {/* Image + Status Badge */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-yellow-300 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {project.status}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 flex-1">
                  <h3 className="font-heading text-xl font-bold mb-2 text-sky-800">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 mb-2">
                    📍 {project.location}
                  </p>
                  <p className="text-slate-600 text-sm">
                    {project.description}
                  </p>
                </div>

                {/* VIEW MORE BUTTON */}
                <div className="p-6 pt-0">
                  <Button
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                    onClick={() => (window.location.href = "/proddatur")}
                  >
                    View More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⭐ KEERTHI RESIDENCY SPOTLIGHT – AFTER ONGOING PROJECTS */}
      <section className="section-padding bg-gradient-to-r from-sky-100 via-white to-yellow-100">
        <div className="container px-4">
          <div className="flex flex-col items-center mb-8 text-center">
            <span className="inline-flex items-center text-xs font-semibold bg-yellow-300/80 text-slate-900 px-3 py-1 rounded-full">
              Signature Highlight · Keerthi Residency
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-4 text-sky-800">
              Keerthi Residency – Brochure & Floor Plan
            </h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mt-2">
              Get a closer look at the detailed brochure, typical floor layout, car parking plan,
              and isometric views of our premium 3 BHK deluxe flats at Keerthi Residency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,1.1fr] gap-8 items-stretch">
            {/* Brochure card */}
            <div className="group rounded-2xl bg-white border border-sky-100 shadow-lg hover:shadow-2xl transition flex flex-col overflow-hidden">
              <div className="relative h-60 md:h-72 overflow-hidden bg-slate-100">
                <img
                  src={keerthiBrochure}
                  alt="Keerthi Residency Brochure"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-yellow-300 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Project Brochure
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col gap-3">
                <h3 className="font-heading text-lg font-semibold text-sky-800">
                  Elevation & Isometric Views
                </h3>
                <p className="text-xs md:text-sm text-slate-600 flex-1">
                  View the building elevation, isometric 3D flat visuals and overall character of
                  Keerthi Residency along with key highlights.
                </p>
                <Button
                  className="mt-1 bg-sky-500 hover:bg-sky-600 text-white text-xs md:text-sm w-full"
                  onClick={() => window.open(keerthiBrochure, "_blank")}
                >
                  View Brochure
                </Button>
              </div>
            </div>

            {/* Floor Plan card */}
            <div className="group rounded-2xl bg-white border border-yellow-100 shadow-lg hover:shadow-2xl transition flex flex-col overflow-hidden">
              <div className="relative h-60 md:h-72 overflow-hidden bg-slate-100">
                <img
                  src={keerthiFloorPlan}
                  alt="Keerthi Residency Floor Plan"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Floor Plan & Layout
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col gap-3">
                <h3 className="font-heading text-lg font-semibold text-sky-800">
                  Typical Floor & Parking Plan
                </h3>
                <p className="text-xs md:text-sm text-slate-600 flex-1">
                  Explore the detailed flat layouts, floor-wise circulation, and car parking plan
                  designed for maximum convenience and comfort.
                </p>
                <Button
                  className="mt-1 bg-sky-500 hover:bg-sky-600 text-white text-xs md:text-sm w-full"
                  onClick={() => window.open(keerthiFloorPlan, "_blank")}
                >
                  View Floor Plan 
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default Projects;
