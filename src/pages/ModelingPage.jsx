import React from "react";
import { Button } from "../components/Button";
import modelingVideo from "../assets/modeling.mp4";
import video from "../assets/video-editing.gif"

export function ModelingPage() {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="text-center py-12 fade-in">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">3D Modeling Services</h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Bring your ideas to life with realistic and stunning 3D models for various industries.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-orange-50 transition-all duration-700 ease-in-out transform hover:scale-105 reveal">
      <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">What We Do</h2>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
          At Creative Plus Studio, we provide high-quality 3D modeling services that cater to industries such as architecture, gaming, animation, and product design. Our expert designers use the latest tools and technologies to create models that are visually stunning and functional.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 slide-in-left">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">Our 3D Modeling Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-slate-700">
            {[
              { title: "Product Modeling", desc: "Accurate and detailed models for visualization, prototyping, and marketing.",img: video },
              { title: "Character Modeling", desc: "Designing 3D characters for games, animations, and digital media.",img: video },
              { title: "Environment Modeling", desc: "Developing 3D environments and scenes for VR, games, or films.",img: video },
              { title: "Architectural Visualization", desc: "Creating 3D models of buildings, interiors, and landscapes.",img: video },
              { title: "Texturing & Lighting", desc: "Applying realistic textures and lighting for lifelike representations.",img: video }
            ]
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

      {/* Image Section */}
      <section className="py-16 transition-all duration-700 ease-in-out transform hover:scale-105 fade-in">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="flex justify-center mb-6">
            <img
            src={video}
            alt="Modeling"
            className="w-full max-w-3xl h-80 object-cover rounded-lg shadow-xl"
            />
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Let us help you bring your ideas to life with stunning 3D models for your business or creative projects.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center fade-in">
        <h2 className="text-4xl font-bold text-slate-700 mb-6">Ready to Bring Your Ideas to Life in 3D?</h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Our team is here to create realistic and accurate 3D models tailored to your business or project. Let’s work together to bring your ideas into the digital world.
        </p>
        <Button 
          text="Contact Us Now" 
          onClick={() => window.location.href = "/contact"} // Redirect to contact page
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        />      
      </section>
    </div>
  );
}
