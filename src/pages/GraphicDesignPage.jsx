import React, { useState, useMemo, useCallback } from "react";
import { Button } from "../components/Button";
import graphicDesignVideo from "../assets/graphic-design.gif";
import LogoDesignGif from "../assets/Logodesign.gif";
import BrandGif from "../assets/Brand.gif";
import PrintingGif from "../assets/Printing.gif";
import WebUiGif from "../assets/Webui.gif";

// Sample Image Imports
import LogoDesign1 from "../assets/logofirst.png";
import LogoDesign2 from "../assets/logosecond.png";
import LogoDesign3 from "../assets/logothird.png";
import LogoDesign4 from "../assets/logoFourth.png";
import LogoDesign5 from "../assets/logoFifth.png";
import LogoDesign6 from "../assets/logoSixth.png";
import LogoDesign7 from "../assets/logoSeventh.png";
import LogoDesign8 from "../assets/logoEight.png";
import LogoDesign9 from "../assets/logoNine.png";
import LogoDesign10 from "../assets/logoTen.png";
import BrandDesign1 from "../assets/BrandidentityDesign01.png";
import BrandDesign2 from "../assets/BrandDesign_02.png";
import BrandDesign3 from "../assets/BrandIdentity_03.png";
import Packging1 from "../assets/Packging_01.png";
import Packging2 from "../assets/Packging_02.png";
import Packging3 from "../assets/Packging_03.png";
import Packging4 from "../assets/Packging_04.png";
import Packging5 from "../assets/Packging_05.png";
import Packging6 from "../assets/Packging_06.jpg";
import Packging7 from "../assets/Packging_07.png";
import Packging8 from "../assets/Packging_08.png";
import SocialMedia1 from "../assets/SocialMediaPost_01.png";
import SocialMedia2 from "../assets/SocialMediaPost_02.png";
import SocialMedia3 from "../assets/SocialMediaPost_03.png";
import SocialMedia4 from "../assets/socialmediaPost_04.jpg";
import SocialMedia5 from "../assets/SocialmediaPost_05.png";
import SocialMedia6 from "../assets/SocialmediaPost_06.png";
import SocialMedia7 from "../assets/SocialmediaPost_07.png";
import SocialMedia8 from "../assets/SocialmediaPost_08.png";
import SocialMedia9 from "../assets/SocialmediaPost_09.png";
import webdev1 from "../assets/webdev1.png";
import webdev2 from "../assets/webdev2.png";
import webdev3 from "../assets/webdev3.png";
import webdev4 from "../assets/webdev4.png";




export function GraphicDesignPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Memoized services array
  const services = useMemo(() => [
    { 
      title: "Logo Design", 
      desc: "Crafting memorable logos that represent your brand's identity.", 
      img: LogoDesignGif, 
      samples: [LogoDesign1, LogoDesign2, LogoDesign3, LogoDesign4, LogoDesign5, LogoDesign6, LogoDesign7, LogoDesign8, LogoDesign9, LogoDesign10] 
    },
    { 
      title: "Brand Identity Design", 
      desc: "Creating cohesive visual identities across all channels.", 
      img: BrandGif, 
      samples: [BrandDesign1,BrandDesign2,BrandDesign3] 
    },
    { 
      title: "Print Design", 
      desc: "Designing brochures, business cards, flyers, and more.", 
      img: PrintingGif, 
      samples: [LogoDesign5, LogoDesign6, LogoDesign7] 
    },
    { 
      title: "Web Devlopment & UI Design", 
      desc: "Building modern, user-friendly interfaces for websites and apps.", 
      img: WebUiGif, 
      samples: [webdev1, webdev2, webdev3, webdev4] 
    },
    { 
      title: "Packaging Design", 
      desc: "Designing creative packaging that enhances your product’s appeal.", 
      img: graphicDesignVideo, 
      samples: [Packging1, Packging2, Packging3, Packging4, Packging5, Packging6, Packging7, Packging8] 
    },
    { 
      title: "Social Media Graphics", 
      desc: "Engaging visuals for your social media campaigns.", 
      img: graphicDesignVideo, 
      samples: [SocialMedia1, SocialMedia2, SocialMedia3, SocialMedia4, SocialMedia5,SocialMedia6, SocialMedia7, SocialMedia8, SocialMedia9] 
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
  }, []);

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
      <section className="py-16 fade-in">
              <div className="container mx-auto px-6 lg:px-20 text-center">
                <div className="flex justify-center mb-6">
                  <img
                    src={graphicDesignVideo}
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

      {/* Fullscreen Modal */}
          {isModalOpen && selectedService && (
              <div className="fixed inset-0 bg-gradient-to-br from-orange-200 to-white z-50 flex items-center justify-center p-6">
                <div className="container mx-auto px-6 lg:px-20 bg-gradient-to-br from-orange-200 to-orange-100 shadow-lg rounded-lg max-h-[90vh] overflow-y-auto relative">
      
            {/* Fixed Close Button (X) */}
            <button 
              className="fixed top-6 right-11 text-gray-700 hover:text-red-500 text-3xl font-bold z-50"
              onClick={closeModal}
            >
              &times;
            </button>

            <h2 className="text-4xl font-bold mb-6 text-center">{selectedService.title} Showcase</h2>
            <div className="grid grid-cols-1 gap-4">
              {selectedService.samples.map((sample, index) => (
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
    </div>
  );
}
