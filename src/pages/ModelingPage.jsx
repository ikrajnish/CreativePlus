import React, { useState } from "react";
import { Button } from "../components/Button";
import modelingVideo from "../assets/modeling.mp4";
import ProductModeling1 from "../assets/logofirst.png";
// import ProductModeling2 from "../assets/productModeling2.png";
// import CharacterModeling1 from "../assets/characterModeling1.png";
// import CharacterModeling2 from "../assets/characterModeling2.png";
// import EnvironmentModeling1 from "../assets/environmentModeling1.png";
// import EnvironmentModeling2 from "../assets/environmentModeling2.png";
// import ArchitectureGif from "../assets/architecture.gif";
// import LightingGif from "../assets/lighting.gif";

export function ModelingPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    { title: "Product Modeling", desc: "Accurate and detailed models for visualization, prototyping, and marketing.", img: modelingVideo, samples: [ProductModeling1, ProductModeling1] },
    { title: "Character Modeling", desc: "Designing 3D characters for games, animations, and digital media.", img: modelingVideo, samples: [ProductModeling1, ProductModeling1] },
    { title: "Environment Modeling", desc: "Developing 3D environments and scenes for VR, games, or films.", img: modelingVideo, samples: [ProductModeling1, ProductModeling1] },
    { title: "Architectural Visualization", desc: "Creating 3D models of buildings, interiors, and landscapes.", img: modelingVideo, samples: [ProductModeling1] },
    { title: "Texturing & Lighting", desc: "Applying realistic textures and lighting for lifelike representations.", img: modelingVideo, samples: [ProductModeling1] }
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
      {/* Hero Section */}
      <section className="text-center py-12 fade-in">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">3D Modeling Services</h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Bring your ideas to life with realistic and stunning 3D models for various industries.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 slide-in-left">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">Our 3D Modeling Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-slate-700">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(service)}
              >
                <img src={service.img} alt={service.title} className="w-full h-auto object-cover rounded-md mb-4" />
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
            <h2 className="text-4xl font-bold mb-6 text-center">{selectedService.title} Showcase</h2>
            <div className="grid grid-cols-1 gap-4">
              {selectedService.samples.map((sample, index) => (
                <img key={index} src={sample} alt={`Sample ${index + 1}`} className="w-full h-auto object-cover rounded-md" />
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
    </div>
  );
}
