import React from "react";
import { Button } from "../components/Button";
import animation1 from "../assets/animation.gif";
import animation2 from "../assets/animation.gif";
import animation3 from "../assets/animation.gif";
import animation4 from "../assets/animation.gif";

export function AnimationPage() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <section className="text-center py-12 fade-in">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">Unleash the Power of Animation</h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Transform your ideas into stunning visuals with our expert animation services. From 2D & 3D animations to engaging motion graphics, we bring your vision to life.
        </p>
      </section>

      {/* Animation Overview Section */}
      <section className="py-16 bg-orange-50 transition-all duration-700 ease-in-out transform hover:scale-105 reveal">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">What We Offer</h2>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
            At CreativePlusStudio, we specialize in high-quality animation services that captivate audiences and elevate brand storytelling. Let’s craft something extraordinary together.
          </p>
        </div>
      </section>

      {/* Animation Services Section */}
      <section className="py-16 slide-in-left">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">Our Animation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-slate-700">
            {[{title: "Explainer Videos", desc: "Engage your audience with compelling storytelling.", img: animation1},
              {title: "3D Character Animation", desc: "Breathe life into your characters with stunning movements.", img: animation2},
              {title: "Product Animation", desc: "Showcase your products with high-end visuals.", img: animation3},
              {title: "Motion Graphics", desc: "Enhance your brand with smooth and dynamic animations.", img: animation4}]
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
              src={animation1}
              alt="Featured Animation"
              className="w-full max-w-3xl h-80 object-cover rounded-lg shadow-xl"
            />
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Elevate your brand with high-impact animations that engage and inspire audiences worldwide.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center fade-in">
        <h2 className="text-4xl font-bold text-slate-700 mb-6">Let’s Animate Your Ideas</h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Our animation experts are ready to bring your creative vision to life with stunning visuals and seamless motion. Let's get started today!
        </p>
        {/* Button Component */}
        <Button 
          text="Get Started Now" 
          onClick={() => window.location.href = "/contact"} 
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        />
      </section>
    </div>
  );
}
