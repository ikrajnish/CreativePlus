import React, { useState, useMemo, useCallback } from "react";
import { Button } from "../components/Button";
import Modal from "../components/Modal"; // ✅ Import the reusable modal

import webDevGif from "../assets/web-design.gif";
import FrontendGif from "../assets/web-design.gif";
import BackendGif from "../assets/web-design.gif";
import EcommerceGif from "../assets/web-design.gif";
import SeoGif from "../assets/web-design.gif";
import CmsGif from "../assets/web-design.gif";

import sample1 from "../assets/web-design.gif";
import sample2 from "../assets/web-design.gif";
import sample3 from "../assets/web-design.gif";
import sample4 from "../assets/web-design.gif";
import sample5 from "../assets/web-design.gif";

export function WebDevPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoized services array for better performance
  const services = useMemo(
    () => [
      { title: "Custom Website Development", desc: "Unique, tailor-made websites for your business.", img: webDevGif, samples: [sample1, sample2, sample3] },
      { title: "Frontend Development", desc: "Building modern, responsive user interfaces.", img: FrontendGif, samples: [sample2, sample3] },
      { title: "Backend Development", desc: "Powerful server-side solutions for your applications.", img: BackendGif, samples: [sample1, sample4] },
      { title: "E-Commerce Solutions", desc: "Optimized online store development.", img: EcommerceGif, samples: [sample5, sample3] },
      { title: "SEO Optimization", desc: "Improving your website ranking on search engines.", img: SeoGif, samples: [sample2, sample5] },
      { title: "CMS Development", desc: "Custom content management systems for efficiency.", img: CmsGif, samples: [sample1, sample4] }
    ],
    []
  );

  // Optimized modal open/close handlers
  const openModal = useCallback((service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedService(null);
    setIsModalOpen(false);
  }, []);

  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="text-center py-12 fade-in">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">
          Web Development Services
        </h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Empower your business with high-performance websites tailored to your needs.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 slide-in-left">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">
            Our Web Development Services
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
                  className="w-full h-auto object-cover rounded-md mb-4"
                  loading="lazy"
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
              src={webDevGif}
              alt="Web Dev Showcase"
              className="w-full max-w-3xl h-80 object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Dominate your industry with high-converting digital strategies that bring measurable results.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center fade-in">
        <h2 className="text-4xl font-bold text-slate-700 mb-6">
          Let's Elevate Your Brand Together
        </h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Our team of digital marketing pros is ready to skyrocket your brand’s online presence. Let’s create a strategy that gets real results!
        </p>
        <Button
          text="Get Started Now"
          onClick={() => (window.location.href = "/contact")}
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        />
      </section>

      {/* ✅ Reusable Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedService?.title || ""}
        samples={selectedService?.samples || []}
      />
    </div>
  );
}
