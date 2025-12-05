import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./LandingPage.css";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement | null>(null);

  // EmailJS credentials
  const EMAILJS_SERVICE_ID = "service_0e2marv";
  const EMAILJS_TEMPLATE_ID = "template_y2askw4";
  const EMAILJS_PUBLIC_KEY = "NhoPKkNIWThj3FZEu";

  // Google Apps Script Web App URL
  const GOOGLE_SHEET_API =
    "https://script.google.com/macros/s/AKfycbxi5oLq5KNUtMxZmBOG6x-hL1z4ak5Y4kJQTiKRIH6J4u9yDgfNzBBwJVikPIhd8iJl/exec ";
  const projects = [
    {
      name: "PTR Lakeview Residences",
      location: "Miyapur, Hyderabad",
      type: "2 & 3 BHK Apartments",
      status: "Under Construction",
      tag: "Premium Gated Community",
    },
    {
      name: "PTR Skyline Towers",
      location: "Kukatpally, Hyderabad",
      type: "2, 3 & 4 BHK High-rise",
      status: "Bookings Open",
      tag: "Skydeck & Clubhouse",
    },
    {
      name: "PTR Green County Villas",
      location: "Kompally, Hyderabad",
      type: "Luxury Villas",
      status: "Limited Units",
      tag: "Private Gardens & Parks",
    },
    {
      name: "PTR Commercial Square",
      location: "Financial District, Hyderabad",
      type: "Grade-A Office Spaces",
      status: "Possession Soon",
      tag: "Ideal for IT & Startups",
    },
  ];

  const highlights = [
    {
      title: "Prime Locations",
      text: "Projects strategically located near IT hubs, metro stations and key city conveniences.",
    },
    {
      title: "Quality Construction",
      text: "Branded materials, modern engineering and strict quality checks at every stage.",
    },
    {
      title: "Transparent Process",
      text: "Clear documentation, RERA-registered projects and honest guidance at each step.",
    },
    {
      title: "On-Time Delivery",
      text: "Committed project timelines with regular progress updates shared to buyers.",
    },
  ];

  const testimonials = [
    {
      name: "Venkatesh & Sravya",
      location: "Home Buyers • Miyapur",
      text: "PTR Infracons team helped us choose the right flat within our budget and handled the entire process smoothly.",
    },
    {
      name: "Rahul Sharma",
      location: "IT Professional • Hi-tech City",
      text: "Location, amenities and transparency during registration really stood out. Very satisfied with my investment.",
    },
    {
      name: "Meera & Family",
      location: "Villa Owner • Kompally",
      text: "From site visit to handover, they kept everything clear and well-organised. Highly recommended for first-time buyers.",
    },
  ];

  // SUBMIT HANDLER: EmailJS + Google Sheet
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formEl = formRef.current;

    // Get values from the form
    const name = formEl.user_name.value;
    const contact = formEl.user_contact.value;
    const email = formEl.user_email.value;

    // 1️⃣ Send to Google Sheet via Apps Script using FormData
    try {
      const sheetFormData = new FormData();
      sheetFormData.append("name", name);
      sheetFormData.append("contact", contact);
      sheetFormData.append("email", email);

      await fetch(GOOGLE_SHEET_API, {
        method: "POST",
        mode: "no-cors", // opaque response, but request still reaches Apps Script
        body: sheetFormData,
      });

      // You won't see a response because of no-cors, but row should be added
    } catch (err) {
      console.error("Google Sheets API Error:", err);
    }

    // 2️⃣ Send Email via EmailJS
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      console.log("EmailJS sent successfully");
    } catch (error) {
      console.error("EmailJS error:", error);
    }

    // 3️⃣ Final actions
    alert("Thank you! We received your details. We’ll call you soon.");
    formRef.current?.reset();
    navigate("/thankyou");
  };

  return (
    <div className="landing-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <h1 className="hero-title">
              Construct Your Dream Home with{" "}
              <span className="brand-text">PTR Infracons</span>
            </h1>

            <div className="hero-meta">
              <p className="hero-note">
                Our property advisor will call you within{" "}
                <strong>30 minutes</strong>.
              </p>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-card">
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Modern residential apartment community"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section section-contact" id="lead-form-section">
        <div className="section-header" />

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
            <span className="form-badge">Priority Call Back • 30 mins</span>
            <h3 className="form-title">Book a free site visit</h3>

            <div className="form-row">
              <div className="form-field">
                <label>name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-field">
                <label>contact</label>
                <input
                  type="tel"
                  name="user_contact"
                  required
                  placeholder="Your mobile number"
                />
              </div>
            </div>

            <div className="form-row form-row-single">
              <div className="form-field">
                <label>email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter Your Email"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn brand-btn btn-full form-submit"
            >
              Submit &amp; Get Call Back
            </button>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <h3>Contact &amp; Office</h3>
            <ul>
              <li>
                <strong>Phone:</strong> +91 7207878089
              </li>
              <li>
                <strong>Email:</strong> ptrinfracons@gmail.com
              </li>
              <li>
                <strong>Address:</strong> JaiHind, Enclave, Madhapur,
                <br />
                Hyderabad - 500081,
                <br />
                Telangana, India
              </li>
              <li>
                <strong>Office Hours:</strong> Mon–Sat: 9AM–7PM
                <br />
                Sunday: 10AM–5PM
              </li>
            </ul>

            <Link to="/contact" className="btn brand-outline-btn small-btn">
              Go to Full Contact Page
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section section-light">
        <div className="section-header">
          <h2>Featured PTR Projects</h2>
          <p>Residential & commercial developments with modern amenities.</p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.name} className="project-card">
              <div className="project-tag">{p.tag}</div>
              <h3>{p.name}</h3>
              <p className="project-location">{p.location}</p>
              <p className="project-type">{p.type}</p>
              <div className="project-meta">
                <span className="project-status">{p.status}</span>
              </div>
              <button className="btn small-btn project-btn">
                Request Details
              </button>
            </div>
          ))}
        </div>

        <div className="center">
          <Link to="/projects" className="btn brand-outline-btn small-btn">
            View All Projects
          </Link>
        </div>
      </section>

      {/* WHY PTR */}
      <section className="section section-muted">
        <div className="section-header">
          <h2>Why Choose PTR Infracons</h2>
          <p>Trusted real estate partner focused on quality & transparency.</p>
        </div>

        <div className="steps-grid">
          {highlights.map((h) => (
            <div key={h.title} className="step-card">
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section-light">
        <div className="section-header">
          <h2>What Our Buyers Say</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <p className="testimonial-text">“{t.text}”</p>
              <p className="testimonial-name">{t.name}</p>
              <p className="testimonial-location">{t.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919000204921"
        className="whatsapp-fab"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="whatsapp-icon" viewBox="0 0 32 32">
          <path
            d="M16.04 4C9.96 4 5 8.96 5 15.02c0 2.44.82 4.7 2.23 6.52L5 28l6.6-2.16c1.76.96 3.77 1.48 5.86 1.48h.01c6.08 0 11.04-4.96 11.04-11.02C28.5 8.96 22.52 4 16.04 4zm6.46 15.73c-.27.76-1.55 1.45-2.16 1.49-.55.04-1.24.06-2-.13-.46-.12-1.05-.34-1.82-.67-3.2-1.39-5.28-4.63-5.44-4.85-.16-.22-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.64-.4.85-.4.22 0 .43.01.62.01.2 0 .47-.08.73.56.27.67.92 2.3 1 2.47.08.17.13.37.02.59-.11.22-.17.36-.34.55-.17.19-.35.43-.5.58-.17.17-.35.36-.15.71.19.32.86 1.42 1.85 2.3 1.27 1.13 2.34 1.48 2.7 1.64.35.15.56.13.77-.08.21-.21.89-.94 1.13-1.26.24-.32.48-.27.81-.16.33.11 2.08.98 2.43 1.16.36.18.59.27.68.42.09.15.09.83-.18 1.59z"
            fill="#25D366"
          />
        </svg>
      </a>
    </div>
  );
};

export default LandingPage;
