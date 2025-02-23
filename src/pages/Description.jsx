import React from "react";
import { FaPhone } from "react-icons/fa";
import Name from "../assets/name.png";


export default function Description() {
  return (
    <section
      className="w-full px-6 md:px-16 lg:px-24 py-12 md:py-20 lg:py-24 overflow-hidden"
      id="description-section"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Overview */}
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <div className="w-32 h-32  flex items-center justify-center">
              <img src={Name} alt="Name"/>
            </div>
          </div>
          <p className="text-slate-600 mb-4">
            Creative Plus is a dynamic digital agency known for its innovative solutions and strong values.
            We deliver impactful marketing strategies to help your business grow.
          </p>
          <h4 className="text-4xl sm:text-5xl font-extrabold text-orange-600 leading-tight mb-6">
            Discover How We Can Help Your Business Grow
          </h4>
        </div>

        {/* Links Sections */}
        <div>
          <h4 className="text-lg font-semibold text-slate-800 mb-4">COMPANY</h4>
          <ul className="text-slate-600 space-y-2">
            <li>
              <a href="/about" className="hover:text-orange-500 transition">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-slate-800 mb-4">SERVICES</h4>
          <ul className="text-slate-600 space-y-2">
            {[
              { title: "Graphic Design", link: "/graphic-design" },
              { title: "2D & 3D Animation", link: "/animation" },
              { title: "Video Editing", link: "/video-editing" },
              { title: "3D Modeling", link: "/3d-modeling" },
              { title: "Digital Marketing", link: "/digital-marketing" },
              { title: "Website Development", link: "/web-development" },
              // { title: "Printing", link: "/graphic-design"},
              // { title: "CGI Ads", link: "/video-editing"},
              // { title: "App Development", link: "/web-development"},
            ].map((service) => (
              <li key={service.link}>
                <a href={service.link} className="hover:text-orange-500 transition">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-slate-800 mb-4">CAREERS</h4>
          <ul className="text-slate-600 space-y-2">
            {["Life at CreativePlusStudio", "Join Us"].map((item) => (
              <li key={item}>
                <a href="/career" className="hover:text-orange-500 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold text-slate-800 mb-4">CONTACT US</h4>

          {/* Kolkata Office */}
          <div className="mb-4">
            <p className="text-orange-500 font-semibold">INDIA</p>
            <p className="text-slate-600">New Delhi, Noida, Uttar Pradesh 201304</p>
            <div className="flex items-center text-slate-600 mt-2">
              <FaPhone className="mr-2 text-orange-500" /> +91 - 9220219521
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
