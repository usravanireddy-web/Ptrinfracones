import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-apartment.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl text-white mx-auto animate-fade-in text-center">
          <h1 className="font-heading text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Construct Your Dream Home with 
             <span className="text-primary">PTRinfraCons</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Crafting premium spaces that embody elegance, comfort, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <Link to="/projects">Explore Projects</Link>
            </Button>
            <Button variant="secondary" size="lg">
              <Link to="/enquire">Enquire Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
