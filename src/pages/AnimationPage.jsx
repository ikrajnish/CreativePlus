import React, { useState, useEffect, Suspense, useCallback } from "react";
import { Button } from "../components/Button";
import { ServiceGalleryModal } from "../components/ServiceGalleryModal"; // Import modal

import Animation1 from "../assets/animation.gif";
import Animation2 from "../assets/animation.gif";
import Animation3 from "../assets/animation.gif";
import Animation4 from "../assets/animation.gif";

const services = [
  {
    title: "Explainer Videos",
    desc: "Engage your audience with compelling storytelling.",
    img: Animation1,
    samples: [Animation1, Animation2, Animation3],
  },
  {
    title: "3D Character Animation",
    desc: "Breathe life into your characters with stunning movements.",
    img: Animation2,
    samples: [Animation1, Animation2, Animation3],
  },
  {
    title: "Product Animation",
    desc: "Showcase your products with high-end visuals.",
    img: Animation3,
    samples: [Animation1, Animation2, Animation3],
  },
  {
    title: "Motion Graphics",
    desc: "Enhance your brand with smooth and dynamic animations.",
    img: Animation4,
    samples: [Animation1, Animation2, Animation3],
  },
];

export function AnimationPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const [fullscreenItems, setFullscreenItems] = useState([]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (fullscreenIndex !== null) {
        if (e.key === "ArrowRight") {
          showNext();
        } else if (e.key === "ArrowLeft") {
          showPrev();
        } else if (e.key === "Escape") {
          closeFullscreen();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fullscreenIndex, fullscreenItems]);

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    const deltaX = touchEndX - touchStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) {
        showNext();
      } else {
        showPrev();
      }
    }
  };

  const openFullscreen = (index, items) => {
    setFullscreenIndex(index);
    setFullscreenItems(items);
  };

  const closeFullscreen = () => {
    setFullscreenIndex(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    setFullscreenIndex(null);
  };

  const showNext = useCallback(() => {
    setFullscreenIndex((prev) => (prev + 1) % fullscreenItems.length);
  }, [fullscreenItems]);

  const showPrev = useCallback(() => {
    setFullscreenIndex((prev) =>
      (prev - 1 + fullscreenItems.length) % fullscreenItems.length
    );
  }, [fullscreenItems]);

  return (
    <div className="p-6">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">
          Unleash the Power of Animation
        </h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Transform your ideas into stunning visuals with our expert animation services. From 2D & 3D animations to engaging motion graphics, we bring your vision to life.
        </p>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">Our Animation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedService(service);
                  setIsModalOpen(true);
                }}
              >
                <Suspense fallback={<div>Loading...</div>}>
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                </Suspense>
                <strong>{service.title}</strong>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ServiceGalleryModal Component */}
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

      {/* Showcase */}
      <section className="py-16 transition-all duration-700 ease-in-out transform hover:scale-105">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="flex justify-center mb-6">
            <Suspense fallback={<div>Loading...</div>}>
              <img
                src={Animation1}
                alt="Featured Animation"
                loading="lazy"
                className="w-full max-w-3xl h-80 object-cover rounded-lg shadow-xl"
              />
            </Suspense>
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Elevate your brand with high-impact animations that engage and inspire audiences worldwide.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold text-slate-700 mb-6">Let’s Animate Your Ideas</h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Our animation experts are ready to bring your creative vision to life with stunning visuals and seamless motion. Let's get started today!
        </p>
        <Button
          text="Contact Us"
          className="px-8 py-4 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition-colors duration-300"
        />
      </section>
    </div>
  );
}
