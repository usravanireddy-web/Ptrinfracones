import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react"; // for icons

const ConstructionPackages = () => {
  const [activeTab, setActiveTab] = useState("Homes");
  const [location, setLocation] = useState("Hyderabad");
  const [district, setDistrict] = useState("Select AP District");
  const navigate = useNavigate();

  const apDistricts = [
    "Anantapur", "Chittoor", "East Godavari", "Guntur",
    "Krishna", "Kurnool", "Nellore", "Prakasam",
    "Srikakulam", "Visakhapatnam", "Vizianagaram",
    "West Godavari", "YSR Kadapa",
  ];

  type ConstructionPackage = {
    name: string;
    price: string;
    desc: string;
    highlights: string[];
    tag?: string;
  };

  // Regular Homes Data
  const homes: ConstructionPackage[] = [
    {
      name: "Basic",
      price: "₹1890",
      desc: "A budget package with no compromise on quality that includes all construction essentials",
      highlights: [
        "Trusted brand steel & cement",
        "Standard floor tiles upto ₹50/sqft",
        "Standard flush doors and window finish",
        "Tractor Emulsion finish",
        "Essential kitchen & bathroom fittings",
      ],
      
    },
    {
      name: "Classic",
      tag: "POPULAR",
      price: "₹2055",
      desc: "Our best seller package with upgraded brands like Jindal Steels, Hindware etc at a considerable price",
      highlights: [
        "Superior brand steel & cement",
        "Refined floor tiles upto ₹100/sqft",
        "Elegant teak doors and window finish",
        "Tractor Shyne Emulsion finish",
        "Stylish kitchen & bathroom",
      ],
     
    },
    {
      name: "Premium",
      price: "₹2455",
      desc: "An elegant package crafted for modern living with extra provisions like solar heater setup, puja room door etc",
      highlights: [
        "Superior Brand steel & cement",
        "Premium floor tiles upto ₹140/sqft",
        "Designer teak doors and window finish",
        "Apcolite Premium finish",
        "Quality kitchen & bathroom",
      ],
      
    },
    {
      name: "Royale",
      price: "₹2680",
      desc: "An ultimate plan with high-end finishes with amenities like EV charging, copper gas connection etc",
      highlights: [
        "Superior brand steel & cement",
        "Lavish floor tiles upto ₹160/sqft",
        "Designer teak doors and window finish",
        "Apex Ultima Exterior finish",
        "Lavish Fittings for kitchen & bathroom",
      ],
     
    },
  ];

  // Luxury Homes Data (added full details)
  const luxuryHomes: ConstructionPackage[] = [
    {
      name: "Freesia",
      price: "₹4190",
      desc: "A top-tier luxury package with marble flooring, home automation ensuring earthquake resistant designs",
      highlights: [
        "Burma teak door worth ₹80K",
        "Italian marble floor tiles value upto ₹380/sqft",
        "Home automation worth upto ₹5L",
        "Premium bathroom brands like Kohler/Grohe",
        "Soundproofed UPVC/wood windows",
      ],
     
    },
    {
      name: "Dahlia",
      price: "₹5340",
      desc: "An ultra-luxury package with premium amenities like smart automation, elegant interiors, and Mitsubishi elevator.",
      highlights: [
        "Burma teak door worth ₹1.2L",
        "Italian marble floor tiles value upto ₹450/sqft",
        "Smart home automation worth upto ₹7L",
        "Premium bathroom brands like Kohler/Grohe",
        "Soundproofed UPVC/wood windows with mesh shutters",
      ],
     
    },
    {
      name: "Magnolia",
      price: "₹6510",
      desc: "The pinnacle of opulence with indulgence features like private lap pool, advanced automation, and premium designer finishes.",
      highlights: [
        "Burma teak door worth ₹1.5L",
        "Italian marble floor tiles value upto ₹500/sqft",
        "Advanced automation + VDP upto ₹10L",
        "Jacuzzi with luxurious sanitary fittings of AS",
        "Double-glazed windows, sound + weather proof",
      ],
    
    },
  ];

  

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        Construction Packages in {location}
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
        >
          <option>Bangaluru</option>
          <option>Hyderabad</option>
          <option>Vijayawada</option>
          <option>Visakhapatnam</option>
        </select>

        <select
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500"
        >
          <option disabled>Select AP District</option>
          {apDistricts.map((dist) => (
            <option key={dist}>{dist}</option>
          ))}
        </select>

        <div className="flex gap-2 border rounded-lg overflow-hidden">
          <button
            onClick={() => setActiveTab("Homes")}
            className={`px-4 py-2 ${
              activeTab === "Homes"
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Homes
          </button>
          <button
            onClick={() => setActiveTab("Luxury Homes")}
            className={`px-4 py-2 ${
              activeTab === "Luxury Homes"
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            Luxury Homes
          </button>
        </div>
      </div>

      {/* Package Cards */}
      <div
        className={`grid ${
          activeTab === "Homes" ? "md:grid-cols-4" : "md:grid-cols-3"
        } gap-6`}
      >
        {(activeTab === "Homes" ? homes : luxuryHomes).map((pkg) => (
          <div
            key={pkg.name}
            className="relative border rounded-2xl shadow-md p-6 hover:shadow-lg transition bg-white"
          >
            {pkg.tag && (
              <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {pkg.tag}
              </span>
            )}

            <h3 className="font-semibold text-lg mb-1">{pkg.name}</h3>
            <p className="text-orange-600 font-bold mb-2">
              {pkg.price} <span className="text-gray-600 text-sm">per sqft</span>
            </p>
            <p className="text-sm text-gray-600 mb-4 min-h-[60px]">{pkg.desc}</p>

            {pkg.highlights && (
              <>
                <h4 className="font-semibold text-sm mb-2 text-gray-800">
                  Highlights
                </h4>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  {pkg.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="text-green-500 w-4 h-4 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

           

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => navigate('/compare')}
                className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-3 py-1 rounded-md text-sm transition"
              >
                Learn More
              </button>
             
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ConstructionPackages;
