import React, { useState, useMemo, useCallback } from "react";
import { Button } from "../components/Button";
import videoEditingGif from "../assets/video-editing.gif";
import cinematic1 from "../assets/video-editing.gif";
import cinematic2 from "../assets/video-editing.gif";
import corporate1 from "../assets/video-editing.gif";
import social1 from "../assets/video-editing.gif";
import event1 from "../assets/video-editing.gif";
import motion1 from "../assets/video-editing.gif";

export function VideoEditingPage() {
  const [selectedService, setSelectedService] = useState(null);

  // Memoized services array for better performance
  const services = useMemo(() => [
    { title: "Cinematic Editing", desc: "Creating immersive cinematic experiences with professional cuts and transitions.", img: videoEditingGif, samples: [cinematic1, cinematic2] },
    { title: "Corporate Videos", desc: "Producing polished corporate videos for presentations and marketing.", img: videoEditingGif, samples: [corporate1] },
    { title: "YouTube & Social Media", desc: "Editing engaging content tailored for social media platforms and YouTube.", img: videoEditingGif, samples: [social1] },
    { title: "Event Highlights", desc: "Compiling memorable moments into beautifully edited highlight reels.", img: videoEditingGif, samples: [event1] },
    { title: "Motion Graphics & Effects", desc: "Enhancing videos with animations, text overlays, and special effects.", img: videoEditingGif, samples: [motion1] }
  ], []);

  // Optimized modal open/close handlers
  const openModal = useCallback((service) => {
    setSelectedService(service);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="text-center py-12 fade-in">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">Video Editing Services</h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Transform your raw footage into compelling and engaging videos with professional editing.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 slide-in-left">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">Our Video Editing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-slate-700">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openModal(service)}
              >
                <img src={service.img} alt={service.title} className="w-full h-auto object-cover rounded-md mb-4" loading="lazy" />
                <strong>{service.title}</strong>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-gradient-to-br from-orange-200 to-white z-50 flex items-center justify-center p-6">
          <div className="container mx-auto px-6 lg:px-20 bg-gradient-to-br from-orange-200 to-orange-100 shadow-lg rounded-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">{selectedService.title} Showcase</h2>
            <div className="grid grid-cols-1 gap-4">
              {selectedService.samples.map((sample, index) => (
                <img key={index} src={sample} alt={`Sample ${index + 1}`} className="w-full h-auto object-cover rounded-md" loading="lazy" />
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
