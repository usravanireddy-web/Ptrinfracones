import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoimg from "@/assets/logoimg.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const locationOptions = [
    { name: "Hyderabad", path: "/Hyderabad" },
    { name: "Bangalore", path: "/Bangalore" },
    { name: "Chennai", path: "/locations/chennai" },
    { name: "Karnataka", path: "/locations/karnataka" },
    { name: "Mumbai", path: "/locations/mumbai" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#111111]/95 backdrop-blur-md shadow-md"
          : "bg-[#1b1b1b]/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* LEFT SECTION: Logo + Location Dropdown */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={logoimg}
                alt="PTRinfraCons"
                className="h-20 w-auto object-contain"
              />
            </Link>

            {/* Location Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsLocationOpen(true)}
              onMouseLeave={() => setIsLocationOpen(false)}
            >
              <div className="flex items-center space-x-1 text-gray-300 text-sm font-medium cursor-pointer hover:text-[#FFD700] transition">
                <span>Locations</span>
                <ChevronDown className="w-4 h-4 mt-[2px]" />
              </div>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-44 bg-[#1a1a1a]/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 origin-top ${
                  isLocationOpen
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible"
                }`}
              >
                {locationOptions.map((city) => (
                  <Link
                    key={city.name}
                    to={city.path}
                    className="block px-4 py-2 text-gray-300 hover:text-[#FFD700] hover:bg-white/5 transition"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? "text-[#FFD700]"
                    : "text-gray-300 hover:text-[#FFD700]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Button
              variant="secondary"
              size="sm"
              className="bg-[#FFD700] hover:bg-[#ffcc33] text-black font-semibold shadow-md transition-all"
            >
              <Link to="/enquire">Enquire Now</Link>
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 text-gray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 bg-[#1a1a1a]/95 rounded-lg shadow-lg px-4 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-[#FFD700]"
                    : "text-gray-300 hover:text-[#FFD700]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Dropdown */}
            <div className="border-t border-white/10 pt-2">
              <div
                className="flex justify-between items-center text-gray-300 py-2 cursor-pointer hover:text-[#FFD700]"
                onClick={() => setIsLocationOpen(!isLocationOpen)}
              >
                <span>Locations</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isLocationOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              {isLocationOpen && (
                <div className="pl-3 space-y-1">
                  {locationOptions.map((city) => (
                    <Link
                      key={city.name}
                      to={city.path}
                      className="block py-1 text-sm text-gray-300 hover:text-[#FFD700] transition"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Button
              variant="secondary"
              size="sm"
              className="w-full bg-[#FFD700] hover:bg-[#ffcc33] text-black font-semibold"
            >
              <Link to="/enquire">Enquire Now</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
