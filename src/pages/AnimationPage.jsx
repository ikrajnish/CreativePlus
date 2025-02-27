import React, { useState } from "react";
import { Button } from "../components/Button";
import animation1 from "../assets/animation.gif";
import animation2 from "../assets/animation.gif";
import animation3 from "../assets/animation.gif";
import animation4 from "../assets/animation.gif";

export function AnimationPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      title: "Explainer Videos",
      desc: "Engage your audience with compelling storytelling.",
      img: animation1,
      samples: [animation1, animation2, animation3], // Replace with actual sample images
    },
    {
      title: "3D Character Animation",
      desc: "Breathe life into your characters with stunning movements.",
      img: animation2,
      samples: [animation1, animation2, animation3], // Replace with actual sample images
    },
    {
      title: "Product Animation",
      desc: "Showcase your products with high-end visuals.",
      img: animation3,
      samples: [animation1, animation2, animation3], // Replace with actual sample images
    },
    {
      title: "Motion Graphics",
      desc: "Enhance your brand with smooth and dynamic animations.",
      img: animation4,
      samples: [animation1, animation2, animation3], // Replace with actual sample images
    },
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="p-6">
      {/* Header Section */}
      <section className="text-center py-12 fade-in">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">
          Unleash the Power of Animation
        </h1>
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
          <h2 className="text-4xl font-bold text-slate-700 mb-6">
            Our Animation Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-slate-700">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(service)}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <strong>{service.title}</strong>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-gradient-to-br from-orange-200 to-white z-50 flex items-center justify-center p-6">
          <div className="container mx-auto px-6 lg:px-20 bg-gradient-to-br from-orange-200 to-orange-100 shadow-lg rounded-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">
              {selectedService.title} Showcase
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {selectedService.samples.map((sample, index) => (
                <img
                  key={index}
                  src={sample}
                  alt={`Sample ${index + 1}`}
                  className="w-full h-auto object-cover rounded-md"
                />
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Button
                text="Close"
                className="px-6 py-3 transition-all duration-300"
                onClick={closeModal}
              />
            </div>
          </div>
        </div>
      )}

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
        <h2 className="text-4xl font-bold text-slate-700 mb-6">
          Let’s Animate Your Ideas
        </h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Our animation experts are ready to bring your creative vision to life with stunning visuals and seamless motion. Let's get started today!
        </p>
        <Button
          text="Get Started Now"
          onClick={() => (window.location.href = "/contact")}
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        />
      </section>
    </div>
  );
}