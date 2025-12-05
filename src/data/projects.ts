import Home1 from "@/assets/Home1.jpg";
import project2 from "@/assets/project-2.jpg";
import Home3 from "@/assets/ongoing1.jpg";

export interface Project {
  id: number;
  title: string;
  location: string;
  priceRange: string;
  units: string;
  image: string;
  description: string;
  size: string;
  possession: string;
  amenities: string[];
  mapUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Serene",
    location: "Proddatur",
    priceRange: "",
    units: "Indepedent House",
    image: Home1,
    description:
      "Experience luxury living at Serene, featuring world-class amenities in the peaceful surroundings of Proddatur.",
    size: "1200 - 2100 sq.ft",
    possession: "Dec 2025",
    amenities: [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Children’s Play Area",
      "Landscaped Gardens",
      "24/7 Security",
      "Power Backup",
      "Indoor Games",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4401575056284!2d78.55833847479324!3d14.750599385755874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb3d693b0b1ac13%3A0x53a091c5a0d92967!2sKeerthi%20Residency%2C%20KVR%20Padma%20Nagar%2C%20Proddatur!5e0!3m2!1sen!2sin!4v1730972345678",
  },

  {
    id: 2,
    title: "Elite Villas",
    location: "Jubilee Hills, Hyderabad",
    priceRange: "",
    units: "2 & 3  BHK Villas",
    image: project2,
    description:
      "Luxurious villas located in the prestigious Jubilee Hills area, offering premium comfort and world-class amenities.",
    size: "3500 - 5000 sq.ft",
    possession: "Ready to Move",
    amenities: [
      "Private Garden",
      "Home Automation",
      "Modular Kitchen",
      "Premium Fittings",
      "Servant Quarter",
      "Private Parking",
      "Solar Power",
      "Security System",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.518309691977!2d78.40362077479867!3d17.42389308345079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973408a49f2f%3A0xaea1c3bb536849d1!2sJubilee%20Hills%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1730972456789",
  },

  {
    id: 3,
    title: "Skyline",
    location: "Proddatur",
    priceRange: "",
    units: "Individual Houses",
    image: Home3,
    description:
      "High-rise luxury apartments in Kollur with skyline views, modern amenities, and excellent city connectivity.",
    size: "650 - 1800 sq.ft",
    possession: "Jun 2026",
    amenities: [
      "Infinity Pool",
      "Sky Lounge",
      "Co-working Space",
      "Yoga Deck",
      "Squash Court",
      "Multipurpose Hall",
      "EV Charging",
      "Concierge Service",
    ],
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.135604004507!2d78.29675097479906!3d17.45993908346806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcc08e530da8931%3A0x9f7f86ad4adfce2!2sKollur%2C%20Telangana%20502271!5e0!3m2!1sen!2sin!4v1730972556789",
  },
];
