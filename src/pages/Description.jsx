import React from "react";
import { Button } from "../components/Button";
import { FaPhone } from "react-icons/fa";

export default function Description() {
  return (
    <div className=" text-slate-800 py-12 px-6 md:px-16 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Company Overview */}
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 border-2 border-orange-500 rounded-full flex items-center justify-center">
              <span className="text-orange-500 text-2xl font-bold">C+</span>
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
            <li><a href="#" className="hover:text-orange-500 transition">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-slate-800 mb-4">SERVICES</h4>
          <ul className="text-slate-600 space-y-2">
            {["Graphic Designing", "Video Editing", "2D & 3D Animation", "3D Modeling", "Web Designing", "Digital Marketing"].map(service => (
              <li key={service}>
                <a href="#" className="hover:text-orange-500 transition">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-slate-800 mb-4">CAREERS</h4>
          <ul className="text-slate-600 space-y-2">
            {["Life at CreativePlusStudio", "Join Us"].map(item => (
              <li key={item}>
                <a href="#" className="hover:text-orange-500 transition">{item}</a>
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
            <p className="text-slate-600">New Gaira City, Kolkata, West Bengal 700152</p>
            <div className="flex items-center text-slate-600 mt-2">
              <FaPhone className="mr-2 text-orange-500" /> 7250186824
            </div>
          </div>

          {/* Patratu Office */}
          <div>
            <p className="text-orange-500 font-semibold">PATRATU</p>
            <p className="text-slate-600">Patratu, Jharkhand</p>
            <div className="flex items-center text-slate-600 mt-2">
              <FaPhone className="mr-2 text-orange-500" /> +91 900 278 9582
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
