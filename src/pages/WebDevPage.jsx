import React from "react";
import { Button } from "../components/Button"; // Import your Button component
import webDesignVideo from '../assets/web-design.gif';

export function WebDevPage() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <section className="text-center py-12 fade-in">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">Build Your Digital Presence</h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Elevate your business with top-tier web development services. From custom designs to e-commerce solutions, we bring your ideas to life!
        </p>
      </section>

      {/* Web Development Overview Section */}
      <section className="py-16 bg-orange-50 transition-all duration-700 ease-in-out transform hover:scale-105 reveal">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">What We Do</h2>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
            At CreativePlusStudio, we create high-performance websites that are visually stunning and functionally robust. Let’s build your digital success story together.
          </p>
        </div>
      </section>

      {/* Web Development Features Section */}
      <section className="py-16 slide-in-left">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">Our Cutting-Edge Web Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-slate-700">
            {[{title: "Custom Website Development", desc: "Unique, tailor-made websites for your business.", img: webDesignVideo},
              {title: "Responsive Design", desc: "Optimized for mobile, tablet, and desktop users.", img: webDesignVideo},
              {title: "Frontend & Backend Development", desc: "Complete stack solutions for functionality and design.", img: webDesignVideo},
              {title: "E-commerce Solutions", desc: "High-performance online stores with seamless shopping experiences.", img: webDesignVideo},
              {title: "CMS Integration", desc: "Easy-to-manage content solutions with WordPress, Shopify, and more.", img: webDesignVideo},
              {title: "API & Database Development", desc: "Secure and scalable data-driven solutions.", img: webDesignVideo}]
              .map((service, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img src={service.img} alt={service.title} className="w-full h-40 object-cover rounded-md mb-4" />
                  <strong>{service.title}</strong>
                  <p>{service.desc}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-16 transition-all duration-700 ease-in-out transform hover:scale-105 fade-in">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="flex justify-center mb-6">
            <img
              src={webDesignVideo}
              alt="Web Development Showcase"
              className="w-full max-w-3xl h-80 object-cover rounded-lg shadow-xl"
            />
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we build websites that deliver results.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center fade-in">
        <h2 className="text-4xl font-bold text-slate-700 mb-6">Let's Elevate Your Brand Together</h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Ready to take your business online? Our expert web developers are here to create a stunning website tailored to your needs.
        </p>
        {/* Button Component */}
        <Button 
          text="Get a Free Consultation" 
          onClick={() => window.location.href = "/contact"} 
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        />
      </section>
    </div>
  );
}
