import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "secondary" | "primary";
  size?: "lg" | "md" | "sm";
  className?: string;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md font-semibold focus:outline-none transition-all";
  const variants: Record<string, string> = {
    primary: "bg-red-500 text-white hover:bg-red-600",
    outline: "bg-card text-foreground hover:bg-card/90 border",
    secondary: "bg-yellow-400 text-red-700 hover:bg-yellow-500",
  };
  const sizes: Record<string, string> = {
    lg: "px-6 py-3 text-lg",
    md: "px-4 py-2 text-sm",
    sm: "px-3 py-1 text-sm",
  };
  const cls = [base, variants[variant] ?? "", sizes[size] ?? "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

const ComparePackages = () => {
  const [activeTab, setActiveTab] = useState("homes");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");

  const locations = [
    "Vijayawada",
    "Guntur",
    "Visakhapatnam",
    "Nellore",
    "Tirupati",
    "Anantapur",
    "Kurnool",
    "Kadapa",
  ];

  const homes = [
    { name: "Basic", price: "₹1900 per sqft" },
    { name: "Classic", price: "₹2155 per sqft" },
    { name: "Premium", price: "₹2555 per sqft" },
    { name: "Royale", price: "₹2780 per sqft" },
  ];

  const homesFeatures = {
    STRUCTURE: {
      Steel: [
        "Bondex / Radha / Tirumala",
        "JSW One / SAIL / Vizag",
        "JSW One / SAIL / Vizag",
        "JSW One / SAIL / Vizag",
      ],
      Cement: [
        "Bharathi / Zuari / Dalmia",
        "Bharathi / Zuari / Dalmia",
        "Ultratech / Ramco Supercrete / ACC",
        "Ultratech / Ramco Supercrete / ACC",
      ],
      Aggregates: ["✅", "✅", "✅", "✅"],
      "Block Work": ["✅", "✅", "✅", "✅"],
      "RCC Mix": ["✅", "✅", "Ultratech", "Ultratech"],
      "Ceiling Height": ["✅", "✅", "✅", "✅"],
    },
    KITCHEN: {
      "Ceramic Wall Dado": [
        "Upto ₹30/sqft",
        "Upto ₹50/sqft",
        "Upto ₹70/sqft",
        "Upto ₹80/sqft",
      ],
      Sink: [
        "Upto ₹3000 (Single bowl SS)",
        "Upto ₹6000 (Single bowl SS)",
        "Upto ₹8000 (Futura / Carysil)",
        "Upto ₹8000 (Futura / Carysil)",
      ],
      "Sink Faucet": ["Upto ₹1200", "Upto ₹1900", "Upto ₹3400", "Upto ₹3400"],
      "Sink Accessories": [
        "ISI Marked",
        "Hindware / Parryware / Jaquar",
        "Hindware / Parryware / Jaquar",
        "Hindware / Parryware / Jaquar",
      ],
    },
    BATHROOM: {
      "Ceramic Wall Dado": [
        "Upto ₹30/sqft",
        "Upto ₹50/sqft",
        "Upto ₹70/sqft",
        "Upto ₹80/sqft",
      ],
      "Sanitary & CP Fittings": [
        "₹29,000 / 1000sqft (Hindware)",
        "₹49,000 / 1000sqft (Parryware)",
        "₹69,000 / 1000sqft (Jaquar/equivalent)",
        "₹79,000 / 1000sqft (Kohler/equivalent)",
      ],
      "Water Heater Provision": ["✅", "✅", "✅", "✅"],
    },
    "DOORS & WINDOWS": {
      "Main Door": [
        "Teak Frame + Flush Door",
        "Teak Veneer Finish Door",
        "Solid Teak Door",
        "Designer Veneer Door + Polish",
      ],
      "Internal Doors": [
        "Flush Door ₹10k",
        "Membrane Door ₹15k",
        "Membrane Door ₹20k",
        "Premium Veneer Door ₹25k",
      ],
    },
  };

  const luxury = [
    { name: "Freesia", price: "₹4910 per sqft" },
    { name: "Delhia", price: "₹5540 per sqft" },
    { name: "Magnolia", price: "₹6510 per sqft" },
  ];

  const luxuryFeatures = {
    STRUCTURE: {
      Steel: [
        "JSW Neosteel Fe 550D",
        "TATA Tiscon 600 Grade",
        "TATA EQR 700 Grade",
      ],
      Cement: ["Ultratech OPC 53", "Birla Super Premium", "ACC Gold Elite"],
      Aggregates: ["✅", "✅", "✅"],
      "Block Work": ["✅", "✅", "✅"],
      "RCC Mix": ["M25 Design Mix", "M30 Ready Mix", "M35 Ready Mix"],
      "Ceiling Height": ["10 ft", "10.5 ft", "11 ft"],
    },
    KITCHEN: {
      "Wall Dado": [
        "Italian Marble ₹250/sqft",
        "Granite Designer ₹300/sqft",
        "Imported Italian Marble ₹400/sqft",
      ],
      Sink: ["Franke ₹20k", "Franke Premium ₹25k", "Blanco ₹30k"],
      "Sink Faucet": ["Grohe ₹8k", "Kohler ₹12k", "Kohler Designer ₹18k"],
      "Sink Accessories": [
        "Hindware / Jaquar",
        "Grohe / Kohler",
        "Hansgrohe / Kohler",
      ],
    },
    BATHROOM: {
      "Wall Dado": ["Italian ₹250/sqft", "Italian ₹300/sqft", "Onyx ₹400/sqft"],
      "CP Fittings": ["Grohe ₹25k", "Kohler ₹30k", "Hansgrohe ₹40k"],
      "Water Heater Provision": ["✅", "✅", "✅"],
      "Jacuzzi / Shower Panel": ["✅", "Optional", "Included"],
    },
    "DOORS & WINDOWS": {
      "Main Door": [
        "Teak Veneer Finish",
        "Designer Teak with Carving",
        "Solid Teak Imported Veneer",
      ],
      "Internal Doors": ["Veneer ₹25k", "Veneer ₹30k", "Veneer ₹35k"],
      "Windows": [
        "UPVC (Fenesta / equivalent)",
        "Aluminium (Hindalco)",
        "Slim Aluminium Frames (Saint-Gobain Glass)",
      ],
    },
  };

  const renderTable = (packages, features) => (
    <div className="overflow-x-auto shadow-lg rounded-2xl border border-yellow-300 bg-white mt-8">
      <table className="min-w-full text-sm">
        <thead className="bg-gradient-to-r from-yellow-400 to-red-500 text-white">
          <tr>
            <th className="p-4 text-left font-semibold">Features</th>
            {packages.map((pkg) => (
              <th key={pkg.name} className="p-4 text-center font-semibold">
                <div>{pkg.name}</div>
                <div className="text-xs text-yellow-100">{pkg.price}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-yellow-200">
          {Object.keys(features).map((section) => (
            <React.Fragment key={section}>
              <tr className="bg-yellow-100">
                <td className="p-3 font-bold text-red-700" colSpan={packages.length + 1}>
                  {section}
                </td>
              </tr>
              {Object.keys(features[section]).map((feature) => (
                <tr key={feature}>
                  <td className="p-3 font-medium">{feature}</td>
                  {features[section][feature].map((value, idx) => (
                    <td key={idx} className="p-3 text-center">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800">
      <Navbar />

      {/* Header Section with Better Spacing */}
      <div className="max-w-7xl mx-auto text-center pt-20 pb-8">
        <h1 className="text-5xl font-bold text-red-600 mb-4">Compare Packages</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Explore and compare our Home and Luxury Home packages to find the perfect fit for your dream home.
        </p>
      </div>

      {/* Location + Tabs */}
      <div className="flex justify-center items-center space-x-6 mb-10">
        <div className="relative">
          <Button
            variant="secondary"
            size="md"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-60 rounded-full py-3 text-base shadow-lg"
          >
            {selectedLocation}
          </Button>
          {isDropdownOpen && (
            <div className="absolute mt-2 w-60 bg-white border border-yellow-400 rounded-2xl shadow-xl z-10">
              {locations.map((loc) => (
                <div
                  key={loc}
                  className="px-4 py-2 hover:bg-yellow-100 cursor-pointer text-left text-sm text-gray-700 rounded-lg"
                  onClick={() => {
                    setSelectedLocation(loc);
                    setIsDropdownOpen(false);
                  }}
                >
                  {loc}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => setActiveTab("homes")}
          className={`px-8 py-2 rounded-full font-semibold border-2 transition ${
            activeTab === "homes"
              ? "bg-red-500 border-red-500 text-white shadow-lg"
              : "border-yellow-400 text-red-600 bg-yellow-100 hover:bg-yellow-200"
          }`}
        >
          Homes
        </button>
        <button
          onClick={() => setActiveTab("luxury")}
          className={`px-8 py-2 rounded-full font-semibold border-2 transition ${
            activeTab === "luxury"
              ? "bg-red-500 border-red-500 text-white shadow-lg"
              : "border-yellow-400 text-red-600 bg-yellow-100 hover:bg-yellow-200"
          }`}
        >
          Luxury Homes
        </button>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-4">
        {activeTab === "homes"
          ? renderTable(homes, homesFeatures)
          : renderTable(luxury, luxuryFeatures)}
      </div>

      {/* Footer Section */}
      <div className="text-center mt-10 text-sm text-gray-600 px-4">
        <p>*All fittings can be customized at additional cost. Contact us for complete details.</p>
      </div>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-red-500 to-yellow-400 text-white text-center py-16 mt-12 rounded-2xl mx-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule a Site Visit Today</h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
          Experience the PTRinfraCons difference firsthand. Our team is ready to show you around.
        </p>
        <Link to="/enquire">
          <Button
            variant="outline"
            size="lg"
            className="bg-white text-red-600 hover:bg-yellow-100 border-0 shadow-lg"
          >
            Book a Visit
          </Button>
        </Link>
      </section>

      <Footer />

      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
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

export default ComparePackages;
