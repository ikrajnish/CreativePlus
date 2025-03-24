import React, { useState, useMemo, useCallback } from "react";
import { Button } from "../components/Button";
import { ServiceGalleryModal } from "../components/ServiceGalleryModal"; // Import the modal component
import PlaceholderImage from "../assets/logofirst.png"; // Replace with a relevant static image
import ProductModeling1 from "../assets/logofirst.png";

export function ModelingPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const [fullscreenItems, setFullscreenItems] = useState([]);

  const services = useMemo(() => [
    { 
      title: "Hard Surface Modeling", 
      desc: "Creating detailed 3D models of products, vehicles, and architectural designs.", 
      img: PlaceholderImage, 
      samples: [ProductModeling1] 
    },
    { 
      title: "Organic Modeling", 
      desc: "Sculpting realistic and stylized characters, animals, and clothing accessories.", 
      img: PlaceholderImage, 
      samples: [ProductModeling1] 
    },
    { 
      title: "Environment Modeling", 
      desc: "Designing immersive natural, urban, and fantasy environments for games and films.", 
      img: PlaceholderImage, 
      samples: [ProductModeling1] 
    },
    { 
      title: "Sculpting & High-Poly Modeling", 
      desc: "Creating highly detailed characters and objects using advanced sculpting techniques.", 
      img: PlaceholderImage, 
      samples: [ProductModeling1] 
    },
    { 
      title: "Texturing & Shading", 
      desc: "Applying realistic materials and textures for lifelike 3D models.", 
      img: PlaceholderImage, 
      samples: [ProductModeling1] 
    },
    { 
      title: "Rigging & Animation", 
      desc: "Setting up bones, joints, and mechanical structures for character and object animation.", 
      img: PlaceholderImage, 
      samples: [ProductModeling1] 
    },
    { 
      title: "Lighting & Rendering", 
      desc: "Enhancing 3D scenes with realistic lighting, reflections, and shadows.", 
      img: PlaceholderImage, 
      samples: [ProductModeling1] 
    },
    { 
      title: "Simulation & VFX", 
      desc: "Creating dynamic effects such as fire, water, smoke, and destruction simulations.", 
      img: PlaceholderImage, 
      samples: [ProductModeling1] 
    },
    { 
      title: "Architectural Visualization", 
      desc: "Developing stunning 3D models of buildings, interiors, and landscapes.", 
      img: PlaceholderImage, 
      samples: [ProductModeling1] 
    },
    { 
      title: "Popular 3D Software", 
      desc: "Proficient in Blender, Maya, ZBrush, Cinema 4D, and 3ds Max for high-quality modeling.", 
      img: PlaceholderImage, 
      samples: [ProductModeling1] 
    }
  ], []);

  // Memoized functions to avoid unnecessary re-renders
  const openModal = useCallback((service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedService(null);
    setFullscreenIndex(null);
    setFullscreenItems([]);
  }, []);

  const openFullscreen = useCallback((index, items) => {
    setFullscreenIndex(index);
    setFullscreenItems(items);
  }, []);

  const closeFullscreen = useCallback(() => {
    setFullscreenIndex(null);
    setFullscreenItems([]);
  }, []);

  const showNext = useCallback(() => {
    setFullscreenIndex((prevIndex) => (prevIndex + 1) % fullscreenItems.length);
  }, [fullscreenItems]);

  const showPrev = useCallback(() => {
    setFullscreenIndex((prevIndex) => (prevIndex - 1 + fullscreenItems.length) % fullscreenItems.length);
  }, [fullscreenItems]);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback((e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    if (touchStart - touchEnd > 50) {
      showNext();
    } else if (touchStart - touchEnd < -50) {
      showPrev();
    }
  }, [touchStart, touchEnd, showNext, showPrev]);

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

      {/* Fullscreen Modal */}
      <ServiceGalleryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
        fullscreenIndex={fullscreenIndex}
        fullscreenItems={fullscreenItems}
        openFullscreen={openFullscreen}
        closeFullscreen={closeFullscreen}
        showNext={showNext}
        showPrev={showPrev}
        handleTouchStart={handleTouchStart}
        handleTouchEnd={handleTouchEnd}
      />
    </div>
  );
}