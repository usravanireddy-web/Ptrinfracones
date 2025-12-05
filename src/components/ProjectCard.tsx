import { Button } from "@/components/ui/button";
import { MapPin, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
  priceRange: string;
  units: string;
}

const ProjectCard = ({ id, image, title, location, priceRange, units }: ProjectCardProps) => {
  return (
    <div className="group card-gradient rounded-xl overflow-hidden shadow-md hover-lift">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          New Launch
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold mb-2">{title}</h3>

        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center text-muted-foreground mb-4">
          <Home className="h-4 w-4 mr-1" />
          <span className="text-sm">{units}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-heading text-xl font-bold text-secondary">{priceRange}</p>
          </div>
        </div>

        <Link to={`/projects/${id}`}>
          <Button variant="secondary" className="w-full">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
