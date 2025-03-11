import React, { useState, useCallback, memo } from "react";
import { Button } from "../components/Button";
import digitalMarketingGif from "../assets/digital-marketing.gif";

const services = [
    { 
        "title": "Search Engine Optimization (SEO)", 
        "desc": "Optimize your website to rank higher on search engines and drive organic traffic." 
    },
    { 
        "title": "Social Media Marketing (SMM)", 
        "desc": "Create viral campaigns, build brand awareness, and grow a loyal audience." 
    },
    { 
        "title": "Pay-Per-Click Advertising (PPC)", 
        "desc": "Run highly targeted ad campaigns for instant traffic and conversions." 
    },
    { 
        "title": "Email Marketing", 
        "desc": "Engage, nurture, and convert leads with personalized email campaigns." 
    },
    { 
        "title": "Content Marketing", 
        "desc": "Create compelling blogs, videos, and infographics to attract and engage customers." 
    },
    { 
        "title": "Affiliate & Influencer Marketing", 
        "desc": "Partner with affiliates and influencers to expand brand credibility and sales." 
    },
    { 
        "title": "Conversion Rate Optimization (CRO)", 
        "desc": "Improve website performance with A/B testing, CTA optimization, and better user experience." 
    },
    { 
        "title": "Blogging & SEO Content", 
        "desc": "Write high-quality, SEO-optimized blogs that increase traffic and engagement." 
    },
    { 
        "title": "Video Marketing", 
        "desc": "Boost brand awareness with YouTube videos, Reels, and Shorts for maximum reach." 
    },
    { 
        "title": "Infographics & Ebooks", 
        "desc": "Create visually engaging content that informs, educates, and attracts your audience." 
    }

];

const DigitalMarketingPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback((service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedService(null);
  }, []);

  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="text-center py-12 fade-in">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">
          Dominate the Digital Space
        </h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Supercharge your brand with high-impact digital marketing strategies. From SEO to influencer marketing, we make your brand shine!
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

      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-gradient-to-br from-orange-200 to-white z-50 flex items-center justify-center p-6">
          <div className="container mx-auto px-6 lg:px-20 bg-gradient-to-br from-orange-200 to-orange-100 shadow-lg rounded-lg max-h-[90vh] overflow-y-auto relative">
            
            {/* Fixed Close Button (X) */}
            <button
              className="absolute top-4 right-6 text-gray-700 hover:text-red-500 text-3xl font-bold z-50"
              onClick={closeModal}
            >
              &times;
            </button>

            <h2 className="text-4xl font-bold mb-6 text-center">{selectedService.title} Showcase</h2>
            <div className="grid grid-cols-1 gap-4">
              {selectedService.samples?.map((sample, index) => (
                <img 
                  key={index} 
                  src={sample} 
                  alt={`Sample ${index + 1}`} 
                  loading="lazy" 
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
      <section className="py-16 fade-in">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="flex justify-center mb-6">
            <img
              src={digitalMarketingGif}
              alt="Digital Marketing"
              className="w-full max-w-3xl h-80 object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Dominate your industry with high-converting digital strategies that bring measurable results.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
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
    </div>
  );
};

export { DigitalMarketingPage };
