import React from "react";
import { Button } from "../components/Button"; 
import webDesignVideo from '../assets/web-design.gif';

export function WebDesignPage() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <section className="text-center py-12 transition-all duration-500 ease-in-out transform hover:scale-105">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4">Web Development Services</h1>
        <p className="text-lg text-slate-700">
          Crafting responsive, user-friendly, and visually stunning websites that help your business stand out online.
        </p>
      </section>

      {/* Web Design Overview Section */}
      <section className="py-12 bg-orange-50 transition-all duration-500 ease-in-out hover:bg-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">What We Do</h2>
          <p className="text-lg text-slate-700 mb-6">
            At CreativePlusStudio, we specialize in creating custom websites that are responsive, functional, and visually appealing. Our designs focus on providing a seamless user experience, ensuring that your website is both beautiful and intuitive to navigate.
          </p>
          <p className="text-lg text-slate-700">
            Whether you're looking to build an e-commerce site, a portfolio, or a blog, our web design services are tailored to meet your specific needs. We work with you every step of the way to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Our Web Design Services Section */}
      <section className="py-12 transition-all duration-500 ease-in-out hover:bg-orange-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">Our Web Design Services Include:</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg text-slate-700">
            <li><strong>Website Development:</strong> Building robust websites tailored to your business needs.</li>
            <li><strong>Responsive Design:</strong> Ensuring your site works seamlessly on all devices.</li>
            <li><strong>Frontend Development:</strong> Creating interactive and visually appealing user interfaces.</li>
            <li><strong>Backend Development:</strong> Developing secure and scalable server-side solutions.</li>
            <li><strong>Full Stack Solutions:</strong> Offering end-to-end web development services.</li>
            <li><strong>E-commerce:</strong> Developing online stores that enhance user experience and drive sales.</li>
            <li><strong>CMS Integration:</strong> Integrating content management systems for easy site management.</li>
            <li><strong>API Development:</strong> Building and integrating APIs for enhanced functionality.</li>
          </ul>
        </div>
      </section>

      {/* Image Section with Smooth Transition */}
      <section className="py-12 bg-orange-100 transition-all duration-500 ease-in-out hover:bg-orange-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">Visual Experience</h2>
          <div className="flex justify-center space-x-8">
            <img
              src={webDesignVideo}
              alt="Web Design Sample 1"
              className="w-1/3 h-auto object-cover rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105"
            />
            <img
              src={webDesignVideo}
              alt="Web Design Sample 2"
              className="w-1/3 h-auto object-cover rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105"
            />
            <img
              src={webDesignVideo}
              alt="Web Design Sample 3"
              className="w-1/3 h-auto object-cover rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 text-center transition-all duration-500 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold text-slate-700 mb-4">Let’s Build Your Dream Website Together!</h2>
        <p className="text-lg text-slate-700 mb-8">
          Whether you need a brand-new website or a redesign of your current site, we are here to help. Our team will ensure your site not only looks great but also performs well.
        </p>
        <Button 
          text="Contact Us Now" 
          onClick={() => window.location.href = "/contact"} // Redirect to contact page
        />      
      </section>
    </div>
  );
}