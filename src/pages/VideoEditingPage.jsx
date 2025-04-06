import React, { useState, useMemo, useCallback } from "react";
import { Button } from "../components/Button";
import { ServiceGalleryModal } from "../components/ServiceGalleryModal"; // Import the modal component
import videoEditingGif from "../assets/video-editing.gif";
import cinematic1 from "../assets/video3.mp4";
import cinematic2 from "../assets/video4.mp4";
import corporate1 from "../assets/video4.mp4";
import social1 from "../assets/video3.mp4";
import event1 from "../assets/video1.mp4";
import ads1 from "../assets/video2.mp4";
import ads2 from "../assets/video5.mp4";
import podcast from "../assets/PodcastEdit.mp4";
import revVideo from "../assets/RSAReviewVideoedit.mp4";
import motion from "../assets/motion.mp4";
import travels from "../assets/TravelsvideoEdit.mp4";
import travellars from "../assets/Travellars.mp4";
import motiongraphic from "../assets/Motiongraphic.mp4";
import modeling from "../assets/modeling.mp4";
import D2 from "../assets/advertise.mp4";
import documentary from "../assets/Documentry100.gif";
import modelinggif from "../assets/Modeling.gif";
import soc from "../assets/soc.gif";
import digi from "../assets/digi.gif";
import seo from "../assets/seo.gif";
import travellar2 from "../assets/DUBAIRIDE.mp4"

export function VideoEditingPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullscreenIndex, setFullscreenIndex] = useState(null);
  const [fullscreenItems, setFullscreenItems] = useState([]);

  // Memoized services array for better performance
  const services = useMemo(() => [
    { 
      title: "Captions & Subtitles", 
      desc: "Adding accurate and well-timed captions for better accessibility and engagement.", 
      img: soc, 
      samples: [cinematic1, cinematic2] 
    },
    { 
      title: "Documentary & Storytelling", 
      desc: "Crafting compelling narratives with seamless editing to bring stories to life.", 
      img: documentary, 
      samples: [corporate1, podcast] 
    },
    { 
      title: "Events & Wedding Videos", 
      desc: "Capturing and editing memorable moments with a cinematic touch.", 
      img: videoEditingGif, 
      samples: [event1, revVideo,travellar2] 
    },
    { 
      title: "Motion Graphics & 3D Elements", 
      desc: "Enhancing videos with dynamic animations, 3D elements, and eye-catching visuals.", 
      img: modelinggif, 
      samples: [motion, motiongraphic] 
    },
    { 
      title: "Color Correction & Grading", 
      desc: "Adjusting and enhancing colors to achieve a natural or cinematic look.", 
      img: videoEditingGif, 
      samples: [event1, travels] 
    },
    { 
      title: "Visual Effects (VFX) & Motion Tracking", 
      desc: "Adding advanced VFX, CGI, and motion tracking for immersive video experiences.", 
      img: modelinggif, 
      samples: [modeling, cinematic1, cinematic2] 
    },
    { 
      title: "Sound Design, Editing & SFX", 
      desc: "Creating high-quality audio experiences with professional sound design and effects.", 
      img: soc, 
      samples: [corporate1] 
    },
    { 
      title: "Background Music & Noise Reduction", 
      desc: "Enhancing videos with mood-based music and removing unwanted noise.", 
      img: videoEditingGif, 
      samples: [travellars, social1] 
    },
    { 
      title: "Green Screen (Chroma Keying)", 
      desc: "Seamlessly replacing backgrounds for a professional and creative look.", 
      img: seo, 
      samples: [event1] 
    },
    { 
      title: "Ads & Promotional Videos", 
      desc: "Producing high-quality ads optimized for engagement and brand promotion.", 
      img: soc, 
      samples: [ads1, ads2, D2] 
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

      <section className="py-16 fade-in">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="flex justify-center mb-6">
            <img
              src={videoEditingGif}
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