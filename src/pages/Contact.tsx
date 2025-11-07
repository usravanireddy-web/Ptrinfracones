import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const offices = [
    {
      city: "Hyderabad",
      address: "JaiHind, Enclave, Madhapur, Hyderabad - 500081",
      phone: "+91 93980 38426",
      email: "ptrinfracons@gmail.com",
    },
    // {
    //   city: "Bangalore",
    //   address: "456 MG Road, Ashok Nagar, Bangalore - 560001",
    //   phone: "+91 80 8765 4321",
    //   email: "bangalore@ptrinfracons.com",
    // },
    // {
    //   city: "Chennai",
    //   address: "789 Anna Salai, Nungambakkam, Chennai - 600034",
    //   phone: "+91 44 9876 5432",
    //   email: "chennai@ptrinfracons.com",
    // },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container px-4">
          <div className="max-w-1xl animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-center">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground text-center">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="card-gradient rounded-2xl p-8 shadow-lg">
                <h2 className="font-heading text-2xl font-bold mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email Address
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Subject
                    </label>
                    <Input placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us more about your requirements..."
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button variant="secondary" size="lg" className="w-full">
                    Submit Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <div className="card-gradient rounded-2xl p-8 shadow-lg">
                <h3 className="font-heading text-xl font-bold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <p className="text-muted-foreground">+91 7207878089</p>
                      <p className="text-muted-foreground">+91 40 8765 4321</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="text-muted-foreground">ptrinfracons@gmail.com</p>
                      <p className="text-muted-foreground">support@ptrinfracons.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Business Hours</p>
                      <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-muted-foreground">Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-gradient rounded-2xl p-8 shadow-lg">
                <h3 className="font-heading text-xl font-bold mb-6">
                  Visit Our Site Office
                </h3>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Head Office</p>
                    <p className="text-muted-foreground">
                     JaiHind, Enclave, Madhapur,<br />
                      Hyderabad - 500081,<br />
                      Telangana, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="section-padding bg-accent/30">
        <div className="container px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Our Offices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl p-6 shadow-lg hover-lift animate-fade-in"
              >
                <h3 className="font-heading text-xl font-bold mb-4 text-primary">
                  {office.city}
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{office.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </section>
    </div>
  );
};

export default Contact;
