import React from "react";
import { Button } from "../components/Button"; 
import modelingVideo from '../assets/modeling.mp4';

export function ModelingPage() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4">3D Modeling Services</h1>
        <p className="text-lg text-slate-700">
          Bring your ideas to life with realistic and stunning 3D models for various industries.
        </p>
      </section>

      {/* 3D Modeling Overview Section */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">What We Do</h2>
          <p className="text-lg text-slate-700 mb-6">
            At CreativePlusStudio, we provide high-quality 3D modeling services that cater to industries such as architecture, gaming, animation, and product design. Our expert designers use the latest tools and technologies to create models that are not only visually stunning but also functional.
          </p>
          <p className="text-lg text-slate-700">
            Whether you're looking to prototype a new product, design a game environment, or develop assets for a film, our 3D models are tailored to meet your needs.
          </p>
        </div>
      </section>

      {/* 3D Modeling Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">Our 3D Modeling Services Include:</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg text-slate-700">
            <li><strong>Product Modeling:</strong> Creating accurate and detailed models of products for visualization, prototyping, and marketing.</li>
            <li><strong>Character Modeling:</strong> Designing 3D characters for games, animations, and digital media.</li>
            <li><strong>Environment Modeling:</strong> Developing 3D environments and scenes for virtual reality, games, or films.</li>
            <li><strong>Architectural Visualization:</strong> Creating 3D models of buildings, interiors, and landscapes for architects and real estate developers.</li>
            <li><strong>Texturing and Lighting:</strong> Applying realistic textures and lighting to 3D models for lifelike representations.</li>
          </ul>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-center mb-6">
            <img
              src={modelingVideo}
              alt="3D Modeling"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <p className="text-lg text-slate-700 text-center mb-6">
            Let us help you bring your ideas to life with stunning 3D models for your business or creative projects.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-slate-700 mb-4">Ready to Bring Your Ideas to Life in 3D?</h2>
        <p className="text-lg text-slate-700 mb-8">
          Our team is here to create realistic and accurate 3D models tailored to your business or project. Let’s work together to bring your ideas into the digital world.
        </p>
       <Button 
          text="Contact Us Now" 
          onClick={() => window.location.href = "/contact"} // Redirect to contact page
        />      
      </section>
    </div>
  );
}
