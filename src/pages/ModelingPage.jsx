// pages/ModelingPage.jsx
import React, { useState, useMemo, useEffect } from "react";
import { Button } from "../components/Button";
import Modal from "../components/Modal"; // ✅ Reusable Modal
import PlaceholderImage from "../assets/logofirst.png";
import ProductModeling1 from "../assets/logofirst.png";

export function ModelingPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Services data memoized
  const services = useMemo(
    () => [
      {
        title: "Hard Surface Modeling",
        desc: "Creating detailed 3D models of products, vehicles, and architectural designs.",
        img: PlaceholderImage,
        samples: [ProductModeling1],
      },
      {
        title: "Organic Modeling",
        desc: "Sculpting realistic and stylized characters, animals, and clothing accessories.",
        img: PlaceholderImage,
        samples: [ProductModeling1],
      },
      {
        title: "Environment Modeling",
        desc: "Designing immersive natural, urban, and fantasy environments for games and films.",
        img: PlaceholderImage,
        samples: [ProductModeling1],
      },
      {
        title: "Sculpting & High-Poly Modeling",
        desc: "Creating highly detailed characters and objects using advanced sculpting techniques.",
        img: PlaceholderImage,
        samples: [ProductModeling1],
      },
      {
        title: "Texturing & Shading",
        desc: "Applying realistic materials and textures for lifelike 3D models.",
        img: PlaceholderImage,
        samples: [ProductModeling1],
      },
      {
        title: "Rigging & Animation",
        desc: "Setting up bones, joints, and mechanical structures for character and object animation.",
        img: PlaceholderImage,
        samples: [ProductModeling1],
      },
      {
        title: "Lighting & Rendering",
        desc: "Enhancing 3D scenes with realistic lighting, reflections, and shadows.",
        img: PlaceholderImage,
        samples: [ProductModeling1],
      },
      {
        title: "Simulation & VFX",
        desc: "Creating dynamic effects such as fire, water, smoke, and destruction simulations.",
        img: PlaceholderImage,
        samples: [ProductModeling1],
      },
      {
        title: "Architectural Visualization",
        desc: "Developing stunning 3D models of buildings, interiors, and landscapes.",
        img: PlaceholderImage,
        samples: [ProductModeling1],
      },
      {
        title: "Popular 3D Software",
        desc: "Proficient in Blender, Maya, ZBrush, Cinema 4D, and 3ds Max for high-quality modeling.",
        img: PlaceholderImage,
        samples: [ProductModeling1],
      },
    ],
    []
  );

  // ✅ Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isModalOpen]);

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
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">
          3D Modeling Services
        </h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Bring your ideas to life with realistic and stunning 3D models for
          various industries.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 slide-in-left">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">
            Our 3D Modeling Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-slate-700">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(service)}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-md mb-4"
                />
                <strong>{service.title}</strong>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-16 fade-in">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="flex justify-center mb-6">
            <img
              src={ProductModeling1}
              alt="3D Showcase"
              className="w-full max-w-3xl h-80 object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Dominate your industry with high-quality 3D assets and lifelike
            digital creations tailored to your needs.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center fade-in">
        <h2 className="text-4xl font-bold text-slate-700 mb-6">
          Let's Elevate Your Brand Together
        </h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Our team of 3D modeling experts is ready to bring your vision to life
          with precision and creativity. Let’s build something amazing!
        </p>
        <Button
          text="Get Started Now"
          onClick={() => (window.location.href = "/contact")}
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        />
      </section>

      {/* ✅ Reusable Modal */}
      {isModalOpen && selectedService && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedService.title}
          samples={selectedService.samples}
        />
      )}
    </div>
  );
}
