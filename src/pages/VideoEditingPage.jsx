import React from "react";
import { Button } from "../components/Button";
import videoEditingVideo from "../assets/video-editing.gif";
import vimage from "../assets/video-editing.gif"

export function VideoEditingPage() {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <section className="text-center py-12 fade-in">
        <h1 className="text-5xl font-extrabold text-orange-500 mb-4 drop-shadow-lg">Video Editing Services</h1>
        <p className="text-xl text-slate-700 mb-6 max-w-3xl mx-auto">
          Transform your raw footage into compelling and engaging videos with professional editing.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-orange-50 transition-all duration-700 ease-in-out transform hover:scale-105 reveal">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">What We Do</h2>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
          At Creative Plus Studio, we provide top-tier video editing services for businesses, content creators, and filmmakers. Our team crafts high-quality, engaging videos that captivate audiences and bring your vision to life.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 slide-in-left">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-4xl font-bold text-slate-700 mb-6">Our Video Editing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-slate-700">
            {[ 
              { title: "Cinematic Editing", desc: "Creating immersive cinematic experiences with professional cuts and transitions.", img: videoEditingVideo },
              { title: "Corporate Videos", desc: "Producing polished corporate videos for presentations and marketing.", img: videoEditingVideo  },
              { title: "YouTube & Social Media", desc: "Editing engaging content tailored for social media platforms and YouTube.", img: videoEditingVideo  },
              { title: "Event Highlights", desc: "Compiling memorable moments into beautifully edited highlight reels.", img: videoEditingVideo  },
              { title: "Motion Graphics & Effects", desc: "Enhancing videos with animations, text overlays, and special effects.", img: videoEditingVideo  }
            ]
            .map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                <img src={service.img} alt={service.title} className="w-full h-40 object-cover rounded-md mb-4" />
                <strong>{service.title}</strong>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 transition-all duration-700 ease-in-out transform hover:scale-105 fade-in">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <div className="w-full max-w-3xl h-80 object-cover rounded-lg shadow-xl">
            <img 
            src={videoEditingVideo}
            alt="Video Editing"
            className="w-full max-w-3xl h-80 object-cover rounded-lg shadow-xl"
            />
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Let us help you craft stunning and impactful videos for your brand, event, or content platform.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 text-center fade-in">
        <h2 className="text-4xl font-bold text-slate-700 mb-6">Ready to Elevate Your Videos?</h2>
        <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8 leading-relaxed">
          Our team specializes in transforming raw footage into high-quality videos that engage and inspire. Let’s bring your vision to life!
        </p>
        <Button 
          text="Contact Us Now" 
          onClick={() => window.location.href = "/contact"} // Redirect to contact page
          className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        />      
      </section>
    </div>
  );
}