import React, { useState, useCallback, memo } from "react";
import { Button } from "../components/Button";
import { ServiceGalleryModal } from "../components/ServiceGalleryModal";
import digitalMarketingGif from "../assets/digital-marketing.gif";

const services = [
  { 
    "title": "Search Engine Optimization (SEO)", 
    "desc": "Optimize your website to rank higher on search engines and drive organic traffic.",
    "samples": ["/assets/seo1.jpg", "/assets/seo2.jpg"]
  },
  { 
    "title": "Social Media Marketing (SMM)", 
    "desc": "Create viral campaigns, build brand awareness, and grow a loyal audience.",
    "samples": ["/assets/smm1.jpg", "/assets/smm2.jpg"]
  },
  { 
    "title": "Pay-Per-Click Advertising (PPC)", 
    "desc": "Run highly targeted ad campaigns for instant traffic and conversions.",
    "samples": ["/assets/ppc1.jpg"]
  },
  // ... other services
];

const DigitalMarketingPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // NEW STATES for Fullscreen viewer
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const [fullscreenItems, setFullscreenItems] = useState([]);

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

  // FULLSCREEN HANDLERS:
  const openFullscreen = (index, items) => {
    setFullscreenIndex(index);
    setFullscreenItems(items);
  };

  const closeFullscreen = () => {
    setFullscreenIndex(null);
  };

  const showNext = () => {
    if (fullscreenIndex !== null && fullscreenItems.length > 0) {
      setFullscreenIndex((prevIndex) => (prevIndex + 1) % fullscreenItems.length);
    }
  };

  const showPrev = () => {
    if (fullscreenIndex !== null && fullscreenItems.length > 0) {
      setFullscreenIndex((prevIndex) => (prevIndex - 1 + fullscreenItems.length) % fullscreenItems.length);
    }
  };

  const handleTouchStart = () => {};
  const handleTouchEnd = () => {};

  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="text-center py-12 fade-in">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">
          Dominate the Digital Space
        </h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Supercharge your brand with high-impact digital marketing strategies.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 slide-in-left">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">
            Our Power-Packed Digital Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-slate-700">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(service)}
              >
                <img
                  src={digitalMarketingGif}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                  loading="lazy"
                />
                <strong>{service.title}</strong>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pass ALL required props to Modal */}
      <ServiceGalleryModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
        fullscreenIndex={fullscreenIndex}
        fullscreenItems={fullscreenItems}
        openFullscreen={openFullscreen}
        closeFullscreen={closeFullscreen}
        showNext={showNext}
        showPrev={showPrev}
        handleTouchStart={handleTouchStart}
        handleTouchEnd={handleTouchEnd}
      />

      {/* CTA */}
      <section className="py-16 text-center fade-in">
        <h2 className="text-4xl font-bold text-slate-700 mb-6">
          Let's Elevate Your Brand Together
        </h2>
        <Button
          text="Get Started Now"
          onClick={() => (window.location.href = "/contact")}
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        />
      </section>
    </div>
  );
};

export { DigitalMarketingPage };
