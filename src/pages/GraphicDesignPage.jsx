import React, { useState } from "react";
import { Button } from "../components/Button";
import graphicDesignVideo from "../assets/graphic-design.gif";
import sampleImage1 from "../assets/logofirst.png";
import sampleImage2 from "../assets/logosecond.png";
import sampleImage3 from "../assets/logothird.png";
import LogoDesignGif from "../assets/Logodesign.gif";
import PrintingGif from "../assets/Printing.gif";
import WebUiGif from "../assets/Webui.gif";
import BrandGif from "../assets/Brand.gif"

export function GraphicDesignPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    { title: "Logo Design", desc: "Crafting memorable logos that represent your brand's identity.", img: LogoDesignGif, samples: [sampleImage1, sampleImage2,sampleImage3] },
    { title: "Brand Identity Design", desc: "Creating cohesive visual identities across all channels.", img: BrandGif, samples: [sampleImage1, sampleImage2,sampleImage3] },
    { title: "Print Design", desc: "Designing brochures, business cards, flyers, and more.", img: PrintingGif, samples: [sampleImage1, sampleImage2,sampleImage3] },
    { title: "Web & UI Design", desc: "Building modern, user-friendly interfaces for websites and apps.", img: WebUiGif, samples: [sampleImage1, sampleImage2,sampleImage3] },
    { title: "Packaging Design", desc: "Designing creative packaging that enhances your product’s appeal.", img: graphicDesignVideo, samples: [sampleImage1, sampleImage2,sampleImage3] },
    { title: "Social Media Graphics", desc: "Engaging visuals for your social media campaigns.", img: graphicDesignVideo, samples: [sampleImage1, sampleImage2,sampleImage3] }
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
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">Graphic Designing Services</h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Transforming your ideas into visually captivating designs that tell your brand story.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 slide-in-left">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">Our Graphic Design Services</h2>
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

