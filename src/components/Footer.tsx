import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logoimg from "@/assets/logoimg.png";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61582370545912" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UC1234567890" },
    { icon: Instagram, href: "https://www.instagram.com/ptrinfracons/" },
    { icon: FaWhatsapp, href: "https://wa.me/919398038426" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/" className="flex items-center space-x-2">
                <img src={logoimg} alt="PTRinfraCons" className="h-32 w-auto hover:opacity-90 transition-opacity" />
              </Link>
            </div>
            <p className="text-background/80 mb-4">
              Building Landmarks of Trust. Luxury Meets Lifestyle.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                >
                  <social.icon className="h-5 w-5 text-primary hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-background/80">
              <li className="flex items-start">
                <a
                  href="https://www.google.com/maps?q=JaiHind+Enclave,+Madhapur,+Hyderabad+-+500081"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start hover:text-primary transition-colors"
                >
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                  <span>JaiHind Enclave, Madhapur, Hyderabad - 500081</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="tel:+919398038426"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+91 93980 38426</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="mailto:ptrinfracons@gmail.com"
                  className="flex items-center hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  <span>ptrinfracons@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Newsletter</h4>
            <p className="text-background/80 mb-4">
              Subscribe to get updates on new projects
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 text-center text-background/60 text-sm">
          <p>
            © 2024 PTRinfraCons. All rights reserved. | Privacy Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
