import React from "react";
import { Button } from "../components/Button"; 
import animationVideo from '../assets/animation.gif';

export function AnimationPage() {
  return (
    <div className="p-6">
      {/* Header Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4">Animation Services</h1>
        <p className="text-lg text-slate-700 mb-6">
          Transform your ideas into stunning visual stories with our animation services. We offer 2D and 3D animations that captivate and communicate your message with style.
        </p>
      </section>

      {/* Animation Overview Section */}
      <section className="py-12 bg-orange-50 transition-all duration-500 ease-in-out transform hover:scale-105">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-slate-700 mb-4">Our Animation Expertise</h2>
          <p className="text-lg text-slate-700 mb-6">
            At Creative Plus Studio, we specialize in high-quality animation services that bring your ideas to life. Whether you're looking for promotional animations, explainer videos, or full-scale animations for your project, our team of experts delivers outstanding results that engage your audience.
          </p>
          <p className="text-lg text-slate-700">
            Our team combines creativity with technical skill, using the latest animation tools and techniques to create visually stunning animations. We focus on your brand’s message, ensuring each project aligns with your vision and objectives.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 transition-all duration-500 ease-in-out transform hover:scale-105">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-center mb-6">
            <img
              src={animationVideo}
              alt="Animation Example"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <p className="text-lg text-slate-700 text-center mb-6">
            Dive into a world of creativity where your ideas take flight with our bespoke animation services, designed to captivate and engage your audience.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold text-slate-700 mb-4">Let’s Create Something Amazing Together!</h2>
        <p className="text-lg text-slate-700 mb-8">
          Have a vision for your next project? Get in touch with us today to discuss your animation needs, and let’s bring your ideas to life.
        </p>
        {/* Button Component */}
        <Button 
          text="Contact Us Now" 
          onClick={() => window.location.href = "/contact"} // Redirect to contact page
        />
      </section>
    </div>
  );
}
 