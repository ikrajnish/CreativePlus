import React, { useState, useMemo, useCallback } from "react";
import { Button } from "../components/Button";
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
import D2 from "../assets/advertise.mp4"
export function VideoEditingPage() {
  const [selectedService, setSelectedService] = useState(null);

  // Memoized services array for better performance
  const services = useMemo(() => [
    
      { 
          "title": "Captions & Subtitles", 
          "desc": "Adding accurate and well-timed captions for better accessibility and engagement.", 
          "img": videoEditingGif, 
          "samples": [cinematic1, cinematic2] 
      },
      { 
          "title": "Documentary & Storytelling", 
          "desc": "Crafting compelling narratives with seamless editing to bring stories to life.", 
          "img": videoEditingGif, 
          "samples": [corporate1,podcast] 
      },
      { 
          "title": "Events & Wedding Videos", 
          "desc": "Capturing and editing memorable moments with a cinematic touch.", 
          "img": videoEditingGif, 
          "samples": [event1,revVideo] 
      },
      { 
          "title": "Motion Graphics & 3D Elements", 
          "desc": "Enhancing videos with dynamic animations, 3D elements, and eye-catching visuals.", 
          "img": videoEditingGif, 
          "samples": [motion,motiongraphic] 
      },
      { 
          "title": "Color Correction & Grading", 
          "desc": "Adjusting and enhancing colors to achieve a natural or cinematic look.", 
          "img": videoEditingGif, 
          "samples": [event1,travels] 
      },
      { 
          "title": "Visual Effects (VFX) & Motion Tracking", 
          "desc": "Adding advanced VFX, CGI, and motion tracking for immersive video experiences.", 
          "img": videoEditingGif, 
          "samples": [modeling,cinematic1, cinematic2] 
      },
      { 
          "title": "Sound Design, Editing & SFX", 
          "desc": "Creating high-quality audio experiences with professional sound design and effects.", 
          "img": videoEditingGif, 
          "samples": [corporate1] 
      },
      { 
          "title": "Background Music & Noise Reduction", 
          "desc": "Enhancing videos with mood-based music and removing unwanted noise.", 
          "img": videoEditingGif, 
          "samples": [travellars,social1] 
      },
      { 
          "title": "Green Screen (Chroma Keying)", 
          "desc": "Seamlessly replacing backgrounds for a professional and creative look.", 
          "img": videoEditingGif, 
          "samples": [event1] 
      },
      { 
          "title": "Ads & Promotional Videos", 
          "desc": "Producing high-quality ads optimized for engagement and brand promotion.", 
          "img": videoEditingGif, 
          "samples": [ads1,ads2,D2] 
      }
  
  
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
      {selectedService && (
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
                <video 
                key={index} 
                src={sample} 
                controls 
                className="w-full h-[80vh] object-cover rounded-md"
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
