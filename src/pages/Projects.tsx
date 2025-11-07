import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Home, IndianRupee, Calendar } from "lucide-react";
import WalkthroughVideos from "./WalkthroughVideos";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/10 to-secondary/10 tex
      t-center py-16">
        <div className="container px-4 text-center mb-8">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Our Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in text-center mx-auto">
            Explore our collection of premium residential projects across prime locations
          </p>
        </div>
         <WalkthroughVideos />
      </section>

  

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
