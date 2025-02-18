import React from "react";
import { Button } from "../components/Button"; 
import graphicDesignVideo from '../assets/graphic-design.gif';


export function GraphicDesignPage() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4">Graphic Designing Services</h1>
        <p className="text-lg text-slate-700">
          Transforming your ideas into visually captivating designs that tell your brand story.
        </p>
      </section>

      {/* Graphic Design Overview Section */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">What We Do</h2>
          <p className="text-lg text-slate-700 mb-6">
            At Creative Plus Studio, we specialize in crafting unique and eye-catching graphic designs tailored to your brand’s identity. Our design solutions range from logos, marketing materials, and website elements to social media graphics and more.
          </p>
          <p className="text-lg text-slate-700">
            Our goal is to make sure that your designs resonate with your audience, communicate your brand’s values, and leave a lasting impression.
          </p>
        </div>
      </section>

      {/* Graphic Design Services Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">Our Graphic Design Services Include:</h2>
          <ul className="list-disc pl-8 space-y-4 text-lg text-slate-700">
            <li><strong>Logo Design:</strong> Crafting memorable logos that represent your brand's identity.</li>
            <li><strong>Brand Identity Design:</strong> Creating cohesive visual identities across all channels.</li>
            <li><strong>Print Design:</strong> Designing brochures, business cards, flyers, and other marketing materials.</li>
            <li><strong>Web & UI Design:</strong> Building modern, user-friendly interfaces for websites and apps.</li>
            <li><strong>Packaging Design:</strong> Designing creative packaging that enhances your product’s appeal.</li>
            <li><strong>Social Media Graphics:</strong> Engaging and creative visuals for your social media campaigns.</li>
          </ul>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-center mb-6">
            <img
              src= {graphicDesignVideo}
              alt="Graphic Design"
              className="w-screen h-screen object-cover rounded-lg shadow-md"
            />
          </div>
          <p className="text-lg text-slate-700 text-center mb-6">
            Let us help you bring your vision to life with stunning designs that captivate and engage your audience.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-slate-700 mb-4">Ready to Transform Your Brand's Visuals?</h2>
        <p className="text-lg text-slate-700 mb-8">
          Our graphic designers are here to bring your vision to life. Let’s collaborate to create designs that speak to your audience and elevate your brand.
        </p>
        <Button 
          text="Contact Us Now" 
          onClick={() => window.location.href = "/contact"} // Redirect to contact page
        />
      </section>
    </div>
  );
}
