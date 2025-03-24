import React, { useState, useMemo, useCallback } from "react";
import { Button } from "../components/Button";
import { ServiceGalleryModal } from "../components/ServiceGalleryModal"; // Import the modal component
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
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const [fullscreenItems, setFullscreenItems] = useState([]);

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
      samples: [BrandDesign1, BrandDesign2, BrandDesign3] 
    },
    { 
      title: "Print Design", 
      desc: "Designing brochures, business cards, flyers, and more.", 
      img: PrintingGif, 
      samples: [LogoDesign5, LogoDesign6, LogoDesign7] 
    },
    { 
      title: "Web UI Design", 
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
      samples: [SocialMedia1, SocialMedia2, SocialMedia3, SocialMedia4, SocialMedia5, SocialMedia6, SocialMedia7, SocialMedia8, SocialMedia9] 
    },
    { 
      title: "Merchandise Design", 
      desc: "Engaging visuals for your social media campaigns.", 
      img: graphicDesignVideo, 
      samples: [SocialMedia1, SocialMedia2, SocialMedia3, SocialMedia4, SocialMedia5, SocialMedia6, SocialMedia7, SocialMedia8, SocialMedia9] 
    },
    { 
      title: "E-book & Presentation Design", 
      desc: "Engaging visuals for your social media campaigns.", 
      img: graphicDesignVideo, 
      samples: [SocialMedia1, SocialMedia2, SocialMedia3, SocialMedia4, SocialMedia5, SocialMedia6, SocialMedia7, SocialMedia8, SocialMedia9] 
    },
    { 
      title: "Digital Marketing Graphic", 
      desc: "Engaging visuals for your social media campaigns.", 
      img: graphicDesignVideo, 
      samples: [SocialMedia1, SocialMedia2, SocialMedia3, SocialMedia4, SocialMedia5, SocialMedia6, SocialMedia7, SocialMedia8, SocialMedia9] 
    },
    { 
      title: "Typography & Custom arts", 
      desc: "Engaging visuals for your social media campaigns.", 
      img: graphicDesignVideo, 
      samples: [SocialMedia1, SocialMedia2, SocialMedia3, SocialMedia4, SocialMedia5, SocialMedia6, SocialMedia7, SocialMedia8, SocialMedia9] 
    },
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